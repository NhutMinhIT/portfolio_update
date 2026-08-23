import type { SkillGroup } from "./shared";
import { contentEn } from "./content.en";
import { contentVi } from "./content.vi";

export const languages = ["en", "vi"] as const;
export type Lang = (typeof languages)[number];

export type FocusArea = {
  label: string;
  title: string;
  detail: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  highlight?: string;
  description: string;
};

export type Award = {
  title: string;
  org: string;
  year: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
  tags: string[];
};

export type Project = {
  name: string;
  org: string;
  role: string;
  period: string;
  teamSize: string;
  points: string[];
  stack: string[];
};

export type NavLink = {
  href: string;
  label: string;
};

export type SectionCopy = {
  label: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Content = {
  lang: Lang;
  /** BCP 47 tag for the <html lang> attribute. */
  htmlLang: string;
  /** Path of this language's home page. */
  path: string;
  role: string;
  headline: string;
  tagline: string;
  summary: string[];
  focusAreas: FocusArea[];
  location: string;
  metaDescription: string;
  navLinks: NavLink[];
  ui: {
    badge: string;
    greeting: string;
    intro: string;
    getInTouch: string;
    downloadCv: string;
    backToTop: string;
    awardsTitle: string;
    projectsInRole: string;
    venturesTitle: string;
    stats: Stat[];
    /** Label of the button that switches to the other language. */
    switchLanguage: string;
    switchLanguageShort: string;
    githubLabel: string;
    linkedinLabel: string;
    emailLabel: string;
    menuLabel: string;
    lightMode: string;
    darkMode: string;
    switchToLight: string;
    switchToDark: string;
    channels: {
      email: string;
      phone: string;
      linkedin: string;
      website: string;
    };
  };
  sections: {
    about: SectionCopy;
    education: SectionCopy;
    skills: SectionCopy;
    experience: SectionCopy;
    contact: SectionCopy;
  };
  educations: Education[];
  awards: Award[];
  experiences: Experience[];
  projects: Project[];
  skills: SkillGroup[];
};

export const content: Record<Lang, Content> = {
  en: contentEn,
  vi: contentVi,
};

export function getContent(lang: Lang): Content {
  return content[lang];
}

/** The language a switcher on `lang`'s page should point at. */
export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "vi" : "en";
}
