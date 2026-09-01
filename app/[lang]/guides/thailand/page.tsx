import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinationMedia } from "@/lib/destination-media";

type PageProps = { params: Promise<{ lang: string }> };

const itineraries = [
  {
    nights: "7",
    titleNo: "En effektiv førstereise",
    titleEn: "An efficient first trip",
    splitNo: "3 netter Bangkok + 4 netter Ao Nang",
    splitEn: "3 nights in Bangkok + 4 nights in Ao Nang",
    textNo: "Nok tid til Bangkoks viktigste kontraster og noen hele stranddager med én god båttur fra Ao Nang.",
    textEn: "Enough time for Bangkok's essential contrasts and a few full beach days with one rewarding boat trip from Ao Nang."
  },
  {
    nights: "10",
    titleNo: "Den beste balansen",
    titleEn: "The best balance",
    splitNo: "3 netter Bangkok + 7 netter Ao Nang",
    splitEn: "3 nights in Bangkok + 7 nights in Ao Nang",
    textNo: "Flyferies favoritt for en komplett tur: storby først, deretter tid til strand, Railay, øyhopping og rolige dager.",
    textEn: "Flyferie's favourite for a complete trip: the city first, then time for beaches, Railay, island hopping and slower days."
  },
  {
    nights: "14",
    titleNo: "Thailand uten hastverk",
    titleEn: "Thailand without rushing",
    splitNo: "4 netter Bangkok + 7 netter Ao Nang + 3 fleksible netter",
    splitEn: "4 nights in Bangkok + 7 nights in Ao Nang + 3 flexible nights",
    textNo: "Bruk ekstradagene rundt Krabi, på Railay eller til flere rolige dager. Et godt valg når reisen skal føles som ferie, ikke en sjekkliste.",
    textEn: "Use the extra days around Krabi, on Railay or simply to slow down. A good choice when the journey should feel like a holiday, not a checklist."
  }
];

const stayAreas = [
  { place: "Bangkok", area: "Sukhumvit", no: "Praktisk BTS-tilgang, stort hotellutvalg, restauranter og kveldsaktiviteter.", en: "Convenient BTS access, a wide hotel selection, restaurants and nightlife." },
  { place: "Bangkok", area: "Riverside", no: "Elveutsikt, båter og en roligere hotellopplevelse nær flere severdigheter.", en: "River views, boats and a calmer hotel experience near several attractions." },
  { place: "Ao Nang", area: "Ao Nang Beach", no: "Enklest for første besøk, båter, restauranter og alt innen kort avstand.", en: "The easiest choice for a first visit, with boats, restaurants and everything close by." },
  { place: "Ao Nang", area: "Nopparat Thara", no: "Roligere omgivelser, mer plass og fortsatt kort vei til Ao Nang sentrum.", en: "Quieter surroundings, more space and still close to central Ao Nang." }
];

