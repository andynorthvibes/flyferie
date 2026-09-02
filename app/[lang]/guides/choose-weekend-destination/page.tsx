import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const factors = [
  ["01", "Start med tiden dere har", "Start with the time available", "På en kort tur betyr flytid, avgangstid og transport fra flyplassen mye. En enkel reise kan gi mer tid på reisemålet enn en billigere, men tungvint rute.", "On a short trip, flight duration, departure time and airport transfers matter. A simple journey may provide more time at the destination than a cheaper but awkward route."],
  ["02", "Bestem formålet med turen", "Decide the purpose of the trip", "Mat, uteliv, kultur, shopping, sol eller ro? Velg to eller tre ønsker som betyr mest, og bruk dem til å sortere bort byer som ikke passer.", "Food, nightlife, culture, shopping, sunshine or quiet? Choose two or three priorities and use them to remove cities that do not fit."],
  ["03", "Sammenlign hele budsjettet", "Compare the complete budget", "Se på fly, bagasje, hotell, transport, mat og aktiviteter samlet. En billig billett gjør ikke nødvendigvis den totale turen billigst.", "Consider flights, baggage, accommodation, transport, food and activities together. A cheap fare does not necessarily make the complete trip cheapest."],
  ["04", "Tenk på sesong og vær", "Consider season and weather", "Vurder hvilken opplevelse dere ønsker på den aktuelle tiden av året. Ha gjerne et innendørsalternativ dersom været kan påvirke hovedplanen.", "Consider the experience you want at that time of year. Keep an indoor alternative where weather could affect the main plan."],
  ["05", "Se på byens størrelse", "Look at the size of the city", "Et kompakt sentrum passer godt når tiden er knapp. En større by kan gi flere valg, men krever ofte mer transport og tydeligere prioritering.", "A compact centre works well when time is limited. A larger city may offer more choice but often requires more transport and clearer priorities."],
  ["06", "Kontroller datoen", "Check the date", "Store arrangementer, helligdager eller sesongtopper kan påvirke pris og tilgjengelighet. Se på fly og hotell samtidig før dere bestemmer dere.", "Major events, holidays or peak periods may affect price and availability. Check flights and accommodation together before deciding."],
];

const profiles = [
  ["Mest mulig tid fremme", "Maximise time there", "Prioriter direktefly, gode flytider, enkel flyplasstransport og et kompakt område.", "Prioritise direct flights, useful departure times, simple airport transfers and a compact area."],
  ["Mest mulig for budsjettet", "Maximise the budget", "Sammenlign totalpris, gratis aktiviteter, lokal transport og kostnadsnivå – ikke bare flyet.", "Compare total cost, free activities, local transport and general prices—not only the flight."],
  ["En bestemt opplevelse", "A specific experience", "Velg først hva dere vil gjøre, og finn deretter byen som gjør nettopp det enkelt.", "Choose what you want to do first, then find the city that makes that experience easy."],
];

const faq = [
  ["Hvor langt bør vi fly for en weekendtur?", "How far should we fly for a weekend trip?", "Det finnes ingen fast grense. Se på total reisetid fra hjemmet til hotellet og hvor mye brukbar tid dere får på reisemålet.", "There is no fixed limit. Consider the total journey from home to the hotel and how much usable time you will have at the destination."],
  ["Bør vi velge den billigste flybilletten?", "Should we choose the cheapest flight?", "Ikke uten å kontrollere bagasje, flytider, flyplass og transport. Sammenlign kostnaden og tidsbruken for hele reisen.", "Not without checking baggage, flight times, the airport and transfers. Compare the cost and time required for the complete journey."],
  ["Hvordan blir en gruppe enige om byen?", "How does a group agree on the city?", "La alle velge sine to viktigste ønsker og en tydelig budsjettgrense. Byen som dekker flest felles behov er ofte et bedre valg enn noens personlige favoritt.", "Ask everyone for their two main priorities and a clear budget limit. The city meeting the most shared needs is often better than one person's favourite."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Slik velger du reisemål for en weekendtur | Flyferie.no" : "How to choose a destination for a weekend trip | Flyferie.no",
    description: no ? "Velg reisemål for weekendturen ved å sammenligne reisetid, flytider, budsjett, sesong, bystørrelse og opplevelser." : "Choose a weekend destination by comparing journey time, flight times, budget, season, city size and experiences.",
    alternates: { canonical: `/${lang}/guides/choose-weekend-destination`, languages: { "nb-NO": "/no/guides/choose-weekend-destination", en: "/en/guides/choose-weekend-destination", "x-default": "/no/guides/choose-weekend-destination" } },
  };
}

export default async function ChooseWeekendDestinationPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/choose-weekend-destination`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Slik velger du reisemål for en weekendtur" : "How to choose a destination for a weekend trip", description: no ? "En praktisk guide til å sammenligne reisemål for en kort tur." : "A practical guide to comparing destinations for a short trip.", inLanguage: no ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: no ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: no ? "Velg reisemål" : "Choose a destination", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/destinations`} className="text-sm font-bold">{no ? "Reisemål" : "Destinations"}</Link><Link href={`/${other}/guides/choose-weekend-destination`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/destinations`} className="text-sm font-bold text-[#ffd078]">← {no ? "Se alle reisemål" : "See all destinations"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Finn byen som passer turen" : "Find the city that suits the trip"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Slik velger du reisemål for en weekendtur" : "How to choose a destination for a weekend trip"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Det beste reisemålet er ikke nødvendigvis den mest kjente byen eller den billigste flybilletten. Det er byen som passer tiden, budsjettet og opplevelsene dere ønsker." : "The best destination is not necessarily the most famous city or the cheapest flight. It is the city that suits your time, budget and desired experiences."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Sammenlign før dere bestemmer dere" : "Compare before deciding"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Seks faktorer som betyr mest" : "Six factors that matter most"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{factors.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{no ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Velg etter prioritet" : "Choose by priority"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Tre enkle utgangspunkt" : "Three simple starting points"}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{profiles.map((item) => <article key={item[1]} className="rounded-[24px] bg-white p-7 shadow-sm"><h3 className="display text-3xl font-bold">{no ? item[0] : item[1]}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{no ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link href={`/${lang}/destinations`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{no ? "Sammenlign reisemål" : "Compare destinations"} →</Link><Link href={`/${lang}/guides/weekend-trip-budget`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Lag et reisebudsjett" : "Build a trip budget"} →</Link></div></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
