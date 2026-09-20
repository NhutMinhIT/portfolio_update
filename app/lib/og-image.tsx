import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Content } from "../data/content";
import { profile } from "../data/shared";
import { brand, withAlpha } from "./theme";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Load the avatar once at module init (hoisted static I/O). The OG card only
// shows it at 360px, so it reads the downsized copy rather than the hero image.
const avatarDataUrl = `data:image/jpeg;base64,${readFileSync(
  join(process.cwd(), "public", "nguyennhutminh-og.jpg")
).toString("base64")}`;

/** Social card for one language version of the site. */
export function renderOgImage(content: Content) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          padding: "80px",
          background: brand.bg,
          backgroundImage: `radial-gradient(circle at 20% 0%, ${withAlpha(brand.accent, 0.18)}, transparent 45%), radial-gradient(circle at 90% 100%, ${withAlpha(brand.accent2, 0.14)}, transparent 40%)`,
          color: brand.fg,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: brand.accent,
              fontFamily: "monospace",
              marginBottom: 24,
            }}
          >
            ~/{profile.nameEn.toLowerCase().replace(/\s+/g, "-")}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              color: brand.accent2,
            }}
          >
            {content.headline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 24,
              color: brand.muted,
            }}
          >
            {content.location} · {profile.url.replace("https://", "")}
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarDataUrl}
          alt=""
          width={360}
          height={360}
          style={{
            width: 360,
            height: 360,
            borderRadius: 32,
            objectFit: "cover",
            border: `4px solid ${withAlpha(brand.accent, 0.5)}`,
          }}
        />
      </div>
    ),
    { ...ogSize }
  );
}
