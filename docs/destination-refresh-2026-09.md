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

## Preview review completed after recovery

The original local preview was unavailable to the remote browser. Recovery found GitHub PR #1 and the successful Vercel preview. Its source tree (`e2dcc4b94090da878f4e707e1957650213b5411f`) exactly matched the recovered staged files.

- Inspected Tbilisi, Krakow, Amsterdam, Monaco, English Phi Phi and the destination index at 390 px and desktop widths, including 1440 px. No horizontal overflow or failed loaded images in the inspected pages.
- Responsive checks used same-origin browser frames on an isolated preview branch. The review fixture is not part of the production change. This is layout testing, not a physical-device or Core Web Vitals measurement.
- Checked jump navigation, visible keyboard focus, expandable source notes, Amsterdam's replacement museum image and Krakow's preserved personal photos/recommendations.
- Review caught untranslated descriptive headings in the English tips. Names now support both languages; proper venue names remain unchanged. The coverage check now requires both title translations.
- Review caught awkward wrapping of Amsterdam on small destination cards. Adjusted mobile type size/padding and matched responsive image sizes to the two-column layout; confirmed the correction in the updated preview.
- Re-ran production build, TypeScript, ESLint, all 60 destination HTTP checks and whitespace checks after the fixes: passed.
- Rechecked the Monaco market relocation and OUTRIGGER dining source pages directly. These current primary sources support the cautious wording already used.
- Final application tree before this documentation update: `2ff734e68d96cd0853197624460c3940bc44499b` (GitHub commit `d19465b0409fd8833d4e38496558c552557416b2`). Follow-up preview with the same application files: `flyferie-g64yjs68w-hotellpris.vercel.app`.

## Maintenance

Recheck venue status and direct source links before future editorial updates. Particularly time-sensitive: Monaco's market relocation, seasonal attractions, national park/boat access and OUTRIGGER Phi Phi's restaurant/access arrangements. Do not change the source-review date automatically during deployments.

Generate fresh image contact sheets with `node --experimental-strip-types scripts/audit-destination-images.mjs`. The curated downloader uses explicit Commons filenames and refuses unexpected licences; it is not an automatic image search/replacement tool.
