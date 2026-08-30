import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const api = "https://commons.wikimedia.org/w/api.php";
const checkpointFile = path.join(root, ".destination-images-v2.json");
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const plans = {
  tbilisi: [["Tbilisi old town panoramic view", "Gamle Tbilisi", "Tbilisi Old Town", ["tbilisi"]], ["Sololaki Tbilisi architecture street", "Sololaki i Tbilisi", "Sololaki in Tbilisi", ["sololaki", "tbilisi"]], ["Narikala fortress Tbilisi view", "Narikala-festningen", "Narikala Fortress", ["narikala", "tbilisi"]], ["Dry Bridge market Tbilisi", "Dry Bridge-markedet", "Dry Bridge Market", ["dry", "bridge", "tbilisi"]]],
  krakow: [["Krakow Main Market Square Rynek Glowny", "Markedsplassen i Krakow", "Krakow Main Square", ["krak", "rynek"]], ["Krakow Old Town street", "Gamlebyen i Krakow", "Krakow Old Town", ["krak"]], ["Wawel Castle Krakow panorama", "Wawel-slottet", "Wawel Castle", ["wawel"]], ["Kazimierz Krakow street", "Kazimierz i Krakow", "Kazimierz in Krakow", ["kazimierz"]]],
  madrid: [["Madrid Gran Via city", "Madrid sentrum", "Central Madrid", ["madrid"]], ["Plaza Mayor Madrid Spain square", "Plaza Mayor", "Plaza Mayor", ["plaza", "mayor"]], ["Palacio de Cristal Retiro Madrid", "Retiroparken", "Retiro Park", ["retiro"]], ["La Latina Madrid street", "La Latina i Madrid", "La Latina in Madrid", ["latina", "madrid"]]],
  malaga: [["Malaga Alcazaba", "Málaga og Alcazaba", "Málaga and the Alcazaba", ["malaga"]], ["Malaga historic centre street", "Gamlebyen i Málaga", "Málaga Old Town", ["malaga"]], ["Alcazaba Malaga panorama", "Alcazaba i Málaga", "The Alcazaba in Málaga", ["alcazaba", "malaga"]], ["Malagueta beach Malaga", "La Malagueta-stranden", "La Malagueta Beach", ["malagueta", "malaga"]]],
  manchester: [["Manchester city centre", "Manchester sentrum", "Manchester city centre", ["manchester"]], ["Manchester Northern Quarter street art", "Northern Quarter", "The Northern Quarter", ["northern", "quarter"]], ["Manchester architecture", "Manchester sentrum", "Central Manchester", ["manchester"]], ["Castlefield canal Manchester", "Kanalene i Castlefield", "Castlefield canals", ["castlefield"]]],
  katowice: [["Katowice panorama", "Katowice og Spodek", "Katowice and Spodek", ["katowice"]], ["Katowice Rynek market square", "Rynek i Katowice", "Katowice Market Square", ["katowice", "rynek"]], ["Spodek Katowice", "Kultursonen og Spodek", "Katowice Culture Zone and Spodek", ["spodek"]], ["Nikiszowiec Katowice red brick street", "Nikiszowiec", "Nikiszowiec", ["nikiszowiec"]]],
  amsterdam: [["Amsterdam canal houses modern photo", "Kanalene i Amsterdam", "Amsterdam canals", ["amsterdam", "canal"]], ["Jordaan Amsterdam street", "Jordaan i Amsterdam", "Jordaan in Amsterdam", ["jordaan"]], ["Rijksmuseum Museumplein Amsterdam", "Museumplein og Rijksmuseum", "Museumplein and Rijksmuseum", ["rijksmuseum", "museumplein"]], ["Vondelpark Amsterdam", "Vondelpark", "Vondelpark", ["vondelpark"]]],
  nice: [["Nice Promenade des Anglais", "Nice og Promenade des Anglais", "Nice and the Promenade des Anglais", ["nice", "promenade"]], ["Vieux Nice street", "Gamlebyen i Nice", "Nice Old Town", ["vieux", "nice"]], ["Cours Saleya market Nice", "Cours Saleya", "Cours Saleya", ["cours", "saleya"]], ["Port Lympia Nice harbour panorama", "Havnen i Nice", "Nice harbour", ["nice", "port"]]],
  milan: [["Milan Duomo square panorama", "Duomo i Milano", "Milan Cathedral", ["duomo", "milan"]], ["Navigli Milan canal", "Navigli i Milano", "Navigli in Milan", ["navigli"]], ["Galleria Vittorio Emanuele II interior Milan", "Galleria Vittorio Emanuele II", "Galleria Vittorio Emanuele II", ["galleria", "vittorio"]], ["Brera Milan street", "Brera i Milano", "Brera in Milan", ["brera"]]],
  helsinki: [["Helsinki harbour", "Helsinki ved sjøen", "Helsinki waterfront", ["helsinki"]], ["Punavuori Helsinki street", "Design District i Helsinki", "Helsinki Design District", ["helsinki", "punavuori"]], ["Suomenlinna fortress Helsinki sea", "Suomenlinna", "Suomenlinna", ["suomenlinna"]], ["Helsinki Market Square harbour", "Salutorget i Helsinki", "Helsinki Market Square", ["helsinki", "market"]]],
  copenhagen: [["Nyhavn Copenhagen harbour houses", "Nyhavn i København", "Nyhavn in Copenhagen", ["nyhavn"]], ["Vesterbro Copenhagen street", "Vesterbro i København", "Vesterbro in Copenhagen", ["vesterbro"]], ["Christianshavn Copenhagen canal", "Christianshavn", "Christianshavn", ["christianshavn"]], ["Norrebro Copenhagen street life", "Nørrebro i København", "Nørrebro in Copenhagen", ["norrebro", "nørrebro"]]],
  skopje: [["Skopje Stone Bridge city panorama", "Skopje og Steinbroen", "Skopje and the Stone Bridge", ["skopje", "bridge"]], ["Debar Maalo Skopje", "Debar Maalo", "Debar Maalo", ["debar", "maalo"]], ["Old Bazaar Skopje street", "Den gamle basaren i Skopje", "Skopje Old Bazaar", ["bazaar", "skopje"]], ["Matka Canyon North Macedonia lake", "Matka Canyon", "Matka Canyon", ["matka", "canyon"]]],
  "palma-de-mallorca": [["Palma Mallorca cathedral", "Palma og La Seu-katedralen", "Palma and La Seu Cathedral", ["palma", "cathedral"]], ["Mercat de Santa Catalina Palma de Mallorca", "Santa Catalina i Palma", "Santa Catalina in Palma", ["santa", "catalina", "palma"]], ["La Lonja Palma Mallorca", "Gamlebyen i Palma", "Palma Old Town", ["palma"]], ["Es Portixol Palma de Mallorca", "Portixol i Palma", "Portixol in Palma", ["portixol", "palma"]]],
  gothenburg: [["Gothenburg skyline", "Gøteborg ved havnen", "Gothenburg harbour", ["gothenburg", "goteborg", "göteborg"]], ["Linnegatan Gothenburg street", "Linnégatan i Gøteborg", "Linnégatan in Gothenburg", ["linne", "linné", "gothenburg"]], ["Haga Gothenburg street", "Haga i Gøteborg", "Haga in Gothenburg", ["haga", "gothenburg"]], ["Gothenburg archipelago island Sweden", "Skjærgården utenfor Gøteborg", "Gothenburg archipelago", ["archipelago", "gothenburg"]]]
};

