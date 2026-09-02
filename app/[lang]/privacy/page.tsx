import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";

  return {
    title: norwegian ? "Personvern | Flyferie.no" : "Privacy | Flyferie.no",
    description: norwegian
      ? "Les hvordan Flyferie håndterer tekniske bruksdata, e-post og eksterne lenker."
      : "Learn how Flyferie handles technical usage data, email and external links.",
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: { "nb-NO": "/no/privacy", en: "/en/privacy", "x-default": "/no/privacy" },
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();

  const norwegian = lang === "no";
  const otherLanguage = norwegian ? "en" : "no";
  const sections = norwegian
    ? [
        ["Teknisk statistikk", "Flyferie bruker Vercel Analytics og Speed Insights for å forstå generell bruk av nettstedet og følge med på teknisk ytelse. I den forbindelse kan Vercel behandle tekniske bruksdata i tråd med sine egne vilkår."],
        ["E-post", "Når du kontakter Flyferie på e-post, brukes opplysningene du sender for å lese og besvare henvendelsen. Ikke send sensitive personopplysninger som ikke er nødvendige for saken."],
        ["Eksterne lenker", "Flyferie lenker til eksterne leverandører og enkelte merkede annonselenker. Når du går videre til en annen nettside, gjelder leverandørens egne vilkår og personvernregler."],
        ["Ingen brukerkonto", "Flyferie tilbyr ikke innlogging eller personlige brukerkontoer. Nettstedet har heller ikke et kontaktskjema som lagrer henvendelser i Flyferies egen database."],
        ["Endringer", "Denne siden kan oppdateres når nettstedet eller tjenestene vi bruker endres. Den nyeste versjonen vil alltid være tilgjengelig her."],
      ]
    : [
        ["Technical analytics", "Flyferie uses Vercel Analytics and Speed Insights to understand general website use and monitor technical performance. Vercel may process technical usage data for these purposes under its own terms."],
        ["Email", "When you contact Flyferie by email, the information you provide is used to read and respond to your enquiry. Do not send sensitive personal information that is not necessary for the matter."],
        ["External links", "Flyferie links to external providers and uses selected, labelled advertising links. When you continue to another website, that provider's own terms and privacy rules apply."],
        ["No user account", "Flyferie does not offer sign-in or personal user accounts. The website also has no contact form that stores enquiries in Flyferie's own database."],
        ["Changes", "This page may be updated when the website or the services we use change. The latest version will always be available here."],
      ];

  return (
    <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
      <header className="border-b border-white/10 bg-[#102f2b] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-5 sm:py-5">
          <Link href={`/${lang}`} aria-label="Flyferie.no – forsiden">
            <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[168px] sm:w-[225px]" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href={`/${lang}/about`} className="text-sm font-bold">{norwegian ? "Om Flyferie" : "About Flyferie"}</Link>
            <Link href={`/${otherLanguage}/privacy`} className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">{norwegian ? "EN" : "NO"}</Link>
          </div>
        </div>
      </header>

      <section className="bg-[#173f39] px-5 py-14 text-white sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link href={`/${lang}`} className="text-sm font-bold text-[#ffd078]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:text-sm">{norwegian ? "Åpent og enkelt" : "Open and straightforward"}</p>
          <h1 className="display mt-3 text-[48px] font-bold leading-none sm:text-7xl">{norwegian ? "Personvern" : "Privacy"}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{norwegian ? "Her forklarer vi kort hvordan Flyferie håndterer informasjon når du bruker nettstedet eller tar kontakt." : "This page briefly explains how Flyferie handles information when you use the website or get in touch."}</p>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-5">
          {sections.map(([title, text], index) => (
            <article key={title} className="rounded-[24px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-bold text-[#e16f59]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="display mt-3 text-3xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-[#48645f]">{text}</p>
            </article>
          ))}
          <div className="pt-3">
            <Link href={`/${lang}/contact`} className="inline-flex rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white transition hover:bg-[#1e6258]">{norwegian ? "Kontakt oss om personvern" : "Contact us about privacy"} →</Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#102f2b] px-5 py-10 text-white/65">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px]" />
          <p className="text-sm">© 2026 Flyferie.no · {norwegian ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p>
        </div>
      </footer>
    </main>
  );
}
