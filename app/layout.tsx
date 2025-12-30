import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Feel the Stars - Experience Constellations Through Touch",
  description:
    "A concept app helping blind and visually impaired people experience the wonder of constellations through touch, haptics, and audio. Built with accessibility first.",
  generator: "v0.app",
  keywords: [
    "accessibility",
    "blind",
    "visually impaired",
    "constellations",
    "astronomy",
    "haptics",
    "assistive technology",
  ],
  authors: [{ name: "Feel the Stars Team" }],
  openGraph: {
    title: "Feel the Stars - Experience Constellations Through Touch",
    description:
      "Experience constellations through touch and haptics. Built with accessibility first for blind and visually impaired users.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
