/**
 * Dark-theme brand colours, mirrored from `@theme` in globals.css.
 * Used where CSS variables are unavailable: OG images, manifest, theme-color.
 */
export const brand = {
  bg: "#0a0a0b",
  fg: "#ededf0",
  muted: "#8a8a94",
  accent: "#34d399",
  accent2: "#22d3ee",
} as const;

/** Browser-chrome colour per theme; mirrors `--color-bg` for each `data-theme`. */
export const themeColor = {
  dark: brand.bg,
  light: "#f7f8fa",
} as const;

/** `hex` (#rrggbb) with an alpha channel, for Satori/OG gradients. */
export function withAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
