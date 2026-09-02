import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const steps = [
  { n: "01", no: "Finn datoen før byen", en: "Choose the date before the city", noText: "Be alle svare på noen få konkrete helger med en tydelig frist. Når datoen er låst, kan gruppen sammenligne realistiske fly og priser.", enText: "Ask everyone to respond to a few specific weekends by a clear deadline. Once the date is fixed, the group can compare realistic flights and prices." },
  { n: "02", no: "Avtal en prisramme", en: "Agree on a price range", noText: "Bestem både ønsket nivå og absolutt maksimum per person. Regn med fly, overnatting og nødvendig transport – ikke bare billetten.", enText: "Set both a preferred range and an absolute maximum per person. Include flights, accommodation and essential transport—not only the ticket." },
  { n: "03", no: "Velg reisemål med enkel avstemning", en: "Choose the destination with a simple vote", noText: "La arrangøren presentere tre gjennomførbare alternativer med totalpris og flytider. Stem én gang og stå ved resultatet.", enText: "Let the organiser present three workable options with total cost and flight times. Vote once and accept the result." },
  { n: "04", no: "Fordel rom og senger tidlig", en: "Allocate rooms and beds early", noText: "Avklar enkeltrom, dobbeltrom, deling og eventuelle ekstrasenger før overnattingen bestilles. Ulik standard bør kunne gi ulik pris.", enText: "Clarify single rooms, double rooms, sharing and extra beds before booking accommodation. Different standards may justify different prices." },
  { n: "05", no: "Bestem hvordan dere betaler", en: "Decide how payments work", noText: "Avtal hvem som legger ut, når alle skal betale og hvilke kostnader som deles likt. Før en enkel oversikt som hele gruppen kan se.", enText: "Agree who pays initially, when everyone transfers funds and which costs are split equally. Keep a simple record visible to the whole group." },
  { n: "06", no: "Lag rom for ulike ønsker", en: "Allow different preferences", noText: "Planlegg noen felles høydepunkter, men ikke krev at alle deltar på alt. En god gruppetur tåler at reisefølget deler seg noen timer.", enText: "Plan a few shared highlights without requiring everyone to join everything. A good group trip allows travellers to split up for a few hours." },
];

const roles = [
  { no: "Koordinator", en: "Coordinator", noText: "Holder oversikt over beslutninger og frister.", enText: "Tracks decisions and deadlines." },
  { no: "Bestiller", en: "Booker", noText: "Kontrollerer navn og gjennomfører fellesbestillinger.", enText: "Checks names and completes shared bookings." },
  { no: "Økonomiansvarlig", en: "Budget lead", noText: "Fører utlegg, innbetalinger og felleskostnader.", enText: "Tracks expenses, transfers and shared costs." },
  { no: "Aktivitetsansvarlig", en: "Activity lead", noText: "Samler ønsker og reserverer det viktigste.", enText: "Collects preferences and reserves the essentials." },
];

const faq = [
  { qNo: "Bør én person bestille fly for alle?", qEn: "Should one person book flights for everyone?", aNo: "Det kan gjøre bestillingen enklere, men alle må først godkjenne pris, flytider og navn. Bestilleren bør kontrollere opplysningene direkte mot gyldig legitimasjon.", aEn: "It can simplify the booking, but everyone should first approve the price, flight times and names. The booker should verify details directly against valid identification." },
  { qNo: "Skal alle betale like mye for overnatting?", qEn: "Should everyone pay the same for accommodation?", aNo: "Ikke nødvendigvis. Hvis noen får enkeltrom eller bedre rom, kan gruppen avtale en annen fordeling. Det viktigste er at modellen bestemmes før bestilling.", aEn: "Not necessarily. If someone gets a single or better room, the group may agree on a different split. The important thing is to decide before booking." },
  { qNo: "Hva gjør vi når noen trekker seg?", qEn: "What happens if someone withdraws?", aNo: "Avtal på forhånd at hver deltaker er ansvarlig for sin del av ikke-refunderbare bestillinger, med mindre gruppen finner en erstatter eller leverandøren refunderer.", aEn: "Agree in advance that each traveller is responsible for their share of non-refundable bookings unless the group finds a replacement or the provider issues a refund." },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Tur med gjengen – slik planlegger dere gruppereisen | Flyferie.no" : "Trip with friends – how to plan group travel | Flyferie.no",
    description: no ? "Planlegg weekendtur med gjengen: dato, budsjett, reisemål, romfordeling, betaling, ansvar og aktiviteter." : "Plan a weekend trip with friends: dates, budget, destination, room allocation, payments, responsibilities and activities.",
    alternates: { canonical: `/${lang}/guides/group-trip`, languages: { "nb-NO": "/no/guides/group-trip", en: "/en/guides/group-trip", "x-default": "/no/guides/group-trip" } },
  };
}

