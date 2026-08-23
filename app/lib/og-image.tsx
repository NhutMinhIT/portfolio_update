import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Content } from "../data/content";
import { profile } from "../data/shared";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Load the avatar once at module init (hoisted static I/O)
const avatarDataUrl = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "nguyennhutminh.png")
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
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(52,211,153,0.18), transparent 45%), radial-gradient(circle at 90% 100%, rgba(34,211,238,0.14), transparent 40%)",
          color: "#ededf0",
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
              color: "#34d399",
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
              color: "#22d3ee",
            }}
          >
            {content.headline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 24,
              color: "#8a8a94",
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
            border: "4px solid rgba(52,211,153,0.5)",
          }}
        />
      </div>
    ),
    { ...ogSize }
  );
}
