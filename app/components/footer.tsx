import Image from "next/image";
import type { Content } from "../data/content";
import { profile } from "../data/shared";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const ventures = [
  {
    name: "Phuc Nguyen Trading & Import-Export",
    href: "https://phucnguyenlog.com/",
    src: "/logo-phuc-nguyen-log.png",
    width: 300,
    height: 200,
    // Rendered height × aspect ratio, so next/image builds a srcset that fits.
    sizes: "60px",
    className: "h-10 w-auto",
  },
  {
    name: "Điện Máy Phúc Nguyên",
    href: "https://dienmayphucnguyen.com/",
    src: "/logo-dien-may.png",
    width: 914,
    height: 200,
    sizes: "128px",
    className: "h-7 w-auto",
  },
];

export function Footer({ content }: { content: Content }) {
  const year = new Date().getFullYear();
  const { ui } = content;

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row">
        <p className="font-mono text-sm text-[var(--color-muted)]">
          © {year} {profile.name}.
        </p>

        <ul
          aria-label={ui.venturesTitle}
          className="order-last flex flex-wrap items-center justify-center gap-7 sm:order-none"
        >
          {ventures.map((venture) => (
            <li key={venture.href}>
              <a
                href={venture.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={venture.name}
                className="block opacity-75 transition-opacity hover:opacity-100"
              >
                <Image
                  src={venture.src}
                  alt={venture.name}
                  width={venture.width}
                  height={venture.height}
                  sizes={venture.sizes}
                  className={venture.className}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.githubLabel}
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.linkedinLabel}
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={ui.emailLabel}
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            <MailIcon width={18} height={18} />
          </a>
        </div>
      </div>

    </footer>
  );
}
