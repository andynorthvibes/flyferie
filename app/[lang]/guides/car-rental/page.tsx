import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const checks = [
  {
    number: "01",
    titleNo: "Se på totalprisen",
    titleEn: "Compare the total price",
    textNo: "Den laveste dagsprisen er ikke alltid billigst. Kontroller hva som er inkludert, hvilke avgifter som betales ved henting og om ekstra sjåfør koster mer.",
    textEn: "The lowest daily rate is not always the cheapest. Check what is included, which fees are payable at collection and whether an additional driver costs extra.",
  },
  {
    number: "02",
    titleNo: "Forstå forsikringen",
    titleEn: "Understand the insurance",
    textNo: "Les hva grunnforsikringen dekker, hvor høy egenandelen er og hvilke skader som eventuelt er unntatt. Sammenlign dekningen før du kjøper tillegg.",
    textEn: "Read what the basic insurance covers, the size of the excess and which damage may be excluded. Compare the cover before buying extras.",
  },
  {
    number: "03",
    titleNo: "Sjekk depositumet",
    titleEn: "Check the deposit",
    textNo: "Utleieselskapet kan reservere et betydelig beløp på kortet. Kontroller beløpet, kortkravene og at hovedsjåføren har riktig betalingskort.",
    textEn: "The rental company may reserve a substantial amount on the card. Check the amount, card requirements and that the main driver has the correct payment card.",
  },
  {
    number: "04",
    titleNo: "Velg riktig drivstoffregel",
    titleEn: "Choose the right fuel policy",
    textNo: "Full-til-full er ofte enklest å kontrollere: bilen hentes med full tank og leveres tilbake full. Les vilkårene og ta vare på siste kvittering.",
    textEn: "Full-to-full is often the easiest policy to verify: collect the car full and return it full. Read the terms and keep the final fuel receipt.",
  },
  {
    number: "05",
    titleNo: "Kontroller hentestedet",
    titleEn: "Confirm the collection point",
    textNo: "Et kontor på flyplassen kan være inne i terminalen eller kreve transport. Se åpningstider, instruksjoner og kostnader ved sen ankomst.",
    textEn: "An airport location may be inside the terminal or require a shuttle. Check opening hours, collection instructions and charges for late arrival.",
  },
  {
    number: "06",
    titleNo: "Dokumenter bilen",
    titleEn: "Document the car",
    textNo: "Fotografer bilen fra alle sider ved henting og levering. Sørg for at eksisterende skader står i skjemaet før dere kjører.",
    textEn: "Photograph the car from every side at collection and return. Make sure existing damage is recorded before driving away.",
  },
];

const faq = [
  {
    qNo: "Trenger jeg kredittkort for å leie bil?",
    qEn: "Do I need a credit card to rent a car?",
    aNo: "Kravene varierer. Mange utleiere krever kredittkort i hovedsjåførens navn for depositum, mens enkelte godtar andre kort. Kontroller alltid vilkårene for den konkrete bilen.",
    aEn: "Requirements vary. Many rental companies require a credit card in the main driver's name for the deposit, while some accept other cards. Always check the terms for the specific car.",
  },
  {
    qNo: "Bør jeg bestille leiebil tidlig?",
    qEn: "Should I book a rental car early?",
    aNo: "I populære ferieperioder kan utvalget bli mindre og prisene høyere. Tidlig sammenligning gir flere valgmuligheter, men les avbestillingsvilkårene før du bestiller.",
    aEn: "During popular travel periods, availability may fall and prices may rise. Comparing early gives you more choice, but read the cancellation terms before booking.",
  },
  {
    qNo: "Hva bør jeg sjekke når jeg henter bilen?",
    qEn: "What should I check when collecting the car?",
    aNo: "Kontroller skader, drivstoffnivå, kilometerstand, dekk og nødvendig sikkerhetsutstyr. Ta bilder og be utleieren registrere avvik før avreise.",
    aEn: "Check damage, fuel level, mileage, tyres and required safety equipment. Take photographs and ask the rental company to record discrepancies before departure.",
  },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Leiebil på ferie – dette bør du sjekke | Flyferie.no" : "Renting a car on holiday – what to check | Flyferie.no",
    description: norwegian
      ? "Sjekk totalpris, forsikring, depositum, drivstoffregler og hentested før du bestiller leiebil på ferie."
      : "Check the total price, insurance, deposit, fuel policy and collection point before booking a rental car.",
    alternates: {
      canonical: `/${lang}/guides/car-rental`,
      languages: { "nb-NO": "/no/guides/car-rental", en: "/en/guides/car-rental", "x-default": "/no/guides/car-rental" },
    },
  };
}

