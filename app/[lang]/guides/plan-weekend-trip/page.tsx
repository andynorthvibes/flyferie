import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const steps = [
  { n: "01", no: "Bestem hva dere vil ha ut av turen", en: "Decide what you want from the trip", noText: "Mat, uteliv, kultur, shopping eller bare et miljøskifte? Når reisefølget er enig om hovedmålet, blir valg av by mye enklere.", enText: "Food, nightlife, culture, shopping or simply a change of scene? Once the group agrees on the main goal, choosing a city becomes much easier." },
  { n: "02", no: "Velg byen etter tilgjengelig tid", en: "Choose the city for the time available", noText: "På en kort tur er direktefly, sentral flyplass og korte avstander ofte mer verdt enn den aller laveste billettprisen.", enText: "For a short trip, direct flights, a central airport and short distances are often worth more than the very lowest fare." },
  { n: "03", no: "Avtal et realistisk budsjett", en: "Agree on a realistic budget", noText: "Regn sammen fly, overnatting, transport, mat og planlagte aktiviteter. Legg også inn litt rom for spontane valg.", enText: "Add flights, accommodation, transfers, food and planned activities. Leave some room for spontaneous choices too." },
  { n: "04", no: "Bestill i riktig rekkefølge", en: "Book in the right order", noText: "Kontroller flytid og overnattingspris samtidig før noe låses. Les vilkårene og bruk navnene nøyaktig slik de står i legitimasjonen.", enText: "Check flight times and accommodation prices together before locking anything in. Read the terms and use names exactly as shown on identification." },
  { n: "05", no: "Planlegg bare høydepunktene", en: "Plan only the highlights", noText: "Reserver det viktigste, men ikke fyll hver time. Én hovedaktivitet per dag gir plass til måltider, køer og ting dere oppdager underveis.", enText: "Reserve the essentials without filling every hour. One main activity per day leaves room for meals, queues and discoveries along the way." },
  { n: "06", no: "Gjør avreisen enkel", en: "Make departure simple", noText: "Samle billetter, adresser, forsikring og transportplan. Del planen med reisefølget og last ned det viktigste før dere drar.", enText: "Collect tickets, addresses, insurance details and the transfer plan. Share everything with the group and download the essentials before leaving." },
];

const guides = [
  { slug: "cheap-flights", no: "Sammenlign flypriser", en: "Compare flight prices", noText: "Se totalpris, bagasje og reisetid.", enText: "Check total price, baggage and journey time." },
  { slug: "airport-transfer", no: "Planlegg transporten", en: "Plan the airport transfer", noText: "Sammenlign tog, buss, taxi og leiebil.", enText: "Compare trains, buses, taxis and rental cars." },
  { slug: "weekend-packing-list", no: "Bruk pakkelisten", en: "Use the packing list", noText: "Ta med det nødvendige uten å overpakke.", enText: "Bring the essentials without overpacking." },
  { slug: "travel-insurance", no: "Kontroller forsikringen", en: "Check your insurance", noText: "Forstå dekningen før avreise.", enText: "Understand the cover before departure." },
  { slug: "surprise-trip", no: "Arranger en blåtur", en: "Plan a surprise trip", noText: "Hold reisemålet hemmelig uten å miste kontrollen.", enText: "Keep the destination secret without losing control." },
  { slug: "weekend-trip-budget", no: "Lag et reisebudsjett", en: "Build a trip budget", noText: "Samle alle kostnadene før dere bestemmer dere.", enText: "Bring every cost together before deciding." },
  { slug: "group-trip", no: "Planlegg med gjengen", en: "Plan with friends", noText: "Fordel ansvar og bli enige før noen bestiller.", enText: "Share responsibility and agree before anyone books." },
];

