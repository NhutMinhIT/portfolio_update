import { certifications } from "../data/portfolio";
import { SectionHeading } from "./section-heading";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b border-[var(--color-border)] py-20"
    >
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          label="certifications"
          title="Certifications"
          description="Key certifications and professional credentials."
        />

        <ul className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-accent)]"
            >
              <div>
                <p className="font-mono text-xs text-[var(--color-accent)]">
                  {cert.issuer}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--color-fg)]">
                  {cert.name}
                </p>
              </div>
              <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">
                {cert.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
