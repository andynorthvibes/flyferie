import Link from "next/link";
import Image from "next/image";
import { copy, destinations, type Lang } from "@/lib/content";
import { destinationMedia } from "@/lib/destination-media";

const featuredSlugs = ["berlin", "krakow", "rome", "barcelona", "gdansk", "nice"];
const moreEuropeSlugs = ["amsterdam", "manchester", "milan", "madrid", "malaga", "copenhagen", "helsinki", "gothenburg"];
const thailandSlugs = ["bangkok", "ao-nang"];

export function SiteHome({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const other = lang === "no" ? "en" : "no";
  const bySlug = Object.fromEntries(destinations.map((place) => [place.slug, place]));
  const featured = featuredSlugs.map((slug) => bySlug[slug]);
  const moreEurope = moreEuropeSlugs.map((slug) => bySlug[slug]);
  const europe = destinations.filter((place) => !thailandSlugs.includes(place.slug));
  const thailand = thailandSlugs.map((slug) => bySlug[slug]);
  const cityName = (slug: string, fallback: string) => lang === "en" ? fallback : ({ milan: "Milano", copenhagen: "København", gothenburg: "Gøteborg", rome: "Roma" } as Record<string, string>)[slug] ?? fallback;
  const hero = (slug: string) => {
    const source = slug === "manchester"
      ? destinationMedia.manchester.weekend[1]
      : destinationMedia[slug].hero;
    return { ...source, src: `/homepage-ai/${slug}.webp` };
  };
  const nav = [
    [lang === "no" ? "Reisemål" : "Destinations", `/${lang}/destinations`],
    [lang === "no" ? "Favoritter" : "Favourites", "#utforsk"],
    [lang === "no" ? "Inspirasjon" : "Inspiration", `/${lang}/guides/hidden-gems`],
    [lang === "no" ? "Reiseutstyr" : "Travel gear", `/${lang}/guides/travel-gear`],
    [lang === "no" ? "Julemarkeder" : "Christmas Markets", `/${lang}/guides/christmas-markets`],
    ["Thailand", `/${lang}/guides/thailand`]
  ];

  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-20 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-6 lg:px-8">
          <Link href={`/${lang}`} aria-label="Flyferie.no – forsiden" className="flex items-center">
            <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[168px] sm:w-[270px]" />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            {nav.map(([label, href]) => <Link key={label} href={href} className="transition hover:text-[#f4c16d]">{label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <Link href={`/${lang}/destinations`} className="text-sm font-bold lg:hidden">{lang === "no" ? "Reisemål" : "Destinations"}</Link>
            <Link href={`/${other}`} className="rounded-full border border-white/50 bg-white/10 px-3 py-2 text-xs font-bold backdrop-blur-sm sm:px-4 sm:text-sm">{other === "en" ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="hero-image relative overflow-hidden text-white sm:min-h-[760px]">
        <div className="hero-glow" />
        <div className="mx-auto flex max-w-7xl items-center px-5 pb-10 pt-28 sm:min-h-[760px] sm:pb-28 lg:px-8">
          <div className="rise relative z-10 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#ffd28a] sm:mb-5 sm:text-sm sm:tracking-[.24em]">{t.eyebrow}</p>
            <h1 className="display text-[44px] font-bold leading-[.96] tracking-tight drop-shadow-lg sm:text-7xl lg:text-[92px]">{t.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:mt-7 sm:text-xl sm:leading-8">{t.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
              <a href="#alle-byer" className="rounded-full bg-[#f4b860] px-6 py-3.5 font-bold text-[#17332f] transition hover:bg-[#ffd08b]">{t.explore} →</a>
              <Link href={`/${lang}/guides/hidden-gems`} className="rounded-full border border-white/60 bg-white/10 px-6 py-3.5 font-bold backdrop-blur-sm transition hover:bg-white/20">{t.inspiration}</Link>
            </div>
          </div>
        </div>
        <div className="relative z-10 sm:absolute sm:bottom-0 sm:left-0 sm:right-0">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-t-[28px] bg-white/20 sm:grid-cols-3 lg:rounded-t-[34px]">
            {[
              [lang === "no" ? "Weekend med gjengen" : "Weekend with friends", "Berlin · Krakow · Gdansk", "#utforsk"],
              [lang === "no" ? "Skjulte perler" : "Hidden gems", "Tbilisi · Skopje · Katowice", `/${lang}/guides/hidden-gems`],
              [lang === "no" ? "Opplev Thailand" : "Discover Thailand", "Bangkok · Ao Nang · Krabi", `/${lang}/guides/thailand`]
            ].map(([title, sub, href]) => (
              <Link key={title} href={href} className="group bg-[#123b36]/90 px-5 py-4 backdrop-blur-md transition hover:bg-[#1e6258] sm:px-6 sm:py-5 lg:px-8">
                <p className="text-sm font-bold text-[#ffd28a]">{title} <span className="inline-block transition group-hover:translate-x-1">→</span></p>
                <p className="mt-1 text-xs text-white/65">{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="alle-byer" className="border-b border-[#17332f]/10 bg-[#fffaf1] pb-6 pt-10 lg:pb-8 lg:pt-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#e16f59]">{lang === "no" ? "Utforsk Europa" : "Explore Europe"}</p>
              <h2 className="display mt-2 text-[34px] font-bold leading-tight sm:mt-3 sm:text-5xl">{lang === "no" ? "Din neste flyferie" : "Your next flight holiday"}</h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-6 text-[#48645f] sm:block">{lang === "no" ? "Dra sidelengs og finn byen som passer neste tur." : "Scroll sideways and find the city for your next trip."}</p>
          </div>
          <div className="destination-strip -mr-5 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pr-5 pb-4 sm:mr-0 sm:mt-9 sm:gap-4 sm:pr-0 sm:pb-5">
            {europe.map((place) => {
              const photo = hero(place.slug);
              return (
                <Link key={place.slug} href={`/${lang}/destinations/${place.slug}`} className="group relative aspect-[4/5] w-[44vw] max-w-[170px] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#17332f] text-white shadow-sm sm:w-[176px]">
                  <Image src={photo.src} alt={lang === "no" ? photo.altNo : photo.altEn} fill sizes="176px" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/95 via-transparent to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[11px] text-white/70">{lang === "no" ? place.countryNo : place.countryEn}</p>
                    <h3 className="mt-1 text-base font-bold leading-tight">{cityName(place.slug, place.name)} <span className="inline-block transition group-hover:translate-x-1">→</span></h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="utforsk" className="mx-auto max-w-7xl px-5 pb-12 pt-8 lg:px-8 lg:pb-14 lg:pt-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#e16f59]">Flyferie-favoritter</p>
            <h2 className="display text-[36px] font-bold leading-[1.05] sm:text-5xl">{t.weekendTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#48645f] sm:text-lg sm:leading-8">{t.weekendText}</p>
          </div>
          <Link href={`/${lang}/destinations`} className="font-bold text-[#1e776e]">{t.all} →</Link>
        </div>
        <div className="mt-7 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {featured.map((place) => {
            const photo = hero(place.slug);
            return (
              <Link key={place.slug} href={`/${lang}/destinations/${place.slug}`} className="group relative min-h-[300px] overflow-hidden rounded-[24px] bg-[#17332f] text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:min-h-80 sm:rounded-[28px]">
                <Image src={photo.src} alt={lang === "no" ? photo.altNo : photo.altEn} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b] via-[#102f2b]/35 to-black/5" />
                <span className="absolute left-6 top-6 rounded-full bg-[#17332f]/75 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">{lang === "no" ? place.tagNo : place.tagEn}</span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-white/75">{lang === "no" ? place.countryNo : place.countryEn}</p>
                  <h3 className="display mt-1 text-3xl font-bold sm:text-4xl">{cityName(place.slug, place.name)}</h3>
                  <div className="mt-4 h-px bg-white/25" />
                  <p className="mt-4 text-sm font-bold">{lang === "no" ? "Oppdag reisemålet" : "Discover the destination"} →</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 border-t border-[#17332f]/10 pt-8 lg:mt-12 lg:pt-10">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#e16f59]">{lang === "no" ? "Mer å oppleve" : "More to discover"}</p>
              <h2 className="display mt-2 text-[34px] font-bold leading-tight sm:mt-3 sm:text-5xl">{lang === "no" ? "Flere byer å utforske" : "More cities to explore"}</h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-6 text-[#48645f] sm:block">{lang === "no" ? "Åtte nye ideer til neste tur med gjengen." : "Eight more ideas for your next trip with friends."}</p>
          </div>
          <div className="destination-strip -mr-5 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pr-5 pb-4 sm:mr-0 sm:mt-8 sm:gap-4 sm:pr-0">
            {moreEurope.map((place) => {
              const photo = hero(place.slug);
              return (
                <Link key={place.slug} href={`/${lang}/destinations/${place.slug}`} className="group relative aspect-[4/5] w-[44vw] max-w-[170px] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#17332f] text-white shadow-sm sm:w-[176px]">
                  <Image src={photo.src} alt={lang === "no" ? photo.altNo : photo.altEn} fill sizes="176px" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/95 via-transparent to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[11px] text-white/70">{lang === "no" ? place.countryNo : place.countryEn}</p>
                    <h3 className="mt-1 text-base font-bold leading-tight">{cityName(place.slug, place.name)} <span className="inline-block transition group-hover:translate-x-1">→</span></h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="inspiration" className="bg-[#173f39] px-5 py-12 text-white lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <Link href={`/${lang}/guides/hidden-gems`} className="group relative min-h-[410px] overflow-hidden rounded-[26px] sm:min-h-[460px] sm:rounded-[30px] lg:row-span-2">
            <Image src={hero("tbilisi").src} alt={lang === "no" ? hero("tbilisi").altNo : hero("tbilisi").altEn} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b] via-[#102f2b]/30 to-transparent" />
            <div className="absolute bottom-0 p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#f4c16d]">{lang === "no" ? "Litt utenfor allfarvei" : "Beyond the usual route"}</p>
              <h2 className="display mt-3 text-[36px] font-bold leading-[1.05] sm:mt-4 sm:text-5xl">{t.hidden}</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{t.hiddenText}</p>
              <p className="mt-6 font-bold">{lang === "no" ? "Oppdag de skjulte perlene" : "Discover the hidden gems"} →</p>
            </div>
          </Link>
          <InspirationCard lang={lang} slug="skopje" label={lang === "no" ? "Overrask gjengen" : "Surprise the group"} title={t.blue} text={t.blueText} />
          <Link href={`/${lang}/guides/christmas-markets`} className="group relative min-h-[270px] overflow-hidden rounded-[30px]">
            <Image src="/homepage-ai/christmas-market.webp" alt={lang === "no" ? "Julemarkedet på markedsplassen i Krakow" : "Christmas market on Krakow Main Square"} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/65 to-transparent" />
            <div className="absolute inset-0 flex max-w-md flex-col justify-end p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#f4c16d]">{lang === "no" ? "Sesongguide" : "Seasonal guide"}</p>
              <h2 className="display mt-3 text-3xl font-bold">{t.christmas}</h2>
              <p className="mt-3 text-white/80">{t.christmasText}</p>
              <p className="mt-5 font-bold">{lang === "no" ? "Sammenlign julemarkedene" : "Compare the Christmas markets"} →</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="overflow-hidden bg-[#fffaf1] px-5 py-12 text-[#17332f] sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[30px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-9 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e16f59] sm:text-sm">{lang === "no" ? "Pakk smartere" : "Pack smarter"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{lang === "no" ? "Reiseutstyr og nyttige tjenester" : "Travel gear and useful services"}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#48645f] sm:text-lg sm:leading-8">
              {lang === "no" ? "En praktisk guide til bagasje, eSIM, sko, kamera, digitale tjenester og transportvalg som faktisk gjør reisen enklere." : "A practical guide to luggage, eSIMs, footwear, cameras, digital services and transport choices that genuinely make travel easier."}
            </p>
            <Link href={`/${lang}/guides/travel-gear`} className="mt-6 inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white transition hover:bg-[#1e6258]">
              {lang === "no" ? "Se Flyferies utstyrsguide" : "Explore Flyferie's gear guide"} →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {[
              [lang === "no" ? "Bagasje" : "Luggage", "01"],
              ["eSIM", "02"],
              [lang === "no" ? "På reisen" : "On the road", "03"],
              [lang === "no" ? "Transport" : "Transport", "04"],
            ].map(([label, number]) => (
              <div key={label} className="rounded-[20px] bg-[#f4d7a1]/55 p-4 sm:p-5">
                <p className="text-xs font-bold text-[#b94f3d]">{number}</p>
                <p className="mt-3 font-bold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="thailand" className="relative overflow-hidden bg-[#f4d7a1] px-5 py-12 text-[#17332f] lg:px-8 lg:py-14">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#ef855f]/25 blur-3xl" />
        <div className="absolute -bottom-36 -left-28 h-96 w-96 rounded-full bg-[#2d9587]/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.24em] text-[#b94f3d]">{lang === "no" ? "En helt egen reise" : "A journey of its own"}</p>
            <h2 className="display mt-3 text-[42px] font-bold leading-none sm:mt-4 sm:text-6xl">{lang === "no" ? "Opplev Thailand" : "Discover Thailand"}</h2>
            <p className="mt-4 text-base leading-7 text-[#365b55] sm:mt-5 sm:text-lg sm:leading-8">{lang === "no" ? "Thailand står for seg selv på Flyferie: storbyenergi i Bangkok, strandliv i Ao Nang og Krabis dramatiske natur – samlet uten å blande det med de europeiske weekendbyene." : "Thailand has its own place on Flyferie: Bangkok's big-city energy, Ao Nang's beaches and Krabi's dramatic nature, presented separately from the European city breaks."}</p>
            <Link href={`/${lang}/guides/thailand`} className="mt-6 inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white">
              {lang === "no" ? "Planlegg Thailand-reisen" : "Plan your Thailand journey"} →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {thailand.map((place) => {
              const photo = hero(place.slug);
              return (
                <Link key={place.slug} href={`/${lang}/guides/thailand`} className="group relative min-h-[380px] overflow-hidden rounded-[28px] bg-[#17332f] text-white shadow-xl sm:min-h-[430px] sm:rounded-[34px]">
                  <Image src={photo.src} alt={lang === "no" ? photo.altNo : photo.altEn} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b] via-[#102f2b]/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-[#ffd28a]">Thailand</p>
                    <h3 className="display mt-2 text-4xl font-bold sm:text-5xl">{place.name}</h3>
                    <p className="mt-3 max-w-lg text-white/80">{lang === "no" ? place.tagNo : place.tagEn}</p>
                    <p className="mt-5 font-bold">{lang === "no" ? "Utforsk Thailand-guiden" : "Explore the Thailand guide"} →</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#102f2b] px-5 py-10 text-white/65">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px] sm:w-[240px]" />
          <p className="text-sm">© 2026 Flyferie.no · {lang === "no" ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p>
        </div>
      </footer>
    </main>
  );
}

function InspirationCard({ lang, slug, label, title, text }: { lang: Lang; slug: string; label: string; title: string; text: string }) {
  const photo = destinationMedia[slug].hero;
  return (
    <Link href={`/${lang}/destinations/${slug}`} className="group relative min-h-[270px] overflow-hidden rounded-[30px]">
      <Image src={photo.src} alt={lang === "no" ? photo.altNo : photo.altEn} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/65 to-transparent" />
      <div className="absolute inset-0 flex max-w-md flex-col justify-end p-6 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-[#f4c16d]">{label}</p>
        <h2 className="display mt-3 text-3xl font-bold">{title}</h2>
        <p className="mt-3 text-white/80">{text}</p>
        <p className="mt-5 font-bold">Skopje · {lang === "no" ? "Les guiden" : "Read the guide"} →</p>
      </div>
    </Link>
  );
}
