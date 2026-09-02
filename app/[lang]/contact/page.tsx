import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";

  return {
    title: norwegian ? "Kontakt Flyferie | Flyferie.no" : "Contact Flyferie | Flyferie.no",
    description: norwegian
      ? "Kontakt Flyferie med spørsmål, tilbakemeldinger, rettelser eller forslag til samarbeid."
      : "Contact Flyferie with questions, feedback, corrections or partnership enquiries.",
    alternates: {
      canonical: `/${lang}/contact`,
      languages: { "nb-NO": "/no/contact", en: "/en/contact", "x-default": "/no/contact" },
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();

  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";

  return (
    <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
      <header className="border-b border-white/10 bg-[#102f2b] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
          <Link href={`/${lang}`} aria-label="Flyferie.no – forsiden">
            <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[168px] sm:w-[225px]" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href={`/${lang}/about`} className="text-sm font-bold">{norwegian ? "Om Flyferie" : "About Flyferie"}</Link>
            <Link href={`/${otherLanguage}/contact`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">{norwegian ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#173f39] px-5 py-16 text-white sm:py-24 lg:px-8">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#f4b860]/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <Link href={`/${lang}/about`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til Om Flyferie" : "Back to About Flyferie"}</Link>
          <p className="mt-9 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:text-sm">{norwegian ? "Kontakt" : "Contact"}</p>
          <h1 className="display mt-3 text-[48px] font-bold leading-[.98] sm:text-7xl">{norwegian ? "Ta kontakt med oss" : "Get in touch"}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
            {norwegian
              ? "Har du spørsmål, en rettelse eller et forslag til samarbeid? Du er velkommen til å sende oss en e-post."
              : "Have a question, a correction or a partnership idea? You are welcome to send us an email."}
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_.8fr]">
          <div className="rounded-[28px] border border-[#17332f]/10 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59] sm:text-sm">{norwegian ? "E-post" : "Email"}</p>
            <h2 className="display mt-3 text-3xl font-bold sm:text-4xl">flyferie@hotellpris.no</h2>
            <a href="mailto:flyferie@hotellpris.no" className="mt-6 inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white transition hover:bg-[#1e6258]">
              {norwegian ? "Send e-post" : "Send email"} →
            </a>
          </div>

          <aside className="rounded-[28px] bg-[#f4d7a1] p-7 sm:p-10">
            <h2 className="display text-3xl font-bold">{norwegian ? "Om bestillinger" : "About bookings"}</h2>
            <p className="mt-4 leading-7 text-[#365b55]">
              {norwegian
                ? "Spørsmål om en konkret bestilling, betaling, endring eller avbestilling må tas direkte med leverandøren du bestilte hos. Flyferie er ikke part i avtalen."
                : "Questions about a specific booking, payment, change or cancellation must be directed to the provider you booked with. Flyferie is not a party to the agreement."}
            </p>
          </aside>
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
