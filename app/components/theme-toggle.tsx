"use client";

import { useSyncExternalStore } from "react";
import type { Content } from "../data/content";
import { themeColor } from "../lib/theme";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

/**
 * The theme lives on `<html data-theme>` (set by the inline script in
 * RootShell before hydration). This tiny store lets React read it without a
 * mount effect: the server snapshot is `null`, so the first client render
 * matches the server HTML and the real icon appears right after hydration.
 */
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme | null {
  return null;
}

function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", themeColor[next]);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // ignore storage errors (private mode / quota)
  }
  listeners.forEach((listener) => listener());
}

export function ThemeToggle({ content }: { content: Content }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { ui } = content;
  const isDark = theme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? ui.switchToLight : ui.switchToDark}
      title={isDark ? ui.lightMode : ui.darkMode}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      {theme === null ? (
        // Server render + hydration: theme unknown, keep the slot stable.
        <span className="h-[18px] w-[18px]" />
      ) : isDark ? (
        <SunIcon width={18} height={18} />
      ) : (
        <MoonIcon width={18} height={18} />
      )}
    </button>
  );
}
