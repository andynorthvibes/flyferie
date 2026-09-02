import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const steps = [
  ["01", "Start med et realistisk søkevindu", "Start with a realistic search window", "Begynn å følge prisene når datoene er omtrent klare. Da lærer du hva som er normalt for akkurat din rute, uten å måtte bestille ved første søk.", "Start tracking prices once your dates are reasonably clear. This helps you learn what is normal for your route without booking after the first search."],
  ["02", "Bruk prisvarsler", "Use price alerts", "Prisvarsler gjør det enklere å følge endringer uten å søke hver dag. Kontroller likevel alltid totalprisen og flytidene før kjøp.", "Price alerts make it easier to monitor changes without searching every day. Always check the total price and flight times before buying."],
  ["03", "Vurder hvor fleksibel reisen er", "Consider how flexible the trip is", "Faste ferieuker, høytider, konserter og store arrangementer gir mindre spillerom. Er datoene viktige, kan forutsigbarhet være mer verdt enn å vente på en mulig nedgang.", "School holidays, public holidays, concerts and major events leave less room for flexibility. If the dates matter, certainty may be worth more than waiting for a possible drop."],
  ["04", "Sammenlign flere kombinasjoner", "Compare several combinations", "Test nærliggende datoer, alternative flyplasser og ulike reiselengder. En litt annen kombinasjon kan være bedre selv når grunnprisen ser lik ut.", "Try nearby dates, alternative airports and different trip lengths. A slightly different combination may be better even when the base fare looks similar."],
  ["05", "Bestem en pris du kan leve med", "Set a price you can accept", "Ingen vet sikkert om prisen går opp eller ned. Når pris, tider og vilkår passer budsjettet og turen, kan det være fornuftig å bestille og gå videre med planleggingen.", "Nobody knows for certain whether a fare will rise or fall. When the price, schedule and conditions suit your budget and trip, booking can be a sensible decision."],
];

const faq = [
  ["Finnes det en ukedag som alltid er billigst?", "Is one weekday always cheapest?", "Nei. Flypriser styres av rute, kapasitet, etterspørsel og mange løpende endringer. En fast ukedagsregel er derfor ikke pålitelig.", "No. Airfares depend on route, capacity, demand and many ongoing changes, so a fixed weekday rule is not reliable."],
  ["Bør jeg vente når prisen har steget?", "Should I wait after a price increase?", "Det kommer an på hvor viktig datoen er og hvor mye fleksibilitet du har. Prisen kan falle igjen, men den kan også fortsette opp eller tilgjengeligheten kan bli dårligere.", "It depends on how important the dates are and how flexible you can be. The fare may fall again, but it may also continue rising or availability may worsen."],
  ["Er den laveste prisen alltid det beste kjøpet?", "Is the lowest fare always the best value?", "Nei. Bagasje, flyplass, reisetid, mellomlandinger og endringsvilkår kan gjøre en dyrere billett til det bedre valget totalt sett.", "No. Baggage, airports, journey time, connections and change conditions can make a more expensive ticket the better overall choice."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Når bør du bestille flybilletter? | Flyferie.no" : "When should you book flights? | Flyferie.no",
    description: norwegian ? "Lær hvordan du følger flypriser, bruker prisvarsler og vurderer når det er riktig å bestille." : "Learn how to track airfares, use price alerts and decide when it makes sense to book.",
    alternates: { canonical: `/${lang}/guides/when-to-book-flights`, languages: { "nb-NO": "/no/guides/when-to-book-flights", en: "/en/guides/when-to-book-flights", "x-default": "/no/guides/when-to-book-flights" } },
  };
}

export default async function WhenToBookFlightsPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const other = norwegian ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/when-to-book-flights`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: norwegian ? "Når bør du bestille flybilletter?" : "When should you book flights?", description: norwegian ? "En praktisk guide til tidspunkt, prisvarsler og fleksibilitet." : "A practical guide to timing, price alerts and flexibility.", inLanguage: norwegian ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: norwegian ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: norwegian ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: norwegian ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: norwegian ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: norwegian ? "Når bør du bestille flybilletter?" : "When should you book flights?", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides`} className="text-sm font-bold">{norwegian ? "Guider" : "Guides"}</Link><Link href={`/${other}/guides/when-to-book-flights`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{norwegian ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{norwegian ? "Flypris og timing" : "Airfare and timing"}</p><h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{norwegian ? "Når bør du bestille flybilletter?" : "When should you book flights?"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{norwegian ? "Det finnes ingen dato som garanterer lavest pris. Målet er å forstå ruten, følge utviklingen og bestille når helheten passer." : "No date guarantees the lowest fare. The goal is to understand the route, track changes and book when the overall journey works."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{norwegian ? "En rolig metode" : "A measured approach"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{norwegian ? "Fem steg fra søk til bestilling" : "Five steps from search to booking"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{steps.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-8"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold">{norwegian ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{norwegian ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{norwegian ? "Beslutningen" : "The decision"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Når bør du slå til?" : "When should you book?"}</h2></div><div className="rounded-[24px] bg-white p-7 shadow-sm sm:p-9"><p className="text-lg leading-8 text-[#365b55]">{norwegian ? "Bestill når flytidene fungerer, totalprisen er innenfor budsjettet og vilkårene passer behovene dine. Å vente kan gi lavere pris, men det er aldri garantert." : "Book when the flight times work, the total cost fits your budget and the conditions suit your needs. Waiting may produce a lower fare, but it is never guaranteed."}</p></div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{norwegian ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{norwegian ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{norwegian ? item[2] : item[3]}</p></article>)}</div><Link href={`/${lang}/guides/cheap-flights`} className="mt-8 inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{norwegian ? "Les også flyprisguiden" : "Also read the airfare guide"} →</Link></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {norwegian ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
