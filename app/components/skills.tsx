import { skills } from "../data/portfolio";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          label="skills"
          title="Tech Stack & Skills"
          description="Tools and technologies I use to build scalable, high-performance products."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <h3 className="mb-4 font-mono text-sm text-[var(--color-accent)]">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 text-sm text-[var(--color-fg)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
