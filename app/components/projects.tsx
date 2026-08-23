import type { Content, Project } from "../data/content";

/**
 * Projects belonging to one role, rendered inside that role's timeline entry.
 * `anchor` marks the first group so the nav's "Projects" link still lands on
 * the start of the project content.
 */
export function RoleProjects({
  projects,
  label,
  anchor,
}: {
  projects: Project[];
  label: string;
  anchor?: boolean;
}) {
  if (projects.length === 0) return null;

  return (
    <div
      id={anchor ? "projects" : undefined}
      className="mt-5 border-t border-[var(--color-border)] pt-5 scroll-mt-28"
    >
      <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
        {label} · {projects.length}
      </p>

      <div className="mt-4 grid gap-4">
        {projects.map((project) => (
          <article
            key={`${project.name}-${project.period}`}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="font-semibold text-[var(--color-fg)]">
                  {project.name}
                </h4>
                <p className="mt-0.5 text-sm text-[var(--color-accent-2)]">
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

            <ul className="mt-3 grid gap-2">
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

            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-xs text-[var(--color-fg)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

/** Groups projects by the company they were delivered for. */
export function projectsByCompany(content: Content, company: string): Project[] {
  return content.projects.filter((project) => project.org === company);
}
