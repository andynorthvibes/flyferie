# Flyferie – AI-søk og innholdsverdi v1

Denne pakken bygger videre på eksisterende Flyferie.no uten å endre kontaktadressen eller legge inn forfatter-/oppdateringsdatoer.

## Nytt i denne versjonen

- «Kort fortalt»-svar på Berlin, Krakow, Amsterdam, Málaga og Manchester.
- Beste reisetid og en ærlig ting å vite for hver av pilotbyene.
- Konkrete dagsruter med klokkeslett, fem stopp og Google Maps-lenke.
- Ny tospråklig guide: «Berlin eller Krakow?».
- Sammenligning etter budsjett, historie, uteliv, mat, avstander og arrangementer.
- Internlenker mellom sammenligningen og de to byguidene.
- Ny guide inkludert i guidebiblioteket og sitemap.
- Klikkmåling i Vercel Analytics for DiscoverCars, Amigo eSIM og kartlenker.
- Målingen lagrer partner, plassering og destinasjon – ingen personopplysninger er lagt til.

## Verifisert før levering

- `npm run lint` bestått.
- `npm run build` bestått.
- TypeScript bestått.
- Ny rute `/[lang]/guides/berlin-or-krakow` genereres korrekt.
- Produksjonsserveren returnerer de nye seksjonene på Krakow-siden og sammenligningssiden.

## Etter deploy

Kontroller disse sidene på mobil og desktop:

- `/no/destinations/krakow`
- `/no/destinations/berlin`
- `/no/destinations/amsterdam`
- `/no/destinations/malaga`
- `/no/destinations/manchester`
- `/no/guides/berlin-or-krakow`
- `/en/guides/berlin-or-krakow`

I Vercel Analytics vil hendelsene hete `affiliate_click` og `map_click` når trafikk begynner å komme inn.
