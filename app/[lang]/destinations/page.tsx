import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, type Lang } from "@/lib/content";
import { destinationMedia } from "@/lib/destination-media";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const thailandSlugs = new Set(["bangkok", "ao-nang"]);
const norwegianNames: Record<string, string> = {
  milan: "Milano",
  copenhagen: "København",
  gothenburg: "Gøteborg",
  rome: "Roma"
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";

  return {
    title: norwegian ? "Alle reisemål | Flyferie.no" : "All destinations | Flyferie.no",
    description: norwegian
      ? "Finn alle reisemålene på Flyferie samlet i en alfabetisk oversikt."
      : "Browse every Flyferie destination in one alphabetical overview.",
    alternates: {
      canonical: `/${lang}/destinations`,
      languages: {
        "nb-NO": "/no/destinations",
        en: "/en/destinations",
        "x-default": "/no/destinations",
      },
    },
  };
}

export default async function AllDestinationsPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  if (rawLang !== "no" && rawLang !== "en") notFound();

  const lang = rawLang as Lang;
  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const displayName = (slug: string, fallback: string) => norwegian ? (norwegianNames[slug] ?? fallback) : fallback;
  const alphabetical = (items: typeof destinations) => [...items].sort((a, b) =>
    displayName(a.slug, a.name).localeCompare(displayName(b.slug, b.name), norwegian ? "nb" : "en")
  );
  const europe = alphabetical(destinations.filter((place) => !thailandSlugs.has(place.slug)));
  const thailand = alphabetical(destinations.filter((place) => thailandSlugs.has(place.slug)));

  return (
    <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
      <header className="bg-[#102f2b] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
          <Link href={`/${lang}`} aria-label="Flyferie.no – forsiden">
            <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[168px] sm:w-[225px]" />
          </Link>
          <div className="flex items-center gap-5">
            <Link href={`/${lang}`} className="hidden text-sm font-bold sm:block">{norwegian ? "Forsiden" : "Home"}</Link>
            <Link href={`/${otherLanguage}/destinations`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">
              {norwegian ? "EN" : "NO"}
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-[#173f39] px-5 py-8 text-white sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-[#f4c16d] sm:mt-7 sm:text-sm sm:tracking-[.22em]">{norwegian ? "Finn din neste tur" : "Find your next trip"}</p>
          <h1 className="display mt-2 text-[44px] font-bold leading-none sm:mt-3 sm:text-7xl">{norwegian ? "Alle reisemål" : "All destinations"}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:mt-5 sm:text-lg sm:leading-8">
            {norwegian ? "Hele Flyferie samlet på ett sted – alfabetisk, oversiktlig og klart for nye byer etter hvert som vi bygger flere guider." : "Every Flyferie destination in one place – alphabetical, easy to browse and ready to grow as we add new guides."}
          </p>
        </div>
      </section>

      <DestinationGrid lang={lang} title={norwegian ? "Europa" : "Europe"} places={europe} displayName={displayName} />

      <section className="bg-[#f4d7a1] px-5 py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-[#b94f3d]">{norwegian ? "En helt egen reise" : "A journey of its own"}</p>
          <h2 className="display mt-3 text-4xl font-bold sm:text-5xl">Thailand</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#365b55]">{norwegian ? "Thailandske reisemål står samlet for seg selv, adskilt fra de europeiske weekendbyene." : "Thailand destinations are grouped separately from the European city breaks."}</p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-5 lg:max-w-[820px]">
            {thailand.map((place) => <DestinationCard key={place.slug} lang={lang} place={place} name={displayName(place.slug, place.name)} />)}
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

function DestinationGrid({ lang, title, places, displayName }: { lang: Lang; title: string; places: typeof destinations; displayName: (slug: string, fallback: string) => string }) {
  return (
    <section className="px-5 py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-5">
          <h2 className="display text-4xl font-bold sm:text-5xl">{title}</h2>
          <p className="text-sm text-[#48645f]">{places.length} {lang === "no" ? "reisemål" : "destinations"}</p>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {places.map((place) => <DestinationCard key={place.slug} lang={lang} place={place} name={displayName(place.slug, place.name)} />)}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ lang, place, name }: { lang: Lang; place: (typeof destinations)[number]; name: string }) {
  const photo = place.slug === "manchester" ? destinationMedia.manchester.weekend[1] : destinationMedia[place.slug].hero;

  return (
    <Link href={`/${lang}/destinations/${place.slug}`} className="group relative min-h-[230px] overflow-hidden rounded-[20px] bg-[#17332f] text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:min-h-[330px] sm:rounded-[26px]">
      <Image src={photo.src} alt={lang === "no" ? photo.altNo : photo.altEn} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b] via-[#102f2b]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <p className="text-xs text-white/70 sm:text-sm">{lang === "no" ? place.countryNo : place.countryEn}</p>
        <h3 className="display mt-1 text-[25px] font-bold leading-tight sm:text-3xl">{name}</h3>
        <p className="mt-2 text-xs font-bold sm:mt-3 sm:text-sm">{lang === "no" ? "Les reiseguiden" : "Read the travel guide"} →</p>
      </div>
    </Link>
  );
}
