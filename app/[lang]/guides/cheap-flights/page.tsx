import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const methods = [
  {
    number: "01",
    titleNo: "Søk med fleksible datoer",
    titleEn: "Search with flexible dates",
    textNo: "Sammenlign flere avreisedager og returdager når du kan. En liten endring kan gi en annen pris, men velg datoene som faktisk passer reisen.",
    textEn: "Compare several departure and return dates when possible. A small change can produce a different price, but choose dates that genuinely suit the trip.",
  },
  {
    number: "02",
    titleNo: "Sammenlign hele reisen",
    titleEn: "Compare the whole journey",
    textNo: "Se på total reisetid, antall stopp og tidspunkt – ikke bare billettprisen. En lang mellomlanding kan gjøre en kort ferie merkbart dårligere.",
    textEn: "Consider total journey time, connections and departure times—not only the fare. A long layover can significantly reduce a short holiday.",
  },
  {
    number: "03",
    titleNo: "Regn inn bagasje og setevalg",
    titleEn: "Include baggage and seat fees",
    textNo: "Legg til håndbagasje, innsjekket bagasje, setevalg og andre nødvendige tillegg før du sammenligner sluttprisen.",
    textEn: "Add cabin baggage, checked baggage, seat selection and other necessary extras before comparing the final price.",
  },
  {
    number: "04",
    titleNo: "Kontroller flyplassen",
    titleEn: "Check the airport",
    textNo: "En rimelig flyplass langt fra sentrum kan gi ekstra transportkostnader og reisetid. Sammenlign reisen fra dør til dør.",
    textEn: "A cheaper airport far from the city may add transfer costs and travel time. Compare the journey from door to door.",
  },
  {
    number: "05",
    titleNo: "Les reglene ved separate billetter",
    titleEn: "Understand separate-ticket risks",
    textNo: "Ved separate bestillinger er du ikke nødvendigvis beskyttet dersom det første flyet blir forsinket. Legg inn god margin og forstå ansvaret før kjøp.",
    textEn: "With separate bookings, you may not be protected if the first flight is delayed. Allow sufficient time and understand the responsibility before buying.",
  },
  {
    number: "06",
    titleNo: "Kontroller før betaling",
    titleEn: "Check before payment",
    textNo: "Les navn, datoer, flyplass, bagasje og endringsvilkår én siste gang. Billige billetter kan være dyre å rette etterpå.",
    textEn: "Review names, dates, airports, baggage and change terms one final time. Low fares can be expensive to correct afterwards.",
  },
];

const faq = [
  {
    qNo: "Finnes det én bestemt dag som alltid er billigst å bestille?",
    qEn: "Is there one day that is always cheapest for booking?",
    aNo: "Nei. Prisene endres etter rute, etterspørsel, kapasitet og tidspunkt. Sammenlign flere datoer fremfor å stole på en fast ukedagsregel.",
    aEn: "No. Prices change with route, demand, capacity and timing. Compare several dates rather than relying on a fixed day-of-the-week rule.",
  },
  {
    qNo: "Bør jeg velge den aller billigste billetten?",
    qEn: "Should I always choose the cheapest ticket?",
    aNo: "Ikke nødvendigvis. Regn inn bagasje, transport til flyplassen, reisetid, mellomlandinger og billettvilkår før du bestemmer deg.",
    aEn: "Not necessarily. Include baggage, airport transfers, journey time, connections and ticket conditions before deciding.",
  },
  {
    qNo: "Er mellomlanding verdt det på en weekendtur?",
    qEn: "Is a connection worthwhile for a weekend trip?",
    aNo: "Ofte er direktefly mer verdt på korte turer fordi dere beholder mer tid på reisemålet. Sammenlign besparelsen med timene dere mister.",
    aEn: "A direct flight is often worth more on a short trip because it preserves time at the destination. Compare the saving with the hours lost.",
  },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Billige flybilletter – slik sammenligner du riktig | Flyferie.no" : "Cheap flights – how to compare fares properly | Flyferie.no",
    description: norwegian
      ? "Sammenlign flypriser med fleksible datoer, total reisetid, bagasje, flyplass og billettvilkår før du bestiller."
      : "Compare flight prices using flexible dates, total journey time, baggage, airports and ticket conditions before booking.",
    alternates: {
      canonical: `/${lang}/guides/cheap-flights`,
      languages: { "nb-NO": "/no/guides/cheap-flights", en: "/en/guides/cheap-flights", "x-default": "/no/guides/cheap-flights" },
    },
  };
}

