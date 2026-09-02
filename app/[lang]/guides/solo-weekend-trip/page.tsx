import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const steps = [
  ["01", "Velg en oversiktlig første tur", "Choose a manageable first trip", "På den første turen alene kan en by med enkel reisevei, tydelig kollektivtransport og et kompakt sentrum gjøre starten roligere.", "For a first solo trip, a city with a simple journey, clear public transport and a compact centre can make the experience easier."],
  ["02", "Bo praktisk", "Stay somewhere practical", "Se på transport, åpningstider og veien tilbake til hotellet om kvelden. En god beliggenhet kan være mer verdt enn den laveste romprisen.", "Consider transport, opening hours and the journey back to the hotel in the evening. A good location may be worth more than the lowest room rate."],
  ["03", "Del planen med noen", "Share the plan with someone", "Send flydetaljer, hotelladresse og en enkel reiseplan til en person du stoler på. Avtal gjerne når dere skal høre fra hverandre.", "Send flight details, the hotel address and a simple itinerary to someone you trust. Consider agreeing when you will check in with each other."],
  ["04", "Planlegg én ting per dag", "Plan one thing each day", "En forhåndsbestilt aktivitet gir dagen et holdepunkt uten at programmet blir tett. Resten kan du tilpasse etter energi, vær og humør.", "One pre-booked activity gives the day an anchor without creating a packed schedule. Adapt the rest to your energy, the weather and your mood."],
  ["05", "Ha kontroll på mobil og betaling", "Keep mobile access and payment sorted", "Sørg for strøm, nettilgang og mer enn én betalingsmulighet. Oppbevar reservekort og viktige opplysninger adskilt fra det du bruker daglig.", "Keep power, internet access and more than one payment option available. Store a backup card and important details separately from what you use daily."],
  ["06", "Stol på egne grenser", "Trust your boundaries", "Du trenger ikke bli med på noe som føles feil. Velg opplyste områder, bruk seriøse transporttilbud og be overnattingsstedet om hjelp når du er usikker.", "You do not need to join anything that feels wrong. Choose well-lit areas, use reputable transport and ask the accommodation for help when unsure."],
];

const ideas = [
  ["Gåtur med et mål", "A walk with a purpose", "Velg et marked, museum eller utsiktspunkt og la veien dit være en del av opplevelsen.", "Choose a market, museum or viewpoint and let the route there become part of the experience."],
  ["En sosial aktivitet", "One social activity", "En guidet tur, matkurs eller liten gruppetur kan gi selskap uten at hele reisen må være sosial.", "A guided walk, food class or small group tour can add company without making the complete trip social."],
  ["Tid uten plan", "Unplanned time", "Sett av plass til kafé, bok, park eller bare en pause. Fordelen med å reise alene er at du kan endre planen.", "Leave room for a café, a book, a park or simply a break. The advantage of solo travel is being able to change the plan."],
];

const faq = [
  ["Er en weekendtur et godt første steg alene?", "Is a weekend trip a good first solo journey?", "For mange kan en kort tur være en oversiktlig måte å prøve soloreise på. Velg en enkel reisevei og et reisemål som passer erfaringen din.", "For many people, a short trip can be a manageable way to try solo travel. Choose a simple journey and a destination that suits your experience."],
  ["Hvordan unngår jeg å føle meg ensom?", "How do I avoid feeling lonely?", "Legg inn én aktivitet med andre, og velg steder der det føles naturlig å være alene, som museum, kafé, marked eller guidet tur.", "Add one activity with other people and choose places where being alone feels natural, such as museums, cafés, markets or guided tours."],
  ["Hva bør noen hjemme vite?", "What should someone at home know?", "Del reisedatoer, flydetaljer, hotelladresse og hvordan de kan kontakte deg. Oppdater dem dersom planen endres vesentlig.", "Share travel dates, flight details, the hotel address and how to reach you. Update them if the plan changes significantly."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Weekendtur alene – guide til din første soloreise | Flyferie.no" : "Solo weekend trip – a guide to your first solo journey | Flyferie.no",
    description: no ? "Planlegg en weekendtur alene med riktig reisemål, hotellområde, aktiviteter, nettilgang og en enkel trygghetsplan." : "Plan a solo weekend trip with the right destination, hotel area, activities, internet access and a simple safety plan.",
    alternates: { canonical: `/${lang}/guides/solo-weekend-trip`, languages: { "nb-NO": "/no/guides/solo-weekend-trip", en: "/en/guides/solo-weekend-trip", "x-default": "/no/guides/solo-weekend-trip" } },
  };
}

export default async function SoloWeekendTripPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/solo-weekend-trip`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Weekendtur alene" : "Solo weekend trip", description: no ? "En praktisk guide til en kort soloreise." : "A practical guide to a short solo journey.", inLanguage: no ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: no ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: no ? "Weekendtur alene" : "Solo weekend trip", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/destinations`} className="text-sm font-bold">{no ? "Reisemål" : "Destinations"}</Link><Link href={`/${other}/guides/solo-weekend-trip`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#67b8a9]/30 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Din tur · ditt tempo" : "Your trip · your pace"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Weekendtur alene" : "Solo weekend trip"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "En kort tur alene kan gi frihet til å velge tempo, mat og opplevelser selv. God planlegging gjør det lettere å nyte fleksibiliteten." : "A short solo trip gives you the freedom to choose your own pace, food and experiences. Good planning makes it easier to enjoy that flexibility."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Før du reiser" : "Before you travel"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Seks steg til en enklere solotur" : "Six steps to an easier solo trip"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{no ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Fyll dagen på din måte" : "Shape the day your way"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Tre enkle byggesteiner" : "Three simple building blocks"}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{ideas.map((item) => <article key={item[1]} className="rounded-[24px] bg-white p-7 shadow-sm"><h3 className="display text-3xl font-bold">{no ? item[0] : item[1]}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{no ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link href={`/${lang}/destinations`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{no ? "Finn et reisemål" : "Find a destination"} →</Link><Link href={`/${lang}/guides/travel-insurance`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Kontroller reiseforsikringen" : "Check travel insurance"} →</Link><Link href={`/${lang}/guides/esim`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Les om eSIM" : "Read about eSIMs"} →</Link></div></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
