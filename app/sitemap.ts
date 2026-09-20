import type { MetadataRoute } from "next";
import { profile } from "./data/shared";

/**
 * Bump this when the page content changes. A build-time `new Date()` would
 * mark the pages as modified on every deploy, which crawlers learn to ignore.
 */
const lastModified = new Date("2026-09-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = {
    languages: {
      en: profile.url,
      vi: `${profile.url}/vi`,
    },
  };

  return [
    {
      url: profile.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
    {
      url: `${profile.url}/vi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates,
    },
  ];
}
