import type { Content } from "../data/content";
import { SectionHeading } from "./section-heading";

export function About({ content }: { content: Content }) {
  const copy = content.sections.about;

  return (
    <section id="about" className="border-b border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
          highlightDescription
        />

        <div className="max-w-3xl space-y-5">
          {content.summary.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {content.focusAreas.map((area) => (
            <li
              key={area.label}
              className="border-l-2 border-[var(--color-border)] pl-4 transition-colors hover:border-[var(--color-accent)]"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                {area.label}
              </p>
              <p className="mt-2 text-base font-semibold text-[var(--color-fg)]">
                {area.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {area.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
