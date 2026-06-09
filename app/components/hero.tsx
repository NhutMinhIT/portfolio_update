import Image from "next/image";
import { profile } from "../data/portfolio";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./icons";

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "60K+", label: "Daily users served" },
  { value: "10+", label: "Production projects" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--color-border)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-cubes" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-5 pb-20 pt-28 sm:pt-32 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-xs text-[var(--color-muted)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            Open to opportunities
          </p>

          <h1 className="reveal max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-[var(--color-fg)] sm:text-6xl">
            <span className="block">Hi, welcome to my portfolio!</span>
            <span className="mt-2 block text-3xl text-[var(--color-fg)] sm:text-5xl">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] bg-clip-text text-transparent">
                {profile.name}
              </span>
            </span>
          </h1>

          <p
            className="reveal mt-4 font-mono text-base text-[var(--color-accent-2)] sm:text-lg"
            style={{ animationDelay: "0.05s" }}
          >
            {profile.headline}
          </p>

          <p
            className="reveal mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
            style={{ animationDelay: "0.1s" }}
          >
            {profile.summary}
          </p>

          <div
            className="reveal mt-6 flex items-center gap-2 text-sm text-[var(--color-muted)]"
            style={{ animationDelay: "0.12s" }}
          >
            <MapPinIcon width={16} height={16} />
            {profile.location}
          </div>

          <div
            className="reveal mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.15s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowRightIcon
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <DownloadIcon width={16} height={16} />
              Download CV
            </a>

            <div className="ml-auto flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
              >
                <GitHubIcon width={20} height={20} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
              >
                <LinkedInIcon width={20} height={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
              >
                <MailIcon width={20} height={20} />
              </a>
            </div>
          </div>

          <dl
            className="reveal mt-14 grid max-w-2xl grid-cols-3 gap-4"
            style={{ animationDelay: "0.2s" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <dt className="text-2xl font-bold text-[var(--color-fg)] sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="reveal relative mx-auto w-full max-w-xs lg:max-w-none"
          style={{ animationDelay: "0.1s" }}
        >
          <div
            className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))",
            }}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl">
            <Image
              src="/nguyennhutminh.png"
              alt={`${profile.name} — ${profile.role}`}
              width={1024}
              height={1024}
              priority
              sizes="(max-width: 1024px) 20rem, 24rem"
              className="aspect-square h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