export default async function CarRentalGuidePage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: norwegian ? "Leiebil på ferie – dette bør du sjekke" : "Renting a car on holiday – what to check",
        description: norwegian ? "Flyferies praktiske guide til tryggere valg av leiebil." : "Flyferie's practical guide to making a better rental car choice.",
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
            <Link href={`/${otherLanguage}/guides/car-rental`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">{norwegian ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" />
        <div className="absolute -bottom-28 left-1/4 h-80 w-80 rounded-full bg-[#2d9587]/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
            <p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:text-sm">{norwegian ? "Frihet på fire hjul" : "Freedom on four wheels"}</p>
            <h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">
              {norwegian ? "Leiebil på ferie – dette bør du sjekke" : "Renting a car on holiday – what to check"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              {norwegian
                ? "Leiebil kan åpne hele reisemålet, men den billigste prisen i søkeresultatet forteller ikke alt. Sammenlign vilkårene før du bestiller."
                : "A rental car can open up an entire destination, but the cheapest search result does not tell the whole story. Compare the terms before booking."}
            </p>
          </div>
          <div className="rounded-[26px] border border-white/15 bg-white/[.08] p-6 backdrop-blur-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{norwegian ? "Kortversjonen" : "The short version"}</p>
            <p className="display mt-3 text-3xl font-bold">{norwegian ? "Pris + vilkår + depositum" : "Price + terms + deposit"}</p>
            <p className="mt-4 leading-7 text-white/75">{norwegian ? "Se disse tre i sammenheng før du velger bil." : "Consider all three together before choosing a car."}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "Før du bestiller" : "Before you book"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Seks kontroller som kan spare problemer" : "Six checks that can prevent problems"}</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {checks.map((item) => (
              <article key={item.number} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-7">
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
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e] sm:text-sm">{norwegian ? "Ved henting" : "At collection"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Ta fem minutter før dere kjører" : "Take five minutes before driving"}</h2>
            <p className="mt-4 leading-7 text-[#48645f]">{norwegian ? "En rask kontroll ved skranken og bilen gir bedre dokumentasjon dersom noe er uklart ved levering." : "A quick check at the desk and around the car gives you better documentation if anything is unclear on return."}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {(norwegian
              ? ["Få alle eksisterende skader registrert", "Ta bilder og video av hele bilen", "Kontroller drivstoffnivå og kilometerstand", "Finn riktig nødnummer og returadresse", "Prøv lys, viskere og klimaanlegg", "Avklar tidspunkt og rutine for levering"]
              : ["Have all existing damage recorded", "Photograph and film the entire car", "Check fuel level and mileage", "Save the correct emergency number and return address", "Test the lights, wipers and air conditioning", "Confirm the return time and procedure"]
            ).map((item) => (
              <li key={item} className="flex gap-3 rounded-[18px] bg-white p-4 text-sm font-bold leading-6 shadow-sm"><span className="text-[#e16f59]">✓</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#f4d7a1] p-6 sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#b94f3d]">{norwegian ? "Annonse · leiebil" : "Advertisement · car rental"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Sammenlign før du bestemmer deg" : "Compare before you decide"}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#365b55]">{norwegian ? "DiscoverCars samler tilbud fra flere utleieselskaper. Kontroller alltid leverandør, totalpris og vilkår i det konkrete tilbudet før bestilling." : "DiscoverCars compares offers from multiple rental companies. Always check the supplier, total price and terms of the specific offer before booking."}</p>
          </div>
          <a href="https://www.discovercars.com/?a_aid=flyferie" target="_blank" rel="sponsored noopener noreferrer" className="mt-6 inline-flex w-fit rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white transition hover:bg-[#1e6258] lg:mt-0">
            {norwegian ? "Sammenlign leiebiler" : "Compare rental cars"} →
          </a>
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
