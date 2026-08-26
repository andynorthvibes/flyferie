import { notFound } from "next/navigation";
import { SiteHome } from "@/components/site-home";
import type { Lang } from "@/lib/content";

export default async function LanguageHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  return <SiteHome lang={lang as Lang} />;
}
