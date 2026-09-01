import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHome } from "@/components/site-home";
import type { Lang } from "@/lib/content";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const norwegian = lang === "no";

  return {
    title: norwegian ? "Flyferie.no – Finn din neste reise" : "Flyferie.no – Find your next trip",
    description: norwegian
      ? "Oppdag weekendturer, skjulte perler, blåturer og inspirerende reisemål i Europa og Thailand."
      : "Discover city breaks, hidden gems, mystery trips and inspiring destinations across Europe and Thailand.",
    alternates: {
      canonical: `/${lang}`,
      languages: { "nb-NO": "/no", en: "/en", "x-default": "/no" },
    },
  };
}

export default async function LanguageHome({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  return <SiteHome lang={lang as Lang} />;
}
