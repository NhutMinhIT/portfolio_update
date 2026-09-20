import Image from "next/image";
import type { Content } from "../data/content";
import { profile } from "../data/shared";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./icons";

export function Hero({ content }: { content: Content }) {
  const { ui } = content;

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

      <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-28 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-xs text-[var(--color-muted)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              {ui.badge}
            </p>

            <h1 className="reveal max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-[var(--color-fg)] sm:text-6xl">
              <span className="block">{ui.greeting}</span>
              <span className="mt-2 block text-3xl text-[var(--color-fg)] sm:text-5xl">
                {ui.intro}{" "}
                <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </span>
            </h1>

            <p
              className="reveal [animation-delay:50ms] mt-4 flex flex-wrap items-center font-mono text-base text-[var(--color-accent-2)] sm:text-lg"
            >
              {content.headline.split(" | ").map((keyword, index, all) => (
                <span key={keyword} className="whitespace-nowrap">
                  {keyword}
                  {index < all.length - 1 ? (
                    <span aria-hidden className="mx-3 text-[var(--color-muted)]">
                      |
                    </span>
                  ) : null}
                </span>
              ))}
            </p>

            <p
              className="reveal [animation-delay:100ms] mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
            >
              {content.tagline}
            </p>

            <div
              className="reveal [animation-delay:120ms] mt-6 flex items-center gap-2 text-sm text-[var(--color-muted)]"
            >
              <MapPinIcon width={16} height={16} />
              {content.location}
            </div>

            <div
              className="reveal [animation-delay:150ms] mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
              >
                {ui.getInTouch}
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
                {ui.downloadCv}
              </a>

              <div className="ml-auto flex items-center gap-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ui.githubLabel}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
                >
                  <GitHubIcon width={20} height={20} />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ui.linkedinLabel}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
                >
                  <LinkedInIcon width={20} height={20} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label={ui.emailLabel}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
                >
                  <MailIcon width={20} height={20} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="reveal [animation-delay:100ms] relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
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
                alt={`${profile.name} — ${content.role}`}
                width={1024}
                height={1024}
                priority
                sizes="(max-width: 640px) 20rem, (max-width: 1024px) 24rem, 26rem"
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <dl
          className="reveal [animation-delay:200ms] mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {ui.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <dt className="text-2xl font-bold text-[var(--color-fg)] sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
