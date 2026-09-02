import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const steps = [
  ["01", "Start når reisen tar form", "Start when the trip takes shape", "Se på hotell så snart datoene og reisemålet er rimelig sikre. Da får du et bilde av prisnivå, områder og hvor mye som fortsatt er tilgjengelig.", "Look at hotels as soon as the dates and destination are reasonably certain. This gives you a sense of prices, areas and remaining availability."],
  ["02", "Vurder hvor bundet datoen er", "Consider how fixed the date is", "Ved arrangementer, høytider og populære helger kan gode alternativer forsvinne tidligere. På en fleksibel tur kan du ha mer rom til å følge prisene.", "For events, holidays and popular weekends, suitable options may disappear earlier. A flexible trip may leave more room to track prices."],
  ["03", "Følg både pris og utvalg", "Track price and choice", "En lavere pris hjelper lite dersom riktig område eller romtype blir utsolgt. Følg derfor tilgjengeligheten samtidig som du sammenligner pris.", "A lower price helps little if the right area or room type sells out. Track availability while comparing prices."],
  ["04", "Bruk fleksible vilkår bevisst", "Use flexible conditions deliberately", "En refunderbar bestilling kan gi trygghet mens planene blir klare. Kontroller prisforskjellen og den nøyaktige avbestillingsfristen.", "A refundable booking can provide reassurance while plans become clearer. Check the price difference and exact cancellation deadline."],
  ["05", "Sammenlign hele oppholdet", "Compare the complete stay", "Se på samme rom, samme datoer og samme vilkår. Ta med skatter, gebyrer, frokost og transport før du vurderer om tilbudet er godt.", "Compare the same room, dates and conditions. Include taxes, fees, breakfast and transport before deciding whether the offer is good."],
  ["06", "Bestill når valget passer", "Book when the option fits", "Det finnes ingen dato som alltid gir lavest pris. Når beliggenhet, rom, vilkår og totalpris passer reisen, kan det være riktig å bestille.", "There is no date that always produces the lowest price. When location, room, conditions and total cost suit the trip, it may be the right time to book."],
];

const faq = [
  ["Blir hotell alltid billigere nær avreise?", "Do hotels always become cheaper near arrival?", "Nei. Prisen kan både stige og falle, og utvalget kan bli mindre. Det avhenger blant annet av etterspørsel, reisemål og dato.", "No. Prices can rise or fall, while the choice may narrow. It depends on factors such as demand, destination and date."],
  ["Hvor tidlig bør jeg bestille en populær helg?", "How early should I book a popular weekend?", "Begynn å følge pris og tilgjengelighet når datoen er kjent. Ved konserter, messer, høytider og store arrangementer kan det være fornuftig å sikre et passende alternativ tidlig.", "Start tracking price and availability once the date is known. For concerts, trade fairs, holidays and major events, securing a suitable option early may make sense."],
  ["Bør jeg bestille refunderbart?", "Should I book a refundable rate?", "Det avhenger av hvor sikre planene er og hva fleksibiliteten koster. Les alltid fristen og vilkårene før du bestiller.", "It depends on how certain the plans are and what the flexibility costs. Always read the deadline and conditions before booking."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Når bør du bestille hotell? Praktisk guide | Flyferie.no" : "When should you book a hotel? Practical guide | Flyferie.no",
    description: no ? "Se når det kan lønne seg å bestille hotell, og hvordan pris, tilgjengelighet, datoer og avbestillingsvilkår påvirker valget." : "Learn when to book a hotel and how price, availability, dates and cancellation conditions affect the decision.",
    alternates: { canonical: `/${lang}/guides/when-to-book-hotels`, languages: { "nb-NO": "/no/guides/when-to-book-hotels", en: "/en/guides/when-to-book-hotels", "x-default": "/no/guides/when-to-book-hotels" } },
  };
}

export default async function WhenToBookHotelsPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/when-to-book-hotels`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Når bør du bestille hotell?" : "When should you book a hotel?", description: no ? "En praktisk guide til tidspunkt, pris og tilgjengelighet ved hotellbestilling." : "A practical guide to timing, price and availability when booking a hotel.", inLanguage: no ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: no ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: no ? "Når bestille hotell" : "When to book a hotel", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides`} className="text-sm font-bold">{no ? "Guider" : "Guides"}</Link><Link href={`/${other}/guides/when-to-book-hotels`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Pris · tilgjengelighet · fleksibilitet" : "Price · availability · flexibility"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Når bør du bestille hotell?" : "When should you book a hotel?"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Det finnes ingen universell dag som alltid er billigst. Et godt tidspunkt handler om å balansere pris, utvalg, vilkår og hvor faste reiseplanene er." : "There is no universal day that is always cheapest. Good timing means balancing price, choice, conditions and how fixed your plans are."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Fra første søk til bestilling" : "From first search to booking"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Seks vurderinger som hjelper deg" : "Six considerations to guide you"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{no ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Flyferies råd" : "Flyferie's advice"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Ikke vent bare på en mulig prisnedgang" : "Do not wait only for a possible price drop"}</h2></div><div className="rounded-[24px] bg-white p-7 shadow-sm sm:p-9"><p className="text-lg leading-8 text-[#365b55]">{no ? "Ta også hensyn til hvilket område du vil bo i, hvilken romtype du trenger og hvor viktig fleksibel avbestilling er. Det beste valget er det som passer hele reisen." : "Also consider the area where you want to stay, the room type you need and how important flexible cancellation is. The best option is the one that suits the complete trip."}</p></div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{no ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link href={`/${lang}/guides/compare-hotel-prices`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{no ? "Sammenlign hotellpriser" : "Compare hotel prices"} →</Link><Link href={`/${lang}/guides/choose-hotel-area`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Velg hotell og område" : "Choose a hotel and area"} →</Link></div></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
