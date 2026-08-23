import { Geist, Geist_Mono } from "next/font/google";
import type { Content } from "../data/content";
import { certifications, profile, skills } from "../data/shared";

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

function JsonLd({ content }: { content: Content }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${profile.url}/#person`,
    mainEntityOfPage: new URL(content.path, profile.url).toString(),
    inLanguage: content.htmlLang,
    name: profile.name,
    alternateName: profile.nameEn,
    jobTitle: content.role,
    description: content.metaDescription,
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
    alumniOf: content.educations.map((edu) => ({
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

/**
 * Shared <html>/<body> shell. Each language has its own root layout so that the
 * `lang` attribute is correct in the statically rendered HTML.
 */
export function RootShell({
  content,
  children,
}: Readonly<{ content: Content; children: React.ReactNode }>) {
  return (
    <html
      lang={content.htmlLang}
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
        <JsonLd content={content} />
      </body>
    </html>
  );
}
