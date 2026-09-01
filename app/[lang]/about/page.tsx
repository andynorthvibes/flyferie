import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";
  return {
    title: norwegian ? "Om Flyferie og annonselenker | Flyferie.no" : "About Flyferie and affiliate links | Flyferie.no",
    description: norwegian
      ? "Les om Flyferies redaksjonelle prinsipper, anbefalinger og bruk av annonselenker."
      : "Read about Flyferie's editorial principles, recommendations and use of affiliate links.",
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
        ["Nyttig først", "Innholdet skal hjelpe deg å velge reisemål, planlegge turen og forstå alternativene før du bestiller."],
        ["Tydelig merking", "Betalte lenker og partneranbefalinger merkes tydelig, slik at du alltid vet når Flyferie kan motta provisjon."],
        ["Uavhengige valg", "En kommersiell avtale skal ikke avgjøre hvilke reisemål, råd eller løsninger som omtales som relevante."],
        ["Kontroller før kjøp", "Priser og vilkår kan endres. Kontroller alltid totalpris, avbestilling, bagasje, forsikring og andre betingelser hos leverandøren."],
      ]
    : [
        ["Useful first", "Our content should help you choose a destination, plan the journey and understand your options before booking."],
        ["Clear labelling", "Paid links and partner recommendations are clearly labelled so you know when Flyferie may receive a commission."],
        ["Independent choices", "A commercial agreement does not decide which destinations, advice or services we consider relevant."],
        ["Check before booking", "Prices and terms may change. Always confirm the total price, cancellation rules, baggage, insurance and other conditions with the provider."],
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
              ? "Flyferie.no er en uavhengig reiseinspirasjonsside på norsk og engelsk. Vi samler reisemål, guider og praktiske råd som skal gjøre det enklere å finne og planlegge den neste turen."
              : "Flyferie.no is an independent travel inspiration website in Norwegian and English. We publish destinations, guides and practical advice designed to make choosing and planning your next trip easier."}
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
        </div>
      </section>

      <section className="bg-[#f4d7a1] px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d] sm:text-sm">{norwegian ? "Annonselenker" : "Affiliate links"}</p>
            <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{norwegian ? "Provisjon uten høyere pris" : "Commission without a higher price"}</h2>
          </div>
          <div className="rounded-[24px] bg-white/70 p-6 sm:p-8">
            <p className="leading-7 text-[#365b55]">
              {norwegian
                ? "Flyferie kan motta provisjon dersom du bestiller gjennom enkelte merkede lenker. Det øker ikke prisen din. Vi bruker inntektene til å utvikle og drifte nettstedet, men partneravtaler skal ikke overstyre redaksjonelle vurderinger. Selve avtalen inngås alltid mellom deg og leverandøren."
                : "Flyferie may receive a commission when you book through selected, clearly labelled links. This does not increase your price. The revenue supports the development and operation of the website, but partnerships do not override editorial judgement. Any booking agreement is always between you and the provider."}
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
