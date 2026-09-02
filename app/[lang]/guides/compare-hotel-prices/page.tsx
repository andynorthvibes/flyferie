import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const checks = [
  ["01", "Sammenlign samme rom", "Compare the same room", "Kontroller romtype, sengetype, antall gjester og om frokost er inkludert. To priser er ikke sammenlignbare dersom innholdet er forskjellig.", "Check room type, bed type, guest count and whether breakfast is included. Two prices are not comparable when the contents differ."],
  ["02", "Se etter skatter og gebyrer", "Look for taxes and fees", "Noen priser vises før lokale skatter eller andre tillegg. Gå langt nok i bestillingen til at du ser beløpet som faktisk skal betales.", "Some rates appear before local taxes or other extras. Continue far enough through the booking process to see the amount you will actually pay."],
  ["03", "Sammenlign betalingsvilkårene", "Compare payment conditions", "Forhåndsbetaling kan ha en annen pris enn betaling på hotellet. Kontroller valuta, betalingsdato og om beløpet kan refunderes.", "Prepayment may have a different price from paying at the hotel. Check the currency, payment date and whether the amount is refundable."],
  ["04", "Les avbestillingsfristen", "Read the cancellation deadline", "To rom med samme pris kan ha helt ulike vilkår. Se dato, klokkeslett og eventuell kostnad ved sen avbestilling eller manglende oppmøte.", "Two rooms at the same price can have very different conditions. Check the date, time and any charge for late cancellation or no-show."],
  ["05", "Regn inn beliggenheten", "Include the location", "Et rimeligere hotell kan gi høyere transportkostnader og mer reisetid. Sammenlign derfor totalen for oppholdet, ikke bare romprisen.", "A cheaper hotel may add transport costs and travel time. Compare the total stay rather than only the room rate."],
  ["06", "Kontroller leverandøren", "Check the provider", "Se hvem som håndterer bestillingen, betalingen og kundeservicen. Ta vare på bekreftelsen og vilkårene som gjaldt da du bestilte.", "Check who handles the booking, payment and customer service. Keep the confirmation and the conditions that applied when you booked."],
];

const faq = [
  ["Hvorfor varierer prisen på samme hotell?", "Why does the same hotel have different prices?", "Forskjeller kan skyldes romtype, måltider, avbestillingsvilkår, betalingstidspunkt, valuta eller hvilke avgifter som er inkludert.", "Differences may come from room type, meals, cancellation conditions, payment timing, currency or which fees are included."],
  ["Er direktebestilling alltid billigst?", "Is direct booking always cheapest?", "Ikke nødvendigvis. Sammenlign sluttpris, fordeler, betalingsvilkår og hvem som gir kundeservice før du velger.", "Not necessarily. Compare the final price, benefits, payment conditions and who provides customer service before choosing."],
  ["Bør jeg velge den laveste prisen?", "Should I choose the lowest price?", "Bare dersom rommet og vilkårene passer. En litt dyrere pris kan være bedre dersom den inkluderer frokost, fleksibel avbestilling eller en bedre romtype.", "Only if the room and conditions suit you. A slightly higher rate may be better if it includes breakfast, flexible cancellation or a better room type."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Slik sammenligner du hotellpriser riktig | Flyferie.no" : "How to compare hotel prices properly | Flyferie.no",
    description: norwegian ? "Sammenlign hotellpriser ut fra romtype, skatter, gebyrer, betaling, avbestilling og beliggenhet." : "Compare hotel prices by room type, taxes, fees, payment, cancellation and location.",
    alternates: { canonical: `/${lang}/guides/compare-hotel-prices`, languages: { "nb-NO": "/no/guides/compare-hotel-prices", en: "/en/guides/compare-hotel-prices", "x-default": "/no/guides/compare-hotel-prices" } },
  };
}

export default async function CompareHotelPricesPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const other = norwegian ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/compare-hotel-prices`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: norwegian ? "Slik sammenligner du hotellpriser riktig" : "How to compare hotel prices properly", description: norwegian ? "En praktisk guide til reell sammenligning av hotellpriser." : "A practical guide to making a fair hotel price comparison.", inLanguage: norwegian ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: norwegian ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: norwegian ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: norwegian ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: norwegian ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: norwegian ? "Sammenlign hotellpriser" : "Compare hotel prices", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides`} className="text-sm font-bold">{norwegian ? "Guider" : "Guides"}</Link><Link href={`/${other}/guides/compare-hotel-prices`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{norwegian ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{norwegian ? "Se på sluttprisen" : "Focus on the final price"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{norwegian ? "Slik sammenligner du hotellpriser riktig" : "How to compare hotel prices properly"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{norwegian ? "En god sammenligning krever samme rom, samme datoer og samme vilkår. Først da ser du hvilken pris som faktisk passer reisen." : "A fair comparison requires the same room, dates and conditions. Only then can you see which price genuinely suits the trip."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{norwegian ? "Sjekk før du velger" : "Check before choosing"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{norwegian ? "Seks punkter for en rettferdig sammenligning" : "Six checks for a fair comparison"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{checks.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{norwegian ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{norwegian ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{norwegian ? "Husk" : "Remember"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Billigst er ikke alltid best verdi" : "Cheapest is not always the best value"}</h2></div><div className="rounded-[24px] bg-white p-7 shadow-sm sm:p-9"><p className="text-lg leading-8 text-[#365b55]">{norwegian ? "Vurder hva som er inkludert, hvor hotellet ligger og hvor mye fleksibilitet du trenger. Målet er et opphold som passer reisen – ikke bare det laveste tallet i søkeresultatet." : "Consider what is included, where the hotel is located and how much flexibility you need. The goal is a stay that fits the trip—not merely the lowest number in the results."}</p></div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{norwegian ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{norwegian ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{norwegian ? item[2] : item[3]}</p></article>)}</div><Link href={`/${lang}/guides/choose-hotel-area`} className="mt-8 inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{norwegian ? "Velg riktig hotell og område" : "Choose the right hotel and area"} →</Link></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {norwegian ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
