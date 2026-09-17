# Destination editorial refresh — 17 September 2026

## Scope

- All 30 destinations now have Norwegian and English editorial additions: one sight/experience, one named food stop, and one slower-paced itinerary suggestion each.
- Food stops deliberately distinguish restaurants, bakeries, markets and food halls. These are desk-researched suggestions, not invented personal reviews. Krakow's existing four firsthand recommendations and photos remain.
- Primary sources are linked beside each tip. The review date applies only to the new section. Opening times, prices and availability are not promised.
- New jump navigation links to experiences, food, the existing weekend plan, personal recommendations where available, and accommodation/practical advice.
- Destination-index introduction is more visitor-facing.
- The uncertain Rynek Główny location claim for Międzymiastowa was removed, without changing the user's review or URL.

## Images

Reviewed 120 hero/weekend image placements via contact sheets. Replaced seven placements:

1. Amsterdam: antique Rijksmuseum photo → colour photograph of the south façade.
2. Copenhagen: repeated street image in hero → Nyhavn.
3. Helsinki: repeated market image in hero → cathedral in winter sunshine.
4. Hamburg: Christmas-only hero → harbour panorama. Existing personal weekend photos retained.
5. Madrid: metro-station interior → Cava Baja decorated for Fiestas de la Paloma (caption names the occasion).
6. Tbilisi: 360 × 480 image → existing higher-resolution view with cable cars from Narikala; corrected caption.
7. Manchester: 509 × 339 image → existing higher-resolution Castlefield canal photograph.

Also corrected the Gdańsk street-photo caption. Original files were not deleted or overwritten. Existing full-image/contain layouts are unchanged. New downloads are resized without cropping, with source, author and licence metadata in `public/destinations/discovery-image-credits.json`; attribution is also shown on the destination pages.

## Verified locally

- `npm run build`: passed, including TypeScript.
- `npm run lint`: passed.
- `node --experimental-strip-types scripts/check-destination-discoveries.mjs --serve`: passed. Checks all 60 NO/EN destination routes, content coverage, source URLs, asset presence, navigation targets, one h1, canonical/hreflang, valid TouristDestination JSON-LD, home/index, sitemap, robots and unknown-destination 404.
- `git diff --check`: passed.
- Page metadata and structured-data generation code are unchanged. Hero image references naturally reflect the intentional photo replacements. Affiliate/travel-tool components, tracking implementation, contact address, language routing and existing guide content are unchanged.
- No runtime fetches from source websites, new third-party scripts, packages or client-side UI framework were introduced. New source-click events reuse the existing tracking component.

## Still requires preview review

The available remote browser cannot open this environment's localhost (`ERR_BLOCKED_BY_CLIENT`). Do not call the new layout visually verified or claim a Core Web Vitals improvement from the build alone.

Before production merge, inspect `/no/destinations/tbilisi`, `/no/destinations/krakow`, `/no/destinations/amsterdam`, `/no/destinations/monaco`, `/en/destinations/phi-phi` and the destination index at 390 px and 1440 px. Check source links, keyboard focus, collapsed source notes, image framing and the unchanged personal recommendations. Measure performance on a deployed preview if required.

## Maintenance

Recheck venue status and direct source links before future editorial updates. Particularly time-sensitive: Monaco's market relocation, seasonal attractions, national park/boat access and OUTRIGGER Phi Phi's restaurant/access arrangements. Do not change the source-review date automatically during deployments.

Generate fresh image contact sheets with `node --experimental-strip-types scripts/audit-destination-images.mjs`. The curated downloader uses explicit Commons filenames and refuses unexpected licences; it is not an automatic image search/replacement tool.
