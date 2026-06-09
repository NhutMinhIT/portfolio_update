import type { MetadataRoute } from "next";
import { profile } from "./data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.nameEn} — ${profile.role}`,
    short_name: profile.nameEn,
    description: profile.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
