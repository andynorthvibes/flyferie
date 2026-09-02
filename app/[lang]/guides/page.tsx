import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const guides = [
  { slug: "plan-weekend-trip", category: "plan", no: "Slik planlegger du en weekendtur", en: "How to plan a weekend trip", noText: "Fra valg av by og budsjett til fly, aktiviteter og avreise.", enText: "From choosing a city and budget to flights, activities and departure.", featured: true },
  { slug: "surprise-trip", category: "plan", no: "Slik arrangerer du blåtur", en: "How to plan a surprise trip", noText: "Hold reisemålet hemmelig og de praktiske rammene tydelige.", enText: "Keep the destination secret and the practical boundaries clear.", featured: true },
  { slug: "weekend-trip-budget", category: "plan", no: "Lag budsjett for weekendturen", en: "Build a weekend trip budget", noText: "Få oversikt over fly, overnatting, transport, mat og aktiviteter.", enText: "Estimate flights, accommodation, transfers, food and activities." },
  { slug: "group-trip", category: "plan", no: "Planlegg tur med gjengen", en: "Plan a trip with friends", noText: "Bli enige om dato, budsjett, rom, betaling og aktiviteter.", enText: "Agree on dates, budget, rooms, payments and activities." },
  { slug: "cheap-flights", category: "book", no: "Slik sammenligner du flypriser", en: "How to compare flight prices", noText: "Vurder totalpris, bagasje, flyplass og reisetid.", enText: "Consider total price, baggage, airports and journey time." },
  { slug: "airport-transfer", category: "book", no: "Velg riktig flyplasstransport", en: "Choose the right airport transfer", noText: "Sammenlign tog, buss, taxi, privat transport og leiebil.", enText: "Compare trains, buses, taxis, private transfers and rental cars." },
  { slug: "car-rental", category: "book", no: "Flyferies leiebilguide", en: "Flyferie's car rental guide", noText: "Kontroller forsikring, depositum, drivstoff og sluttpris.", enText: "Check insurance, deposits, fuel terms and the final price." },
  { slug: "weekend-packing-list", category: "prepare", no: "Pakkeliste for weekendtur", en: "Weekend trip packing list", noText: "En komplett liste uten unødvendig overpakking.", enText: "A complete list without unnecessary overpacking." },
  { slug: "travel-insurance", category: "prepare", no: "Dette bør du kontrollere i reiseforsikringen", en: "What to check in travel insurance", noText: "Sykdom, avbestilling, bagasje, forsinkelser og aktiviteter.", enText: "Illness, cancellation, baggage, delays and activities." },
  { slug: "esim", category: "prepare", no: "eSIM på reisen", en: "Using an eSIM while travelling", noText: "Sammenlign dekning, datamengde, varighet og installasjon.", enText: "Compare coverage, data allowance, duration and installation." },
  { slug: "travel-gear", category: "prepare", no: "Reiseutstyr og nyttige tjenester", en: "Travel gear and useful services", noText: "Bagasje, sko, strøm, digital trygghet og transport.", enText: "Luggage, footwear, power, digital safety and transport." },
  { slug: "hidden-gems", category: "inspire", no: "Europas skjulte perler", en: "Europe's hidden gems", noText: "Oppdag byer utenfor de mest brukte weekendrutene.", enText: "Discover cities beyond the most common weekend routes.", featured: true },
  { slug: "christmas-markets", category: "inspire", no: "Europas beste julemarkeder", en: "Europe's best Christmas markets", noText: "Sammenlign stemning, mat, beliggenhet og sesong.", enText: "Compare atmosphere, food, location and season." },
  { slug: "thailand", category: "inspire", no: "Opplev Thailand", en: "Discover Thailand", noText: "Bangkok, Ao Nang og Krabi samlet i én reiseguide.", enText: "Bangkok, Ao Nang and Krabi in one travel guide." },
];

const categories = [
  { id: "plan", no: "Planlegg turen", en: "Plan the trip", noText: "Start med reisefølget, rammene og den gode ideen.", enText: "Start with the travellers, boundaries and the right idea." },
  { id: "book", no: "Sammenlign og bestill", en: "Compare and book", noText: "Forstå hele prisen før du velger transport.", enText: "Understand the complete cost before choosing transport." },
  { id: "prepare", no: "Før avreise", en: "Before departure", noText: "Pakk, kontroller og gjør det praktiske klart.", enText: "Pack, check and prepare the practical details." },
  { id: "inspire", no: "Finn inspirasjon", en: "Find inspiration", noText: "Oppdag reisemål og ideer til neste tur.", enText: "Discover destinations and ideas for your next trip." },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Reiseguider – planlegg neste flyferie | Flyferie.no" : "Travel guides – plan your next flight holiday | Flyferie.no",
    description: no ? "Alle Flyferies guider om weekendturer, flypriser, transport, pakkelister, reiseforsikring, eSIM og reisemål." : "All Flyferie guides covering weekend trips, flight prices, transfers, packing lists, travel insurance, eSIMs and destinations.",
    alternates: { canonical: `/${lang}/guides`, languages: { "nb-NO": "/no/guides", en: "/en/guides", "x-default": "/no/guides" } },
  };
}

