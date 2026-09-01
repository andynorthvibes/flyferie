import type { MetadataRoute } from "next";
import { destinations } from "@/lib/content";

const siteUrl = "https://flyferie.no";
const languages = ["no", "en"] as const;
const guides = ["christmas-markets", "hidden-gems", "thailand"] as const;

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
    { path: "/destinations", priority: 0.9, changeFrequency: "weekly" as const },
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
