import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinationMedia } from "@/lib/destination-media";

type PageProps = {
  params: Promise<{ lang: string }>;
};

type Market = {
  slug: string;
  cityNo: string;
  cityEn: string;
  countryNo: string;
  countryEn: string;
  badgeNo: string;
  badgeEn: string;
  seasonNo: string;
  seasonEn: string;
  bestNo: string;
  bestEn: string;
  textNo: string;
  textEn: string;
};

const markets: Market[] = [
  {
    slug: "krakow",
    cityNo: "Krakow",
    cityEn: "Krakow",
    countryNo: "Polen",
    countryEn: "Poland",
    badgeNo: "Best totalpakke",
    badgeEn: "Best all-rounder",
    seasonNo: "Slutten av november–desember",
    seasonEn: "Late November–December",
    bestNo: "God verdi, vennegjenger og klassisk julestemning",
    bestEn: "Great value, groups of friends and classic festive atmosphere",
    textNo: "Den store markedsplassen gir julemarkedet en helt egen ramme. Kombiner bodene med gamlebyen, polsk mat og hyggelige kjellerbarer.",
    textEn: "The vast Main Square gives the market a memorable setting. Combine the stalls with the Old Town, Polish food and atmospheric cellar bars."
  },
  {
    slug: "copenhagen",
    cityNo: "København",
    cityEn: "Copenhagen",
    countryNo: "Danmark",
    countryEn: "Denmark",
    badgeNo: "Mest hygge",
    badgeEn: "Best for hygge",
    seasonNo: "November–desember",
    seasonEn: "November–December",
    bestNo: "Par, matopplevelser og en enkel weekend",
    bestEn: "Couples, food experiences and an easy weekend",
    textNo: "Tivoli og sentrum leverer lys, pynt og dansk julestemning i kompakt format. Et enkelt valg når turen skal være kort og komfortabel.",
    textEn: "Tivoli and the city centre deliver lights, decorations and Danish festive charm in a compact format—ideal for a short, comfortable break."
  },
  {
    slug: "berlin",
    cityNo: "Berlin",
    cityEn: "Berlin",
    countryNo: "Tyskland",
    countryEn: "Germany",
    badgeNo: "Størst utvalg",
    badgeEn: "Biggest variety",
    seasonNo: "Slutten av november–desember",
    seasonEn: "Late November–December",
    bestNo: "Gjenger som vil kombinere jul, kultur og uteliv",
    bestEn: "Groups combining markets, culture and nightlife",
    textNo: "Berlin har mange markeder med ulik stil, fra tradisjonelle torg til mer moderne alternativer. Her kan julemarkedet bli én del av en full storbyhelg.",
    textEn: "Berlin has markets in many different styles, from traditional squares to modern alternatives, making them part of a complete city weekend."
  },
  {
    slug: "hamburg",
    cityNo: "Hamburg",
    cityEn: "Hamburg",
    countryNo: "Tyskland",
    countryEn: "Germany",
    badgeNo: "Best ved havnen",
    badgeEn: "Best harbour setting",
    seasonNo: "Slutten av november–desember",
    seasonEn: "Late November–December",
    bestNo: "Havn, mat, shopping og en sosial weekend",
    bestEn: "Harbour life, food, shopping and a sociable weekend",
    textNo: "Rådhusplassen, kanalene og havneområdene gir Hamburg en annen ramme enn de klassiske middelalderbyene. Perfekt for en variert førjulstur.",
    textEn: "The Town Hall square, canals and harbour give Hamburg a different feel from medieval market cities—perfect for a varied festive break."
  },
  {
    slug: "gdansk",
    cityNo: "Gdansk",
    cityEn: "Gdansk",
    countryNo: "Polen",
    countryEn: "Poland",
    badgeNo: "Mest sjarmerende",
    badgeEn: "Most charming",
    seasonNo: "Slutten av november–desember",
    seasonEn: "Late November–December",
    bestNo: "Rimelig tur, vakker gamleby og roligere tempo",
    bestEn: "Affordable breaks, a beautiful Old Town and a gentler pace",
    textNo: "De fargerike fasadene og den kompakte gamlebyen gjør Gdansk svært fotogen i førjulstiden. Et godt alternativ til de største julemarkedene.",
    textEn: "Colourful façades and a compact Old Town make Gdansk especially photogenic before Christmas and a fine alternative to the largest markets."
  },
  {
    slug: "frankfurt",
    cityNo: "Frankfurt",
    cityEn: "Frankfurt",
    countryNo: "Tyskland",
    countryEn: "Germany",
    badgeNo: "Mest klassisk tysk",
    badgeEn: "Classic German market",
    seasonNo: "Slutten av november–desember",
    seasonEn: "Late November–December",
    bestNo: "Tradisjonell tysk jul og enkel storbylogistikk",
    bestEn: "Traditional German festivities and easy city logistics",
    textNo: "Römerberg gir markedet klassiske bindingsverkshus som bakteppe. Sentral beliggenhet og enkel transport gjør byen praktisk for en kort tur.",
    textEn: "Römerberg provides a backdrop of traditional timber-framed houses, while the central location and easy transport suit a short break."
  },
  {
    slug: "gothenburg",
    cityNo: "Gøteborg",
    cityEn: "Gothenburg",
    countryNo: "Sverige",
    countryEn: "Sweden",
    badgeNo: "Best for familier",
    badgeEn: "Best for families",
    seasonNo: "November–desember",
    seasonEn: "November–December",
    bestNo: "Familier, lysopplevelser og kort reisevei",
    bestEn: "Families, festive lights and a short journey",
    textNo: "Liseberg er det store trekkplasteret, med lys, aktiviteter og tydelig julepreg. Samtidig er sentrum oversiktlig og lett å kombinere med markedet.",
    textEn: "Liseberg is the main attraction, with lights, activities and a strong festive feel, while the compact centre is easy to explore alongside it."
  },
  {
    slug: "helsinki",
    cityNo: "Helsinki",
    cityEn: "Helsinki",
    countryNo: "Finland",
    countryEn: "Finland",
    badgeNo: "Mest nordisk vinter",
    badgeEn: "Best Nordic winter",
    seasonNo: "Slutten av november–desember",
    seasonEn: "Late November–December",
    bestNo: "Design, badstue, mat og ekte vinterfølelse",
    bestEn: "Design, sauna, food and a true winter atmosphere",
    textNo: "Helsinki kombinerer julemarked med nordisk design, badstue og vinter ved havnen. Et roligere valg med en tydelig lokal identitet.",
    textEn: "Helsinki combines its market with Nordic design, sauna culture and winter by the harbour—a calmer choice with a distinct local identity."
  }
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";

  return {
    title: norwegian ? "Europas beste julemarkeder | Flyferie.no" : "Europe's best Christmas markets | Flyferie.no",
    description: norwegian
      ? "Sammenlign åtte av Europas beste julemarkeder og finn byen som passer din førjulstur."
      : "Compare eight of Europe's best Christmas markets and find the right city for your festive break.",
    alternates: {
      canonical: `/${lang}/guides/christmas-markets`,
      languages: {
        nb: "/no/guides/christmas-markets",
        en: "/en/guides/christmas-markets"
      }
    }
  };
}

