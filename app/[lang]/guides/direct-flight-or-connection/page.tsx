import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const factors = [
  ["01", "Sammenlign total reisetid", "Compare total journey time", "Se fra første avgang til siste ankomst, og ta med transport til og fra flyplassene. En kort flystrekning kan skjule en lang mellomlanding.", "Look from the first departure to the final arrival and include airport transfers. A short flight segment may hide a long connection."],
  ["02", "Regn på hele prisen", "Calculate the complete cost", "Ta med bagasje, setevalg, mat underveis og eventuell ekstra transport. Dersom reisen krever en ekstra natt, må den også inn i sammenligningen.", "Include baggage, seat selection, food in transit and any additional transport. If the journey requires an extra night, include that too."],
  ["03", "Se hvem som står på billetten", "Check who is on the ticket", "Kontroller om hele reisen er samlet i én bestilling eller består av separate billetter. Vilkår og ansvar ved forsinkelser kan være forskjellige.", "Check whether the complete journey is under one booking or uses separate tickets. Conditions and responsibility during delays may differ."],
  ["04", "Vurder tiden mellom flyene", "Assess the connection time", "Se på terminalbytte, sikkerhetskontroll, passkontroll og bagasje. Bruk oppdatert informasjon fra flyplass og flyselskap når du vurderer om tiden er realistisk.", "Consider terminal changes, security, passport control and baggage. Use current airport and airline information when deciding whether the time is realistic."],
  ["05", "Tenk på reisefølget", "Consider the travellers", "Barn, mye bagasje, redusert mobilitet eller en stor gruppe kan gjøre et flybytte mer krevende. Den enkleste reisen kan være verdt en høyere pris.", "Children, substantial baggage, reduced mobility or a large group can make connections more demanding. The simpler journey may justify a higher price."],
  ["06", "Beskytt den korte turen", "Protect the short trip", "På en weekendtur kan en lang eller sårbar reiserute spise opp en stor del av oppholdet. Vurder hvor mye tid og usikkerhet prisforskjellen faktisk kjøper.", "On a weekend trip, a long or vulnerable itinerary can consume a large part of the stay. Consider how much time and uncertainty the price difference actually buys."],
];

const comparison = [
  ["Direktefly", "Direct flight", "Ofte enklere, raskere og lettere å planlegge. Kan koste mer eller ha færre avgangstider.", "Often simpler, faster and easier to plan. It may cost more or offer fewer departure times."],
  ["Én samlet mellomlanding", "One protected connection", "Kan gi lavere pris eller bedre tider. Kontroller total reisetid, byttetid og vilkårene for hele reisen.", "May provide a lower price or better timing. Check total journey time, connection time and the conditions for the complete itinerary."],
  ["Separate billetter", "Separate tickets", "Kan gi fleksibilitet, men krever ekstra kontroll av bagasje, innsjekking og hva som skjer dersom første del blir forsinket.", "May offer flexibility but requires extra checks for baggage, check-in and what happens if the first segment is delayed."],
];

const faq = [
  ["Er direktefly alltid best?", "Is a direct flight always best?", "Ikke alltid. Pris, avgangstider og flyplass kan gjøre en mellomlanding aktuell, men sammenlign hele reisetiden og vilkårene før du velger.", "Not always. Price, departure times and airports may make a connection worthwhile, but compare the complete journey and conditions before choosing."],
  ["Hvor lang bør en mellomlanding være?", "How long should a connection be?", "Det finnes ingen tid som passer alle flyplasser og reiser. Kontroller terminal, bagasje, nødvendige kontroller og flyselskapets oppdaterte informasjon.", "There is no duration that suits every airport and itinerary. Check terminals, baggage, required controls and current airline information."],
  ["Hva betyr separate billetter?", "What do separate tickets mean?", "Reisedelene er bestilt hver for seg. Det kan påvirke innsjekking, bagasje og hjelpen du får dersom en forsinkelse gjør at du mister neste fly.", "The journey segments were booked independently. This may affect check-in, baggage and the assistance available if a delay causes you to miss the next flight."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Direktefly eller mellomlanding? Slik velger du | Flyferie.no" : "Direct flight or connection? How to choose | Flyferie.no",
    description: no ? "Sammenlign direktefly og mellomlanding ut fra pris, total reisetid, separate billetter, byttetid og reisefølge." : "Compare direct flights and connections by price, total journey time, separate tickets, transfer time and travellers.",
    alternates: { canonical: `/${lang}/guides/direct-flight-or-connection`, languages: { "nb-NO": "/no/guides/direct-flight-or-connection", en: "/en/guides/direct-flight-or-connection", "x-default": "/no/guides/direct-flight-or-connection" } },
  };
}

export default async function DirectFlightOrConnectionPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/direct-flight-or-connection`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Direktefly eller mellomlanding?" : "Direct flight or connection?", description: no ? "En praktisk sammenligning av direktefly og flyreise med mellomlanding." : "A practical comparison of direct flights and connecting journeys.", inLanguage: no ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: no ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: no ? "Direktefly eller mellomlanding" : "Direct flight or connection", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides/cheap-flights`} className="text-sm font-bold">{no ? "Flyprisguide" : "Flight price guide"}</Link><Link href={`/${other}/guides/direct-flight-or-connection`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Pris mot tid og enkelhet" : "Price versus time and simplicity"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Direktefly eller mellomlanding?" : "Direct flight or connection?"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "En mellomlanding kan senke prisen eller gi bedre avgangstider, men på en kort tur må besparelsen veies mot tid, usikkerhet og ekstra arbeid underveis." : "A connection may reduce the price or improve departure times, but on a short trip the saving must be weighed against time, uncertainty and extra work in transit."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Før du velger rute" : "Before choosing an itinerary"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Seks faktorer som viser forskjellen" : "Six factors that reveal the difference"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{factors.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{no ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Tre typer reiserute" : "Three itinerary types"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Forstå hva du sammenligner" : "Understand what you are comparing"}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{comparison.map((item) => <article key={item[1]} className="rounded-[24px] bg-white p-7 shadow-sm"><h3 className="display text-3xl font-bold">{no ? item[0] : item[1]}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{no ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link href={`/${lang}/guides/choose-flight-times`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{no ? "Sammenlign flytidene" : "Compare flight times"} →</Link><Link href={`/${lang}/guides/cheap-flights`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Sammenlign flypriser" : "Compare flight prices"} →</Link></div></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
