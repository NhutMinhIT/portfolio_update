import type { MetadataRoute } from "next";
import { profile } from "./data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: profile.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
