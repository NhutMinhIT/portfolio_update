import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "./data/shared";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — Page not found",
  description: "This page does not exist.",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col items-center justify-center gap-6 px-5 text-center font-sans">
        <p className="font-mono text-sm text-[var(--color-accent)]">404</p>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
          This page does not exist
        </h1>
        <p className="max-w-md text-[var(--color-muted)]">
          The link may be broken or the page may have moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Plain anchors: this page renders outside the router tree, so there
              is no router context for next/link to hook into. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
          >
            Back to {profile.nameEn}
          </a>
          <a
            href="/vi"
            hrefLang="vi"
            className="rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Bản tiếng Việt
          </a>
        </div>
      </body>
    </html>
  );
}
