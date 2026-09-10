import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ lang: string }> };

const comparisons = [
  { no: "Reisebudsjett", en: "Travel budget", berlinNo: "Middels", berlinEn: "Medium", krakowNo: "Lavere", krakowEn: "Lower", winnerNo: "Krakow", winnerEn: "Krakow" },
  { no: "Historie", en: "History", berlinNo: "Moderne europeisk historie", berlinEn: "Modern European history", krakowNo: "Kongelig og middelaldersk historie", krakowEn: "Royal and medieval history", winnerNo: "Uavgjort", winnerEn: "Tie" },
  { no: "Uteliv", en: "Nightlife", berlinNo: "Enormt og svært variert", berlinEn: "Huge and highly varied", krakowNo: "Kompakt og lett tilgjengelig", krakowEn: "Compact and easy to access", winnerNo: "Berlin", winnerEn: "Berlin" },
  { no: "Mat", en: "Food", berlinNo: "Internasjonalt og mangfoldig", berlinEn: "International and diverse", krakowNo: "Polsk tradisjon og moderne kjøkken", krakowEn: "Polish tradition and modern cooking", winnerNo: "Uavgjort", winnerEn: "Tie" },
  { no: "Korte avstander", en: "Short distances", berlinNo: "Krever transport og planlegging", berlinEn: "Requires transport and planning", krakowNo: "Mye kan nås til fots", krakowEn: "Much can be reached on foot", winnerNo: "Krakow", winnerEn: "Krakow" },
  { no: "Fotball og konserter", en: "Football and concerts", berlinNo: "Svært sterkt utvalg", berlinEn: "A very strong selection", krakowNo: "Godt, men mindre utvalg", krakowEn: "Good, but a smaller selection", winnerNo: "Berlin", winnerEn: "Berlin" },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const no = lang === "no";
  return {
    title: no ? "Berlin eller Krakow – hvilken weekendby passer best? | Flyferie.no" : "Berlin or Krakow—which city break suits you best? | Flyferie.no",
    description: no ? "Sammenlign Berlin og Krakow for weekendtur: prisnivå, uteliv, mat, historie, avstander og hvem byene passer best for." : "Compare Berlin and Krakow for a weekend trip: budget, nightlife, food, history, distances and who each city suits.",
    alternates: { canonical: `/${lang}/guides/berlin-or-krakow`, languages: { "nb-NO": "/no/guides/berlin-or-krakow", "en-GB": "/en/guides/berlin-or-krakow", "x-default": "/no/guides/berlin-or-krakow" } },
    openGraph: { type: "article", url: `/${lang}/guides/berlin-or-krakow` },
  };
}

