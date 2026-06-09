import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  certifications,
  educations,
  profile,
  skills,
} from "./data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} (${profile.nameEn}) — ${profile.role}`;
const description = profile.summary;

export const metadata: Metadata = {
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
  keywords: [
    "Nguyễn Nhựt Minh",
    "Nguyen Nhut Minh",
    "NhutMinhIT",
    "Software Engineer",
    "Fullstack Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "AI Application",
    "Web Developer Vietnam",
    "Lập trình viên",
    "Software Engineer Ho Chi Minh City",
    "Portfolio",
    "THACO",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: ["vi_VN"],
    url: profile.url,
    siteName: `${profile.nameEn} — Portfolio`,
    title,
    description,
    firstName: "Minh",
    lastName: "Nguyen Nhut",
    username: "NhutMinhIT",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
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

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.nameEn,
    jobTitle: profile.role,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: profile.url,
    image: `${profile.url}/nguyennhutminh.png`,
    sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.website],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    knowsAbout: skills.flatMap((group) => group.items),
    alumniOf: educations.map((edu) => ({
      "@type": "CollegeOrUniversity",
      name: edu.school,
    })),
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: cert.issuer },
    })),
    worksFor: { "@type": "Organization", name: "THACO Group" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans"
      >
        <script
          // Set theme before hydration to avoid a flash of incorrect theme
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark';}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
