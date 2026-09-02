import type { MetadataRoute } from "next";
import { destinations } from "@/lib/content";

const siteUrl = "https://flyferie.no";
const languages = ["no", "en"] as const;
const guides = ["christmas-markets", "hidden-gems", "thailand", "travel-gear", "car-rental", "esim", "cheap-flights", "when-to-book-flights", "choose-flight-times", "choose-hotel-area", "compare-hotel-prices", "when-to-book-hotels", "airport-transfer", "weekend-packing-list", "cabin-bag-weekend", "travel-insurance", "plan-weekend-trip", "choose-weekend-destination", "surprise-trip", "weekend-trip-budget", "hidden-travel-costs", "group-trip", "romantic-weekend", "solo-weekend-trip", "weekend-trip-with-children"] as const;

function entry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]): MetadataRoute.Sitemap[number] {
  const norwegianPath = `/no${path}`;
  const englishPath = `/en${path}`;

  return {
    url: `${siteUrl}${norwegianPath}`,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        "nb-NO": `${siteUrl}${norwegianPath}`,
        en: `${siteUrl}${englishPath}`,
        "x-default": `${siteUrl}${norwegianPath}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/editorial-policy", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/destinations", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/guides", priority: 0.9, changeFrequency: "weekly" as const },
    ...destinations.map(({ slug }) => ({
      path: `/destinations/${slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...guides.map((slug) => ({
      path: `/guides/${slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
  ];

  return languages.flatMap((lang) =>
    paths.map(({ path, priority, changeFrequency }) => ({
      ...entry(path, priority, changeFrequency),
      url: `${siteUrl}/${lang}${path}`,
    })),
  );
}
