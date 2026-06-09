import { projects } from "../data/portfolio";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" className="border-b border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          label="project-experience"
          title="Project Experience"
          description="Selected projects across enterprise, recruitment, and booking domains."
        />

        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={`${project.name}-${project.period}`}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-fg)]">
                    {project.name}{" "}
                    <span className="text-[var(--color-muted)]">
                      — {project.org}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-accent-2)]">
                    {project.role}
                    <span className="text-[var(--color-muted)]">
                      {" · "}
                      {project.teamSize}
                    </span>
                  </p>
                </div>
                <span className="font-mono text-xs text-[var(--color-muted)]">
                  {project.period}
                </span>
              </div>

              <ul className="mt-4 grid gap-2">
                {project.points.map((point) => (
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
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 font-mono text-xs text-[var(--color-fg)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
