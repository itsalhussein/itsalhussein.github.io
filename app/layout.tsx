import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alhussein Anwar — Product Engineer · Flutter & Native iOS",
  description: "Product engineer with 6+ years shipping mobile apps. Explore Alhussein Anwar’s work in native iOS, Flutter, device integrations, and Kotlin Multiplatform, plus experience and CV.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* A tiny blocking script applies the saved theme before first paint. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script id="portfolio-theme" src="/theme.js" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