const faq = [
  { qNo: "Hvor mange netter passer for en weekendtur?", qEn: "How many nights suit a weekend trip?", aNo: "To eller tre netter fungerer ofte godt, men flytidene betyr like mye som antall netter. En tidlig utreise og sen retur kan gi betydelig mer tid på reisemålet.", aEn: "Two or three nights often work well, but flight times matter as much as the number of nights. An early outbound and late return can add considerable time at the destination." },
  { qNo: "Hvor mye bør vi planlegge på forhånd?", qEn: "How much should we plan in advance?", aNo: "Bestill det som kan bli utsolgt, og lag en kort liste over ønsker. La resten være fleksibelt slik at turen ikke føles som et tidsskjema.", aEn: "Book anything likely to sell out and keep a short wish list. Leave the rest flexible so the trip does not feel like a timetable." },
  { qNo: "Hvordan blir gruppen enig om budsjettet?", qEn: "How does a group agree on the budget?", aNo: "Avtal en totalramme og skill mellom felleskostnader og valgfrie aktiviteter. Vær tydelige før noen bestiller på vegne av resten.", aEn: "Agree on a total range and separate shared costs from optional activities. Be clear before anyone books on behalf of the group." },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Slik planlegger du en weekendtur steg for steg | Flyferie.no" : "How to plan a weekend trip step by step | Flyferie.no",
    description: no ? "Planlegg en vellykket weekendtur med riktig reisemål, flytider, budsjett, aktiviteter, transport og pakkeliste." : "Plan a successful weekend trip with the right destination, flight times, budget, activities, transfers and packing list.",
    alternates: { canonical: `/${lang}/guides/plan-weekend-trip`, languages: { "nb-NO": "/no/guides/plan-weekend-trip", en: "/en/guides/plan-weekend-trip", "x-default": "/no/guides/plan-weekend-trip" } },
  };
}

export default async function PlanWeekendTripPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "HowTo", name: no ? "Slik planlegger du en weekendtur" : "How to plan a weekend trip", inLanguage: no ? "nb-NO" : "en", step: steps.map((item) => ({ "@type": "HowToStep", name: no ? item.no : item.en, text: no ? item.noText : item.enText })) },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item.qNo : item.qEn, acceptedAnswer: { "@type": "Answer", text: no ? item.aNo : item.aEn } })) },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="border-b border-white/10 bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`} aria-label="Flyferie.no"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/destinations`} className="text-sm font-bold">{no ? "Reisemål" : "Destinations"}</Link><Link href={`/${other}/guides/plan-weekend-trip`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>

    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til forsiden" : "Back to the home page"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Fra idé til avreise" : "From idea to departure"}</p><h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Slik planlegger du en weekendtur" : "How to plan a weekend trip"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "En enkel rekkefølge som gjør det lettere å velge by, bli enig om budsjettet og bruke tiden godt når dere kommer frem." : "A simple order that makes it easier to choose a city, agree on the budget and use your time well after arrival."}</p></div><div className="rounded-[26px] border border-white/15 bg-white/[.08] p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{no ? "Flyferies prinsipp" : "Flyferie's principle"}</p><p className="display mt-3 text-3xl font-bold">{no ? "Planlegg rammen – ikke hvert minutt" : "Plan the framework—not every minute"}</p></div></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Steg for steg" : "Step by step"}</p><h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Seks valg som former hele turen" : "Six choices that shape the entire trip"}</h2><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map((item) => <article key={item.n} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="inline-flex rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item.n}</span><h3 className="display mt-4 text-3xl font-bold">{no ? item.no : item.en}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item.noText : item.enText}</p></article>)}</div></div></section>

    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Fortsett planleggingen" : "Continue planning"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Fire guider som gjør resten enklere" : "Four guides that make the rest easier"}</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{guides.map((guide) => <Link key={guide.slug} href={`/${lang}/guides/${guide.slug}`} className="group rounded-[22px] bg-white p-6 shadow-sm transition hover:-translate-y-1"><h3 className="text-lg font-bold">{no ? guide.no : guide.en} <span className="transition group-hover:translate-x-1">→</span></h3><p className="mt-3 text-sm leading-6 text-[#48645f]">{no ? guide.noText : guide.enText}</p></Link>)}</div></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Kort forklart" : "In brief"}</h2><div className="mt-8 space-y-4">{faq.map((item) => <article key={item.qEn} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h3 className="text-lg font-bold">{no ? item.qNo : item.qEn}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item.aNo : item.aEn}</p></article>)}</div></div></section>

    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
