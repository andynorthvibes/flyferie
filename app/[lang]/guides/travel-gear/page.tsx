import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const sections = [
  {
    number: "01",
    titleNo: "Bagasje som passer reisen",
    titleEn: "Luggage that suits the trip",
    introNo: "Velg størrelse etter reisens lengde og hvordan dere skal bevege dere – ikke bare etter hvor mye dere kan få med.",
    introEn: "Choose the size for the length of the trip and how you will move around—not simply for how much you can pack.",
    tipsNo: ["Myk bag er enklere i bil og båt", "Kabinbagasje sparer tid på korte turer", "Sjekk flyselskapets mål før kjøp"],
    tipsEn: ["Soft bags are easier in cars and boats", "Cabin luggage saves time on short trips", "Check the airline's dimensions before buying"],
    partnerNo: "Kofferter, weekendbager og organisering",
    partnerEn: "Suitcases, weekend bags and organisers",
  },
  {
    number: "02",
    titleNo: "Sko og klær dere faktisk bruker",
    titleEn: "Footwear and clothing you will actually use",
    introNo: "Gode reisesko skal tåle en lang dag uten å føles som turutstyr på restaurant. Til naturreiser må været få bestemme.",
    introEn: "Good travel shoes should handle a long day without feeling like hiking gear at dinner. For outdoor trips, let the weather decide.",
    tipsNo: ["Gå inn nye sko før avreise", "Pakk lag fremfor tunge enkeltplagg", "Velg én jakke som dekker flere behov"],
    tipsEn: ["Break in new shoes before departure", "Pack layers rather than single heavy garments", "Choose one jacket that covers several needs"],
    partnerNo: "Reisesko, skalljakker og friluftsutstyr",
    partnerEn: "Travel shoes, shell jackets and outdoor gear",
  },
  {
    number: "03",
    titleNo: "eSIM og mobildata",
    titleEn: "eSIMs and mobile data",
    introNo: "Et eSIM kan gi data fra dere lander, uten å bytte fysisk SIM-kort. Sammenlign dekning, datamengde og varighet før kjøp.",
    introEn: "An eSIM can provide data from the moment you land, without swapping a physical SIM. Compare coverage, allowance and duration before buying.",
    tipsNo: ["Kontroller at mobilen støtter eSIM", "Installer før avreise, aktiver ved ankomst", "Behold hovednummeret for viktige meldinger"],
    tipsEn: ["Confirm that your phone supports eSIM", "Install before departure and activate on arrival", "Keep your main number available for important messages"],
    partnerNo: "Datapakker for Europa og resten av verden",
    partnerEn: "Data packages for Europe and worldwide travel",
  },
  {
    number: "04",
    titleNo: "Digital trygghet på tur",
    titleEn: "Digital safety while travelling",
    introNo: "Offentlig Wi-Fi og mange innlogginger gjør reisen mer sårbar. Oppdater enhetene, bruk sterke passord og unngå sensitive handlinger på ukjente nettverk.",
    introEn: "Public Wi-Fi and frequent logins make travel more vulnerable. Update devices, use strong passwords and avoid sensitive activity on unknown networks.",
    tipsNo: ["Aktiver tofaktor før avreise", "Last ned billetter og dokumenter offline", "Bruk mobilnett ved betaling og BankID"],
    tipsEn: ["Enable two-factor authentication before travelling", "Save tickets and documents offline", "Use mobile data for payments and banking"],
    partnerNo: "VPN, passordhåndtering og sikker lagring",
    partnerEn: "VPNs, password management and secure storage",
  },
  {
    number: "05",
    titleNo: "Kamera og strøm",
    titleEn: "Cameras and power",
    introNo: "Det beste kameraet er det dere faktisk tar med. For de fleste holder mobilen, mens lengre turer kan forsvare et lett systemkamera.",
    introEn: "The best camera is the one you actually bring. A phone is enough for most travellers, while longer trips may justify a lightweight camera system.",
    tipsNo: ["Ta med riktig reiseadapter", "Ha powerbank i håndbagasjen", "Sikkerhetskopier bilder underveis"],
    tipsEn: ["Bring the correct travel adaptor", "Keep power banks in cabin baggage", "Back up photos as you travel"],
    partnerNo: "Kamera, adaptere, ladere og powerbank",
    partnerEn: "Cameras, adaptors, chargers and power banks",
  },
  {
    number: "06",
    titleNo: "Småting som gjør stor forskjell",
    titleEn: "Small items that make a big difference",
    introNo: "Pakkeposer, en tom vannflaske og en liten pose til kabler skaper mer orden enn enda en stor bag.",
    introEn: "Packing cubes, an empty water bottle and a small cable pouch create more order than another large bag.",
    tipsNo: ["Samle kabler på ett sted", "Ha medisiner i håndbagasjen", "Pakk et lite skift lett tilgjengelig"],
    tipsEn: ["Keep cables together", "Carry medication in cabin baggage", "Pack one easy-to-reach change of clothes"],
    partnerNo: "Pakkeposer, flasker og praktisk småutstyr",
    partnerEn: "Packing cubes, bottles and practical accessories",
  },
  {
    number: "07",
    titleNo: "Tog og transport videre",
    titleEn: "Trains and onward transport",
    introNo: "Tog kan være den beste fortsettelsen etter flyet – særlig i Norge og mellom europeiske byer. Sammenlign total reisetid, ikke bare billettpris.",
    introEn: "Rail can be the best continuation after a flight—especially in Norway and between European cities. Compare total journey time, not only ticket price.",
    tipsNo: ["Sjekk om billetten må reserveres", "Legg inn margin ved bytte fra fly", "Sammenlign sentrum-til-sentrum"],
    tipsEn: ["Check whether seats require reservations", "Allow time when connecting from a flight", "Compare city-centre to city-centre"],
    partnerNo: "Tog, flytog og transport mellom byer",
    partnerEn: "Rail, airport trains and intercity transport",
  },
  {
    number: "08",
    titleNo: "Ferger, øyhopping og cruise",
    titleEn: "Ferries, island hopping and cruises",
    introNo: "Båt kan være både transport og opplevelse – fra norske fjorder og Hurtigruten til ferger og øyhopping i Thailand.",
    introEn: "A boat can be both transport and experience—from Norwegian fjords and coastal voyages to ferries and island hopping in Thailand.",
    tipsNo: ["Kontroller hvilken havn båten bruker", "Bestill populære avganger tidlig", "Les bagasje- og værregler"],
    tipsEn: ["Confirm the exact departure port", "Book popular departures early", "Read luggage and weather policies"],
    partnerNo: "Ferger, kystreiser og øytransport",
    partnerEn: "Ferries, coastal voyages and island transport",
  },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Reiseutstyr og nyttige tjenester på tur | Flyferie.no" : "Travel gear and useful services | Flyferie.no",
    description: norwegian
      ? "Praktiske råd om bagasje, eSIM, reisesko, kamera, digital sikkerhet, tog og ferger."
      : "Practical guidance on luggage, eSIMs, travel shoes, cameras, digital safety, trains and ferries.",
    alternates: {
      canonical: `/${lang}/guides/travel-gear`,
      languages: { "nb-NO": "/no/guides/travel-gear", en: "/en/guides/travel-gear", "x-default": "/no/guides/travel-gear" },
    },
  };
}

