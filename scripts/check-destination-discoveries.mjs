import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { destinations } from '../lib/content.ts';
import { destinationDiscoveries } from '../lib/destination-discoveries.ts';
import { destinationMedia } from '../lib/destination-media.ts';

const slugs = destinations.map(({ slug }) => slug).sort();
assert.deepEqual(Object.keys(destinationDiscoveries).sort(), slugs, 'Every destination must have discoveries in both languages');
for (const slug of slugs) {
  const entry = destinationDiscoveries[slug];
  assert.match(entry.checked, /^\d{4}-\d{2}-\d{2}$/);
  for (const lang of ['no', 'en']) {
    for (const field of [entry.intro, entry.slow, entry.see.kind, entry.see.description, entry.eat.kind, entry.eat.description]) {
      assert.ok(field[lang]?.length > 5, `${slug}: missing ${lang} text`);
    }
  }
  for (const item of [entry.see, entry.eat]) {
    assert.equal(new URL(item.source.url).protocol, 'https:');
    assert.ok(item.name && item.source.name);
    assert.ok(!/[?&](?:a_aid|affiliate|aff_id)=/i.test(item.source.url), 'Editorial source links must not be affiliate links');
  }
  for (const photo of [destinationMedia[slug].hero, ...destinationMedia[slug].weekend]) {
    await fs.access(`public${photo.src}`);
    assert.ok(photo.altNo && photo.altEn && photo.photographer, `${slug}: image descriptions and author`);
    if (photo.sourceUrl) assert.ok(photo.license, `${slug}: third-party photo license`);
  }
}
console.log(`PASS: ${slugs.length} destinations, both languages, HTTPS sources and credited local images.`);

// Optional full HTTP smoke test against a running production build.
if (process.argv[2]) {
  const serve = process.argv[2] === '--serve';
  const server = serve ? spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', '3097'], { stdio: ['ignore', 'pipe', 'inherit'] }) : null;
  const base = serve ? 'http://localhost:3097' : process.argv[2].replace(/\/$/, '');
  if (server) {
    await Promise.race([
      new Promise((resolve) => server.stdout.on('data', chunk => { if (String(chunk).includes('Ready')) resolve(); })),
      once(server, 'exit').then(([code]) => { throw new Error(`Server exited before readiness: ${code}`); }),
    ]);
  }
  try {
  let checked = 0;
  for (const lang of ['no', 'en']) {
    for (const slug of slugs) {
      const pathname = `/${lang}/destinations/${slug}`;
      const response = await fetch(base + pathname);
      assert.equal(response.status, 200, pathname);
      const html = await response.text();
      assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${pathname}: one h1`);
      for (const id of ['local-discoveries', 'things-to-see', 'places-to-eat', 'weekend-plan', 'stay-and-tips']) {
        assert.equal((html.match(new RegExp(`id="${id}"`, 'g')) ?? []).length, 1, `${pathname}: ${id}`);
      }
      assert.ok(html.includes(`rel="canonical" href="https://flyferie.no${pathname}"`), `${pathname}: canonical`);
      assert.ok(html.includes('hrefLang="nb-NO"') && html.includes('hrefLang="en-GB"'), `${pathname}: hreflang`);
      const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
      assert.ok(jsonBlocks.some(block => block['@graph']?.some(node => node['@type'] === 'TouristDestination')), `${pathname}: structured data`);
      assert.ok(html.includes(lang === 'no' ? 'Om tipsene og kildene' : 'About these tips and sources'), `${pathname}: correct language`);
      checked++;
    }
  }
  for (const pathname of ['/no', '/en', '/no/destinations', '/en/destinations', '/robots.txt', '/sitemap.xml']) {
    assert.equal((await fetch(base + pathname)).status, 200, pathname);
  }
  assert.equal((await fetch(base + '/no/destinations/not-a-destination')).status, 404);
  console.log(`PASS: ${checked} destination routes, navigation targets, metadata, JSON-LD, home/index routes and 404.`);
  } finally {
    server?.kill();
  }
}