const thailandMoments = [
  {
    src: "/guides/thailand/bangkok-wat-arun.webp",
    place: "Bangkok",
    altNo: "Wat Arun opplyst ved Chao Phraya-elven i Bangkok",
    altEn: "Wat Arun illuminated beside the Chao Phraya River in Bangkok",
    captionNo: "Wat Arun fra elven etter solnedgang",
    captionEn: "Wat Arun from the river after sunset"
  },
  {
    src: "/guides/thailand/bangkok-river.webp",
    place: "Bangkok",
    altNo: "Elvebåt og Bangkoks skyline langs Chao Phraya",
    altEn: "River boat and Bangkok skyline along the Chao Phraya",
    captionNo: "Chao Phraya binder byen sammen",
    captionEn: "The Chao Phraya connects the city"
  },
  {
    src: "/guides/thailand/ao-nang-beach.webp",
    place: "Ao Nang",
    altNo: "Ao Nang Beach med longtailbåter og kalksteinsklipper",
    altEn: "Ao Nang Beach with long-tail boats and limestone cliffs",
    captionNo: "Kveld ved Ao Nang Beach",
    captionEn: "Evening at Ao Nang Beach"
  },
  {
    src: "/guides/thailand/koh-lao-lading.webp",
    place: "Koh Lao Lading",
    altNo: "Kokosnøtt på stranden ved Koh Lao Lading i Krabi",
    altEn: "Coconut on the beach at Koh Lao Lading in Krabi",
    captionNo: "Et strandstopp på øyturen",
    captionEn: "A beach stop while island hopping"
  },
  {
    src: "/guides/thailand/hong-lagoon.webp",
    place: "Koh Hong",
    altNo: "Innseilingen til Hong Lagoon på Koh Hong i Krabi",
    altEn: "Entrance to Hong Lagoon on Koh Hong in Krabi",
    captionNo: "Innseilingen til Hong Lagoon",
    captionEn: "Entering Hong Lagoon"
  },
  {
    src: "/guides/thailand/railay-cliffs.webp",
    place: "Railay Beach",
    altNo: "Dramatiske kalksteinsklipper ved Railay Beach i Krabi",
    altEn: "Dramatic limestone cliffs at Railay Beach in Krabi",
    captionNo: "Railays klipper sett fra vannet",
    captionEn: "Railay's cliffs seen from the water"
  },
  {
    src: "/guides/thailand/khaothong-hill.webp",
    place: "Krabi",
    altNo: "Utsikt over kalksteinsfjellene fra Khaothong Hill i Krabi",
    altEn: "View across the limestone mountains from Khaothong Hill in Krabi",
    captionNo: "Utsikten fra Khaothong Hill",
    captionEn: "The view from Khaothong Hill"
  },
  {
    src: "/guides/thailand/emerald-pool.webp",
    place: "Krabi",
    altNo: "Det turkise naturbassenget Emerald Pool i Krabi",
    altEn: "The turquoise Emerald Pool natural pool in Krabi",
    captionNo: "En dagstur til Emerald Pool",
    captionEn: "A day trip to Emerald Pool"
  },
  {
    src: "/guides/thailand/phi-phi-beach.webp",
    place: "Phi Phi",
    altNo: "Strand og longtailbåter ved Phi Phi-øyene",
    altEn: "Beach and long-tail boats at the Phi Phi Islands",
    captionNo: "Phi Phi for en lengre øyreise",
    captionEn: "Phi Phi for a longer island journey"
  }
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Opplev Thailand – Bangkok og Ao Nang | Flyferie.no" : "Discover Thailand – Bangkok and Ao Nang | Flyferie.no",
    description: norwegian
      ? "Kombiner Bangkok og Ao Nang. Se forslag til reiselengde, områder å bo i og opplevelser i Krabi."
      : "Combine Bangkok and Ao Nang. Compare trip lengths, places to stay and experiences around Krabi.",
    alternates: {
      canonical: `/${lang}/guides/thailand`,
      languages: { "nb-NO": "/no/guides/thailand", en: "/en/guides/thailand", "x-default": "/no/guides/thailand" }
    }
  };
}

