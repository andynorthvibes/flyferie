import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const steps = [
  {
    number: "01",
    titleNo: "Sjekk at mobilen støtter eSIM",
    titleEn: "Check that your phone supports eSIM",
    textNo: "Se etter eSIM eller «legg til eSIM» i mobilinnstillingene. Kontroller også at telefonen ikke er operatørlåst.",
    textEn: "Look for eSIM or ‘add eSIM’ in your phone settings. Also confirm that the device is not locked to one network.",
  },
  {
    number: "02",
    titleNo: "Velg land, region og datamengde",
    titleEn: "Choose the country, region and data allowance",
    textNo: "En landpakke kan være rimeligst for ett reisemål. En regional pakke er ofte enklere når turen går gjennom flere land.",
    textEn: "A country plan may be best for one destination. A regional plan is often simpler when travelling through several countries.",
  },
  {
    number: "03",
    titleNo: "Installer før avreise",
    titleEn: "Install before departure",
    textNo: "Installer mens du har stabilt internett hjemme, men vent med å aktivere mobildata på eSIM-et til reisen starter dersom leverandørens vilkår sier det.",
    textEn: "Install while you have a stable connection at home, but wait to enable mobile data on the eSIM until the trip begins if the provider's terms require it.",
  },
  {
    number: "04",
    titleNo: "Behold hovednummeret",
    titleEn: "Keep your primary number",
    textNo: "Du kan vanligvis beholde det vanlige SIM-kortet aktivt for meldinger og samtaler, mens eSIM-et brukes til mobildata.",
    textEn: "You can usually keep your normal SIM active for messages and calls while using the eSIM for mobile data.",
  },
];

const faq = [
  {
    qNo: "Hva er et eSIM?",
    qEn: "What is an eSIM?",
    aNo: "Et eSIM er et digitalt SIM-kort som installeres på en kompatibel mobil uten at du må bytte fysisk kort.",
    aEn: "An eSIM is a digital SIM installed on a compatible phone without changing a physical card.",
  },
  {
    qNo: "Kan jeg bruke WhatsApp med det vanlige nummeret mitt?",
    qEn: "Can I keep using WhatsApp with my normal number?",
    aNo: "Ja, WhatsApp-kontoen kan normalt fortsette med det eksisterende nummeret selv om mobildata leveres av et annet eSIM.",
    aEn: "Yes. WhatsApp can normally continue using your existing number even when mobile data comes from another eSIM.",
  },
  {
    qNo: "Når bør jeg aktivere eSIM-et?",
    qEn: "When should I activate the eSIM?",
    aNo: "Det avhenger av leverandørens regler. Noen pakker starter ved første tilkobling i reiselandet, mens andre kan starte ved installasjon. Les aktiveringsvilkårene før du installerer.",
    aEn: "It depends on the provider. Some plans begin with the first connection at the destination, while others may begin on installation. Read the activation terms first.",
  },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "eSIM på ferie – slik får du mobildata på reisen | Flyferie.no" : "Travel eSIM guide – mobile data abroad | Flyferie.no",
    description: norwegian
      ? "Slik velger, installerer og bruker du eSIM på ferie. Sjekk dekning, datamengde, varighet og aktivering før avreise."
      : "How to choose, install and use a travel eSIM. Check coverage, data allowance, validity and activation before departure.",
    alternates: {
      canonical: `/${lang}/guides/esim`,
      languages: { "nb-NO": "/no/guides/esim", en: "/en/guides/esim", "x-default": "/no/guides/esim" },
    },
  };
}

