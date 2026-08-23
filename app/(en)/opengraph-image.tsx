import { contentEn } from "../data/content.en";
import { profile } from "../data/shared";
import { ogContentType, ogSize, renderOgImage } from "../lib/og-image";

export const alt = `${profile.name} — ${contentEn.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage(contentEn);
}
