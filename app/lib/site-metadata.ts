import type { Metadata, Viewport } from "next";
import type { Content } from "../data/content";
import { absoluteUrl, profile } from "../data/shared";
import { brand } from "./theme";

const sharedKeywords = [
  "Nguyễn Nhựt Minh",
  "Nguyen Nhut Minh",
  "NhutMinhIT",
  "React",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "Node.js",
  "THACO",
];

const keywordsByLang = {
  en: [
    ...sharedKeywords,
    "Software Engineer",
    "Fullstack Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "AI Application",
    "Web Developer Vietnam",
    "Software Engineer Ho Chi Minh City",
    "Digital Transformation",
    "Portfolio",
  ],
  vi: [
    ...sharedKeywords,
    "Kỹ sư phần mềm",
    "Lập trình viên",
    "Lập trình viên Frontend",
    "Lập trình viên React",
    "Ứng dụng AI",
    "Kỹ sư phần mềm TP.HCM",
    "Chuyển đổi số",
    "Phân tích hệ thống",
    "Portfolio lập trình viên",
  ],
};

/** Every language version points at all the others for hreflang. */
const languageAlternates = {
  en: "/",
  vi: "/vi",
  "x-default": "/",
};

export function buildMetadata(content: Content): Metadata {
  const title = `${profile.name} (${profile.nameEn}) — ${content.role}`;
  const description = content.metaDescription;

  return {
    metadataBase: new URL(profile.url),
    title: {
      default: title,
      template: `%s | ${profile.nameEn}`,
    },
    description,
    applicationName: `${profile.nameEn} Portfolio`,
    authors: [{ name: profile.name, url: profile.url }],
    creator: profile.name,
    publisher: profile.name,
    generator: "Next.js",
    keywords: keywordsByLang[content.lang],
    category: "technology",
    alternates: {
      canonical: content.path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "profile",
      locale: content.lang === "vi" ? "vi_VN" : "en_US",
      alternateLocale: content.lang === "vi" ? ["en_US"] : ["vi_VN"],
      url: absoluteUrl(content.path),
      siteName: `${profile.nameEn} — Portfolio`,
      title,
      description,
      firstName: profile.firstName,
      lastName: profile.lastName,
      username: profile.username,
      // og:image comes from each language's opengraph-image.tsx file convention.
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const siteViewport: Viewport = {
  themeColor: brand.bg,
  // The site ships both themes; the theme toggle picks between them.
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};
