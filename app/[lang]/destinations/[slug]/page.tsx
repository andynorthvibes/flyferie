import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/content";
import { allDestinationGuides as destinationGuides } from "@/lib/all-destination-guides";
import { destinationMedia } from "@/lib/destination-media";
import { localRecommendations } from "@/lib/local-recommendations";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const place = destinations.find((item) => item.slug === slug);
  const guide = destinationGuides[slug];

  if (!place) return {};

  return {
    title: guide
      ? (lang === "no" ? guide.seoNo : guide.seoEn) + " | Flyferie.no"
      : place.name + " | Flyferie.no",
    description: guide
      ? lang === "no"
        ? guide.introNo
        : guide.introEn
      : undefined,
    alternates: {
      canonical: `/${lang}/destinations/${slug}`,
      languages: {
        "nb-NO": `/no/destinations/${slug}`,
        en: `/en/destinations/${slug}`,
        "x-default": `/no/destinations/${slug}`,
      },
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { lang, slug } = await params;

  if (lang !== "no" && lang !== "en") notFound();

  const place = destinations.find((item) => item.slug === slug);
  if (!place) notFound();

  const guide = destinationGuides[slug];
  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const norwegianNames: Record<string, string> = {
    milan: "Milano",
    copenhagen: "København",
    gothenburg: "Gøteborg",
    rome: "Roma"
  };
  const displayName = norwegian ? (norwegianNames[slug] ?? place.name) : place.name;

  const media = destinationMedia[slug];
  const recommendations = localRecommendations[slug] ?? [];
  const imageCredits = media
    ? Array.from(new Map([media.hero, ...media.weekend].map((photo) => [photo.sourceUrl || photo.photographer, photo])).values())
    : [];
  const pageUrl = `https://flyferie.no/${lang}/destinations/${slug}`;
  const description = guide
    ? norwegian ? guide.introNo : guide.introEn
    : norwegian ? `${place.tagNo}. En komplett Flyferie-guide er på vei.` : `${place.tagEn}. A complete Flyferie guide is coming soon.`;
  const absoluteImage = media
    ? new URL(media.hero.src, "https://flyferie.no").toString()
    : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        "@id": `${pageUrl}#destination`,
        name: displayName,
        description,
        url: pageUrl,
        ...(absoluteImage ? { image: absoluteImage } : {}),
        address: {
          "@type": "PostalAddress",
          addressCountry: norwegian ? place.countryNo : place.countryEn,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: guide ? (norwegian ? guide.seoNo : guide.seoEn) : displayName,
        description,
        inLanguage: norwegian ? "nb-NO" : "en",
        about: { "@id": `${pageUrl}#destination` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: norwegian ? "Forside" : "Home", item: `https://flyferie.no/${lang}` },
          { "@type": "ListItem", position: 2, name: norwegian ? "Reisemål" : "Destinations", item: `https://flyferie.no/${lang}/destinations` },
          { "@type": "ListItem", position: 3, name: displayName, item: pageUrl },
        ],
      },
    ],
  };


  return (
    <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="border-b border-white/10 bg-[#102f2b]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-5 sm:py-5">
          <Link href={"/" + lang} aria-label="Flyferie.no – forsiden">
            <Image
              src="/flyferie-logo-v9.png"
              alt="Flyferie.no"
              width={480}
              height={200}
              priority
              className="h-auto w-[168px] sm:w-[225px]"
            />
          </Link>
          <Link
            href={"/" + otherLanguage + "/destinations/" + slug}
            className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold text-white"
          >
            {norwegian ? "EN" : "NO"}
          </Link>
        </div>
      </header>

      <section
        className="overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, " + place.color + ", #102f2b 68%)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:gap-12 sm:py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-24">
          <div>
            <Link href={"/" + lang} className="text-sm font-bold text-[#ffd078]">
              ← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}
            </Link>
            <p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-[#ffd078] sm:mt-10 sm:text-sm sm:tracking-[.22em]">
              {norwegian ? place.countryNo : place.countryEn}
            </p>
            <h1 className="display mt-2 text-[52px] font-bold leading-none sm:mt-3 sm:text-8xl">{displayName}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80 sm:mt-6 sm:text-xl sm:leading-9">
              {guide
                ? norwegian
                  ? guide.introNo
                  : guide.introEn
                : norwegian
                  ? place.tagNo + ". En komplett Flyferie-guide er på vei."
                  : place.tagEn + ". A complete Flyferie guide is coming soon."}
            </p>
          </div>

          {media ? (
            <figure className="relative min-h-[280px] overflow-hidden rounded-[26px] border border-white/15 shadow-2xl sm:min-h-[360px] sm:rounded-[34px]">
              <Image
                src={media.hero.src}
                alt={norwegian ? media.hero.altNo : media.hero.altEn}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/75 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-6 text-xs font-medium text-white/80">
                {norwegian ? media.hero.altNo : media.hero.altEn} · {norwegian ? "Foto" : "Photo"}: {media.hero.photographer}
              </figcaption>
            </figure>
          ) : (
            <div className="min-h-[360px] rounded-[34px] border border-white/15" style={{ background: "linear-gradient(145deg, " + place.color + ", #17332f)" }} />
          )}
        </div>
      </section>

      {guide ? (
        <>
          <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#e16f59]">
              {norwegian ? "Passer særlig for" : "Especially good for"}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {guide.bestFor.map((item) => (
                <span key={item.en} className="rounded-full bg-[#17332f] px-5 py-3 text-sm font-bold text-white">
                  {norwegian ? item.no : item.en}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {guide.facts.map((fact) => (
                <article key={fact.labelEn} className="rounded-[20px] border border-[#17332f]/10 bg-white p-5 sm:rounded-[24px] sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[#e16f59]">
                    {norwegian ? fact.labelNo : fact.labelEn}
                  </p>
                  <p className="mt-3 font-bold leading-6">
                    {norwegian ? fact.valueNo : fact.valueEn}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-[#173f39] text-white">
            <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:py-20">
              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#ffd078]">
                {norwegian ? "Helgeplan" : "Weekend plan"}
              </p>
              <h2 className="display mt-2 text-[36px] font-bold leading-tight sm:mt-3 sm:text-5xl">
                {norwegian ? displayName + " på 48 timer" : "48 hours in " + displayName}
              </h2>
              <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
                {media && guide.weekend.map((item, index) => (
                  <article key={item.timeEn} className="overflow-hidden rounded-[28px] border border-white/15 bg-white/[.06]">
                    <figure className="relative h-48 sm:h-56">
                      <Image
                        src={media.weekend[index].src}
                        alt={norwegian ? media.weekend[index].altNo : media.weekend[index].altEn}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#173f39]/70 via-transparent to-transparent" />
                      <figcaption className="absolute bottom-3 left-5 text-xs text-white/75">
                        {norwegian ? media.weekend[index].altNo : media.weekend[index].altEn} · {norwegian ? "Foto" : "Photo"}: {media.weekend[index].photographer}
                      </figcaption>
                    </figure>
                    <div className="p-6 sm:p-7">
                    <p className="text-sm font-bold uppercase tracking-[.16em] text-[#ffd078]">
                      {norwegian ? item.timeNo : item.timeEn}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold">
                      {norwegian ? item.titleNo : item.titleEn}
                    </h3>
                    <p className="mt-4 leading-7 text-white/70">
                      {norwegian ? item.textNo : item.textEn}
                    </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {recommendations.length > 0 && (
            <section className="bg-[#f5e8d3]">
              <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:py-20">
                <p className="text-sm font-bold uppercase tracking-[.2em] text-[#e16f59]">
                  {norwegian ? "Personlige anbefalinger" : "Personal recommendations"}
                </p>
                <h2 className="display mt-2 text-[38px] font-bold leading-tight sm:mt-3 sm:text-5xl">
                  {norwegian ? "Flyferie har vært her" : "Places Flyferie has visited"}
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-[#48645f]">
                  {norwegian
                    ? "Steder vi selv har besøkt i Krakow og gjerne anbefaler videre."
                    : "Places we have personally visited in Krakow and are happy to recommend."}
                </p>

                <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2">
                  {recommendations.map((recommendation) => (
                    <article
                      key={recommendation.name}
                      className="overflow-hidden rounded-[28px] border border-[#17332f]/10 bg-white shadow-sm"
                    >
                      <figure className="relative h-64 sm:h-72">
                        <Image
                          src={recommendation.image}
                          alt={norwegian ? recommendation.imageAltNo : recommendation.imageAltEn}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/55 via-transparent to-transparent" />
                        <figcaption className="absolute bottom-4 left-5 text-xs font-medium text-white/90">
                          {norwegian ? "Foto" : "Photo"}: Flyferie
                        </figcaption>
                      </figure>
                      <div className="p-6 sm:p-7">
                        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#e16f59]">
                          {norwegian ? recommendation.categoryNo : recommendation.categoryEn}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold">{recommendation.name}</h3>
                        <p className="mt-3 leading-7 text-[#48645f]">
                          {norwegian ? recommendation.descriptionNo : recommendation.descriptionEn}
                        </p>
                        <a
                          href={recommendation.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex rounded-full bg-[#17332f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#24544d]"
                        >
                          {norwegian ? "Besøk nettstedet" : "Visit website"} →
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:py-20">
            <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[.2em] text-[#e16f59]">
                  {norwegian ? "Hvor bør dere bo?" : "Where should you stay?"}
                </p>
                <h2 className="display mt-2 text-[36px] font-bold leading-tight sm:mt-3 sm:text-4xl">
                  {norwegian ? "Velg område etter type tur" : "Choose an area that fits the trip"}
                </h2>
                <div className="mt-8 space-y-4">
                  {guide.districts.map((district) => (
                    <article key={district.name} className="rounded-[20px] border border-[#17332f]/10 bg-white p-5 sm:rounded-[24px] sm:p-6">
                      <h3 className="text-xl font-bold">{district.name}</h3>
                      <p className="mt-2 leading-7 text-[#48645f]">
                        {norwegian ? district.textNo : district.textEn}
                      </p>
                    </article>
                  ))}
                </div>
                <Link href={`/${lang}/guides/choose-hotel-area`} className="mt-6 inline-flex font-bold text-[#1e776e]">
                  {norwegian ? "Slik velger du riktig hotell og område" : "How to choose the right hotel and area"} →
                </Link>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[.2em] text-[#e16f59]">
                  {norwegian ? "Greit å vite" : "Good to know"}
                </p>
                <h2 className="display mt-2 text-[36px] font-bold leading-tight sm:mt-3 sm:text-4xl">
                  {norwegian ? "Små tips som gjør helgen enklere" : "Small tips for an easier weekend"}
                </h2>
                <div className="mt-8 space-y-4">
                  {guide.tips.map((tip) => (
                    <article key={tip.titleEn} className="rounded-[20px] bg-[#f5e8d3] p-5 sm:rounded-[24px] sm:p-6">
                      <h3 className="text-xl font-bold">
                        {norwegian ? tip.titleNo : tip.titleEn}
                      </h3>
                      <p className="mt-2 leading-7 text-[#48645f]">
                        {norwegian ? tip.textNo : tip.textEn}
                      </p>
                    </article>
                  ))}
                </div>
                <a
                  href={guide.transportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1e776e]"
                >
                  {norwegian ? "Se oppdatert transportinformasjon hos " + guide.transportName + " →" : "See current transport information from " + guide.transportName + " →"}
                </a>
              </div>
            </div>
          </section>

          {media && (
            <section className="border-t border-[#17332f]/10 bg-[#fffaf1]">
              <div className="mx-auto max-w-6xl px-5 py-8 text-xs leading-6 text-[#48645f]">
                <p className="font-bold text-[#17332f]">
                  {norwegian ? "Bildekreditering" : "Photo credits"}
                </p>
                <p className="mt-2">
                  {imageCredits.map((photo, index) => (
                    <span key={photo.src}>
                      {index > 0 && " · "}
                      {photo.sourceUrl ? (
                        <a className="underline" href={photo.sourceUrl} target="_blank" rel="noreferrer">
                          {photo.photographer}
                        </a>
                      ) : photo.photographer}
                      {photo.license ? " · " + photo.license : ""}
                    </span>
                  ))}
                </p>
              </div>
            </section>
          )}

          <section className="bg-[#f6ba55]">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[.18em]">
                  {norwegian ? "Klar for flere ideer?" : "Ready for more ideas?"}
                </p>
                <h2 className="display mt-2 text-3xl font-bold">
                  {norwegian ? "Finn neste reisemål" : "Find your next destination"}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={`/${lang}/destinations`} className="rounded-full bg-[#17332f] px-6 py-4 font-bold text-white">
                  {norwegian ? "Se alle reisemål →" : "See all destinations →"}
                </Link>
                <Link href={`/${lang}/guides`} className="rounded-full border border-[#17332f]/30 bg-white/55 px-6 py-4 font-bold text-[#17332f] transition hover:bg-white/80">
                  {norwegian ? "Åpne guidebiblioteket" : "Open the guide library"} →
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xl text-[#48645f]">
            {norwegian
              ? "En komplett Flyferie-guide er på vei med våre beste tips til opplevelser, mat og den perfekte helgen."
              : "A complete Flyferie guide is coming with our best tips for experiences, food and the perfect weekend."}
          </p>
        </section>
      )}

      <footer className="bg-[#102f2b] px-5 py-10 text-white/65">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" />
          <p className="text-sm">
            © 2026 Flyferie.no · {norwegian ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}
          </p>
        </div>
      </footer>
    </main>
  );
}