export default async function BerlinOrKrakowPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "no" && lang !== "en") notFound();
  const no = lang === "no";
  const other = no ? "en" : "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/berlin-or-krakow`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "@id": `${pageUrl}#article`, headline: no ? "Berlin eller Krakow – hvilken weekendby passer best?" : "Berlin or Krakow—which city break suits you best?", description: no ? "En praktisk sammenligning av Berlin og Krakow for en weekendtur." : "A practical comparison of Berlin and Krakow for a weekend trip.", inLanguage: no ? "nb-NO" : "en-GB", mainEntityOfPage: pageUrl, publisher: { "@id": "https://flyferie.no/#organization" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: no ? "Forside" : "Home", item: `https://flyferie.no/${lang}` },
        { "@type": "ListItem", position: 2, name: no ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` },
        { "@type": "ListItem", position: 3, name: no ? "Berlin eller Krakow" : "Berlin or Krakow", item: pageUrl },
      ] },
    ],
  };

  const travelStyles = [
    ["Vennegjengen", "Friends", "Berlin hvis uteliv og arrangementer styrer turen; Krakow hvis enkel logistikk og felles budsjett er viktigst.", "Berlin when nightlife and events lead; Krakow when easy logistics and a shared budget matter most."],
    ["Par", "Couples", "Krakow gir en kompakt og stemningsfull helg. Berlin passer paret som vil fylle dagene med kultur og nye nabolag.", "Krakow offers a compact, atmospheric weekend. Berlin suits couples who want culture and new neighbourhoods all day."],
    ["Første storbyhelg", "First city break", "Krakow er enklest å mestre. Berlin gir mer å velge mellom, men belønner en tydeligere plan.", "Krakow is easier to master. Berlin offers more choice but rewards a clearer plan."],
  ];

  return <main className="min-h-screen bg-[#fffaf1] text-[#17332f]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="border-b border-white/10 bg-[#102f2b] text-white"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><Link href={`/${lang}`} className="text-lg font-bold">Flyferie.no</Link><Link href={`/${other}/guides/berlin-or-krakow`} className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold">{no ? "EN" : "NO"}</Link></div></header>

    <section className="overflow-hidden bg-[#173f39] px-5 py-14 text-white sm:py-20 lg:py-24"><div className="mx-auto max-w-6xl"><Link href={`/${lang}/guides`} className="text-sm font-bold text-[#ffd078]">← {no ? "Tilbake til guidebiblioteket" : "Back to the guide library"}</Link><p className="mt-10 text-xs font-bold uppercase tracking-[.22em] text-[#ffd078]">{no ? "Sammenlign reisemål" : "Compare destinations"}</p><h1 className="display mt-3 max-w-5xl text-[48px] font-bold leading-[.98] sm:text-7xl lg:text-[82px]">{no ? "Berlin eller Krakow?" : "Berlin or Krakow?"}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">{no ? "Velg Berlin for størst utvalg og mest uteliv. Velg Krakow for korte avstander, lavere prisnivå og en helg som er enkel å gjennomføre." : "Choose Berlin for the widest range of experiences and nightlife. Choose Krakow for shorter distances, lower prices and an easy-to-manage weekend."}</p></div></section>

    <section className="px-5 py-12 sm:py-16"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
      <article className="rounded-[28px] bg-[#edf4ef] p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#1e776e]">Berlin</p><h2 className="display mt-3 text-4xl font-bold">{no ? "Best for stort utvalg" : "Best for variety"}</h2><p className="mt-4 leading-7 text-[#48645f]">{no ? "Velg Berlin hvis konserter, fotball, klubber, museer og ulike nabolag er viktigere enn korte avstander." : "Choose Berlin if concerts, football, clubs, museums and varied neighbourhoods matter more than short distances."}</p><Link href={`/${lang}/destinations/berlin`} className="mt-6 inline-flex rounded-full bg-[#17332f] px-5 py-3 text-sm font-bold text-white">{no ? "Les Berlin-guiden" : "Read the Berlin guide"} →</Link></article>
      <article className="rounded-[28px] bg-[#f5e8d3] p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#b94f3d]">Krakow</p><h2 className="display mt-3 text-4xl font-bold">{no ? "Best for enkel verdi" : "Best for easy value"}</h2><p className="mt-4 leading-7 text-[#48645f]">{no ? "Velg Krakow hvis dere vil gå mellom severdigheter, spise godt og få mye ut av en kort helg og et moderat budsjett." : "Choose Krakow if you want walkable sights, good meals and plenty from a short weekend and moderate budget."}</p><Link href={`/${lang}/destinations/krakow`} className="mt-6 inline-flex rounded-full bg-[#17332f] px-5 py-3 text-sm font-bold text-white">{no ? "Les Krakow-guiden" : "Read the Krakow guide"} →</Link></article>
    </div></section>

    <section className="border-y border-[#17332f]/10 bg-white px-5 py-12 sm:py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e16f59]">{no ? "Direkte sammenligning" : "Direct comparison"}</p><h2 className="display mt-3 text-[38px] font-bold sm:text-5xl">{no ? "Forskjellene som avgjør" : "The differences that decide it"}</h2><div className="mt-8 overflow-x-auto rounded-[24px] border border-[#17332f]/10"><table className="w-full min-w-[720px] border-collapse text-left"><thead className="bg-[#17332f] text-white"><tr><th className="p-4">{no ? "Tema" : "Topic"}</th><th className="p-4">Berlin</th><th className="p-4">Krakow</th><th className="p-4">{no ? "Fordel" : "Edge"}</th></tr></thead><tbody>{comparisons.map((row, index) => <tr key={row.en} className={index % 2 ? "bg-[#edf4ef]" : "bg-white"}><th className="p-4 font-bold">{no ? row.no : row.en}</th><td className="p-4 text-[#48645f]">{no ? row.berlinNo : row.berlinEn}</td><td className="p-4 text-[#48645f]">{no ? row.krakowNo : row.krakowEn}</td><td className="p-4 font-bold text-[#b94f3d]">{no ? row.winnerNo : row.winnerEn}</td></tr>)}</tbody></table></div></div></section>

    <section className="px-5 py-12 sm:py-16"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">{no ? "Velg etter reisefølge" : "Choose by travel style"}</p><div className="mt-7 grid gap-4 md:grid-cols-3">{travelStyles.map((item) => <article key={item[0]} className="rounded-[22px] border border-[#17332f]/10 bg-white p-6"><h3 className="text-xl font-bold">{no ? item[0] : item[1]}</h3><p className="mt-3 leading-7 text-[#48645f]">{no ? item[2] : item[3]}</p></article>)}</div></div></section>

    <section className="bg-[#f4d7a1] px-5 py-12 sm:py-16"><div className="mx-auto max-w-6xl rounded-[28px] bg-white/70 p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d]">{no ? "Flyferies konklusjon" : "Flyferie's conclusion"}</p><h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">{no ? "Ingen feil by – bare to ulike helger" : "No wrong city—just two different weekends"}</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-[#365b55]">{no ? "For en førstetur med stramt budsjett ville vi valgt Krakow. For størst mulig utvalg, konserter, fotball og uteliv ville vi valgt Berlin. Har dere tre netter og liker å planlegge, gir Berlin mest. Har dere to netter og vil bruke minst mulig tid på transport, vinner Krakow." : "For a first trip on a tighter budget, we would choose Krakow. For maximum variety, concerts, football and nightlife, we would choose Berlin. With three nights and an appetite for planning, Berlin offers more. With two nights and minimal transport, Krakow wins."}</p></div></section>
  </main>;
}
