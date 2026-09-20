import { Geist, Geist_Mono } from "next/font/google";

/** Shared by the language root layouts and the global 404 (which renders outside them). */
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fontClassName = `${geistSans.variable} ${geistMono.variable}`;
