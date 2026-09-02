import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const choices = [
  ["01", "Bli enige om stemningen", "Agree on the mood", "Skal turen være rolig, livlig, kulturell eller full av gode måltider? En felles idé gjør det lettere å velge reisemål og budsjett.", "Should the trip feel relaxed, lively, cultural or centred on good food? A shared idea makes it easier to choose the destination and budget."],
  ["02", "Velg korte og enkle reiser", "Choose simple journeys", "På en kort tur kan direktefly, gode flytider og enkel transport være mer verdt enn den aller laveste prisen. Mer tid fremme gir mer tid sammen.", "For a short trip, direct flights, good departure times and simple transfers may matter more than the very lowest price. More time there means more time together."],
  ["03", "Bo der dere vil bruke tiden", "Stay where you want to spend time", "Velg område ut fra restauranter, severdigheter og tempoet dere ønsker. Et praktisk hotell kan gjøre hele turen roligere.", "Choose an area based on restaurants, sights and the pace you want. A practical hotel can make the complete trip feel more relaxed."],
  ["04", "Planlegg ett høydepunkt", "Plan one highlight", "Bestill gjerne én middag, forestilling eller opplevelse dere gleder dere til. La resten av programmet ha plass til spontane valg.", "Consider booking one dinner, performance or experience to look forward to. Leave the rest of the schedule open for spontaneous choices."],
  ["05", "Avklar budsjettet tidlig", "Set the budget early", "Snakk om totalrammen før dere bestiller. Fly, hotell, transport, mat og aktiviteter bør passe begge uten at turen blir unødvendig stressende.", "Discuss the total budget before booking. Flights, hotel, transport, food and activities should suit both travellers without creating unnecessary stress."],
  ["06", "Gjør overraskelser trygge", "Make surprises comfortable", "En overraskelse kan være hyggelig, men ta hensyn til kalender, bagasje, matpreferanser og behov for pauser. Den beste overraskelsen passer personen.", "A surprise can be lovely, but consider calendars, baggage, food preferences and the need for downtime. The best surprise suits the person."],
];

const styles = [
  ["Rolig og stemningsfull", "Relaxed and atmospheric", "Små gater, gode kafeer, en fin middag og tid uten tett program.", "Small streets, good cafés, a memorable dinner and time without a packed schedule."],
  ["Kultur og storby", "Culture and city life", "Museum, arkitektur, forestilling og et hotell med enkel vei hjem om kvelden.", "Museums, architecture, a performance and a hotel with an easy journey back in the evening."],
  ["Mat og opplevelser", "Food and experiences", "Marked, lokal mat, en reservasjon og plass til å oppdage noe underveis.", "Markets, local food, one reservation and room to discover something along the way."],
];

const faq = [
  ["Hvor mange netter passer for en romantisk weekend?", "How many nights suit a romantic weekend?", "To eller tre netter kan fungere godt når reiseveien er enkel. Se på de faktiske flytidene, ikke bare antall netter.", "Two or three nights can work well when the journey is simple. Look at the actual flight times, not only the number of nights."],
  ["Bør turen være en overraskelse?", "Should the trip be a surprise?", "Bare dersom du kjenner kalenderen, preferansene og behovene til den andre godt. Du kan også holde reisemålet hemmelig, men avklare dato, budsjett og praktiske rammer.", "Only if you understand the other person's calendar, preferences and needs. You can also keep the destination secret while agreeing on dates, budget and practical boundaries."],
  ["Må en romantisk tur være dyr?", "Does a romantic trip need to be expensive?", "Nei. Gode flytider, riktig område og én gjennomtenkt opplevelse kan bety mer enn et tett program eller et dyrt hotell.", "No. Good flight times, the right area and one thoughtful experience may matter more than a packed schedule or an expensive hotel."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Romantisk weekendtur – slik planlegger dere en tur for to | Flyferie.no" : "Romantic weekend trip – how to plan a trip for two | Flyferie.no",
    description: no ? "Planlegg en romantisk weekendtur med riktig reisemål, hotell, budsjett og opplevelser – uten å fylle hvert minutt." : "Plan a romantic weekend trip with the right destination, hotel, budget and experiences without filling every minute.",
    alternates: { canonical: `/${lang}/guides/romantic-weekend`, languages: { "nb-NO": "/no/guides/romantic-weekend", en: "/en/guides/romantic-weekend", "x-default": "/no/guides/romantic-weekend" } },
  };
}

export default async function RomanticWeekendPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/romantic-weekend`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Slik planlegger dere en romantisk weekendtur" : "How to plan a romantic weekend trip", description: no ? "En praktisk guide til en vellykket tur for to." : "A practical guide to a successful trip for two.", inLanguage: no ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: no ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: no ? "Romantisk weekendtur" : "Romantic weekend trip", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/destinations`} className="text-sm font-bold">{no ? "Reisemål" : "Destinations"}</Link><Link href={`/${other}/guides/romantic-weekend`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#6d3940] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/30 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd7a0]">← {no ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd7a0]">{no ? "En tur med tid til hverandre" : "A trip with time for each other"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Slik planlegger dere en romantisk weekendtur" : "How to plan a romantic weekend trip"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Det handler mindre om å fylle programmet og mer om å velge et reisemål, et hotell og noen opplevelser som passer dere begge." : "It is less about filling the schedule and more about choosing a destination, hotel and a few experiences that suit you both."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d]">{no ? "Planlegg sammen" : "Plan together"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Seks valg som former turen" : "Six choices that shape the trip"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{choices.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{no ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#f3e5df] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#9b4c4d]">{no ? "Tre retninger" : "Three directions"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Hva slags tur passer dere?" : "What kind of trip suits you?"}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{styles.map((item) => <article key={item[1]} className="rounded-[24px] bg-white p-7 shadow-sm"><h3 className="display text-3xl font-bold">{no ? item[0] : item[1]}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{no ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link href={`/${lang}/destinations`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{no ? "Finn et reisemål" : "Find a destination"} →</Link><Link href={`/${lang}/guides/choose-hotel-area`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Velg hotell og område" : "Choose a hotel and area"} →</Link></div></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
