import Link from "next/link";
import Image from "next/image";
import { copy, destinations, type Lang } from "@/lib/content";

export function SiteHome({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const other = lang === "no" ? "en" : "no";
  const featured = destinations.slice(0, 6);
  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-20 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
          <Link href={`/${lang}`} aria-label="Flyferie.no – forsiden" className="flex items-center">
            <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[230px] sm:w-[270px]" />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            {t.nav.map((item) => <a key={item} href="#utforsk" className="transition hover:text-[#f4c16d]">{item}</a>)}
          </nav>
          <Link href={`/${other}`} className="rounded-full border border-white/50 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm">{other === "en" ? "EN" : "NO"}</Link>
        </div>
      </header>

      <section className="hero-image relative min-h-[760px] overflow-hidden text-white">
        <div className="hero-glow" />
        <div className="mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-28 pt-28 lg:px-8">
          <div className="rise relative z-10 max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[.24em] text-[#ffd28a]">{t.eyebrow}</p>
            <h1 className="display text-5xl font-bold leading-[.94] tracking-tight drop-shadow-lg sm:text-7xl lg:text-[92px]">{t.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">{t.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#utforsk" className="rounded-full bg-[#f4b860] px-6 py-3.5 font-bold text-[#17332f] transition hover:bg-[#ffd08b]">{t.explore} →</a>
              <a href="#inspiration" className="rounded-full border border-white/60 bg-white/10 px-6 py-3.5 font-bold backdrop-blur-sm transition hover:bg-white/20">{t.inspiration}</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-t-[28px] bg-white/20 sm:grid-cols-3 lg:rounded-t-[34px]">
            {[
              [lang === "no" ? "Weekend med gjengen" : "Weekend with friends", "Berlin · Krakow · Madrid"],
              [lang === "no" ? "Skjulte perler" : "Hidden gems", "Tbilisi · Skopje · Katowice"],
              [lang === "no" ? "Blåtur" : "Mystery trip", lang === "no" ? "La destinasjonen overraske" : "Let the destination surprise you"],
            ].map(([title, sub]) => (
              <a key={title} href="#inspiration" className="group bg-[#123b36]/85 px-6 py-5 backdrop-blur-md transition hover:bg-[#1e6258] lg:px-8">
                <p className="text-sm font-bold text-[#ffd28a]">{title} <span className="inline-block transition group-hover:translate-x-1">→</span></p>
                <p className="mt-1 text-xs text-white/65">{sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="utforsk" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#e16f59]">Flyferie-favoritter</p>
            <h2 className="display text-4xl font-bold sm:text-5xl">{t.weekendTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#48645f]">{t.weekendText}</p>
          </div>
          <a href="#all" className="font-bold text-[#1e776e]">{t.all} →</a>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((place, index) => (
            <Link key={place.slug} href={`/${lang}/destinations/${place.slug}`} className="group relative min-h-72 overflow-hidden rounded-[28px] p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl" style={{ background: `linear-gradient(145deg, ${place.color}, #17332f)` }}>
              <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">{lang === "no" ? place.tagNo : place.tagEn}</span>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-white/75">{lang === "no" ? place.countryNo : place.countryEn}</p>
                <h3 className="display mt-1 text-4xl font-bold">{place.name}</h3>
                <div className="mt-4 h-px bg-white/25" />
                <p className="mt-4 text-sm font-bold">{lang === "no" ? "Oppdag byen" : "Discover the city"} <span className="inline-block transition group-hover:translate-x-1">→</span></p>
              </div>
              <span className="absolute right-5 top-3 text-7xl font-bold text-white/[.07]">0{index + 1}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="inspiration" className="bg-[#173f39] px-5 py-20 text-white lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="rounded-[30px] bg-[#f2b85c] p-8 text-[#17332f] lg:col-span-2 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[.18em]">{lang === "no" ? "Litt utenfor allfarvei" : "Beyond the usual route"}</p>
            <h2 className="display mt-5 max-w-xl text-4xl font-bold sm:text-5xl">{t.hidden}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8">{t.hiddenText}</p>
            <button className="mt-8 rounded-full bg-[#17332f] px-5 py-3 font-bold text-white">{t.read} →</button>
          </article>
          <article className="rounded-[30px] border border-white/15 bg-white/5 p-8 lg:p-10">
            <span className="text-4xl">🎁</span>
            <h2 className="display mt-6 text-3xl font-bold">{t.blue}</h2>
            <p className="mt-4 leading-7 text-white/75">{t.blueText}</p>
            <button className="mt-8 font-bold text-[#f4c16d]">{t.read} →</button>
          </article>
          <article className="rounded-[30px] border border-white/15 bg-[#23574f] p-8 lg:col-span-3 lg:flex lg:items-center lg:justify-between lg:p-10">
            <div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#f4c16d]">{lang === "no" ? "Sesongguide" : "Seasonal guide"}</p><h2 className="display mt-3 text-3xl font-bold sm:text-4xl">{t.christmas}</h2><p className="mt-3 text-white/75">{t.christmasText}</p></div>
            <button className="mt-7 rounded-full bg-white px-5 py-3 font-bold text-[#17332f] lg:mt-0">{t.read} →</button>
          </article>
        </div>
      </section>
      <footer className="bg-[#102f2b] px-5 py-10 text-white/65"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px] sm:w-[240px]" /><p className="text-sm">© 2026 Flyferie.no · {lang === "no" ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p></div></footer>
    </main>
  );
}
