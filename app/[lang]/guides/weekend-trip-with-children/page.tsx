import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const steps = [
  ["01", "Velg en enkel reisevei", "Choose a simple journey", "Direktefly, gode avgangstider og oversiktlig transport kan bety mer enn den laveste prisen. Se på hele reisen fra hjemmet til hotellet.", "Direct flights, suitable departure times and straightforward transfers may matter more than the lowest price. Consider the complete journey from home to the hotel."],
  ["02", "Bo praktisk og sentralt", "Stay somewhere practical", "Kort vei til transport, mat og aktivitetene dere vil besøke reduserer unødvendig gåing og venting. Kontroller romtype og sengeplasser nøye.", "A short distance to transport, food and planned activities reduces unnecessary walking and waiting. Check the room type and sleeping arrangements carefully."],
  ["03", "Planlegg etter barnets rytme", "Plan around the child's rhythm", "Ta hensyn til søvn, måltider og behov for pauser. Ett hovedpunkt per dag kan gi en bedre tur enn et tett program.", "Consider sleep, meals and the need for breaks. One main activity each day may create a better trip than a packed schedule."],
  ["04", "Ha mat og skift tilgjengelig", "Keep food and spare clothes accessible", "Pakk snacks, vannflaske når det passer reglene, våtservietter og et enkelt skift der dere kommer til det uten å åpne all bagasjen.", "Pack snacks, a water bottle where rules allow, wipes and a simple change of clothes where you can reach them without unpacking everything."],
  ["05", "Kontroller dokumenter og vilkår", "Check documents and conditions", "Sjekk hvilke reisedokumenter, samtykker, billetter og bagasjeregler som gjelder for familien. Bruk oppdatert informasjon fra myndigheter og transportselskap.", "Check which travel documents, permissions, tickets and baggage rules apply to the family. Use current information from authorities and transport providers."],
  ["06", "Lag en plan B", "Create a plan B", "Finn et innendørsalternativ, et rolig sted og enkel transport tilbake til hotellet. Da er det lettere å justere for vær, kø eller lavt energinivå.", "Find an indoor alternative, a quiet place and an easy route back to the hotel. This makes it easier to adjust for weather, queues or low energy."],
];

const checklist = [
  ["På reisen", "During the journey", "Billetter, dokumenter, snacks, underholdning, skift og nødvendige medisiner lett tilgjengelig.", "Tickets, documents, snacks, entertainment, spare clothes and necessary medication within easy reach."],
  ["På hotellet", "At the hotel", "Riktig romtype, sengeplasser, frokosttider, heis og praktisk vei til kollektivtransport.", "The right room type, beds, breakfast times, lift access and a practical route to public transport."],
  ["I dagsplanen", "In the daily plan", "Ett høydepunkt, mat til riktig tid, frie pauser og en enkel vei tilbake til overnattingsstedet.", "One highlight, meals at suitable times, open breaks and an easy return to the accommodation."],
];

const faq = [
  ["Hvor mange aktiviteter bør vi planlegge?", "How many activities should we plan?", "På en kort familietur holder det ofte med ett tydelig høydepunkt per dag. Legg inn pauser og noen valg som kan droppes uten at turen føles mislykket.", "On a short family trip, one clear highlight each day is often enough. Include breaks and some optional choices that can be skipped without spoiling the trip."],
  ["Er sentralt hotell verdt en høyere pris?", "Is a central hotel worth a higher price?", "Det kan være det dersom dere sparer mye transporttid og enklere kan ta en pause på rommet. Sammenlign totalpris og praktisk verdi for hele familien.", "It can be if you save significant transport time and can return to the room for a break. Compare the total cost and practical value for the complete family."],
  ["Hva må vi kontrollere før flyreisen?", "What should we check before the flight?", "Kontroller gjeldende dokumentkrav, navn på billettene, bagasje, barneutstyr, seter og innsjekkingsrutiner hos flyselskapet og relevante myndigheter.", "Check current document requirements, names on tickets, baggage, child equipment, seats and check-in procedures with the airline and relevant authorities."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Weekendtur med barn – slik planlegger dere reisen | Flyferie.no" : "Weekend trip with children – how to plan the journey | Flyferie.no",
    description: no ? "Planlegg weekendtur med barn med enkle flytider, praktisk hotell, korte avstander, pauser og riktig håndbagasje." : "Plan a weekend trip with children using simple flights, practical accommodation, short distances, breaks and suitable cabin baggage.",
    alternates: { canonical: `/${lang}/guides/weekend-trip-with-children`, languages: { "nb-NO": "/no/guides/weekend-trip-with-children", en: "/en/guides/weekend-trip-with-children", "x-default": "/no/guides/weekend-trip-with-children" } },
  };
}

export default async function WeekendTripWithChildrenPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/weekend-trip-with-children`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Weekendtur med barn" : "Weekend trip with children", description: no ? "En praktisk guide til en kort familietur." : "A practical guide to a short family trip.", inLanguage: no ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: no ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: no ? "Weekendtur med barn" : "Weekend trip with children", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/destinations`} className="text-sm font-bold">{no ? "Reisemål" : "Destinations"}</Link><Link href={`/${other}/guides/weekend-trip-with-children`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#24566a] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/30 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Enklere reise · bedre pauser" : "Simpler journeys · better breaks"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Weekendtur med barn" : "Weekend trip with children"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "En vellykket familietur trenger ikke et tett program. En enkel reisevei, riktig hotell og tid til pauser gir et bedre utgangspunkt." : "A successful family trip does not require a packed schedule. A simple journey, suitable accommodation and time for breaks create a better starting point."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Planlegg for familien" : "Plan for the family"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Seks valg som gjør turen enklere" : "Six choices that make the trip easier"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{no ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#e9f2f4] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#24566a]">{no ? "Kort sjekkliste" : "Short checklist"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Tre steder å gjøre det enkelt" : "Three places to keep things simple"}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{checklist.map((item) => <article key={item[1]} className="rounded-[24px] bg-white p-7 shadow-sm"><h3 className="display text-3xl font-bold">{no ? item[0] : item[1]}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{no ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link href={`/${lang}/guides/choose-hotel-area`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{no ? "Velg hotell og område" : "Choose a hotel and area"} →</Link><Link href={`/${lang}/guides/weekend-packing-list`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Åpne pakkelisten" : "Open the packing list"} →</Link><Link href={`/${lang}/guides/travel-insurance`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Kontroller forsikringen" : "Check insurance"} →</Link></div></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
