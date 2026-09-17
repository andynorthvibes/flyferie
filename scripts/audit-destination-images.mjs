import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { destinationMedia } from '../lib/destination-media.ts';

// Diagnostic contact sheets only; original photographs are never modified.
const output = process.argv[2] ?? '/tmp/flyferie-image-review';
await fs.mkdir(output, { recursive: true });
const entries = Object.entries(destinationMedia);
const report = [];
for (let start = 0; start < entries.length; start += 6) {
  const cells = [];
  for (const [row, [slug, media]] of entries.slice(start, start + 6).entries()) {
    for (const [col, photo] of [media.hero, ...media.weekend].entries()) {
      const file = path.join('public', photo.src);
      const metadata = await sharp(file).metadata();
      report.push({ slug, slot: col, src: photo.src, width: metadata.width, height: metadata.height });
      const thumb = await sharp(file).resize(240, 170, { fit: 'inside' }).toBuffer();
      const label = `${slug} ${col === 0 ? 'hero' : col} · ${metadata.width}×${metadata.height}`;
      cells.push({ input: thumb, left: col * 250, top: row * 205 });
      cells.push({ input: Buffer.from(`<svg width="250" height="30"><rect width="250" height="30" fill="white"/><text x="5" y="20" font-size="13" font-family="sans-serif">${label}</text></svg>`), left: col * 250, top: row * 205 + 173 });
    }
  }
  await sharp({ create: { width: 1000, height: 1230, channels: 3, background: '#eee' } }).composite(cells).jpeg().toFile(path.join(output, `sheet-${start / 6 + 1}.jpg`));
}
await fs.writeFile(path.join(output, 'dimensions.json'), JSON.stringify(report, null, 2));
console.log(`${entries.length} destinations reviewed; sheets saved to ${output}`);
