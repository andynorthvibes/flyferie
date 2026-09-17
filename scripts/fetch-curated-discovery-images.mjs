// Deliberately selected files, not automatic search-result replacements.
// Keep Commons attribution metadata alongside the resized, uncropped photographs.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const selections = [
  ['helsinki', 'cathedral-discovery.jpg', 'File:Helsinki Cathedral 2023-01-05.jpg'],
  ['copenhagen', 'nyhavn-discovery.jpg', 'File:Nyhavn 2023.jpg'],
  ['hamburg', 'harbour-discovery.jpg', 'File:Hamburg, Hafen -- 2023 -- 6626-9.jpg'],
  ['madrid', 'cava-baja-discovery.jpg', 'File:Fiestas de la Paloma 2023 - Calle de la Cava Baja - Madrid 01.jpg'],
  ['amsterdam', 'rijksmuseum-discovery.jpg', 'File:South facade of the Rijksmuseum Amsterdam (DSCF0528).jpg'],
];
const metadata = [];
for (const [slug, filename, title] of selections) {
  const params = new URLSearchParams({ action: 'query', titles: title, prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '1600', format: 'json' });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`Metadata HTTP ${response.status}: ${title}`);
  const result = await response.json();
  const info = Object.values(result.query.pages)[0].imageinfo?.[0];
  if (!info) throw new Error(`No image metadata: ${title}`);
  const license = info.extmetadata.LicenseShortName?.value;
  if (!['CC BY-SA 4.0', 'CC BY-SA 3.0', 'CC BY 4.0', 'CC BY 2.0'].includes(license)) throw new Error(`Review license: ${license}`);
  const image = await fetch(info.thumburl ?? info.url, { signal: AbortSignal.timeout(30000) });
  if (!image.ok) throw new Error(`Image HTTP ${image.status}: ${title}`);
  const output = path.join('public/destinations', slug, filename);
  await sharp(Buffer.from(await image.arrayBuffer())).rotate().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 85, mozjpeg: true }).toFile(output);
  metadata.push({ path: output, source: info.descriptionurl, artistHtml: info.extmetadata.Artist?.value, license, licenseUrl: info.extmetadata.LicenseUrl?.value, changes: 'Resized and JPEG compressed; no crop.' });
  console.log(output);
}
await fs.writeFile('public/destinations/discovery-image-credits.json', JSON.stringify(metadata, null, 2) + '\n');
