import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const principles = [
  { n: "01", no: "Håndplukket innhold", en: "Handpicked content", noText: "Vi velger ut reisemål, temaer og tjenester som passer Flyferies profil og som kan være relevante for leserne våre.", enText: "We select destinations, topics and services that suit Flyferie's profile and may be relevant to our readers." },
  { n: "02", no: "Praktisk og forståelig", en: "Practical and understandable", noText: "Guidene skal gjøre planleggingen enklere og trekke frem forhold som er nyttige å kontrollere før bestilling.", enText: "Our guides aim to make planning easier and highlight details worth checking before booking." },
  { n: "03", no: "Nyttig informasjon", en: "Useful information", noText: "Vi forsøker å få frem opplysninger om blant annet pris, beliggenhet, transport og sentrale vilkår når de er relevante.", enText: "We aim to highlight information such as price, location, transport and key conditions when relevant." },
  { n: "04", no: "Anbefalinger og samarbeid", en: "Recommendations and partnerships", noText: "Utvalget kan inkludere kommersielle samarbeid og er ikke en fullstendig rangering av alle tilgjengelige alternativer. Slike lenker merkes.", enText: "Our selection may include commercial partnerships and is not a complete ranking of every available option. Such links are labelled." },
  { n: "05", no: "Innhold kan oppdateres", en: "Content may be updated", noText: "Reiseinformasjon kan endres. Vi kan oppdatere, presisere eller fjerne innhold når det er nødvendig.", enText: "Travel information can change. We may update, clarify or remove content when necessary." },
  { n: "06", no: "Leverandørens vilkår gjelder", en: "The provider's terms apply", noText: "Billetter, hotell, forsikring, leiebil og andre tjenester kjøpes fra leverandøren. Kontroller alltid oppdatert pris og vilkår før bestilling.", enText: "Tickets, hotels, insurance, rental cars and other services are purchased from the provider. Always check current prices and terms before booking." },
];

const workflow = [
  { no: "Velg idé", en: "Choose the idea", noText: "Finn et reisemål eller tema som passer Flyferie.", enText: "Find a destination or topic that suits Flyferie." },
  { no: "Samle informasjon", en: "Gather information", noText: "Finn nyttige opplysninger og relevante forbehold.", enText: "Find useful information and relevant caveats." },
  { no: "Lag anbefalingen", en: "Build the recommendation", noText: "Presenter et håndplukket utvalg på en enkel måte.", enText: "Present a handpicked selection in a simple way." },
  { no: "Se over innholdet", en: "Review the content", noText: "Se etter uklarheter og detaljer som bør presiseres.", enText: "Check for ambiguity and details that need clarification." },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Flyferies innhold og anbefalinger | Flyferie.no" : "Flyferie's content and recommendations | Flyferie.no",
    description: no ? "Slik arbeider Flyferie med håndplukkede reisemål, anbefalinger, oppdateringer og kommersielle samarbeid." : "How Flyferie approaches handpicked destinations, recommendations, updates and commercial partnerships.",
    alternates: { canonical: `/${lang}/editorial-policy`, languages: { "nb-NO": "/no/editorial-policy", en: "/en/editorial-policy", "x-default": "/no/editorial-policy" } },
  };
}

export default async function EditorialPolicyPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <header className="border-b border-white/10 bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/about`} className="text-sm font-bold">{no ? "Om Flyferie" : "About"}</Link><Link href={`/${other}/editorial-policy`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>

    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-7xl"><Link href={`/${lang}/about`} className="text-sm font-bold text-[#ffd078]">← {no ? "Til Om Flyferie" : "About Flyferie"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Slik arbeider vi" : "How we work"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Flyferies innhold og anbefalinger" : "Flyferie's content and recommendations"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Flyferie presenterer et håndplukket utvalg av reisemål, guider og tjenester. Her forklarer vi de generelle prinsippene bak innholdet." : "Flyferie presents a handpicked selection of destinations, guides and services. Here we explain the general principles behind our content."}</p></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Våre prinsipper" : "Our principles"}</p><h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Slik presenterer vi innholdet" : "How we present our content"}</h2><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{principles.map((item) => <article key={item.n} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="inline-flex rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item.n}</span><h3 className="display mt-4 text-3xl font-bold">{no ? item.no : item.en}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item.noText : item.enText}</p></article>)}</div></div></section>

    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Fra idé til guide" : "From idea to guide"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Slik bygger vi opp innholdet" : "How we shape the content"}</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{workflow.map((item, index) => <article key={item.en} className="rounded-[22px] bg-white p-6 shadow-sm"><span className="text-xs font-bold text-[#e16f59]">0{index + 1}</span><h3 className="mt-3 text-xl font-bold">{no ? item.no : item.en}</h3><p className="mt-3 text-sm leading-6 text-[#48645f]">{no ? item.noText : item.enText}</p></article>)}</div></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2"><article className="rounded-[28px] bg-[#f4d7a1] p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d]">{no ? "Anbefalinger og samarbeid" : "Recommendations and partnerships"}</p><h2 className="display mt-3 text-3xl font-bold">{no ? "Et håndplukket utvalg" : "A handpicked selection"}</h2><p className="mt-4 leading-7 text-[#365b55]">{no ? "Flyferie dekker ikke nødvendigvis alle leverandører eller rangerer hele markedet. Noen anbefalinger er del av kommersielle samarbeid der Flyferie kan motta provisjon. Slike lenker merkes, og oppdatert pris og vilkår må kontrolleres hos leverandøren." : "Flyferie does not necessarily cover every provider or rank the entire market. Some recommendations are part of commercial partnerships through which Flyferie may receive commission. Such links are labelled, and current prices and terms must be checked with the provider."}</p></article><article className="rounded-[28px] bg-[#173f39] p-7 text-white sm:p-9"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{no ? "Oppdateringer" : "Updates"}</p><h2 className="display mt-3 text-3xl font-bold">{no ? "Reiseinformasjon endrer seg" : "Travel information changes"}</h2><p className="mt-4 leading-7 text-white/75">{no ? "Priser, rutetider, regler og vilkår kan endres. Kontroller derfor alltid viktig informasjon hos leverandøren før du bestiller eller reiser." : "Prices, schedules, rules and conditions may change. Always confirm important information with the provider before booking or travelling."}</p></article></div></section>

    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
