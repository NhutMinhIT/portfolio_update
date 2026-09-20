import type { MetadataRoute } from "next";
import { absoluteUrl, contentUpdatedAt } from "./data/shared";

const lastModified = new Date(contentUpdatedAt);

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = {
    languages: {
      en: absoluteUrl("/"),
      vi: absoluteUrl("/vi"),
    },
  };

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
    {
      url: absoluteUrl("/vi"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates,
    },
  ];
}
