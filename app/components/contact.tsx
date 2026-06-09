import { profile } from "../data/portfolio";
import { SectionHeading } from "./section-heading";
import {
  GitHubIcon,
  GlobeIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
    Icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "in/nhutminhit2001",
    href: profile.socials.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "NhutMinhIT",
    href: profile.socials.github,
    Icon: GitHubIcon,
  },
  {
    label: "Website",
    value: "nhutminhit.io.vn",
    href: profile.socials.website,
    Icon: GlobeIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          label="contact"
          title="Let's work together"
          description="Have a project, role, or idea in mind? I'm always open to a conversation."
        />

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon }) => {
              const external = href.startsWith("http");
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 transition-colors hover:border-[var(--color-accent)]"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg)] text-[var(--color-accent)]">
                      <Icon width={20} height={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs text-[var(--color-muted)]">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent)]">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
