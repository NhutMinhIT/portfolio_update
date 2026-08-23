import type { Content } from "../data/content";
import { SectionHeading } from "./section-heading";
import { AwardIcon, GraduationIcon } from "./icons";

export function EducationAwards({ content }: { content: Content }) {
  const copy = content.sections.education;
  const { educations, awards } = content;

  return (
    <section
      id="education"
      className="border-b border-[var(--color-border)] py-20"
    >
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4">
            {educations.map((edu) => (
              <article
                key={edu.school}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                      <GraduationIcon width={20} height={20} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-[var(--color-fg)]">
                        {edu.school}
                      </h3>
                      <p className="text-sm text-[var(--color-accent-2)]">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">
                    {edu.period}
                  </span>
                </div>
                {edu.highlight ? (
                  <p className="mb-2 text-sm font-medium text-[var(--color-accent)]">
                    {edu.highlight}
                  </p>
                ) : null}
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {edu.description}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-[var(--color-fg)]">
              <AwardIcon width={18} height={18} className="text-[var(--color-accent)]" />
              {content.ui.awardsTitle}
            </h3>
            <ul className="grid gap-3">
              {awards.map((award) => (
                <li
                  key={`${award.title}-${award.year}`}
                  className="flex items-start justify-between gap-4 border-t border-[var(--color-border)] pt-3 first:border-t-0 first:pt-0"
                >
                  <div>
                    <p className="text-sm font-medium text-[var(--color-fg)]">
                      {award.title}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {award.org}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">
                    {award.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