export default async function CheapFlightsGuidePage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: norwegian ? "Billige flybilletter – slik sammenligner du riktig" : "Cheap flights – how to compare fares properly",
        description: norwegian ? "Flyferies praktiske guide til bedre sammenligning av flybilletter." : "Flyferie's practical guide to comparing flight tickets.",
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
            <Link href={`/${otherLanguage}/guides/cheap-flights`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">{norwegian ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#2d9587]/35 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
            <p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:text-sm">{norwegian ? "Sammenlign mer enn prisen" : "Compare more than the fare"}</p>
            <h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">
              {norwegian ? "Billige flybilletter – slik sammenligner du riktig" : "Cheap flights – how to compare fares properly"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              {norwegian ? "En god flypris handler om mer enn tallet øverst. Bagasje, flyplass, reisetid og vilkår kan endre hva reisen faktisk koster." : "A good flight price is about more than the number at the top. Baggage, airports, journey time and conditions can change the real cost."}
            </p>
          </div>
          <div className="rounded-[26px] border border-white/15 bg-white/[.08] p-6 backdrop-blur-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078]">{norwegian ? "Flyferies regel" : "Flyferie's rule"}</p>
            <p className="display mt-3 text-3xl font-bold">{norwegian ? "Sammenlign dør til dør" : "Compare door to door"}</p>
            <p className="mt-4 leading-7 text-white/75">{norwegian ? "Den beste billetten gir riktig balanse mellom pris, tid og vilkår." : "The best ticket balances price, time and conditions."}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "Før du bestiller" : "Before you book"}</p>
          <h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Seks grep for en bedre sammenligning" : "Six ways to compare more effectively"}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {methods.map((item) => (
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
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e] sm:text-sm">{norwegian ? "Sjekkliste" : "Checklist"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Kontroller dette i søkeresultatet" : "Check these details in the results"}</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {(norwegian
              ? ["Riktig avreise- og ankomstflyplass", "Totalpris for alle reisende", "Bagasje som faktisk er inkludert", "Reisetid og lengde på mellomlandinger", "Regler for endring og avbestilling", "Transportkostnad til og fra flyplassen"]
              : ["Correct departure and arrival airports", "Total price for every traveller", "Baggage that is actually included", "Journey time and connection length", "Change and cancellation conditions", "Transport costs to and from the airport"]
            ).map((item) => (
              <li key={item} className="flex gap-3 rounded-[18px] bg-white p-4 text-sm font-bold leading-6 shadow-sm"><span className="text-[#e16f59]">✓</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#f4d7a1] p-6 sm:p-10 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#b94f3d]">{norwegian ? "Fly­sammenligning kommer" : "Flight comparison coming soon"}</p>
          <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Skyscanner-søknaden er til behandling" : "The Skyscanner application is under review"}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#365b55]">{norwegian ? "Når samarbeidet er godkjent, legger vi inn en tydelig merket søkelenke her. Rådene i guiden er uavhengige av hvilken søketjeneste eller hvilket flyselskap du bruker." : "Once the partnership is approved, a clearly labelled search link will be added here. The guidance remains independent of the search service or airline you use."}</p>
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

      <section className="bg-[#f4d7a1] px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[28px] bg-white/70 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d]">{norwegian ? "Neste spørsmål" : "The next question"}</p>
            <h2 className="display mt-3 text-[34px] font-bold leading-tight sm:text-4xl">{norwegian ? "Når bør du faktisk bestille?" : "When should you actually book?"}</h2>
          </div>
          <Link href={`/${lang}/guides/when-to-book-flights`} className="inline-flex w-fit shrink-0 rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white transition hover:bg-[#1e6258]">{norwegian ? "Les bestillingsguiden" : "Read the booking guide"} →</Link>
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
