import type { Content } from "../data/content";
import {
  absoluteUrl,
  certifications,
  contentUpdatedAt,
  profile,
  skills,
} from "../data/shared";
import { fontClassName } from "../lib/fonts";
import { themeColor } from "../lib/theme";

/**
 * Google's "Profile page" structured data: a ProfilePage whose mainEntity is
 * the Person. Each language version is its own ProfilePage sharing one Person.
 */
function JsonLd({ content }: { content: Content }) {
  const person = {
    "@type": "Person",
    "@id": `${profile.url}/#person`,
    name: profile.name,
    alternateName: profile.nameEn,
    jobTitle: content.role,
    description: content.metaDescription,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: profile.url,
    image: absoluteUrl(profile.portrait),
    sameAs: [profile.socials.github, profile.socials.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.city,
      addressCountry: profile.countryCode,
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
    worksFor: { "@type": "Organization", name: profile.employer },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(content.path)}#profile`,
    url: absoluteUrl(content.path),
    inLanguage: content.htmlLang,
    dateModified: contentUpdatedAt,
    mainEntity: person,
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
      className={`${fontClassName} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans"
      >
        <script
          // Set theme before hydration to avoid a flash of incorrect theme
          dangerouslySetInnerHTML={{
            __html: `(function(){var t='dark';try{if(localStorage.getItem('theme')==='light')t='light';}catch(e){}document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==='light'?'${themeColor.light}':'${themeColor.dark}';})();`,
          }}
        />
        {children}
        <JsonLd content={content} />
      </body>
    </html>
  );
}