export default async function TravelGearPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: norwegian ? "Reiseutstyr og nyttige tjenester på tur" : "Travel gear and useful services",
    description: norwegian ? "Flyferies praktiske guide til smartere pakking og enklere reiser." : "Flyferie's practical guide to smarter packing and easier travel.",
    inLanguage: norwegian ? "nb-NO" : "en",
    publisher: { "@type": "Organization", name: "Flyferie.no" },
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
            <Link href={`/${otherLanguage}/guides/travel-gear`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">{norwegian ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#2d9587]/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
            <p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:text-sm">{norwegian ? "Pakk smartere · reis enklere" : "Pack smarter · travel easier"}</p>
            <h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{norwegian ? "Reiseutstyr og nyttige tjenester på tur" : "Travel gear and useful services"}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              {norwegian ? "Ikke alt reiseutstyr fortjener plass i bagasjen. Her samler vi valgene som gjør turen enklere – før avreise, underveis og når dere skal videre." : "Not every travel product deserves space in your bag. Here are the choices that make a journey easier—before departure, along the way and when moving on."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {sections.slice(0, 4).map((section) => (
              <div key={section.number} className="rounded-[20px] border border-white/15 bg-white/[.07] p-5 backdrop-blur-sm">
                <p className="text-xs font-bold text-[#ffd078]">{section.number}</p>
                <p className="mt-3 text-sm font-bold">{norwegian ? section.titleNo : section.titleEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#17332f]/10 px-5 py-10 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "Åtte praktiske områder" : "Eight practical areas"}</p>
            <h2 className="display mt-3 text-[36px] font-bold leading-tight sm:text-5xl">{norwegian ? "Velg etter reisen – ikke reklamen" : "Choose for the trip—not the advert"}</h2>
          </div>
          <p className="max-w-2xl leading-7 text-[#48645f] lg:justify-self-end">
            {norwegian ? "Vi anbefaler bare løsninger som passer reisemålet og måten dere reiser på. Pris, vilkår og behov skal alltid vurderes før merkevaren." : "We only recommend solutions that suit the destination and the way you travel. Price, terms and genuine need should always come before the brand."}
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:gap-6">
          {sections.map((section) => {
            const tips = norwegian ? section.tipsNo : section.tipsEn;
            return (
              <article key={section.number} className="flex flex-col rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:rounded-[30px] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="display max-w-lg text-3xl font-bold leading-tight">{norwegian ? section.titleNo : section.titleEn}</h2>
                  <span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">{section.number}</span>
                </div>
                <p className="mt-4 leading-7 text-[#48645f]">{norwegian ? section.introNo : section.introEn}</p>
                <ul className="mt-5 space-y-3 border-t border-[#17332f]/10 pt-5">
                  {tips.map((tip) => <li key={tip} className="flex gap-3 text-sm leading-6"><span className="font-bold text-[#e16f59]">✓</span><span>{tip}</span></li>)}
                </ul>
                <div className="mt-auto pt-6">
                  <div className="rounded-[18px] bg-[#eef5f1] p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#1e776e]">{norwegian ? "Utvalgte anbefalinger kommer" : "Selected recommendations coming soon"}</p>
                    <p className="mt-2 text-sm font-bold">{norwegian ? section.partnerNo : section.partnerEn}</p>
                  </div>
                  {section.number === "03" && (
                    <Link href={`/${lang}/guides/esim`} className="mt-4 inline-flex text-sm font-bold text-[#1e776e] underline decoration-[#1e776e]/35 underline-offset-4">
                      {norwegian ? "Les Flyferies eSIM-guide" : "Read Flyferie's eSIM guide"} →
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f4d7a1] px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d] sm:text-sm">{norwegian ? "Flyferies prinsipp" : "Flyferie's principle"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Nyttig først. Kommersielt etterpå." : "Useful first. Commercial second."}</h2>
          </div>
          <div className="rounded-[24px] bg-white/65 p-6 sm:p-8">
            <p className="leading-7 text-[#365b55]">
              {norwegian ? "Når vi legger inn partnerlenker, merker vi dem tydelig. Flyferie kan motta provisjon dersom du bestiller gjennom enkelte lenker, uten at det øker prisen din. Det påvirker ikke hvilke løsninger vi mener passer reisen best." : "When partner links are added, we label them clearly. Flyferie may receive commission if you book through selected links, without increasing your price. This does not determine which solutions we believe best suit the journey."}
            </p>
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
