import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const steps = [
  ["01", "Kontroller billetten først", "Check the ticket first", "Se hvilke bagasjemål, vektgrenser og antall kolli som gjelder for akkurat billetten og flyselskapet. Kontroller på nytt før avreise.", "Check the dimensions, weight limits and number of items allowed for your exact ticket and airline. Check again before departure."],
  ["02", "Planlegg antrekk, ikke enkeltplagg", "Plan outfits, not individual items", "Velg en liten fargepalett og plagg som kan kombineres. Ett ytterlag, komfortable reisesko og overdeler som fungerer med samme underdel sparer mye plass.", "Choose a small colour palette and interchangeable pieces. One outer layer, comfortable travel shoes and tops that work with the same bottoms save considerable space."],
  ["03", "Pakk etter vær og aktiviteter", "Pack for weather and activities", "Sjekk værmeldingen tett på avreise og pakk for det dere faktisk skal gjøre. Ikke fyll bagen med reserveantrekk til usannsynlige planer.", "Check the forecast close to departure and pack for what you will actually do. Do not fill the bag with backup outfits for unlikely plans."],
  ["04", "Gjør toalettsakene mindre", "Reduce toiletries", "Ta bare med mengden du trenger, eller bruk produkter som allerede finnes på overnattingsstedet. Kontroller alltid gjeldende sikkerhetsregler for væsker.", "Bring only the amount you need or use products provided by the accommodation. Always check the current security rules for liquids."],
  ["05", "Bruk plassen bevisst", "Use the space deliberately", "Fyll sko med småting, legg flate plagg nederst og hold dokumenter, medisiner og elektronikk lett tilgjengelig. Unngå organiseringsutstyr som tar mer plass enn det sparer.", "Fill shoes with small items, place flat clothing at the bottom and keep documents, medication and electronics accessible. Avoid organisers that consume more space than they save."],
  ["06", "Ta en siste runde", "Do a final edit", "Legg alt frem og fjern det som ikke har en tydelig funksjon. La litt ledig plass være igjen, og vei eller mål bagen dersom billetten krever det.", "Lay everything out and remove anything without a clear purpose. Leave some spare room, and weigh or measure the bag if your ticket requires it."],
];

const faq = [
  ["Holder håndbagasje til tre netter?", "Is cabin baggage enough for three nights?", "For mange reisende, ja. Det avhenger av vær, aktiviteter, bagasjereglene og hvor mye utstyr du faktisk trenger.", "For many travellers, yes. It depends on the weather, activities, baggage rules and how much equipment you genuinely need."],
  ["Bør jeg rulle eller brette klærne?", "Should I roll or fold clothes?", "Begge deler kan fungere. Brett plagg som lett krøller, og rull mykere plagg dersom det utnytter formen på bagen bedre.", "Both can work. Fold garments that crease easily and roll softer items when that uses the shape of the bag more efficiently."],
  ["Hva må jeg kontrollere før flyplassen?", "What should I check before reaching the airport?", "Kontroller billettens bagasjevilkår og gjeldende regler for væsker, batterier, medisiner og andre regulerte gjenstander hos flyselskapet og relevante myndigheter.", "Check your ticket's baggage conditions and the current rules for liquids, batteries, medication and other regulated items with the airline and relevant authorities."],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Weekendtur med håndbagasje – slik pakker du lett | Flyferie.no" : "Weekend trip with cabin baggage – how to pack light | Flyferie.no",
    description: no ? "Pakk til weekendtur med håndbagasje ved å planlegge antrekk, redusere toalettsaker og kontrollere reglene." : "Pack for a weekend trip with cabin baggage by planning outfits, reducing toiletries and checking the rules.",
    alternates: { canonical: `/${lang}/guides/cabin-bag-weekend`, languages: { "nb-NO": "/no/guides/cabin-bag-weekend", en: "/en/guides/cabin-bag-weekend", "x-default": "/no/guides/cabin-bag-weekend" } },
  };
}

export default async function CabinBagWeekendPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/cabin-bag-weekend`;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: no ? "Weekendtur med håndbagasje" : "A weekend trip with cabin baggage", description: no ? "En praktisk guide til å pakke lett for en kort tur." : "A practical guide to packing light for a short trip.", inLanguage: no ? "nb-NO" : "en", url: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item[0] : item[1], acceptedAnswer: { "@type": "Answer", text: no ? item[2] : item[3] } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` }, { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` }, { "@type": "ListItem", position: 3, name: no ? "Weekendtur med håndbagasje" : "Weekend trip with cabin baggage", item: pageUrl }] },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides/travel-gear`} className="text-sm font-bold">{no ? "Reiseutstyr" : "Travel gear"}</Link><Link href={`/${other}/guides/cabin-bag-weekend`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>
    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til guidene" : "Back to the guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Pakk lett · reis enklere" : "Pack light · travel easier"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Weekendtur med håndbagasje" : "A weekend trip with cabin baggage"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Med en tydelig plan kan noen dager borte ofte gjennomføres uten stor koffert. Nøkkelen er å pakke for turen – ikke for alle tenkelige situasjoner." : "With a clear plan, a few days away can often be managed without a large suitcase. The key is packing for the trip—not every imaginable situation."}</p></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Fra plan til ferdig bag" : "From plan to packed bag"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Seks steg til lettere bagasje" : "Six steps to lighter baggage"}</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map((item) => <article key={item[0]} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item[0]}</span><h3 className="display mt-5 text-3xl font-bold leading-tight">{no ? item[1] : item[2]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[3] : item[4]}</p></article>)}</div></div></section>
    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Viktig før avreise" : "Important before departure"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Reglene følger billetten" : "The rules follow the ticket"}</h2></div><div className="rounded-[24px] bg-white p-7 shadow-sm sm:p-9"><p className="text-lg leading-8 text-[#365b55]">{no ? "Bagasjevilkår kan variere mellom flyselskaper, billettyper og ruter. Bruk derfor alltid oppdatert informasjon fra flyselskapet og flyplassen før du pakker ferdig." : "Baggage conditions can vary by airline, ticket type and route. Always use current information from the airline and airport before completing your packing."}</p></div></div></section>
    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><div className="mt-7 space-y-4">{faq.map((item) => <article key={item[1]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{no ? item[0] : item[1]}</h2><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div><Link href={`/${lang}/guides/weekend-packing-list`} className="mt-8 inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">{no ? "Åpne hele pakkelisten" : "Open the full packing list"} →</Link></div></section>
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
