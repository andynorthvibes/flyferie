import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const groups = [
  { n: "01", no: "Dokumenter og penger", en: "Documents and money", noItems: ["Pass eller gyldig legitimasjon", "Billetter og bestillingsbekreftelser", "Betalingskort og litt reserve", "Reiseforsikring og nødvendige numre"], enItems: ["Passport or valid identification", "Tickets and booking confirmations", "Payment card and a small backup", "Travel insurance and essential numbers"] },
  { n: "02", no: "Klær", en: "Clothing", noItems: ["Undertøy og sokker for hver dag", "To overdeler som kan kombineres", "Én ekstra bukse eller skjørt", "Jakke etter værmeldingen", "Behagelige sko som er gått inn"], enItems: ["Underwear and socks for each day", "Two interchangeable tops", "One spare pair of trousers or a skirt", "A jacket suited to the forecast", "Comfortable, broken-in shoes"] },
  { n: "03", no: "Toalettsaker", en: "Toiletries", noItems: ["Tannbørste og tannkrem", "Deodorant og små beholdere", "Solkrem ved behov", "Faste medisiner i håndbagasjen"], enItems: ["Toothbrush and toothpaste", "Deodorant and travel-size containers", "Sunscreen when needed", "Regular medication in cabin baggage"] },
  { n: "04", no: "Mobil og strøm", en: "Phone and power", noItems: ["Mobil og lader", "Powerbank i håndbagasjen", "Riktig reiseadapter", "Billetter og kart lagret offline"], enItems: ["Phone and charger", "Power bank in cabin baggage", "The correct travel adaptor", "Tickets and maps saved offline"] },
  { n: "05", no: "I håndbagasjen", en: "In your cabin bag", noItems: ["Verdisaker og medisiner", "Et lett skift", "Tom vannflaske", "Hodetelefoner", "Nødvendigheter ved forsinkelse"], enItems: ["Valuables and medication", "One light change of clothes", "An empty water bottle", "Headphones", "Essentials for a delay"] },
  { n: "06", no: "Før du går", en: "Before leaving", noItems: ["Kontroller bagasjemål og vekt", "Sjekk vær og lokale regler", "Lad alle enheter", "Del reiseplanen med noen hjemme"], enItems: ["Check baggage dimensions and weight", "Review weather and local requirements", "Charge every device", "Share the itinerary with someone at home"] },
];

const faq = [
  { qNo: "Holder håndbagasje til en weekendtur?", qEn: "Is cabin baggage enough for a weekend trip?", aNo: "Som regel ja, særlig med plagg som kan kombineres. Kontroller alltid flyselskapets mål og vekt før du pakker.", aEn: "Usually, especially with interchangeable clothing. Always check the airline's size and weight limits before packing." },
  { qNo: "Hva bør aldri ligge i innsjekket bagasje?", qEn: "What should never go in checked baggage?", aNo: "Pass, penger, betalingskort, nødvendige medisiner, verdisaker og powerbank bør være i håndbagasjen.", aEn: "Passports, money, payment cards, essential medication, valuables and power banks should remain in cabin baggage." },
  { qNo: "Hvordan unngår jeg å pakke for mye?", qEn: "How do I avoid overpacking?", aNo: "Legg alt frem først, velg en enkel fargepalett og fjern plagg som bare passer til ett antrekk eller én tenkt anledning.", aEn: "Lay everything out first, use a simple colour palette and remove items that only work with one outfit or one imagined occasion." },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Pakkeliste for weekendtur – dette bør du ha med | Flyferie.no" : "Weekend trip packing list – what to bring | Flyferie.no",
    description: no ? "En enkel og komplett pakkeliste for weekendtur med klær, dokumenter, toalettsaker, mobilutstyr og håndbagasje." : "A simple, complete weekend trip packing list covering clothing, documents, toiletries, mobile gear and cabin baggage.",
    alternates: { canonical: `/${lang}/guides/weekend-packing-list`, languages: { "nb-NO": "/no/guides/weekend-packing-list", en: "/en/guides/weekend-packing-list", "x-default": "/no/guides/weekend-packing-list" } },
  };
}

export default async function WeekendPackingList({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Pakkeliste for weekendtur" : "Weekend trip packing list", inLanguage: no ? "nb-NO" : "en", publisher: { "@type": "Organization", name: "Flyferie.no" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item.qNo : item.qEn, acceptedAnswer: { "@type": "Answer", text: no ? item.aNo : item.aEn } })) },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="border-b border-white/10 bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <Link href={`/${lang}`} aria-label="Flyferie.no"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link>
      <div className="flex items-center gap-4"><Link href={`/${lang}/guides/travel-gear`} className="text-sm font-bold">{no ? "Reiseutstyr" : "Travel gear"}</Link><Link href={`/${other}/guides/weekend-packing-list`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div>
    </div></header>

    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28">
      <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div>
        <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til forsiden" : "Back to the home page"}</Link>
        <p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Pakk lett · reis enklere" : "Pack light · travel easier"}</p>
        <h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Pakkeliste for weekendtur" : "Weekend trip packing list"}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Alt du trenger for noen dager borte – uten å fylle kofferten med ting som aldri blir brukt." : "Everything you need for a few days away—without filling your bag with things you never use."}</p>
      </div><div className="rounded-[26px] border border-white/15 bg-white/[.08] p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{no ? "En enkel regel" : "One simple rule"}</p><p className="display mt-3 text-3xl font-bold">{no ? "Pakk for planen og været" : "Pack for the plan and forecast"}</p><p className="mt-4 leading-7 text-white/75">{no ? "Ikke pakk for alle situasjoner som kanskje kan oppstå." : "Do not pack for every situation that might possibly occur."}</p></div></div>
    </section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Kryss av før avreise" : "Tick off before departure"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Den komplette weekendlisten" : "The complete weekend list"}</h2>
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{groups.map((group) => <article key={group.n} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="inline-flex rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{group.n}</span><h3 className="display mt-4 text-3xl font-bold">{no ? group.no : group.en}</h3><ul className="mt-5 space-y-3">{(no ? group.noItems : group.enItems).map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#48645f]"><span className="font-bold text-[#e16f59]">□</span><span>{item}</span></li>)}</ul></article>)}</div>
    </div></section>

    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Tre raske grep" : "Three quick steps"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Pakk mindre på fem minutter" : "Pack less in five minutes"}</h2></div><ol className="grid gap-3"><li className="rounded-[18px] bg-white p-5 font-bold shadow-sm">1. {no ? "Legg alt frem før noe går i kofferten." : "Lay everything out before anything enters the bag."}</li><li className="rounded-[18px] bg-white p-5 font-bold shadow-sm">2. {no ? "Fjern ett plagg fra hver kategori." : "Remove one item from every category."}</li><li className="rounded-[18px] bg-white p-5 font-bold shadow-sm">3. {no ? "Reis i de tyngste skoene og ytterplagget." : "Wear the heaviest shoes and outer layer while travelling."}</li></ol></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Kort forklart" : "In brief"}</h2><div className="mt-8 space-y-4">{faq.map((item) => <article key={item.qEn} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h3 className="text-lg font-bold">{no ? item.qNo : item.qEn}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item.aNo : item.aEn}</p></article>)}</div></div></section>

    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
