import { content as allContent, otherLang, type Content } from "../data/content";

/**
 * Switches between the English (`/`) and Vietnamese (`/vi`) versions of the page.
 * Each language is its own route with its own <html lang>, so this is a plain
 * link rather than client-side state.
 */
export function LanguageToggle({ content }: { content: Content }) {
  const target = allContent[otherLang(content.lang)];

  return (
    <a
      href={target.path}
      hrefLang={target.htmlLang}
      aria-label={content.ui.switchLanguage}
      title={content.ui.switchLanguage}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] font-mono text-xs font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      {content.ui.switchLanguageShort}
    </a>
  );
}
