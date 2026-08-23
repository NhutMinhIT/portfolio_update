import { contentVi } from "../../data/content.vi";
import { profile } from "../../data/shared";
import { ogContentType, ogSize, renderOgImage } from "../../lib/og-image";

export const alt = `${profile.name} — ${contentVi.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function VietnameseOpengraphImage() {
  return renderOgImage(contentVi);
}
