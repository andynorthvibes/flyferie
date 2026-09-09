type Props = {
  lang: "no" | "en";
  slug: keyof typeof guideNames;
};

const guideNames = {
  "hidden-gems": ["Europas skjulte perler", "Europe's hidden gems"],
  "car-rental": ["Leiebilguide", "Car rental guide"],
  "travel-insurance": ["Reiseforsikring", "Travel insurance"],
  esim: ["eSIM på reisen", "Using an eSIM while travelling"],
  "plan-weekend-trip": ["Planlegg en weekendtur", "Plan a weekend trip"],
  "weekend-packing-list": ["Pakkeliste for weekendtur", "Weekend trip packing list"],
  thailand: ["Opplev Thailand", "Discover Thailand"],
  "airport-transfer": ["Flyplasstransport", "Airport transfers"],
  "group-trip": ["Tur med gjengen", "Trip with friends"],
  "cheap-flights": ["Sammenlign flypriser", "Compare flight prices"],
  "weekend-trip-budget": ["Budsjett for weekendtur", "Weekend trip budget"],
  "surprise-trip": ["Arranger blåtur", "Plan a surprise trip"],
  "christmas-markets": ["Europas beste julemarkeder", "Europe's best Christmas markets"],
  "travel-gear": ["Reiseutstyr", "Travel gear"],
} as const;

export function GuideBreadcrumbSchema({ lang, slug }: Props) {
  const norwegian = lang === "no";
  const pageUrl = `https://flyferie.no/${lang}/guides/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: norwegian ? "Forside" : "Home", item: `https://flyferie.no/${lang}` },
      { "@type": "ListItem", position: 2, name: norwegian ? "Guider" : "Guides", item: `https://flyferie.no/${lang}/guides` },
      { "@type": "ListItem", position: 3, name: guideNames[slug][norwegian ? 0 : 1], item: pageUrl },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />;
}
