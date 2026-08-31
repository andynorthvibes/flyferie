import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const api = "https://commons.wikimedia.org/w/api.php";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const replacements = {
  madrid: { title: "File:Inicio de la Gran Vía edited.jpg", altNo: "Gran Vía i Madrid", altEn: "Gran Vía in Madrid" },
  malaga: { title: "File:Málaga Desde El Mirador De La Alcazaba (261488481).jpeg", altNo: "Málaga sett fra Alcazaba", altEn: "Málaga from the Alcazaba" },
  manchester: { title: "File:Manchester City Centre Skyline.jpg", altNo: "Manchester sentrum og bysilhuetten", altEn: "Manchester city centre skyline" },
  amsterdam: { title: "File:Amsterdam Canals - July 2006.jpg", altNo: "Kanalhusene i Amsterdam", altEn: "Amsterdam canal houses" },
  helsinki: { title: "File:South Harbour, Helsinki, 20221210.jpg", altNo: "Helsinki havn og katedralene", altEn: "Helsinki harbour and cathedrals" },
  copenhagen: { title: "File:Colourful façades - Nyhavn (Panorama) (34784192335).jpg", altNo: "De fargerike husene i Nyhavn", altEn: "Colourful houses in Nyhavn" },
  katowice: { title: "File:Spodek.4.jpg", altNo: "Spodek i Katowice", altEn: "Spodek in Katowice" },
  skopje: { title: "File:Камениот мост во Скопје - Р. Македонија.jpg", altNo: "Steinbroen og elven Vardar i Skopje", altEn: "Stone Bridge and the Vardar River in Skopje" },
};

const christmas = {
  title: "File:02023 0493 Old Town Square Christmas Market 2023 in Kraków.jpg",
  output: path.join(root, "public", "destinations", "krakow", "christmas-market.jpg"),
};

function clean(value = "") {
  return value.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

async function fetchWithRetry(url, attempts = 8) {
  for (let attempt = 0; attempt < attempts; attempt++) {
    const response = await fetch(url, { headers: { "User-Agent": "Flyferie-image-curator/3.0 (flyferie.no)" } });
    if (response.ok) return response;
    if (response.status !== 429 && response.status < 500) throw new Error(`Request failed: ${response.status}`);
    const delay = Math.min(5000 * (attempt + 1), 60000);
    console.log(`Wikimedia ber oss vente. Prøver igjen om ${delay / 1000} sekunder...`);
    await wait(delay);
  }
  throw new Error("Wikimedia svarte ikke etter flere forsøk.");
}

async function getFile(title) {
  const params = new URLSearchParams({
    action: "query",
    titles: title,
    prop: "imageinfo",
    iiprop: "url|mime|size|extmetadata",
    iiurlwidth: "2200",
    format: "json",
    origin: "*",
  });
  const response = await fetchWithRetry(`${api}?${params}`);
  const data = await response.json();
  const page = Object.values(data.query?.pages ?? {})[0];
  const info = page?.imageinfo?.[0];
  if (!info?.thumburl || !info.mime?.startsWith("image/")) throw new Error(`Fant ikke bildefilen: ${title}`);
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

// Krakow får det eksisterende, skarpe Wawel-nattbildet som hovedbilde.
const krakowBlock = source.match(/  "krakow": \{[\s\S]*?\n  \},\n  "madrid":/);
if (!krakowBlock) throw new Error("Fant ikke Krakow-oppføringen i destination-media.ts.");
const wawel = krakowBlock[0].match(/\{\n        "src": "\/destinations\/krakow\/weekend-2\.jpg"[\s\S]*?\n      \}/)?.[0];
if (!wawel) throw new Error("Fant ikke Wawel-bildet som skal brukes for Krakow.");
const krakowHero = wawel.replace('"src": "/destinations/krakow/weekend-2.jpg"', '"src": "/destinations/krakow/hero.jpg"');
await fs.copyFile(path.join(root, "public", "destinations", "krakow", "weekend-2.jpg"), path.join(root, "public", "destinations", "krakow", "hero.jpg"));
source = source.replace(/(  "krakow": \{\n    "hero": )[\s\S]*?(,\n    "weekend":)/, `$1${krakowHero}$2`);
console.log("Krakow: Wawel-nattbildet er satt som nytt hovedbilde.");

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

console.log("Krakow: laster ned eget julemarkedsbilde.");
const christmasFile = await getFile(christmas.title);
await download(christmasFile.downloadUrl, christmas.output);

await fs.writeFile(mediaFile, source);
console.log("Ferdig: ni hovedbilder og Krakow-julemarkedet er oppdatert.");
