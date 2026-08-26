import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/content";

export default async function DestinationPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const place = destinations.find((item) => item.slug === slug);
  if (!place) notFound();
  const norwegian = lang === "no";
  return (
    <main className="min-h-screen bg-[#fffaf1]">
      <header className="border-b border-[#17332f]/10 bg-white/80 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><Link href={`/${lang}`} className="text-2xl font-bold">flyferie<span className="text-[#e87963]">.no</span></Link><Link href={`/${lang === "no" ? "en" : "no"}/destinations/${slug}`} className="rounded-full border border-[#17332f]/20 px-4 py-2 text-sm font-bold">{lang === "no" ? "EN" : "NO"}</Link></div></header>
      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <Link href={`/${lang}`} className="text-sm font-bold text-[#1e776e]">← {norwegian ? "Tilbake til forsiden" : "Back to the home page"}</Link>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div><p className="text-sm font-bold uppercase tracking-[.2em] text-[#e16f59]">{norwegian ? place.countryNo : place.countryEn}</p><h1 className="display mt-3 text-6xl font-bold sm:text-8xl">{place.name}</h1><p className="mt-6 max-w-2xl text-xl leading-9 text-[#48645f]">{norwegian ? `${place.tagNo}. En komplett Flyferie-guide er på vei med våre beste tips til opplevelser, mat, overnatting og den perfekte helgen.` : `${place.tagEn}. A complete Flyferie guide is coming with our best tips for experiences, food, places to stay and the perfect weekend.`}</p></div>
          <div className="min-h-72 rounded-[32px]" style={{ background: `linear-gradient(145deg, ${place.color}, #17332f)` }} />
        </div>
      </section>
    </main>
  );
}
