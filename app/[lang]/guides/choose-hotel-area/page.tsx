import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const choices = [
  ["01", "Start med området", "Start with the area", "Se avstanden til stedene dere faktisk vil besøke. Et sentralt hotell kan spare tid og transport, mens et roligere område kan gi mer plass eller bedre pris.", "Check the distance to the places you actually want to visit. A central hotel may save time and transport, while a quieter area may offer more space or better value."],
  ["02", "Regn på totalprisen", "Calculate the total cost", "Sammenlign pris for hele oppholdet og ta med skatter, gebyrer, frokost, transport og eventuelle tillegg. Den laveste romprisen er ikke alltid billigst totalt.", "Compare the price for the entire stay, including taxes, fees, breakfast, transport and extras. The lowest room rate is not always the lowest total cost."],
  ["03", "Velg riktig rom", "Choose the right room", "Kontroller sengetype, størrelse, bad, klimaanlegg og hvor mange rom dere trenger. På tur med venner kan romfordelingen være like viktig som hotellstandarden.", "Check bed type, room size, bathroom, air conditioning and how many rooms you need. On a group trip, room allocation can matter as much as the hotel standard."],
  ["04", "Les vilkårene", "Read the conditions", "Se fristen for gratis avbestilling, betalingsmåte og hva som skjer ved endring. Fleksible vilkår kan være verdifulle når flere reiser sammen.", "Check the free-cancellation deadline, payment method and change conditions. Flexible terms can be valuable when several people travel together."],
  ["05", "Bruk anmeldelser med skjønn", "Use reviews thoughtfully", "Se etter gjentakende kommentarer om renhold, støy, beliggenhet og service. En enkelt svært god eller dårlig anmeldelse sier mindre enn et tydelig mønster.", "Look for recurring comments about cleanliness, noise, location and service. One extremely positive or negative review matters less than a clear pattern."],
  ["06", "Kontroller før betaling", "Check before paying", "Bekreft datoer, antall gjester, romtype, sluttpris og hvem du bestiller hos. Ta vare på bestillingsbekreftelsen.", "Confirm dates, guest count, room type, final price and the booking provider. Keep the booking confirmation."],
];

const faq = [
  ["Er sentrum alltid det beste området?", "Is the city centre always the best area?", "Nei. Sentrum passer mange korte turer, men andre områder kan gi roligere netter, bedre transportforbindelser eller mer for pengene.", "No. The centre suits many short trips, but other areas may provide quieter nights, better transport links or more value."],
  ["Hvor viktig er hotellvurderingen?", "How important is the hotel rating?", "Bruk vurderingen som ett av flere signaler. Les også nyere anmeldelser og kontroller om kommentarene handler om forhold som betyr noe for din reise.", "Treat the rating as one of several signals. Also read recent reviews and check whether the comments concern things that matter to your trip."],
  ["Bør jeg velge gratis avbestilling?", "Should I choose free cancellation?", "Det avhenger av prisforskjellen og hvor sikre planene er. Les alltid fristen og vilkårene, fordi «gratis avbestilling» ikke nødvendigvis gjelder helt frem til ankomst.", "It depends on the price difference and how certain your plans are. Always read the deadline and conditions, as free cancellation may not apply until arrival."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Slik velger du riktig hotell og område | Flyferie.no" : "How to choose the right hotel and area | Flyferie.no",
    description: norwegian ? "Velg hotell ut fra beliggenhet, transport, romtype, anmeldelser, vilkår og totalpris." : "Choose a hotel by location, transport, room type, reviews, conditions and total price.",
    alternates: { canonical: `/${lang}/guides/choose-hotel-area`, languages: { "nb-NO": "/no/guides/choose-hotel-area", en: "/en/guides/choose-hotel-area", "x-default": "/no/guides/choose-hotel-area" } },
  };
}

export default async function ChooseHotelAreaPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const other = norwegian ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/choose-hotel-area`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: norwegian ? "Slik velger du riktig hotell og område" : "How to choose the right hotel and area", description: norwegian ? "En praktisk guide til hotellvalg før reisen." : "A practical guide to choosing accommodation before a trip.", inLanguage: norwegian ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: norwegian ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: norwegian ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: norwegian ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: norwegian ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: norwegian ? "Velg hotell og område" : "Choose a hotel and area", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/destinations`} className="text-sm font-bold">{norwegian ? "Reisemål" : "Destinations"}</Link><Link href={`/${other}/guides/choose-hotel-area`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{norwegian ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{norwegian ? "Bo riktig på reisen" : "Stay in the right place"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{norwegian ? "Slik velger du riktig hotell og område" : "How to choose the right hotel and area"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{norwegian ? "Det riktige hotellet handler ikke bare om antall stjerner. Beliggenhet, rom, vilkår og reisen dere planlegger må passe sammen." : "The right hotel is about more than star ratings. Location, rooms, conditions and the trip you are planning need to work together."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{norwegian ? "Før du bestiller" : "Before booking"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{norwegian ? "Seks valg som betyr mest" : "Six choices that matter most"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{choices.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{norwegian ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{norwegian ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{norwegian ? "Flyferies tommelfingerregel" : "Flyferie's rule of thumb"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Velg for turen dere faktisk skal ha" : "Choose for the trip you are actually taking"}</h2></div><div className="rounded-[24px] bg-white p-7 shadow-sm sm:p-9"><p className="text-lg leading-8 text-[#365b55]">{norwegian ? "På en kort weekendtur er tid og beliggenhet ofte ekstra viktig. På et lengre opphold kan plass, ro og fasiliteter veie tyngre. Det beste valget avhenger av reisefølget og planen." : "On a short city break, time and location often matter more. For a longer stay, space, quiet and facilities may carry more weight. The best choice depends on the travellers and the plan."}</p></div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{norwegian ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{norwegian ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{norwegian ? item[2] : item[3]}</p></article>)}</div><Link href={`/${lang}/destinations`} className="mt-8 inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{norwegian ? "Finn reisemål og bydeler" : "Explore destinations and areas"} →</Link></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {norwegian ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
