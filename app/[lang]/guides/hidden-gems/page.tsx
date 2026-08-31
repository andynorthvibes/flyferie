import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinationMedia } from "@/lib/destination-media";

type PageProps = { params: Promise<{ lang: string }> };

type Gem = {
  slug: string;
  cityNo: string;
  cityEn: string;
  countryNo: string;
  countryEn: string;
  badgeNo: string;
  badgeEn: string;
  priceNo: string;
  priceEn: string;
  bestNo: string;
  bestEn: string;
  whyNo: string;
  whyEn: string;
};

const gems: Gem[] = [
  {
    slug: "tbilisi", cityNo: "Tbilisi", cityEn: "Tbilisi", countryNo: "Georgia", countryEn: "Georgia",
    badgeNo: "Mest overraskende", badgeEn: "Most surprising", priceNo: "Rimelig", priceEn: "Affordable",
    bestNo: "Mat, vin, historie og en sosial helg", bestEn: "Food, wine, history and a sociable weekend",
    whyNo: "Gamle balkonger, svovelbad, vinbarer og moderne byliv finnes side om side. Tbilisi føles annerledes enn de klassiske europeiske weekendbyene.",
    whyEn: "Old balconies, sulphur baths, wine bars and modern city life sit side by side. Tbilisi feels different from the classic European weekend cities."
  },
  {
    slug: "skopje", cityNo: "Skopje", cityEn: "Skopje", countryNo: "Nord-Makedonia", countryEn: "North Macedonia",
    badgeNo: "Best kombinasjon av by og natur", badgeEn: "Best city-and-nature mix", priceNo: "Svært rimelig", priceEn: "Very affordable",
    bestNo: "Blåtur, lokal mat og utflukt til Matka", bestEn: "Mystery trips, local food and a Matka excursion",
    whyNo: "Den gamle basaren, brutalistisk arkitektur og nærheten til Matka-kløften gjør Skopje til en særegen og innholdsrik helgetur.",
    whyEn: "The Old Bazaar, Brutalist architecture and nearby Matka Canyon make Skopje a distinctive and varied weekend destination."
  },
  {
    slug: "katowice", cityNo: "Katowice", cityEn: "Katowice", countryNo: "Polen", countryEn: "Poland",
    badgeNo: "Mest undervurdert", badgeEn: "Most underrated", priceNo: "Rimelig", priceEn: "Affordable",
    bestNo: "Arkitektur, musikk og industrihistorie", bestEn: "Architecture, music and industrial heritage",
    whyNo: "En tidligere industriby har blitt et kreativt kultursentrum. Kultursonen, Spodek og mursteinsområdet Nikiszowiec gir byen en tydelig identitet.",
    whyEn: "A former industrial city has become a creative cultural centre. The Culture Zone, Spodek and red-brick Nikiszowiec give it a strong identity."
  },
  {
    slug: "gdansk", cityNo: "Gdansk", cityEn: "Gdansk", countryNo: "Polen", countryEn: "Poland",
    badgeNo: "Vakrest gamleby", badgeEn: "Prettiest Old Town", priceNo: "God verdi", priceEn: "Great value",
    bestNo: "Historie, havneby og en enkel weekend", bestEn: "History, harbour atmosphere and an easy weekend",
    whyNo: "Fargerike fasader, elvepromenade og sterke historiske museer gjør Gdansk langt mer innholdsrik enn mange forventer.",
    whyEn: "Colourful façades, a riverside promenade and powerful historical museums make Gdansk far richer than many visitors expect."
  },
  {
    slug: "gothenburg", cityNo: "Gøteborg", cityEn: "Gothenburg", countryNo: "Sverige", countryEn: "Sweden",
    badgeNo: "Beste kortreiste perle", badgeEn: "Best nearby gem", priceNo: "Moderat", priceEn: "Moderate",
    bestNo: "Fika, sjømat, Haga og skjærgård", bestEn: "Fika, seafood, Haga and the archipelago",
    whyNo: "Brosteinsgatene i Haga og den bilfrie skjærgården gir mer enn en vanlig storbyhelg – uten lang reisevei fra Norge.",
    whyEn: "Haga's cobbled streets and the car-free archipelago offer more than an ordinary city break—without a long journey from Norway."
  },
  {
    slug: "helsinki", cityNo: "Helsinki", cityEn: "Helsinki", countryNo: "Finland", countryEn: "Finland",
    badgeNo: "Beste nordiske designby", badgeEn: "Best Nordic design city", priceNo: "Moderat", priceEn: "Moderate",
    bestNo: "Design, badstue, arkitektur og hav", bestEn: "Design, sauna, architecture and the sea",
    whyNo: "Offentlige badstuer, moderne arkitektur, øyer og markedshaller gir Helsinki en rolig, gjennomført og svært lokal weekendfølelse.",
    whyEn: "Public saunas, modern architecture, islands and market halls give Helsinki a calm, considered and distinctly local weekend feel."
  },
  {
    slug: "frankfurt", cityNo: "Frankfurt", cityEn: "Frankfurt", countryNo: "Tyskland", countryEn: "Germany",
    badgeNo: "Størst kontraster", badgeEn: "Biggest contrasts", priceNo: "Moderat", priceEn: "Moderate",
    bestNo: "Skyskrapere, museer og lokale eplevinstuer", bestEn: "Skyscrapers, museums and local apple-wine taverns",
    whyNo: "Bak finansbyens fasade ligger gamlebyen, museumsbredden og Sachsenhausens tradisjonelle eplevinstuer. Byen fortjener mer enn en mellomlanding.",
    whyEn: "Beyond the financial skyline are the Old Town, Museum Embankment and Sachsenhausen's apple-wine taverns. The city deserves more than a stopover."
  },
  {
    slug: "hamburg", cityNo: "Hamburg", cityEn: "Hamburg", countryNo: "Tyskland", countryEn: "Germany",
    badgeNo: "Beste storbyalternativ", badgeEn: "Best big-city alternative", priceNo: "Moderat", priceEn: "Moderate",
    bestNo: "Havn, musikk, fotball og bydelsliv", bestEn: "Harbour life, music, football and neighbourhoods",
    whyNo: "Speicherstadt, havneferger, St. Pauli og kreative bydeler gir Hamburg storbyenergi uten at byen føles som det mest opplagte valget.",
    whyEn: "Speicherstadt, harbour ferries, St. Pauli and creative neighbourhoods give Hamburg big-city energy without feeling like the obvious choice."
  }
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Europas skjulte perler – 8 undervurderte byer | Flyferie.no" : "Europe's hidden gems – 8 underrated cities | Flyferie.no",
    description: norwegian
      ? "Oppdag åtte undervurderte europeiske reisemål for en annerledes weekendtur."
      : "Discover eight underrated European destinations for a different kind of weekend break.",
    alternates: {
      canonical: `/${lang}/guides/hidden-gems`,
      languages: { nb: "/no/guides/hidden-gems", en: "/en/guides/hidden-gems" }
    }
  };
}

