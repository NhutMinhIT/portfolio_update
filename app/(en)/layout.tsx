import "../globals.css";
import { RootShell } from "../components/root-shell";
import { content } from "../data/content";
import { buildMetadata, siteViewport } from "../lib/site-metadata";

export const metadata = buildMetadata(content.en);
export const viewport = siteViewport;

export default function EnglishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell content={content.en}>{children}</RootShell>;
}
