"use client";

import { useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)] backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-[var(--color-fg)]"
        >
          <span className="text-[var(--color-accent)]">~/</span>
          {profile.nameEn.toLowerCase().replace(/\s+/g, "-")}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-fg)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download
            className="hidden rounded-md border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:inline-block"
          >
            Download CV
          </a>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-fg)] md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <ul
          id="mobile-menu"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-fg)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
