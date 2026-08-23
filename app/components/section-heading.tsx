type Props = {
  label: string;
  title: string;
  description?: string;
  /** Renders the description as a highlighted lede instead of muted body text. */
  highlightDescription?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  highlightDescription,
}: Props) {
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
        <p
          className={
            highlightDescription
              ? "mt-1 max-w-3xl border-l-2 border-[var(--color-accent)] pl-5 text-lg font-medium leading-relaxed text-[var(--color-fg)] sm:text-xl"
              : "max-w-2xl text-[var(--color-muted)]"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
