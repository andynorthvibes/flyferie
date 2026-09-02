import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const checks = [
  ["01", "Finn siste frist", "Find the final deadline", "Se etter nøyaktig dato, klokkeslett og lokal tidssone for kostnadsfri avbestilling. En formulering som «før ankomst» er ikke presis nok alene.", "Look for the exact date, time and local time zone for free cancellation. Wording such as ‘before arrival’ is not precise enough on its own."],
  ["02", "Kontroller refusjonen", "Check the refund", "Les hvor mye du får tilbake og om skatter eller gebyrer er unntatt. Refunderbar betyr ikke nødvendigvis at alle beløp tilbakebetales i alle situasjoner.", "Read how much will be returned and whether taxes or fees are excluded. Refundable does not necessarily mean every amount is returned in every situation."],
  ["03", "Se når betalingen trekkes", "See when payment is taken", "Noen fleksible priser betales på hotellet, mens andre belastes helt eller delvis på forhånd. Kontroller også hvilken valuta som brukes.", "Some flexible rates are paid at the hotel, while others are charged fully or partly in advance. Check the currency as well."],
  ["04", "Sammenlign prisforskjellen", "Compare the price difference", "Sett fleksibel og ikke-refunderbar pris opp mot hverandre for samme rom og dato. Da ser du hva muligheten til å endre planene faktisk koster.", "Compare flexible and non-refundable rates for the same room and dates. This shows what the ability to change your plans actually costs."],
  ["05", "Les regler for endringer", "Read the change rules", "Avbestilling og endring er ikke alltid det samme. Nye datoer kan føre til ny pris, og navneendring eller kortere opphold kan ha egne regler.", "Cancellation and changes are not always the same. New dates may trigger a new price, while name changes or shorter stays may have separate rules."],
  ["06", "Lagre bekreftelsen", "Save the confirmation", "Ta vare på bestillingsbekreftelsen og vilkårene som gjaldt da du bestilte. Dersom du avbestiller, bør du også lagre bekreftelsen på dette.", "Keep the booking confirmation and the conditions that applied when you booked. If you cancel, save that confirmation too."],
];

const options = [
  ["Refunderbar pris", "Refundable rate", "Passer når planene kan endres. Kontroller fristen, refusjonsbeløpet og eventuell forskuddsbetaling.", "Useful when plans may change. Check the deadline, refund amount and any prepayment."],
  ["Ikke-refunderbar pris", "Non-refundable rate", "Kan være rimeligere, men innebærer normalt høyere økonomisk risiko hvis reisen endres eller avlyses.", "May cost less, but normally carries greater financial risk if the trip changes or is cancelled."],
  ["Betal på hotellet", "Pay at the property", "Kan redusere behovet for forskuddsbetaling, men er ikke automatisk det samme som kostnadsfri avbestilling.", "May reduce prepayment, but is not automatically the same as free cancellation."],
];

const faq = [
  ["Betyr gratis avbestilling at jeg alltid får alt tilbake?", "Does free cancellation mean I always get everything back?", "Ikke nødvendigvis. Det gjelder normalt bare før en bestemt frist og i tråd med de konkrete vilkårene. Kontroller også eventuelle skatter, gebyrer og forskuddsbetalinger.", "Not necessarily. It normally applies only before a specific deadline and according to the stated conditions. Check any taxes, fees and prepayments too."],
  ["Er betal på hotellet alltid fleksibelt?", "Is pay at the property always flexible?", "Nei. Betalingstidspunkt og avbestillingsregler er to forskjellige vilkår. En pris kan betales på hotellet og likevel ha avbestillingskostnad.", "No. Payment timing and cancellation rules are separate conditions. A rate can be paid at the property and still carry a cancellation charge."],
  ["Hva skjer hvis jeg avbestiller etter fristen?", "What happens if I cancel after the deadline?", "Hotellet eller bestillingstjenesten kan belaste hele eller deler av oppholdet. Det nøyaktige beløpet skal fremgå av vilkårene for bestillingen.", "The hotel or booking service may charge all or part of the stay. The exact amount should be stated in the booking conditions."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Fleksibel hotellbestilling og avbestilling | Flyferie.no" : "Flexible hotel booking and cancellation | Flyferie.no",
    description: no ? "Lær å kontrollere hotellvilkår for refusjon, avbestillingsfrist, forskuddsbetaling og endringer før du bestiller." : "Learn how to check hotel terms for refunds, cancellation deadlines, prepayment and changes before booking.",
    alternates: { canonical: `/${lang}/guides/flexible-hotel-booking`, languages: { "nb-NO": "/no/guides/flexible-hotel-booking", en: "/en/guides/flexible-hotel-booking", "x-default": "/no/guides/flexible-hotel-booking" } },
  };
}

export default async function FlexibleHotelBookingPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/flexible-hotel-booking`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Fleksibel hotellbestilling og avbestillingsvilkår" : "Flexible hotel booking and cancellation conditions", description: no ? "En praktisk guide til fleksible hotellpriser, refusjon og avbestillingsfrister." : "A practical guide to flexible hotel rates, refunds and cancellation deadlines.", inLanguage: no ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: no ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: no ? "Fleksibel hotellbestilling" : "Flexible hotel booking", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides`} className="text-sm font-bold">{no ? "Guider" : "Guides"}</Link><Link href={`/${other}/guides/flexible-hotel-booking`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Frister · refusjon · tryggere valg" : "Deadlines · refunds · safer choices"}</p><h1 className="display mt-3 max-w-5xl text-[46px] font-bold leading-[.98] sm:text-7xl lg:text-[80px]">{no ? "Fleksibel hotellbestilling" : "Flexible hotel booking"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Et fleksibelt hotelltilbud kan gi trygghet når reiseplanen ikke er helt fast. Men ordene i overskriften er mindre viktige enn den nøyaktige fristen, betalingen og refusjonsreglene." : "A flexible hotel rate can offer reassurance when plans are not fixed. But the headline wording matters less than the exact deadline, payment and refund rules."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Før du bekrefter" : "Before you confirm"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Seks ting du bør kontrollere" : "Six things to check"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{checks.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{no ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Tre vanlige alternativer" : "Three common options"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Prisnavnet forteller ikke hele historien" : "The rate name does not tell the whole story"}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{options.map((item) => <article key={item[1]} className="rounded-[24px] bg-white p-7 shadow-sm"><h3 className="display text-3xl font-bold">{no ? item[0] : item[1]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{no ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link href={`/${lang}/guides/when-to-book-hotels`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{no ? "Når bør du bestille hotell?" : "When should you book a hotel?"} →</Link><Link href={`/${lang}/guides/compare-hotel-prices`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold">{no ? "Sammenlign hotellpriser" : "Compare hotel prices"} →</Link></div></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