export default async function ChristmasMarketsPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();

  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const hero = destinationMedia.hamburg.hero;
  const credits = Array.from(new Map(markets.map((market) => {
    const photo = destinationMedia[market.slug].hero;
    return [photo.sourceUrl || photo.photographer, photo] as const;
  })).values());
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: norwegian ? "Europas beste julemarkeder" : "Europe's best Christmas markets",
    description: norwegian
      ? "Åtte julemarkeder sammenlignet av Flyferie."
      : "Eight Christmas markets compared by Flyferie.",
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
            <Link href={`/${otherLanguage}/guides/christmas-markets`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">
              {norwegian ? "EN" : "NO"}
            </Link>
          </div>
        </div>
      </header>

      <section className="relative min-h-[650px] overflow-hidden text-white sm:min-h-[720px]">
        <Image src={hero.src} alt={norwegian ? hero.altNo : hero.altEn} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/75 to-[#102f2b]/20" />
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-5 py-12 sm:min-h-[720px] sm:items-center sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:mt-10 sm:text-sm">{norwegian ? "Flyferies sesongguide" : "Flyferie seasonal guide"}</p>
            <h1 className="display mt-3 text-[46px] font-bold leading-[.98] sm:text-7xl lg:text-[84px]">
              {norwegian ? "Europas beste julemarkeder" : "Europe's best Christmas markets"}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85 sm:mt-6 sm:text-xl sm:leading-9">
              {norwegian
                ? "Fra middelaldertorg og tysk juletradisjon til nordisk hygge. Her finner du åtte byer – og hvilken førjulstur hver av dem passer best til."
                : "From medieval squares and German traditions to Nordic hygge. Discover eight cities—and the kind of festive break each suits best."}
            </p>
            <a href="#markedene" className="mt-7 inline-flex rounded-full bg-[#f4b860] px-6 py-3.5 font-bold text-[#17332f] sm:mt-9">
              {norwegian ? "Sammenlign markedene" : "Compare the markets"} →
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#17332f]/10 px-5 py-10 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "Finn riktig juleby" : "Find your festive city"}</p>
          <div className="mt-3 grid gap-5 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <h2 className="display text-[36px] font-bold leading-tight sm:text-5xl">{norwegian ? "Åtte forskjellige juleopplevelser" : "Eight different festive experiences"}</h2>
            <p className="max-w-2xl leading-7 text-[#48645f] lg:justify-self-end">
              {norwegian
                ? "De fleste markedene åpner fra slutten av november og varer gjennom store deler av desember. Datoene varierer fra år til år, så kontroller alltid årets åpningstider før du bestiller."
                : "Most markets open from late November and run through much of December. Dates vary each year, so always check the current schedule before booking."}
            </p>
          </div>
        </div>
      </section>

      <section id="markedene" className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:gap-6">
          {markets.map((market, index) => {
            const photo = destinationMedia[market.slug].hero;
            return (
              <article key={market.slug} className="overflow-hidden rounded-[26px] border border-[#17332f]/10 bg-white shadow-sm sm:rounded-[30px]">
                <Link href={`/${lang}/destinations/${market.slug}`} className="group block">
                  <figure className="relative h-56 sm:h-64">
                    <Image src={photo.src} alt={norwegian ? photo.altNo : photo.altEn} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/85 via-transparent to-black/10" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#17332f]/85 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">#{index + 1} · {norwegian ? market.badgeNo : market.badgeEn}</span>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                      <p className="text-xs text-white/70">{norwegian ? market.countryNo : market.countryEn}</p>
                      <h2 className="display mt-1 text-4xl font-bold">{norwegian ? market.cityNo : market.cityEn}</h2>
                    </div>
                  </figure>
                </Link>
                <div className="p-5 sm:p-6">
                  <div className="grid gap-4 border-b border-[#17332f]/10 pb-5 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#e16f59]">{norwegian ? "Typisk sesong" : "Typical season"}</p>
                      <p className="mt-2 text-sm font-bold">{norwegian ? market.seasonNo : market.seasonEn}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#e16f59]">{norwegian ? "Passer best for" : "Best suited to"}</p>
                      <p className="mt-2 text-sm font-bold">{norwegian ? market.bestNo : market.bestEn}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-[#48645f]">{norwegian ? market.textNo : market.textEn}</p>
                  <Link href={`/${lang}/destinations/${market.slug}`} className="mt-5 inline-flex font-bold text-[#1e776e]">
                    {norwegian ? `Les hele ${market.cityNo}-guiden` : `Read the full ${market.cityEn} guide`} →
                  </Link>
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
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Hvilken by skal dere velge?" : "Which city should you choose?"}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [norwegian ? "Mest for pengene" : "Best value", "Krakow"],
              [norwegian ? "Kortest og enklest" : "Shortest and easiest", norwegian ? "København" : "Copenhagen"],
              [norwegian ? "Størst utvalg" : "Biggest variety", "Berlin"],
              [norwegian ? "Best for familier" : "Best for families", norwegian ? "Gøteborg" : "Gothenburg"]
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
            <p className="text-xs font-bold uppercase tracking-[.18em] sm:text-sm">{norwegian ? "Se hele Europa" : "Explore Europe"}</p>
            <h2 className="display mt-2 text-3xl font-bold sm:text-4xl">{norwegian ? "Finn flere reisemål" : "Find more destinations"}</h2>
          </div>
          <Link href={`/${lang}/destinations`} className="rounded-full bg-[#17332f] px-6 py-4 text-center font-bold text-white">
            {norwegian ? "Se alle reisemål" : "View all destinations"} →
          </Link>
        </div>
      </section>

      <section className="border-t border-[#17332f]/10 px-5 py-8 text-xs leading-6 text-[#48645f] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-[#17332f]">{norwegian ? "Bildekreditering" : "Photo credits"}</p>
          <p className="mt-2">
            {credits.map((photo, index) => (
              <span key={photo.src}>
                {index > 0 && " · "}
                {photo.sourceUrl ? <a className="underline" href={photo.sourceUrl} target="_blank" rel="noreferrer">{photo.photographer}</a> : photo.photographer}
                {photo.license ? ` · ${photo.license}` : ""}
              </span>
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
