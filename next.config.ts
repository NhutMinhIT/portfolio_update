import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit .next/standalone (server.js + only the traced node_modules) so the
  // Docker runner stage can ship without installing dependencies.
  output: "standalone",
  experimental: {
    // Required for a styled 404: the app has one root layout per language,
    // so there is no single layout Next could compose a global 404 from.
    globalNotFound: true,
  },
};

export default nextConfig;