export default async function GroupTripPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "HowTo", name: no ? "Slik planlegger dere tur med gjengen" : "How to plan a trip with friends", inLanguage: no ? "nb-NO" : "en", step: steps.map((item) => ({ "@type": "HowToStep", name: no ? item.no : item.en, text: no ? item.noText : item.enText })) },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: no ? item.qNo : item.qEn, acceptedAnswer: { "@type": "Answer", text: no ? item.aNo : item.aEn } })) },
  ] };

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="border-b border-white/10 bg-[#102f2b] text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href={`/${lang}`}><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" /></Link><div className="flex items-center gap-4"><Link href={`/${lang}/guides`} className="text-sm font-bold">{no ? "Guider" : "Guides"}</Link><Link href={`/${other}/guides/group-trip`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></div></header>

    <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28"><div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" /><div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#2d9587]/35 blur-3xl" /><div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Til alle guider" : "All guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Weekend med gjengen" : "Weekend with friends"}</p><h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Slik planlegger dere tur med gjengen" : "How to plan a trip with friends"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Færre endeløse gruppemeldinger. Flere tydelige valg. Og en tur alle faktisk har råd og lyst til å bli med på." : "Fewer endless group messages. More clear decisions. And a trip everyone can genuinely afford and enjoy."}</p></div><div className="rounded-[26px] border border-white/15 bg-white/[.08] p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{no ? "Grupperegel nummer én" : "Group rule number one"}</p><p className="display mt-3 text-3xl font-bold">{no ? "Ingen bestilling uten tydelig ja" : "No booking without a clear yes"}</p><p className="mt-4 leading-7 text-white/75">{no ? "Alle skal ha godkjent pris, dato og hovedvilkår før noen trykker betal." : "Everyone should approve the price, date and main conditions before anyone pays."}</p></div></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Fra gruppechat til avreise" : "From group chat to departure"}</p><h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Seks steg til en enklere gruppetur" : "Six steps to easier group travel"}</h2><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map((item) => <article key={item.n} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7"><span className="inline-flex rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item.n}</span><h3 className="display mt-4 text-3xl font-bold">{no ? item.no : item.en}</h3><p className="mt-4 leading-7 text-[#48645f]">{no ? item.noText : item.enText}</p></article>)}</div></div></section>

    <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Del på jobben" : "Share the work"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Fire små roller er bedre enn én utslitt arrangør" : "Four small roles beat one exhausted organiser"}</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{roles.map((role) => <article key={role.en} className="rounded-[22px] bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">{no ? role.no : role.en}</h3><p className="mt-3 text-sm leading-6 text-[#48645f]">{no ? role.noText : role.enText}</p></article>)}</div></div></section>

    <section className="px-5 py-12 sm:py-16 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Vanlige spørsmål" : "Frequently asked questions"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Kort forklart" : "In brief"}</h2><div className="mt-8 space-y-4">{faq.map((item) => <article key={item.qEn} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm"><h3 className="text-lg font-bold">{no ? item.qNo : item.qEn}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item.aNo : item.aEn}</p></article>)}</div></div></section>

    <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" /><p className="text-sm">© 2026 Flyferie.no · {no ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
  </main>;
}
