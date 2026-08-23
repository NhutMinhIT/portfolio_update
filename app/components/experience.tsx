import type { Content } from "../data/content";
import { projectsByCompany, RoleProjects } from "./projects";
import { SectionHeading } from "./section-heading";

export function Experience({ content }: { content: Content }) {
  const copy = content.sections.experience;
  const { experiences } = content;
  // The first role that has projects owns the `projects` anchor.
  const anchorCompany = experiences.find(
    (exp) => projectsByCompany(content, exp.company).length > 0
  )?.company;

  return (
    <section
      id="experience"
      className="border-b border-[var(--color-border)] py-20"
    >
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
        />

        <ol className="relative ml-3 border-l border-[var(--color-border)]">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="mb-10 ml-6 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)]" />
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-fg)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--color-accent-2)]">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[var(--color-muted)]">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 grid gap-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--color-muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-xs text-[var(--color-muted)]"
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>

                <RoleProjects
                  projects={projectsByCompany(content, exp.company)}
                  label={content.ui.projectsInRole}
                  anchor={exp.company === anchorCompany}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