export default async function GuidesPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#collection`,
        url: pageUrl,
        name: no ? "Flyferies guidebibliotek" : "Flyferie's guide library",
        description: no
          ? "Praktiske reiseguider om planlegging, bestilling, forberedelser og reisemål."
          : "Practical travel guides covering planning, booking, preparation and destinations.",
        inLanguage: no ? "nb-NO" : "en",
        mainEntity: { "@id": `${pageUrl}#guides` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#guides`,
        name: no ? "Reiseguider fra Flyferie" : "Travel guides from Flyferie",
        numberOfItems: guides.length,
        itemListElement: guides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: no ? guide.no : guide.en,
          url: `https://flyferie.no/${lang}/guides/${guide.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` },
          { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: pageUrl },
        ],
      },
    ],
  };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="border-b border-white/10 bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/destinations`} className="text-sm font-bold">{no ? "Reisemål" : "Destinations"}</Link><Link href={`/${other}/guides`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>

    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#2d9587]/35 blur-3xl" /><div className="relative mx-auto max-w-7xl"><Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til forsiden" : "Back to the home page"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Flyferies guidebibliotek" : "Flyferie's guide library"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Fra første reiseidé til du er fremme" : "From the first travel idea to arrival"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Praktiske og ærlige guider som hjelper deg å velge, sammenligne, pakke og reise bedre." : "Practical, honest guides that help you choose, compare, pack and travel better."}</p></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Start her" : "Start here"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Utvalgte guider" : "Featured guides"}</h2><div className="mt-8 grid gap-5 lg:grid-cols-3">{guides.filter((guide) => guide.featured).map((guide, index) => <Link key={guide.slug} href={`/${lang}/guides/${guide.slug}`} className={`group rounded-[28px] p-7 text-white shadow-sm transition hover:-translate-y-1 sm:p-8 ${index === 1 ? "bg-[#b94f3d]" : "bg-[#173f39]"}`}><p className="text-xs font-bold uppercase tracking-[.18em] text-[#ffd078]">{String(index + 1).padStart(2, "0")}</p><h3 className="display mt-4 text-3xl font-bold leading-tight">{no ? guide.no : guide.en}</h3><p className="mt-4 leading-7 text-white/75">{no ? guide.noText : guide.enText}</p><p className="mt-6 font-bold">{no ? "Les guiden" : "Read the guide"} <span className="inline-block transition group-hover:translate-x-1">→</span></p></Link>)}</div></div></section>

    {categories.map((category, index) => { const items = guides.filter((guide) => guide.category === category.id); return <section key={category.id} className={`${index % 2 ? "bg-[#edf4ef]" : "bg-white"} px-5 py-12 lg:px-8 lg:py-16`}><div className="mx-auto max-w-7xl"><div className="grid gap-4 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{String(index + 1).padStart(2, "0")}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? category.no : category.en}</h2></div><p className="max-w-2xl leading-7 text-[#48645f] lg:justify-self-end">{no ? category.noText : category.enText}</p></div><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{items.map((guide) => <Link key={guide.slug} href={`/${lang}/guides/${guide.slug}`} className="group rounded-[22px] border border-[#17332f]/10 bg-[#fffaf1] p-6 shadow-sm transition hover:-translate-y-1"><h3 className="text-xl font-bold">{no ? guide.no : guide.en} <span className="inline-block transition group-hover:translate-x-1">→</span></h3><p className="mt-3 text-sm leading-6 text-[#48645f]">{no ? guide.noText : guide.enText}</p></Link>)}</div></div></section>; })}

    <section className="bg-[#f4d7a1] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[28px] bg-white/70 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d]">{no ? "Finn neste tur" : "Find your next trip"}</p><h2 className="display mt-3 text-[34px] font-bold leading-tight sm:text-4xl">{no ? "Se alle Flyferies reisemål" : "Explore all Flyferie destinations"}</h2></div><Link href={`/${lang}/destinations`} className="inline-flex w-fit rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white transition hover:bg-[#1e6258]">{no ? "Utforsk reisemål" : "Explore destinations"} →</Link></div></section>

    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