const banned = /map|diagram|drawing|engraving|illustration|painting|postcard|stamp|miniatur|model|maquette|book|scan|logo|coat of arms|flag|statue|sculpture|aerial map|scarabeo|with cat|aidacara|cruise ship/i;
const badCredit = /unknown|machine.readable|copyright claims|internet archive|own work|published by|contributor/i;

function clean(value = "") {
  return value.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

async function fetchWithRetry(url, attempts = 8) {
  for (let attempt = 0; attempt < attempts; attempt++) {
    const response = await fetch(url, { headers: { "User-Agent": "Flyferie-image-curator/2.0 (flyferie.no)" } });
    if (response.ok) return response;
    if (response.status !== 429 && response.status < 500) throw new Error(`Request failed: ${response.status}`);
    const retryAfter = Number(response.headers.get("retry-after"));
    const delay = Number.isFinite(retryAfter) && retryAfter > 0 ? Math.min(retryAfter * 1000, 120000) : Math.min(5000 * (attempt + 1), 60000);
    console.log(`Wikimedia ber oss vente. Prøver igjen om ${Math.ceil(delay / 1000)} sekunder...`);
    await wait(delay);
  }
  throw new Error("Wikimedia svarte ikke etter flere forsøk.");
}

async function findPhoto(search, required) {
  const params = new URLSearchParams({ action: "query", generator: "search", gsrsearch: search, gsrnamespace: "6", gsrlimit: "30", prop: "imageinfo", iiprop: "url|mime|size|extmetadata", iiurlwidth: "1800", format: "json", origin: "*" });
  const response = await fetchWithRetry(`${api}?${params}`);
  const data = await response.json();
  const candidates = Object.values(data.query?.pages ?? {}).flatMap((page) => {
    const info = page.imageinfo?.[0];
    if (!info || info.mime !== "image/jpeg" || !info.thumburl) return [];
    const meta = info.extmetadata ?? {};
    const title = clean(page.title || "");
    const description = clean(meta.ImageDescription?.value || "");
    const photographer = clean(meta.Artist?.value || meta.Credit?.value || "");
    const license = clean(meta.LicenseShortName?.value || meta.UsageTerms?.value || "");
    const haystack = `${title} ${description}`.toLowerCase();
    if (banned.test(haystack) || badCredit.test(photographer) || !photographer || !license) return [];
    if (!required.some((word) => haystack.includes(word.toLowerCase()))) return [];
    const width = Number(info.width || 0), height = Number(info.height || 0);
    if (width < 1400 || height < 750 || width / height < 1.2) return [];
    const matches = required.filter((word) => haystack.includes(word.toLowerCase())).length;
    if (required.length && matches === 0) return [];
    const score = matches * 100 + Math.min(width, 6000) / 100 + (width / height >= 1.35 && width / height <= 2.2 ? 30 : 0);
    return [{ downloadUrl: info.thumburl, photographer, license, sourceUrl: info.descriptionurl, score, title }];
  }).sort((a, b) => b.score - a.score);
  if (!candidates.length) throw new Error(`Fant ikke et kvalitetssikret bilde for: ${search}`);
  console.log(`Valgt: ${candidates[0].title}`);
  return candidates[0];
}

let media = {};
try {
  media = JSON.parse(await fs.readFile(checkpointFile, "utf8"));
  console.log("Fortsetter fra tidligere kontrollpunkt.");
} catch {}

for (const [slug, searches] of Object.entries(plans)) {
  if (media[slug]?.hero && media[slug]?.weekend?.length === 3) {
    console.log(`${slug} er allerede ferdig – hopper videre.`);
    continue;
  }
  const folder = path.join(root, "public", "destinations", slug);
  await fs.mkdir(folder, { recursive: true });
  const photos = [];
  for (let index = 0; index < searches.length; index++) {
    const [search, altNo, altEn, required] = searches[index];
    console.log(`${slug} ${index + 1}/4: ${search}`);
    const found = await findPhoto(search, required);
    const filename = index === 0 ? "hero.jpg" : `weekend-${index}.jpg`;
    const imageResponse = await fetchWithRetry(found.downloadUrl);
    await fs.writeFile(path.join(folder, filename), Buffer.from(await imageResponse.arrayBuffer()));
    photos.push({ src: `/destinations/${slug}/${filename}`, altNo, altEn, photographer: found.photographer, license: found.license, sourceUrl: found.sourceUrl });
    await wait(1800);
  }
  media[slug] = { hero: photos[0], weekend: [photos[1], photos[2], photos[3]] };
  await fs.writeFile(checkpointFile, JSON.stringify(media, null, 2));
  console.log(`${slug} er ferdig og lagret.`);
}

const mediaFile = path.join(root, "lib", "destination-media.ts");
const current = await fs.readFile(mediaFile, "utf8");
const berlinMatch = current.match(/  berlin: \{[\s\S]*?\n  \}\n\};/);
if (!berlinMatch) throw new Error("Kunne ikke bevare Berlin-bildene.");
const berlin = berlinMatch[0].replace(/\n\};$/, "");
const entries = Object.entries(media).map(([slug, value]) => `  ${JSON.stringify(slug)}: ${JSON.stringify(value, null, 2).replace(/^/gm, "  ").trimStart()}`).join(",\n");
const header = current.slice(0, current.indexOf("export const destinationMedia"));
await fs.writeFile(mediaFile, `${header}export const destinationMedia: Record<string, DestinationMedia> = {\n${berlin},\n${entries}\n};\n`);
await fs.unlink(checkpointFile).catch(() => {});
console.log("Alle nye bybilder er lastet ned og krediteringene er oppdatert.");
