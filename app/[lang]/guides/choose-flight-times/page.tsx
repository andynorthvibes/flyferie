import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const checks = [
  ["01", "Regn fra døren hjemme", "Start from your front door", "Ta med transport til flyplassen, anbefalt oppmøtetid og reisen videre til hotellet. Avgangstiden alene forteller ikke hvor tidlig dagen starter.", "Include transport to the airport, the recommended arrival time and the onward journey to the hotel. Departure time alone does not show how early the day begins."],
  ["02", "Se på brukbar ankomsttid", "Look at usable arrival time", "En tidlig ankomst gir ikke nødvendigvis en hel dag dersom flyplassen ligger langt unna eller rommet ikke er klart. Se på når dere realistisk kan begynne turen.", "An early landing does not necessarily provide a full day if the airport is distant or the room is not ready. Consider when the trip can realistically begin."],
  ["03", "Sammenlign flyplassene", "Compare the airports", "En alternativ flyplass kan ha lavere billettpris, men lengre og dyrere transport. Sammenlign tid og kostnad helt frem til området der dere skal bo.", "An alternative airport may offer a lower fare but require longer and more expensive transfers. Compare time and cost all the way to the area where you will stay."],
  ["04", "Vurder mellomlandingen", "Assess the connection", "Se på total reisetid, byttetid og hva som skjer dersom første fly blir forsinket. På en kort tur er direktefly ofte enklere å planlegge rundt.", "Check total journey time, connection time and what happens if the first flight is delayed. On a short trip, direct flights are often easier to plan around."],
  ["05", "Beskytt den siste dagen", "Protect the final day", "En sen retur kan gi mer tid, men vurder utsjekking, bagasjeoppbevaring, transport og hvor sent dere kommer hjem før jobb eller skole.", "A late return may provide more time, but consider check-out, luggage storage, transfers and how late you reach home before work or school."],
  ["06", "Se på totalverdien", "Look at total value", "Sammenlign pris, bagasje, søvn, transport og brukbare timer på reisemålet. Den billigste kombinasjonen er ikke alltid den som gir mest ut av helgen.", "Compare price, baggage, sleep, transfers and usable hours at the destination. The cheapest combination does not always provide the most from the weekend."],
];

const examples = [
  ["Tidlig ut – sent hjem", "Early out – late home", "Kan gi mye tid på reisemålet, men kontroller søvn, transport og hvordan siste dagen fungerer etter utsjekking.", "Can maximise destination time, but check sleep, transfers and how the final day works after check-out."],
  ["Rolige flytider", "Comfortable flight times", "Kan koste litt mer eller gi færre timer, men gjøre reisen enklere for barn, grupper eller en travel uke.", "May cost a little more or provide fewer hours, but can make travel easier for children, groups or after a busy week."],
  ["Billigst mulig", "Lowest fare", "Kontroller om upraktisk flyplass, bagasje eller ekstra hotellnatt spiser opp besparelsen.", "Check whether an awkward airport, baggage or an additional hotel night removes the saving."],
];

const faq = [
  ["Er det alltid best å fly tidlig ut?", "Is it always best to fly out early?", "Nei. Ta med når du må dra hjemmefra, transport fra flyplassen og om du faktisk kan bruke dagen ved ankomst.", "No. Include when you must leave home, the airport transfer and whether you can genuinely use the day after arrival."],
  ["Er sen retur verdt det?", "Is a late return worth it?", "Det kan gi flere timer på reisemålet, men vurder utsjekking, oppbevaring av bagasje, transport og hvor sliten du blir dagen etter.", "It may provide more destination time, but consider check-out, luggage storage, transport and how tired you may be the following day."],
  ["Hvordan sammenligner jeg to flyavganger?", "How do I compare two flight options?", "Skriv ned totalpris, dør-til-dør-tid og brukbare timer på reisemålet. Da blir forskjellen tydeligere enn om du bare ser på avgang og billettpris.", "Write down total cost, door-to-door time and usable destination hours. This makes the difference clearer than looking only at departure and fare."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Gode flytider for weekendtur – slik velger du | Flyferie.no" : "Good flight times for a weekend trip – how to choose | Flyferie.no",
    description: no ? "Velg flytider ved å sammenligne dør-til-dør-tid, ankomst, flyplass, mellomlanding, retur og brukbare timer på reisemålet." : "Choose flight times by comparing door-to-door time, arrival, airports, connections, return and usable hours at the destination.",
    alternates: { canonical: `/${lang}/guides/choose-flight-times`, languages: { "nb-NO": "/no/guides/choose-flight-times", en: "/en/guides/choose-flight-times", "x-default": "/no/guides/choose-flight-times" } },
  };
}

export default async function ChooseFlightTimesPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/choose-flight-times`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Slik velger du gode flytider for en weekendtur" : "How to choose good flight times for a weekend trip", description: no ? "En praktisk guide til å sammenligne flytider og faktisk tid på reisemålet." : "A practical guide to comparing flight times and actual time at the destination.", inLanguage: no ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: no ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: no ? "Velg flytider" : "Choose flight times", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides/cheap-flights`} className="text-sm font-bold">{no ? "Flyprisguide" : "Flight price guide"}</Link><Link href={`/${other}/guides/choose-flight-times`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Pris · tid · energi" : "Price · time · energy"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Slik velger du gode flytider" : "How to choose good flight times"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "På en kort tur teller hver brukbare time. Sammenlign hele reisen fra døren hjemme til hotellet – og tilbake igjen." : "Every usable hour matters on a short trip. Compare the complete journey from your front door to the hotel—and back again."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Før du velger avgang" : "Before choosing a departure"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Seks kontroller som viser hele reisen" : "Six checks that reveal the complete journey"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{checks.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{no ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Tre vanlige valg" : "Three common choices"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Hvilken balanse passer turen?" : "Which balance suits the trip?"}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{examples.map((item) => <article key={item[1]} className="rounded-[24px] bg-white p-7 shadow-sm"><h3 className="display text-3xl font-bold">{no ? item[0] : item[1]}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{no ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link href={`/${lang}/guides/cheap-flights`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{no ? "Sammenlign flypriser" : "Compare flight prices"} →</Link><Link href={`/${lang}/guides/direct-flight-or-connection`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Direktefly eller mellomlanding?" : "Direct flight or connection?"} →</Link><Link href={`/${lang}/guides/airport-transfer`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Planlegg flyplasstransport" : "Plan the airport transfer"} →</Link></div></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
