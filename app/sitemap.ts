import type { MetadataRoute } from "next";
import { profile } from "./data/shared";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
