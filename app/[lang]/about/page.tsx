import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Om Flyferie og våre anbefalinger | Flyferie.no" : "About Flyferie and our recommendations | Flyferie.no",
    description: norwegian
      ? "Les om Flyferies håndplukkede reisemål, anbefalinger og kommersielle samarbeid."
      : "Read about Flyferie's handpicked destinations, recommendations and commercial partnerships.",
    alternates: {
      canonical: `/${lang}/about`,
      languages: { "nb-NO": "/no/about", en: "/en/about", "x-default": "/no/about" },
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";

  const principles = norwegian
    ? [
        ["Håndplukket utvalg", "Flyferie samler reisemål, guider og tjenester vi mener kan være nyttige eller inspirerende for ulike typer reiser."],
        ["Praktiske råd", "Innholdet skal gjøre det enklere å planlegge turen og forstå viktige valg før du bestiller."],
        ["Merkede samarbeid", "Noen anbefalinger og lenker er kommersielle samarbeid der Flyferie kan motta provisjon."],
        ["Kontroller før kjøp", "Utvalget er ikke en fullstendig oversikt over markedet. Kontroller alltid pris, vilkår og egnethet hos leverandøren."],
      ]
    : [
        ["Handpicked selection", "Flyferie brings together destinations, guides and services we believe may be useful or inspiring for different kinds of travel."],
        ["Practical guidance", "Our content aims to make planning easier and highlight important choices before booking."],
        ["Labelled partnerships", "Some recommendations and links are commercial partnerships through which Flyferie may receive commission."],
        ["Check before booking", "Our selection is not a complete overview of the market. Always confirm prices, terms and suitability with the provider."],
      ];

  return (
    <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
      <header className="border-b border-white/10 bg-[#102f2b] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
          <Link href={`/${lang}`} aria-label="Flyferie.no – forsiden">
            <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[168px] sm:w-[225px]" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href={`/${lang}/destinations`} className="text-sm font-bold">{norwegian ? "Reisemål" : "Destinations"}</Link>
            <Link href={`/${otherLanguage}/about`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">{norwegian ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
          <p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:text-sm">{norwegian ? "Åpent og tydelig" : "Open and transparent"}</p>
          <h1 className="display mt-3 max-w-4xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{norwegian ? "Om Flyferie" : "About Flyferie"}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
            {norwegian
              ? "Flyferie.no er en reiseinspirasjonsside på norsk og engelsk. Vi håndplukker reisemål, guider og anbefalinger som kan gjøre det enklere å finne og planlegge den neste turen."
              : "Flyferie.no is a Norwegian and English travel inspiration website. We handpick destinations, guides and recommendations that can make choosing and planning your next trip easier."}
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "Slik arbeider vi" : "How we work"}</p>
          <h2 className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Fire redaksjonelle prinsipper" : "Four editorial principles"}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {principles.map(([title, text], index) => (
              <article key={title} className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-8">
                <span className="rounded-full bg-[#f4d7a1] px-3 py-1.5 text-xs font-bold text-[#b94f3d]">0{index + 1}</span>
                <h3 className="display mt-5 text-3xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-[#48645f]">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${lang}/editorial-policy`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white transition hover:bg-[#1e6258]">
              {norwegian ? "Les Flyferies redaksjonelle retningslinjer" : "Read Flyferie's editorial policy"} →
            </Link>
            <Link href={`/${lang}/contact`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-6 py-3.5 font-bold text-[#17332f] transition hover:border-[#17332f]/50">
              {norwegian ? "Kontakt oss" : "Contact us"} →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f4d7a1] px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d] sm:text-sm">{norwegian ? "Annonselenker" : "Affiliate links"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Utvalgte anbefalinger og samarbeid" : "Selected recommendations and partnerships"}</h2>
          </div>
          <div className="rounded-[24px] bg-white/70 p-6 sm:p-8">
            <p className="leading-7 text-[#365b55]">
              {norwegian
                ? "Flyferie viser et håndplukket utvalg og dekker ikke nødvendigvis alle tilgjengelige leverandører. Noen tjenester løftes frem som del av kommersielle samarbeid, og Flyferie kan motta provisjon dersom du bestiller gjennom enkelte merkede lenker. Selve avtalen inngås alltid mellom deg og leverandøren."
                : "Flyferie presents a handpicked selection and does not necessarily cover every available provider. Some services are featured through commercial partnerships, and Flyferie may receive commission when you book through selected, labelled links. Any booking agreement is always between you and the provider."}
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#102f2b] px-5 py-10 text-white/65">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px] sm:w-[240px]" />
          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <Link href={`/${lang}/contact`} className="font-bold text-white/85 transition hover:text-[#f4c16d]">{norwegian ? "Kontakt oss" : "Contact us"}</Link>
            <p>© 2026 Flyferie.no · {norwegian ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
