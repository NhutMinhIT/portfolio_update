import { profile } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p className="font-mono text-sm text-[var(--color-muted)]">
          © {year} {profile.name}.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <MailIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
