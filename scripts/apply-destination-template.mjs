import fs from "node:fs";

const file = "app/[lang]/destinations/[slug]/page.tsx";
let source = fs.readFileSync(file, "utf8");

source = source.replace(
  'import { destinationGuides, destinations } from "@/lib/content";',
  'import { destinations } from "@/lib/content";\nimport { allDestinationGuides as destinationGuides } from "@/lib/all-destination-guides";\nimport { destinationMedia } from "@/lib/destination-media";'
);

if (!source.includes("const displayName =")) source = source.replace(
  '  const otherLanguage = norwegian ? "en" : "no";',
  `  const otherLanguage = norwegian ? "en" : "no";
  const norwegianNames: Record<string, string> = {
    milan: "Milano",
    copenhagen: "København",
    gothenburg: "Gøteborg"
  };
  const displayName = norwegian ? (norwegianNames[slug] ?? place.name) : place.name;`
);

source = source
  .replace('{place.name}</h1>', '{displayName}</h1>')
  .replace('{norwegian ? place.name + " på 48 timer" : "48 hours in " + place.name}', '{norwegian ? displayName + " på 48 timer" : "48 hours in " + displayName}');

if (!source.includes("const media = destinationMedia[slug]")) {
  const imagesStart = source.indexOf("  const weekendImages = [");
  const imagesEnd = source.indexOf("\n  ];", imagesStart);
  if (imagesStart === -1 || imagesEnd === -1) throw new Error("Fant ikke bildelisten i sidefilen.");
  source = source.slice(0, imagesStart) + "  const media = destinationMedia[slug];\n" + source.slice(imagesEnd + 5);
}

const oldHero = `          <figure className="relative min-h-[360px] overflow-hidden rounded-[34px] border border-white/15 shadow-2xl">
            <Image
              src="/berlin/brandenburg-gate.jpg"
              alt={norwegian ? "Brandenburger Tor ved solnedgang" : "Brandenburg Gate at sunset"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/75 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-6 text-xs font-medium text-white/80">
              {norwegian ? "Brandenburger Tor ved solnedgang" : "Brandenburg Gate at sunset"} · {norwegian ? "Foto" : "Photo"}: Morn the Gorn
            </figcaption>
          </figure>`;

const newHero = `          {media ? (
            <figure className="relative min-h-[360px] overflow-hidden rounded-[34px] border border-white/15 shadow-2xl">
              <Image
                src={media.hero.src}
                alt={norwegian ? media.hero.altNo : media.hero.altEn}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/75 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-6 text-xs font-medium text-white/80">
                {norwegian ? media.hero.altNo : media.hero.altEn} · {norwegian ? "Foto" : "Photo"}: {media.hero.photographer}
              </figcaption>
            </figure>
          ) : (
            <div className="min-h-[360px] rounded-[34px] border border-white/15" style={{ background: "linear-gradient(145deg, " + place.color + ", #17332f)" }} />
          )}`;

if (source.includes(oldHero)) source = source.replace(oldHero, newHero);
else if (!source.includes("media.hero.src")) throw new Error("Fant verken gammel eller ny hero i sidefilen.");

source = source
  .replace("src={weekendImages[index].src}", "src={media.weekend[index].src}")
  .replace("alt={norwegian ? weekendImages[index].altNo : weekendImages[index].altEn}", "alt={norwegian ? media.weekend[index].altNo : media.weekend[index].altEn}")
  .replace('{norwegian ? weekendImages[index].altNo : weekendImages[index].altEn} · {norwegian ? "Foto" : "Photo"}: {weekendImages[index].credit}', '{norwegian ? media.weekend[index].altNo : media.weekend[index].altEn} · {norwegian ? "Foto" : "Photo"}: {media.weekend[index].photographer}');

source = source.replace("{guide.weekend.map((item, index) => (", "{media && guide.weekend.map((item, index) => (");

source = source
  .replace('href="https://www.bvg.de/en/tourists/transportation-tariff-zones"', "href={guide.transportUrl}")
  .replace('{norwegian ? "Se oppdaterte transportregler hos BVG →" : "See current transport information from BVG →"}', '{norwegian ? "Se oppdatert transportinformasjon hos " + guide.transportName + " →" : "See current transport information from " + guide.transportName + " →"}');

const creditsStart = source.indexOf('          <section className="border-t border-[#17332f]/10 bg-[#fffaf1]">');
const creditsEndMarker = '          <section className="bg-[#f6ba55]">';
const creditsEnd = source.indexOf(creditsEndMarker, creditsStart);
if ((creditsStart === -1 || creditsEnd === -1) && !source.includes("[media.hero, ...media.weekend]")) {
  throw new Error("Fant ikke bildelisensseksjonen.");
}

const newCredits = `          {media && (
            <section className="border-t border-[#17332f]/10 bg-[#fffaf1]">
              <div className="mx-auto max-w-6xl px-5 py-8 text-xs leading-6 text-[#48645f]">
                <p className="font-bold text-[#17332f]">
                  {norwegian ? "Bildelisenser" : "Image licences"}
                </p>
                <p className="mt-2">
                  {[media.hero, ...media.weekend].map((photo, index) => (
                    <span key={photo.sourceUrl}>
                      {index > 0 && " · "}
                      <a className="underline" href={photo.sourceUrl} target="_blank" rel="noreferrer">
                        {photo.photographer}
                      </a>
                      {" · " + photo.license}
                    </span>
                  ))}
                </p>
              </div>
            </section>
          )}

`;

if (!source.includes("[media.hero, ...media.weekend]")) {
  source = source.slice(0, creditsStart) + newCredits + source.slice(creditsEnd);
}
fs.writeFileSync(file, source);
console.log("Reisemålssiden bruker nå den felles guiden og mediefilen.");
