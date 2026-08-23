import type { Content } from "../data/content";
import { profile } from "../data/shared";
import { SectionHeading } from "./section-heading";
import {
  GlobeIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";

export function Contact({ content }: { content: Content }) {
  const copy = content.sections.contact;
  const { channels } = content.ui;

  const items = [
    {
      label: channels.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: MailIcon,
    },
    {
      label: channels.phone,
      value: profile.phoneDisplay,
      href: `tel:${profile.phone}`,
      Icon: PhoneIcon,
    },
    {
      label: channels.linkedin,
      value: "in/nhutminhit2001",
      href: profile.socials.linkedin,
      Icon: LinkedInIcon,
    },
    {
      label: channels.website,
      value: "nhutminhit.io.vn",
      href: profile.socials.website,
      Icon: GlobeIcon,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
        />

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map(({ label, value, href, Icon }) => {
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