export default async function EsimGuidePage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: norwegian ? "eSIM på ferie – slik får du mobildata på reisen" : "Travel eSIM guide – mobile data abroad",
        description: norwegian ? "Flyferies guide til valg, installasjon og bruk av eSIM på reise." : "Flyferie's guide to choosing, installing and using an eSIM while travelling.",
        inLanguage: norwegian ? "nb-NO" : "en",
        publisher: { "@type": "Organization", name: "Flyferie.no" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: norwegian ? item.qNo : item.qEn,
          acceptedAnswer: { "@type": "Answer", text: norwegian ? item.aNo : item.aEn },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <header className="border-b border-white/10 bg-[#102f2b] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
          <Link href={`/${lang}`} aria-label="Flyferie.no – forsiden">
            <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[168px] sm:w-[225px]" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href={`/${lang}/destinations`} className="text-sm font-bold">{norwegian ? "Reisemål" : "Destinations"}</Link>
            <Link href={`/${otherLanguage}/guides/esim`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">{norwegian ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#2d9587]/45 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#f4b860]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <Link href={`/${lang}/guides/travel-gear`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til reiseutstyr" : "Back to travel gear"}</Link>
            <p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:text-sm">{norwegian ? "Mobildata uten fysisk SIM-bytte" : "Mobile data without swapping a SIM"}</p>
            <h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">
              {norwegian ? "eSIM på ferie – slik kommer du på nett" : "Travel eSIM – how to get connected"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              {norwegian ? "Med et eSIM kan du ha mobildata klart når du lander. Sammenlign dekning, datamengde, varighet og aktiveringsregler før du velger." : "An eSIM can provide mobile data as soon as you land. Compare coverage, allowance, validity and activation rules before choosing."}
            </p>
          </div>
          <div className="rounded-[26px] border border-white/15 bg-white/[.08] p-6 backdrop-blur-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{norwegian ? "Sjekk fire ting" : "Check four things"}</p>
            <p className="display mt-3 text-3xl font-bold">{norwegian ? "Dekning · data · dager · aktivering" : "Coverage · data · days · activation"}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "Fra valg til bruk" : "From choosing to using"}</p>
          <h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Slik gjør du det steg for steg" : "How to do it step by step"}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10">
            {steps.map((item) => (
              <article key={item.number} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-8">
                <span className="inline-flex rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{item.number}</span>
                <h2 className="display mt-4 text-3xl font-bold leading-tight">{norwegian ? item.titleNo : item.titleEn}</h2>
                <p className="mt-4 leading-7 text-[#48645f]">{norwegian ? item.textNo : item.textEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf4ef] px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e] sm:text-sm">{norwegian ? "Når du lander" : "When you land"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Velg riktig datalinje" : "Select the correct data line"}</h2>
            <p className="mt-4 leading-7 text-[#48645f]">{norwegian ? "Navnene varierer mellom iPhone og Android, men prinsippet er det samme: eSIM-et brukes til data, og dataroaming aktiveres bare på reise-eSIM-et når leverandøren krever det." : "Menu names vary between iPhone and Android, but the principle is the same: use the eSIM for data and enable data roaming only on the travel eSIM when the provider requires it."}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {(norwegian
              ? ["Slå av dataroaming på hovedabonnementet", "Velg reise-eSIM som mobildatalinje", "Aktiver dataroaming på eSIM ved behov", "Vent noen minutter på lokal tilkobling", "Start mobilen på nytt hvis nettet uteblir", "Ta vare på QR-kode og ordrebekreftelse"]
              : ["Disable data roaming on your main plan", "Select the travel eSIM for mobile data", "Enable roaming on the eSIM if required", "Allow a few minutes for local connection", "Restart the phone if no network appears", "Keep the QR code and order confirmation"]
            ).map((item) => (
              <li key={item} className="flex gap-3 rounded-[18px] bg-white p-4 text-sm font-bold leading-6 shadow-sm"><span className="text-[#e16f59]">✓</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#f4d7a1] p-6 sm:p-10 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#b94f3d]">{norwegian ? "Sammenligning kommer" : "Comparison coming soon"}</p>
          <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Vi venter på riktig samarbeid" : "We are waiting for the right partner"}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#365b55]">{norwegian ? "Flyferie har søkt et eSIM-program. Når det er godkjent, legger vi inn en tydelig merket sammenligningslenke her. Guiden kan brukes uavhengig av hvilken leverandør du velger." : "Flyferie has applied to an eSIM programme. Once approved, a clearly labelled comparison link will be added here. This guide remains useful regardless of provider."}</p>
        </div>
      </section>

      <section className="border-t border-[#17332f]/10 px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "Vanlige spørsmål" : "Frequently asked questions"}</p>
          <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Kort forklart" : "In brief"}</h2>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <article key={item.qEn} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">{norwegian ? item.qNo : item.qEn}</h3>
                <p className="mt-3 leading-7 text-[#48645f]">{norwegian ? item.aNo : item.aEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#102f2b] px-5 py-10 text-white/65">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px] sm:w-[240px]" />
          <p className="text-sm">© 2026 Flyferie.no · {norwegian ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p>
        </div>
      </footer>
    </main>
  );
}