export default async function HiddenGemsPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const hero = destinationMedia.tbilisi.hero;
  const credits = Array.from(new Map(gems.map((gem) => {
    const photo = destinationMedia[gem.slug].hero;
    return [photo.sourceUrl || photo.photographer, photo] as const;
  })).values());
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: norwegian ? "Europas skjulte perler" : "Europe's hidden gems",
    description: norwegian ? "Åtte undervurderte europeiske byer valgt av Flyferie." : "Eight underrated European cities selected by Flyferie.",
    inLanguage: norwegian ? "nb-NO" : "en",
    image: hero.src,
    publisher: { "@type": "Organization", name: "Flyferie.no" }
  };

  return (
    <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <header className="border-b border-white/10 bg-[#102f2b] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
          <Link href={`/${lang}`} aria-label="Flyferie.no – forsiden">
            <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[168px] sm:w-[225px]" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href={`/${lang}/destinations`} className="text-sm font-bold">{norwegian ? "Reisemål" : "Destinations"}</Link>
            <Link href={`/${otherLanguage}/guides/hidden-gems`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">{norwegian ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="relative min-h-[650px] overflow-hidden text-white sm:min-h-[720px]">
        <Image src={hero.src} alt={norwegian ? hero.altNo : hero.altEn} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/72 to-[#102f2b]/15" />
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-5 py-12 sm:min-h-[720px] sm:items-center sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:mt-10 sm:text-sm">{norwegian ? "Litt utenfor allfarvei" : "Beyond the usual route"}</p>
            <h1 className="display mt-3 text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[88px]">{norwegian ? "Europas skjulte perler" : "Europe's hidden gems"}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85 sm:mt-6 sm:text-xl sm:leading-9">
              {norwegian
                ? "Reis litt utenfor den vanlige listen. Her er åtte byer med særpreg, gode opplevelser og mer plass til å oppdage noe nytt."
                : "Travel beyond the usual list. These eight cities offer distinct character, rewarding experiences and more room to discover something new."}
            </p>
            <a href="#perlene" className="mt-7 inline-flex rounded-full bg-[#f4b860] px-6 py-3.5 font-bold text-[#17332f] sm:mt-9">{norwegian ? "Finn din skjulte perle" : "Find your hidden gem"} →</a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#17332f]/10 px-5 py-10 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "Åtte ideer til neste tur" : "Eight ideas for your next trip"}</p>
            <h2 className="display mt-3 text-[36px] font-bold leading-tight sm:text-5xl">{norwegian ? "Velg byen etter gjengen" : "Choose the city for your group"}</h2>
          </div>
          <p className="max-w-2xl leading-7 text-[#48645f] lg:justify-self-end">
            {norwegian
              ? "En skjult perle trenger ikke være ukjent. Det viktigste er at byen gir mer enn dere forventer – og passer måten dere liker å reise på."
              : "A hidden gem does not have to be unknown. What matters is that it offers more than expected—and suits the way you like to travel."}
          </p>
        </div>
      </section>

      <section id="perlene" className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:gap-6">
          {gems.map((gem, index) => {
            const photo = destinationMedia[gem.slug].hero;
            return (
              <article key={gem.slug} className="overflow-hidden rounded-[26px] border border-[#17332f]/10 bg-white shadow-sm sm:rounded-[30px]">
                <Link href={`/${lang}/destinations/${gem.slug}`} className="group block">
                  <figure className="relative h-56 sm:h-64">
                    <Image src={photo.src} alt={norwegian ? photo.altNo : photo.altEn} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/90 via-transparent to-black/10" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#17332f]/85 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">#{index + 1} · {norwegian ? gem.badgeNo : gem.badgeEn}</span>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                      <p className="text-xs text-white/70">{norwegian ? gem.countryNo : gem.countryEn}</p>
                      <h2 className="display mt-1 text-4xl font-bold">{norwegian ? gem.cityNo : gem.cityEn}</h2>
                    </div>
                  </figure>
                </Link>
                <div className="p-5 sm:p-6">
                  <div className="grid gap-4 border-b border-[#17332f]/10 pb-5 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#e16f59]">{norwegian ? "Prisnivå" : "Price level"}</p>
                      <p className="mt-2 text-sm font-bold">{norwegian ? gem.priceNo : gem.priceEn}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#e16f59]">{norwegian ? "Passer best for" : "Best suited to"}</p>
                      <p className="mt-2 text-sm font-bold">{norwegian ? gem.bestNo : gem.bestEn}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-[#48645f]">{norwegian ? gem.whyNo : gem.whyEn}</p>
                  <Link href={`/${lang}/destinations/${gem.slug}`} className="mt-5 inline-flex font-bold text-[#1e776e]">{norwegian ? `Les hele ${gem.cityNo}-guiden` : `Read the full ${gem.cityEn} guide`} →</Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#173f39] px-5 py-12 text-white sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078] sm:text-sm">{norwegian ? "Flyferies raske valg" : "Flyferie's quick picks"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Hva vil dere ha ut av turen?" : "What do you want from the trip?"}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [norwegian ? "Mat og vin" : "Food and wine", "Tbilisi"],
              [norwegian ? "By og natur" : "City and nature", "Skopje"],
              [norwegian ? "Mest for pengene" : "Best value", "Katowice"],
              [norwegian ? "Kortreist kystliv" : "Nearby coastal life", norwegian ? "Gøteborg" : "Gothenburg"]
            ].map(([label, city]) => (
              <div key={label} className="rounded-[20px] border border-white/15 bg-white/[.06] p-5">
                <p className="text-xs font-bold uppercase tracking-[.15em] text-[#ffd078]">{label}</p>
                <p className="mt-2 text-xl font-bold">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6ba55] px-5 py-10 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] sm:text-sm">{norwegian ? "Klar for flere ideer?" : "Ready for more ideas?"}</p>
            <h2 className="display mt-2 text-3xl font-bold sm:text-4xl">{norwegian ? "Utforsk alle reisemål" : "Explore every destination"}</h2>
          </div>
          <Link href={`/${lang}/destinations`} className="rounded-full bg-[#17332f] px-6 py-4 text-center font-bold text-white">{norwegian ? "Se alle reisemål" : "View all destinations"} →</Link>
        </div>
      </section>

      <section className="border-t border-[#17332f]/10 px-5 py-8 text-xs leading-6 text-[#48645f] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-[#17332f]">{norwegian ? "Bildekreditering" : "Photo credits"}</p>
          <p className="mt-2">
            {credits.map((photo, index) => (
              <span key={photo.src}>{index > 0 && " · "}{photo.sourceUrl ? <a className="underline" href={photo.sourceUrl} target="_blank" rel="noreferrer">{photo.photographer}</a> : photo.photographer}{photo.license ? ` · ${photo.license}` : ""}</span>
            ))}
          </p>
        </div>
      </section>

      <footer className="bg-[#102f2b] px-5 py-10 text-white/65">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px] sm:w-[240px]" />
          <p className="text-sm">© 2026 Flyferie.no · {norwegian ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p>
        </div>
      </footer>
    </main>
  );
}
