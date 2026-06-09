type Props = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <span className="font-mono text-sm text-[var(--color-accent)]">
        <span className="text-[var(--color-muted)]">./</span>
        {label}
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-[var(--color-fg)] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[var(--color-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
