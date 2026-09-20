import type { MetadataRoute } from "next";
import { contentEn } from "./data/content.en";
import { profile } from "./data/shared";
import { brand } from "./lib/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.nameEn} — ${contentEn.role}`,
    short_name: profile.nameEn,
    description: contentEn.metaDescription,
    start_url: "/",
    display: "standalone",
    background_color: brand.bg,
    theme_color: brand.bg,
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
