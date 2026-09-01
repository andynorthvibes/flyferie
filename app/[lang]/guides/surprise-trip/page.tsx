import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const steps = [
  { n: "01", no: "Velg én ansvarlig arrangør", en: "Choose one lead organiser", noText: "Én person bør ha ansvar for billetter, navn, betaling og informasjon. Flere kan bidra med ideer uten at hemmeligheten eller oversikten forsvinner.", enText: "One person should manage tickets, names, payments and information. Others can contribute ideas without losing the secret or overall control." },
  { n: "02", no: "Avtal rammene først", en: "Agree on the boundaries first", noText: "Få godkjent dato, maksimalpris, avreiseflyplass, bagasjebehov og eventuelle hensyn før reisemålet velges.", enText: "Confirm dates, maximum budget, departure airport, luggage needs and any personal requirements before choosing the destination." },
  { n: "03", no: "Sjekk deltakerne diskret", en: "Check travellers discreetly", noText: "Kontroller at alle har gyldig legitimasjon, kan reise til aktuelle land og har meldt fra om helse-, mat- eller tilgjengelighetsbehov.", enText: "Confirm that everyone has valid identification, can enter the possible countries and has shared health, dietary or accessibility needs." },
  { n: "04", no: "Velg et reisemål som tåler gruppen", en: "Choose a destination that suits the group", noText: "Prioriter enkle flytider, oversiktlig transport og aktiviteter som fungerer selv om været endrer seg.", enText: "Prioritise convenient flight times, straightforward transfers and activities that still work if the weather changes." },
  { n: "05", no: "Gi riktig pakkebeskjed", en: "Give useful packing clues", noText: "Fortell temperatur, type sko, bagasjestørrelse, aktivitetsnivå og om noe spesielt må tas med – uten å avsløre byen.", enText: "Share the temperature, footwear, luggage size, activity level and anything special to bring—without revealing the city." },
  { n: "06", no: "Planlegg avsløringen", en: "Plan the reveal", noText: "Bestem om stedet avsløres før avreise, på flyplassen eller ved gaten. Ha nødvendig informasjon tilgjengelig hvis noen må vite tidligere.", enText: "Decide whether to reveal the destination before departure, at the airport or at the gate. Keep essential information available if someone needs to know earlier." },
];

const faq = [
  { qNo: "Hvor lenge bør reisemålet holdes hemmelig?", qEn: "How long should the destination stay secret?", aNo: "Det finnes ingen fasit. Noen liker avsløring flere dager før, mens andre vil vente til flyplassen. Avtal graden av overraskelse uten å avsløre selve stedet.", aEn: "There is no single answer. Some prefer the reveal several days ahead, while others wait until the airport. Agree on the level of surprise without revealing the place." },
  { qNo: "Kan arrangøren bestille fly for alle?", qEn: "Can the organiser book flights for everyone?", aNo: "Ja, men navn og andre passasjeropplysninger må kontrolleres nøye mot gyldig legitimasjon før betaling. Del også vilkår og kostnader med gruppen.", aEn: "Yes, but names and passenger details must be checked carefully against valid identification before payment. Share the conditions and costs with the group too." },
  { qNo: "Hvordan unngår vi at noen føler seg presset?", qEn: "How do we avoid making anyone feel pressured?", aNo: "Avtal prisramme, aktivitetsnivå og personlige grenser på forhånd. En god blåtur overrasker med reisemålet, ikke med utgifter eller ubehagelige aktiviteter.", aEn: "Agree on budget, activity level and personal boundaries in advance. A good surprise trip reveals the destination—not unexpected costs or uncomfortable activities." },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Slik arrangerer du blåtur – komplett guide | Flyferie.no" : "How to plan a surprise trip – complete guide | Flyferie.no",
    description: no ? "Planlegg en vellykket blåtur med riktig budsjett, hemmelig reisemål, pakkebeskjed, deltakerinformasjon og avsløring." : "Plan a successful surprise trip with the right budget, secret destination, packing clues, traveller information and reveal.",
    alternates: { canonical: `/${lang}/guides/surprise-trip`, languages: { "nb-NO": "/no/guides/surprise-trip", en: "/en/guides/surprise-trip", "x-default": "/no/guides/surprise-trip" } },
  };
}

export default async function SurpriseTripPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "HowTo", name: no ? "Slik arrangerer du blåtur" : "How to plan a surprise trip", inLanguage: no ? "nb-NO" : "en", step: steps.map((item) => ({ "@type": "HowToStep", name: no ? item.no : item.en, text: no ? item.noText : item.enText })) },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item.qNo : item.qEn, acceptedAnswer: { "@type": "Answer", text: no ? item.aNo : item.aEn } })) },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="border-b border-white/10 bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides/plan-weekend-trip`} className="text-sm font-bold">{no ? "Planlegg turen" : "Plan the trip"}</Link><Link href={`/${other}/guides/surprise-trip`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>

    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#ef855f]/25 blur-3xl" /><div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#2d9587]/35 blur-3xl" /><div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til forsiden" : "Back to the home page"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Overrask gjengen" : "Surprise the group"}</p><h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Slik arrangerer du en vellykket blåtur" : "How to plan a successful surprise trip"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Behold spenningen rundt reisemålet, men fjern usikkerheten rundt pris, pakking og praktiske behov." : "Keep the excitement around the destination while removing uncertainty about price, packing and practical needs."}</p></div><div className="rounded-[26px] border border-white/15 bg-white/[.08] p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{no ? "Den gode overraskelsen" : "The good surprise"}</p><p className="display mt-3 text-3xl font-bold">{no ? "Hemmelig sted. Tydelige rammer." : "Secret place. Clear boundaries."}</p><p className="mt-4 leading-7 text-white/75">{no ? "Deltakerne skal vite hva turen koster og krever – selv om de ikke vet hvor den går." : "Travellers should know what the trip costs and requires—even if they do not know where it goes."}</p></div></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Steg for steg" : "Step by step"}</p><h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Seks steg fra hemmelig idé til avreise" : "Six steps from secret idea to departure"}</h2><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map((item) => <article key={item.n} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="inline-flex rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item.n}</span><h3 className="display mt-4 text-3xl font-bold">{no ? item.no : item.en}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item.noText : item.enText}</p></article>)}</div></div></section>

    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Pakkebeskjeden" : "The packing clue"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Fortell nok – men ikke for mye" : "Reveal enough—but not too much"}</h2></div><ul className="grid gap-3 sm:grid-cols-2">{(no ? ["Forventet temperatur og nedbør", "Type sko og aktivitetsnivå", "Tillatt bagasjestørrelse", "Behov for pent antrekk eller badetøy", "Når og hvor gruppen skal møtes", "Hvilken legitimasjon som kreves"] : ["Expected temperature and rainfall", "Footwear and activity level", "Permitted luggage size", "Need for smart clothing or swimwear", "When and where the group meets", "Which identification is required"]).map((item) => <li key={item} className="flex gap-3 rounded-[18px] bg-white p-4 text-sm font-bold shadow-sm"><span className="text-[#e16f59]">✓</span>{item}</li>)}</ul></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Kort forklart" : "In brief"}</h2><div className="mt-8 space-y-4">{faq.map((item) => <article key={item.qEn} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h3 className="text-lg font-bold">{no ? item.qNo : item.qEn}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item.aNo : item.aEn}</p></article>)}</div></div></section>

    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
