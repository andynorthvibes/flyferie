import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const principles = [
  { n: "01", no: "Relevans før volum", en: "Relevance before volume", noText: "Vi ønsker å publisere innhold som hjelper med et konkret reisevalg. En guide skal ha en tydelig oppgave og ikke bare eksistere for å fylle søkeresultater.", enText: "We aim to publish content that helps with a specific travel decision. Every guide should have a clear purpose rather than existing merely to fill search results." },
  { n: "02", no: "Praktisk og forståelig", en: "Practical and understandable", noText: "Råd skal være enkle å bruke. Vi forklarer totalpris, vilkår og praktiske konsekvenser fremfor å love at ett valg alltid er best.", enText: "Guidance should be easy to use. We explain total costs, conditions and practical consequences rather than promising that one option is always best." },
  { n: "03", no: "Kilder nær opplysningen", en: "Sources close to the claim", noText: "Når innholdet krever konkrete regler, priser eller vilkår, bør opplysningene kontrolleres hos ansvarlig myndighet, transportselskap eller tjenesteleverandør.", enText: "When content depends on specific rules, prices or terms, information should be checked with the responsible authority, transport company or service provider." },
  { n: "04", no: "Ingen skjult kommersiell påvirkning", en: "No hidden commercial influence", noText: "Et partnerskap skal ikke kjøpe en positiv vurdering. Kommersielle lenker merkes, og leverandørens egne vilkår gjelder alltid for kjøpet.", enText: "A partnership does not buy a positive assessment. Commercial links are labelled, and the provider's own terms always apply to the purchase." },
  { n: "05", no: "Oppdatering når innhold endres", en: "Updates when information changes", noText: "Reiseinformasjon kan bli utdatert. Vi kan oppdatere, presisere eller fjerne innhold når vi oppdager at forholdene har endret seg.", enText: "Travel information can become outdated. We may update, clarify or remove content when we discover that circumstances have changed." },
  { n: "06", no: "Tydelig skille mellom råd og avtale", en: "Clear distinction between guidance and contract", noText: "Flyferie gir generell reiseinformasjon. Billetter, forsikring, leiebil og andre tjenester kjøpes fra den aktuelle leverandøren, som er ansvarlig for avtalen.", enText: "Flyferie provides general travel information. Tickets, insurance, rental cars and other services are purchased from the relevant provider, which is responsible for the contract." },
];

const workflow = [
  { no: "Velg spørsmål", en: "Choose the question", noText: "Hva trenger den reisende faktisk hjelp til?", enText: "What does the traveller genuinely need help with?" },
  { no: "Samle informasjon", en: "Gather information", noText: "Finn nødvendige fakta og relevante forbehold.", enText: "Find the necessary facts and relevant caveats." },
  { no: "Skriv praktisk", en: "Write practically", noText: "Gjør valgene og konsekvensene lette å forstå.", enText: "Make choices and consequences easy to understand." },
  { no: "Kontroller helheten", en: "Review the complete guide", noText: "Se etter uklarheter, overdrevne løfter og utdaterte detaljer.", enText: "Check for ambiguity, exaggerated promises and outdated detail." },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Redaksjonelle retningslinjer | Flyferie.no" : "Editorial policy | Flyferie.no",
    description: no ? "Slik arbeider Flyferie med reiseinnhold, kildebruk, oppdateringer, annonselenker og uavhengige vurderinger." : "How Flyferie approaches travel content, sources, updates, affiliate links and independent editorial judgement.",
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

    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="relative mx-auto max-w-7xl"><Link href={`/${lang}/about`} className="text-sm font-bold text-[#ffd078]">← {no ? "Til Om Flyferie" : "About Flyferie"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Åpent og tydelig" : "Open and transparent"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Redaksjonelle retningslinjer" : "Editorial policy"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Dette er prinsippene vi ønsker at Flyferies reisemål, guider og kommersielle samarbeid skal følge." : "These are the principles we want Flyferie's destinations, guides and commercial partnerships to follow."}</p></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Våre prinsipper" : "Our principles"}</p><h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Seks regler for bedre reiseinnhold" : "Six rules for better travel content"}</h2><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{principles.map((item) => <article key={item.n} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="inline-flex rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item.n}</span><h3 className="display mt-4 text-3xl font-bold">{no ? item.no : item.en}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item.noText : item.enText}</p></article>)}</div></div></section>

    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Arbeidsflyt" : "Workflow"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Fra reisefråsmål til publisert guide" : "From travel question to published guide"}</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{workflow.map((item, index) => <article key={item.en} className="rounded-[22px] bg-white p-6 shadow-sm"><span className="text-xs font-bold text-[#e16f59]">0{index + 1}</span><h3 className="mt-3 text-xl font-bold">{no ? item.no : item.en}</h3><p className="mt-3 text-sm leading-6 text-[#48645f]">{no ? item.noText : item.enText}</p></article>)}</div></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2"><article className="rounded-[28px] bg-[#f4d7a1] p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d]">{no ? "Annonselenker" : "Affiliate links"}</p><h2 className="display mt-3 text-3xl font-bold">{no ? "Inntekt skal ikke overstyre rådet" : "Revenue should not override the guidance"}</h2><p className="mt-4 leading-7 text-[#365b55]">{no ? "Flyferie kan motta provisjon fra enkelte tydelig merkede lenker. Partnerstatus skal ikke avgjøre om et reisemål eller råd er relevant, og sluttprisen og vilkårene må alltid kontrolleres hos leverandøren." : "Flyferie may receive commission from selected, clearly labelled links. Partner status should not determine whether a destination or piece of guidance is relevant, and final prices and terms must always be checked with the provider."}</p></article><article className="rounded-[28px] bg-[#173f39] p-7 text-white sm:p-9"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{no ? "Rettelser" : "Corrections"}</p><h2 className="display mt-3 text-3xl font-bold">{no ? "Reiseinformasjon endrer seg" : "Travel information changes"}</h2><p className="mt-4 leading-7 text-white/75">{no ? "Ingen reiseside er feilfri. Når vi blir oppmerksomme på en vesentlig feil eller endring, ønsker vi å rette, presisere eller fjerne opplysningen." : "No travel website is error-free. When we become aware of a material error or change, we aim to correct, clarify or remove the information."}</p></article></div></section>

    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