export default async function ThailandPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const bangkok = destinationMedia.bangkok;
  const aoNang = destinationMedia["ao-nang"];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: norwegian ? "Opplev Thailand: Bangkok og Ao Nang" : "Discover Thailand: Bangkok and Ao Nang",
    description: norwegian ? "En kombinasjonsguide til Bangkok, Ao Nang og Krabi." : "A combined guide to Bangkok, Ao Nang and Krabi.",
    inLanguage: norwegian ? "nb-NO" : "en",
    image: bangkok.hero.src,
    publisher: { "@type": "Organization", name: "Flyferie.no" }
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
            <Link href={`/${otherLanguage}/guides/thailand`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">{norwegian ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="relative min-h-[680px] overflow-hidden text-white sm:min-h-[740px]">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative"><Image src={bangkok.hero.src} alt={norwegian ? bangkok.hero.altNo : bangkok.hero.altEn} fill priority sizes="50vw" className="object-cover" /></div>
          <div className="relative"><Image src={aoNang.hero.src} alt={norwegian ? aoNang.hero.altNo : aoNang.hero.altEn} fill priority sizes="50vw" className="object-cover" /></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/78 to-[#102f2b]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/80 via-transparent to-black/10" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-5 py-12 sm:min-h-[740px] sm:items-center sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:mt-10 sm:text-sm">{norwegian ? "Storby og strand på samme reise" : "City and beach in one journey"}</p>
            <h1 className="display mt-3 text-[52px] font-bold leading-[.96] sm:text-7xl lg:text-[90px]">{norwegian ? "Opplev Thailand" : "Discover Thailand"}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85 sm:mt-6 sm:text-xl sm:leading-9">
              {norwegian
                ? "Start blant templene, markedene og bylysene i Bangkok. Fortsett til Ao Nang for strender, kalksteinsklipper og øyene utenfor Krabi."
                : "Begin among Bangkok's temples, markets and city lights. Continue to Ao Nang for beaches, limestone cliffs and the islands off Krabi."}
            </p>
            <a href="#kombinasjonen" className="mt-7 inline-flex rounded-full bg-[#f4b860] px-6 py-3.5 font-bold text-[#17332f] sm:mt-9">{norwegian ? "Planlegg kombinasjonsreisen" : "Plan the combined trip"} →</a>
          </div>
        </div>
      </section>

      <section id="kombinasjonen" className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "To sider av Thailand" : "Two sides of Thailand"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Bangkok først. Ao Nang etterpå." : "Bangkok first. Ao Nang afterwards."}</h2>
            <p className="mt-4 text-lg leading-8 text-[#48645f]">{norwegian ? "Rekkefølgen gir en naturlig overgang fra intens storby til roligere strandliv." : "This order creates a natural transition from an intense city to slower beach days."}</p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
            {[
              { slug: "bangkok", title: "Bangkok", photo: bangkok.hero, nightsNo: "3–4 netter", nightsEn: "3–4 nights", labelNo: "Storbydelen", labelEn: "The city chapter", textNo: "Templer, Chao Phraya-elven, street food, shopping og kvelder med utsikt over byen.", textEn: "Temples, the Chao Phraya River, street food, shopping and evenings overlooking the city." },
              { slug: "ao-nang", title: "Ao Nang", photo: aoNang.hero, nightsNo: "4–7 netter", nightsEn: "4–7 nights", labelNo: "Stranddelen", labelEn: "The beach chapter", textNo: "En praktisk base for Krabis strender, Railay, longtailbåter, øyhopping og rolige dager.", textEn: "A practical base for Krabi's beaches, Railay, long-tail boats, island hopping and slower days." }
            ].map((place) => (
              <article key={place.slug} className="overflow-hidden rounded-[28px] bg-[#173f39] text-white shadow-sm sm:rounded-[34px]">
                <figure className="relative h-72 sm:h-80">
                  <Image src={place.photo.src} alt={norwegian ? place.photo.altNo : place.photo.altEn} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/95 via-transparent to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-[#ffd078]">{norwegian ? place.labelNo : place.labelEn}</p>
                    <h3 className="display mt-2 text-5xl font-bold">{place.title}</h3>
                  </div>
                </figure>
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-bold text-[#ffd078]">{norwegian ? place.nightsNo : place.nightsEn}</p>
                  <p className="mt-3 leading-7 text-white/75">{norwegian ? place.textNo : place.textEn}</p>
                  <Link href={`/${lang}/destinations/${place.slug}`} className="mt-5 inline-flex font-bold">{norwegian ? `Les hele ${place.title}-guiden` : `Read the full ${place.title} guide`} →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4d7a1] px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d] sm:text-sm">{norwegian ? "Velg riktig lengde" : "Choose the right length"}</p>
          <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Tre forslag til Thailand-reisen" : "Three ways to plan the journey"}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-5">
            {itineraries.map((trip) => (
              <article key={trip.nights} className="rounded-[24px] border border-[#17332f]/10 bg-[#fffaf1] p-6 sm:p-7">
                <div className="flex items-end justify-between gap-4">
                  <p className="display text-6xl font-bold leading-none">{trip.nights}</p>
                  <p className="pb-1 text-xs font-bold uppercase tracking-[.16em] text-[#b94f3d]">{norwegian ? "netter" : "nights"}</p>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{norwegian ? trip.titleNo : trip.titleEn}</h3>
                <p className="mt-3 font-bold text-[#1e776e]">{norwegian ? trip.splitNo : trip.splitEn}</p>
                <p className="mt-4 leading-7 text-[#48645f]">{norwegian ? trip.textNo : trip.textEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173f39] px-5 py-12 text-white sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078] sm:text-sm">{norwegian ? "Flyferies egne øyeblikk" : "Flyferie's own moments"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Fra Bangkok til øyene" : "From Bangkok to the islands"}</h2>
            <p className="mt-4 text-lg leading-8 text-white/72">{norwegian ? "Alle bildene er tatt av Flyferie på reisene våre i Thailand. Her er stedene vi selv ville bygget turen rundt." : "Every photo was taken by Flyferie during our own journeys in Thailand. These are the places we would build the trip around."}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {thailandMoments.map((moment, index) => (
              <figure
                key={moment.src}
                className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#102f2b] ${index === 0 || index === 5 ? "col-span-2 min-h-[360px] sm:min-h-[460px] lg:col-span-2" : "min-h-[260px] sm:min-h-[340px]"}`}
              >
                <Image
                  src={moment.src}
                  alt={norwegian ? moment.altNo : moment.altEn}
                  fill
                  sizes={index === 0 || index === 5 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 50vw, 33vw"}
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/95 via-transparent to-black/5" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#ffd078] sm:text-xs">{moment.place}</p>
                  <p className="mt-1 text-sm font-bold leading-5 sm:text-lg">{norwegian ? moment.captionNo : moment.captionEn}</p>
                  <p className="mt-1 text-[10px] text-white/60 sm:text-xs">{norwegian ? "Foto: Flyferie" : "Photo: Flyferie"}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-white/60">
            {norwegian ? "Railay, Koh Hong og Koh Lao Lading nås enkelt på båtturer fra Ao Nang. Phi Phi passer både som dagstur og som et eget stopp på en lengre reise." : "Railay, Koh Hong and Koh Lao Lading are easily reached on boat trips from Ao Nang. Phi Phi works both as a day trip and as a separate stop on a longer journey."}
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "Hvor bør dere bo?" : "Where should you stay?"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Velg område før hotell" : "Choose the area before the hotel"}</h2>
            <p className="mt-5 leading-7 text-[#48645f]">{norwegian ? "Riktig område betyr ofte mer enn antall hotellstjerner. Disse fire valgene gir et godt utgangspunkt." : "The right area often matters more than the number of hotel stars. These four choices are a strong starting point."}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stayAreas.map((area) => (
              <article key={`${area.place}-${area.area}`} className="rounded-[22px] border border-[#17332f]/10 bg-white p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#e16f59]">{area.place}</p>
                <h3 className="mt-2 text-2xl font-bold">{area.area}</h3>
                <p className="mt-3 leading-7 text-[#48645f]">{norwegian ? area.no : area.en}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173f39] px-5 py-12 text-white sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd078] sm:text-sm">{norwegian ? "Slik henger reisen sammen" : "How the journey fits together"}</p>
          <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Fra Norge til storby og strand" : "From Norway to city and beach"}</h2>
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {[
              ["01", norwegian ? "Fly til Bangkok" : "Fly to Bangkok", norwegian ? "Start reisen med storbydagene og bruk kollektivtransport, elvebåter og korte taxiturer mellom områdene." : "Start with the city days and use rail, river boats and short taxi rides between areas."],
              ["02", norwegian ? "Videre til Krabi" : "Continue to Krabi", norwegian ? "Fly sørover til Krabi lufthavn. Sammenlign total reisetid og bagasjeregler før du velger avgang." : "Fly south to Krabi Airport. Compare total journey time and baggage rules before choosing a departure."],
              ["03", norwegian ? "Transport til Ao Nang" : "Transfer to Ao Nang", norwegian ? "Fortsett med forhåndsbestilt transport, taxi eller delt transport til hotellet i Ao Nang-området." : "Continue by pre-booked transfer, taxi or shared transport to your hotel in the Ao Nang area."]
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-[22px] border border-white/15 bg-white/[.06] p-6">
                <p className="display text-4xl font-bold text-[#ffd078]">{number}</p>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6ba55] px-5 py-10 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] sm:text-sm">{norwegian ? "Start planleggingen" : "Start planning"}</p>
            <h2 className="display mt-2 text-3xl font-bold sm:text-4xl">{norwegian ? "Velg første del av reisen" : "Choose the first part of the journey"}</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={`/${lang}/destinations/bangkok`} className="rounded-full bg-[#17332f] px-6 py-4 text-center font-bold text-white">Bangkok →</Link>
            <Link href={`/${lang}/destinations/ao-nang`} className="rounded-full border border-[#17332f]/30 bg-white/30 px-6 py-4 text-center font-bold">Ao Nang →</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#17332f]/10 px-5 py-8 text-xs leading-6 text-[#48645f] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-[#17332f]">{norwegian ? "Bildekreditering" : "Photo credits"}</p>
          <p className="mt-2">Flyferie · {norwegian ? "Foto: Bangkok, Ao Nang, Krabi, Railay, Koh Hong, Koh Lao Lading og Phi Phi" : "Photo: Bangkok, Ao Nang, Krabi, Railay, Koh Hong, Koh Lao Lading and Phi Phi"}</p>
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
