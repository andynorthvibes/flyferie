import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const costs = [
  { n: "01", no: "Fly og bagasje", en: "Flights and baggage", noText: "Bruk sluttprisen for alle reisende. Ta med håndbagasje, innsjekket bagasje, setevalg og transport til avreiseflyplassen.", enText: "Use the final price for every traveller. Include cabin bags, checked bags, seat selection and transport to the departure airport." },
  { n: "02", no: "Overnatting", en: "Accommodation", noText: "Regn inn alle netter, skatter og eventuelle gebyrer. Sammenlign sentral beliggenhet med kostnaden og tiden dere bruker på lokal transport.", enText: "Include every night, taxes and possible fees. Compare a central location with the cost and time required for local transport." },
  { n: "03", no: "Transport på reisemålet", en: "Transport at the destination", noText: "Ta med flyplasstransport, kollektivbilletter, taxi og eventuell leiebil, parkering, bom og drivstoff.", enText: "Include airport transfers, public transport, taxis and any rental car, parking, tolls and fuel." },
  { n: "04", no: "Mat og drikke", en: "Food and drink", noText: "Sett en dagsramme som passer gruppen. Skill mellom vanlige måltider og én eller to opplevelser dere vil prioritere.", enText: "Set a daily amount that suits the group. Separate everyday meals from one or two experiences you want to prioritise." },
  { n: "05", no: "Aktiviteter", en: "Activities", noText: "Pris ut billetter, guidede turer og reservasjoner på forhånd. Legg gratis parker, utsiktspunkter og byvandring inn i planen også.", enText: "Price tickets, guided tours and reservations in advance. Add free parks, viewpoints and walking routes to the plan too." },
  { n: "06", no: "Buffer", en: "Contingency", noText: "Legg inn en reserve til prisendringer, ekstra transport og spontane valg. Bufferen er ikke et mål som må brukes opp.", enText: "Add a reserve for price changes, extra transport and spontaneous choices. The contingency is not a target that needs to be spent." },
];

const faq = [
  { qNo: "Hvor stor buffer bør vi legge inn?", qEn: "How large should the contingency be?", aNo: "Det avhenger av reisemål og hvor mye som er forhåndsbetalt. Poenget er å ha en synlig reserve som ikke allerede er bundet til planlagte kjøp.", aEn: "It depends on the destination and how much is prepaid. The point is to keep a visible reserve that is not already committed to planned purchases." },
  { qNo: "Hvordan deler en gruppe utgiftene?", qEn: "How should a group split costs?", aNo: "Avtal på forhånd hvilke kostnader som er felles, hvem som legger ut, og når oppgjøret skal skje. Valgfrie aktiviteter bør holdes utenfor fellesbudsjettet.", aEn: "Agree in advance which costs are shared, who pays initially and when everyone settles. Optional activities should remain outside the shared budget." },
  { qNo: "Er den billigste byen alltid billigst totalt?", qEn: "Is the cheapest city always cheapest overall?", aNo: "Nei. En lav flypris kan bli utlignet av dyr flyplasstransport, overnatting eller mat. Sammenlign hele turen, ikke bare den første prisen du ser.", aEn: "No. A low fare may be offset by expensive airport transfers, accommodation or food. Compare the complete trip, not only the first price you see." },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Budsjett for weekendtur – få oversikt over kostnadene | Flyferie.no" : "Weekend trip budget – estimate the complete cost | Flyferie.no",
    description: no ? "Lag et realistisk budsjett for weekendturen med fly, overnatting, transport, mat, aktiviteter og buffer." : "Create a realistic weekend trip budget covering flights, accommodation, transfers, food, activities and contingency.",
    alternates: { canonical: `/${lang}/guides/weekend-trip-budget`, languages: { "nb-NO": "/no/guides/weekend-trip-budget", en: "/en/guides/weekend-trip-budget", "x-default": "/no/guides/weekend-trip-budget" } },
  };
}

export default async function WeekendTripBudgetPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "HowTo", name: no ? "Slik lager du budsjett for en weekendtur" : "How to build a weekend trip budget", inLanguage: no ? "nb-NO" : "en", step: costs.map((item) => ({ "@type": "HowToStep", name: no ? item.no : item.en, text: no ? item.noText : item.enText })) },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item.qNo : item.qEn, acceptedAnswer: { "@type": "Answer", text: no ? item.aNo : item.aEn } })) },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="border-b border-white/10 bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides`} className="text-sm font-bold">{no ? "Guider" : "Guides"}</Link><Link href={`/${other}/guides/weekend-trip-budget`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>

    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Til alle guider" : "All guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Se hele kostnaden" : "See the complete cost"}</p><h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Budsjett for weekendtur" : "Weekend trip budget"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "En god pris handler om hele turen. Samle fly, overnatting, transport, mat og opplevelser før dere bestemmer dere." : "Good value is about the entire trip. Bring flights, accommodation, transfers, food and experiences together before deciding."}</p></div><div className="rounded-[26px] border border-white/15 bg-white/[.08] p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{no ? "Enkel formel" : "Simple formula"}</p><p className="display mt-3 text-3xl font-bold">{no ? "Faste kostnader + dagsbudsjett + buffer" : "Fixed costs + daily budget + contingency"}</p><p className="mt-4 leading-7 text-white/75">{no ? "Del totalsummen på antall reisende først når alle felleskostnader er med." : "Divide the total by the number of travellers only after every shared cost is included."}</p></div></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Seks budsjettposter" : "Six budget categories"}</p><h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Regn på dette før dere bestiller" : "Estimate these before booking"}</h2><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{costs.map((item) => <article key={item.n} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="inline-flex rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item.n}</span><h3 className="display mt-4 text-3xl font-bold">{no ? item.no : item.en}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item.noText : item.enText}</p></article>)}</div></div></section>

    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Budsjettmal" : "Budget template"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Skriv én sum på hver linje" : "Enter one amount on each line"}</h2></div><div className="grid gap-3 sm:grid-cols-2">{(no ? ["Fly og bagasje", "Overnatting og gebyrer", "Transport begge veier", "Mat og drikke", "Aktiviteter og billetter", "Buffer", "Totalpris", "Pris per person"] : ["Flights and baggage", "Accommodation and fees", "Transfers both ways", "Food and drink", "Activities and tickets", "Contingency", "Total cost", "Cost per person"]).map((item, index) => <div key={item} className={`flex items-center justify-between rounded-[18px] p-4 font-bold shadow-sm ${index > 5 ? "bg-[#f4d7a1]" : "bg-white"}`}><span>{item}</span><span className="text-[#48645f]">_____</span></div>)}</div></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Kort forklart" : "In brief"}</h2><div className="mt-8 space-y-4">{faq.map((item) => <article key={item.qEn} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h3 className="text-lg font-bold">{no ? item.qNo : item.qEn}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item.aNo : item.aEn}</p></article>)}</div></div></section>

    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
