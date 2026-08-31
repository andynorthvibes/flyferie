import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const api = "https://commons.wikimedia.org/w/api.php";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const replacements = {
  krakow: { title: "File:Krakow Rynek Glowny panorama 1.jpg", altNo: "Markedsplassen i Krakow", altEn: "Krakow Main Square" },
  manchester: { title: "File:Manchester Skyline 2018.jpg", altNo: "Manchester sentrum", altEn: "Manchester city centre" },
  helsinki: { title: "File:Helsinki Cathedral in a summer evening.jpg", altNo: "Helsinki domkirke en sommerkveld", altEn: "Helsinki Cathedral on a summer evening" },
  katowice: { title: "File:Modern Katowice.jpg", altNo: "Moderne Katowice sentrum", altEn: "Modern central Katowice" },
  gothenburg: { title: "File:Göteborg Panorama.jpg", altNo: "Gøteborg sentrum ved vannet", altEn: "Gothenburg city waterfront" },
  nice: { title: "File:Nice from Castle Hill 01.jpg", altNo: "Nice sett fra Castle Hill", altEn: "Nice from Castle Hill" },
};

const christmasTitle = "File:02018 0642 Weihnachtsmarkt Krakau.jpg";

function clean(value = "") {
  return value.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

async function fetchWithRetry(url, attempts = 8) {
  for (let attempt = 0; attempt < attempts; attempt++) {
    const response = await fetch(url, { headers: { "User-Agent": "Flyferie-image-curator/4.0 (flyferie.no)" } });
    if (response.ok) return response;
    if (response.status !== 429 && response.status < 500) throw new Error(`Request failed: ${response.status}`);
    const delay = Math.min(5000 * (attempt + 1), 60000);
    console.log(`Wikimedia ber oss vente. Prøver igjen om ${delay / 1000} sekunder...`);
    await wait(delay);
  }
  throw new Error("Wikimedia svarte ikke etter flere forsøk.");
}

async function getFile(title) {
  const params = new URLSearchParams({ action: "query", titles: title, prop: "imageinfo", iiprop: "url|mime|size|extmetadata", iiurlwidth: "2400", format: "json", origin: "*" });
  const data = await (await fetchWithRetry(`${api}?${params}`)).json();
  const page = Object.values(data.query?.pages ?? {})[0];
  const info = page?.imageinfo?.[0];
  if (!info?.thumburl) throw new Error(`Fant ikke bildefilen: ${title}`);
  const meta = info.extmetadata ?? {};
  return {
    downloadUrl: info.thumburl,
    photographer: clean(meta.Artist?.value || meta.Credit?.value || "Wikimedia Commons"),
    license: clean(meta.LicenseShortName?.value || meta.UsageTerms?.value || "Se kildesiden"),
    sourceUrl: info.descriptionurl,
  };
}

async function download(url, output) {
  const response = await fetchWithRetry(url);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, Buffer.from(await response.arrayBuffer()));
}

const mediaFile = path.join(root, "lib", "destination-media.ts");
let source = await fs.readFile(mediaFile, "utf8");

for (const [slug, replacement] of Object.entries(replacements)) {
  console.log(`${slug}: laster ned ${replacement.title}`);
  const file = await getFile(replacement.title);
  await download(file.downloadUrl, path.join(root, "public", "destinations", slug, "hero.jpg"));
  const hero = {
    src: `/destinations/${slug}/hero.jpg`,
    altNo: replacement.altNo,
    altEn: replacement.altEn,
    photographer: file.photographer,
    license: file.license,
    sourceUrl: file.sourceUrl,
  };
  const formatted = JSON.stringify(hero, null, 2).replace(/^/gm, "    ");
  const pattern = new RegExp(`(  ${JSON.stringify(slug)}: \\{\\n    \\"hero\\": )[\\s\\S]*?(,\\n    \\"weekend\\":)`);
  if (!pattern.test(source)) throw new Error(`Fant ikke hero-feltet for ${slug}.`);
  source = source.replace(pattern, `$1${formatted.trimStart()}$2`);
  await wait(1200);
}

console.log("krakow: laster ned nytt, bredt julemarkedsbilde.");
const christmas = await getFile(christmasTitle);
await download(christmas.downloadUrl, path.join(root, "public", "destinations", "krakow", "christmas-market.jpg"));

await fs.writeFile(mediaFile, source);
console.log("Ferdig: seks hovedbilder og julemarkedet er oppdatert.");
