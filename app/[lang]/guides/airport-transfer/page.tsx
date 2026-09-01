import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const options = [
  { icon: "01", no: "Tog og metro", en: "Train and metro", noText: "Ofte raskest inn til sentrum og mindre påvirket av kø. Kontroller avgangstider og avstanden fra stasjonen til overnattingsstedet.", enText: "Often the fastest route into the city and less affected by traffic. Check departure times and the distance from the station to your accommodation." },
  { icon: "02", no: "Flybuss", en: "Airport bus", noText: "Et enkelt valg når bussen stopper nær hotellet. Sammenlign total reisetid og pris for hele reisefølget.", enText: "A simple option when the bus stops near your hotel. Compare total journey time and the price for your entire group." },
  { icon: "03", no: "Taxi", en: "Taxi", noText: "Praktisk ved sen ankomst eller mye bagasje. Bruk offisiell holdeplass og avklar fastpris eller taksameter før turen starter.", enText: "Convenient for late arrivals or heavy luggage. Use the official rank and confirm the fixed fare or meter before leaving." },
  { icon: "04", no: "Privat transport", en: "Private transfer", noText: "Kan passe familier og grupper som vil bli møtt ved ankomst. Kontroller ventetid, avbestillingsregler og hva som er inkludert.", enText: "Can suit families and groups wanting a scheduled pickup. Check waiting time, cancellation terms and what is included." },
  { icon: "05", no: "Leiebil", en: "Rental car", noText: "Best når bilen også skal brukes videre på reisen. Regn inn bom, parkering, drivstoff og depositum – ikke bare dagsprisen.", enText: "Best when the car will also be used during the trip. Include tolls, parking, fuel and the deposit—not only the daily rate." },
];

const faq = [
  { qNo: "Bør flyplasstransport bestilles på forhånd?", qEn: "Should airport transfers be booked in advance?", aNo: "Ved sen ankomst, store grupper eller begrenset kollektivtilbud er forhåndsbestilling ofte lurt. I storbyer med hyppige tog og metro kan det være unødvendig.", aEn: "Advance booking is often sensible for late arrivals, large groups or limited public transport. It may be unnecessary in cities with frequent trains and metro services." },
  { qNo: "Er taxi billigst når flere reiser sammen?", qEn: "Is a taxi cheapest for a group?", aNo: "Noen ganger. Sammenlign taxiprisen med summen av alle tog- eller bussbilletter, men ta også hensyn til kø og reisetid.", aEn: "Sometimes. Compare the taxi fare with the total cost of all train or bus tickets, while also considering traffic and journey time." },
  { qNo: "Hva bør jeg kontrollere før jeg setter meg i en taxi?", qEn: "What should I check before taking a taxi?", aNo: "Bruk en offisiell holdeplass, kontroller selskap og prisordning, og ha adressen til overnattingsstedet klar.", aEn: "Use an official rank, check the company and fare arrangement, and have your accommodation address ready." },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Flyplasstransport – tog, buss, taxi eller leiebil? | Flyferie.no" : "Airport transfers – train, bus, taxi or rental car? | Flyferie.no",
    description: no ? "Sammenlign tog, flybuss, taxi, privat transport og leiebil fra flyplassen til reisemålet." : "Compare trains, airport buses, taxis, private transfers and rental cars from the airport to your destination.",
    alternates: { canonical: `/${lang}/guides/airport-transfer`, languages: { "nb-NO": "/no/guides/airport-transfer", en: "/en/guides/airport-transfer", "x-default": "/no/guides/airport-transfer" } },
  };
}

export default async function AirportTransferPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Slik velger du riktig flyplasstransport" : "How to choose the right airport transfer", inLanguage: no ? "nb-NO" : "en", publisher: { "@type": "Organization", name: "Flyferie.no" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item.qNo : item.qEn, acceptedAnswer: { "@type": "Answer", text: no ? item.aNo : item.aEn } })) },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="border-b border-white/10 bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link>
      <div className="flex items-center gap-4"><Link href={`/${lang}/destinations`} className="text-sm font-bold">{no ? "Reisemål" : "Destinations"}</Link><Link href={`/${other}/guides/airport-transfer`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div>
    </div></header>

    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28">
      <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl"><Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til forsiden" : "Back to the home page"}</Link>
        <p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Den første og siste etappen" : "The first and final leg"}</p>
        <h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Slik velger du riktig flyplasstransport" : "How to choose the right airport transfer"}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Det billigste valget er ikke alltid det beste. Ankomsttid, bagasje, avstand og antall reisende avgjør hva som fungerer." : "The cheapest option is not always the best. Arrival time, luggage, distance and group size determine what works."}</p>
      </div>
    </section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-7xl">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Fem vanlige valg" : "Five common options"}</p>
      <h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Sammenlign hele reisen til døren" : "Compare the complete door-to-door journey"}</h2>
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{options.map((item) => <article key={item.icon} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7">
        <span className="inline-flex rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item.icon}</span><h3 className="display mt-4 text-3xl font-bold">{no ? item.no : item.en}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item.noText : item.enText}</p>
      </article>)}</div>
    </div></section>

    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
      <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Før avreise" : "Before departure"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Ha dette klart" : "Have these details ready"}</h2></div>
      <ul className="grid gap-3 sm:grid-cols-2">{(no ? ["Full adresse til overnattingsstedet", "Plan B ved forsinket fly", "Valuta og forventet pris", "Plass til all bagasje", "Barnesete dersom det trengs", "Kontaktinformasjon til leverandøren"] : ["Full accommodation address", "A backup plan for flight delays", "Currency and expected fare", "Space for all luggage", "A child seat when required", "Provider contact information"]).map((item) => <li key={item} className="flex gap-3 rounded-[18px] bg-white p-4 text-sm font-bold shadow-sm"><span className="text-[#e16f59]">✓</span>{item}</li>)}</ul>
    </div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Kort forklart" : "In brief"}</h2>
      <div className="mt-8 space-y-4">{faq.map((item) => <article key={item.qEn} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h3 className="text-lg font-bold">{no ? item.qNo : item.qEn}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item.aNo : item.aEn}</p></article>)}</div>
    </div></section>

    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
