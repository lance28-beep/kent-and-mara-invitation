import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Inter, Crimson_Text, Ephesis } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-serif" })
const crimsonText = Crimson_Text({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson" 
})
const ephesis = Ephesis({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-ephesis" 
})
const chicanos = localFont({
  src: "../chicanos-font/ChicanosPersonalUseRegular-qZDw5.ttf",
  variable: "--font-chicanos",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kent & Mara - Wedding Invitation",
  description:
    "You're invited to the wedding of Kent & Mara! Join us on February 26, 2026 at Municipal Trial Court, Prosperidad, Agusan del Sur. RSVP, read our love story, view our gallery, and leave a message for the couple.",
  keywords:
    "Kent & Mara wedding, Filipino wedding, RSVP, wedding gallery, wedding message wall, wedding invitation, 2026 weddings, love story, guestbook, wedding registry, wedding details, wedding venues Municipal Trial Court, Prosperidad, Agusan del Sur, #KentAndMaraForever",
  authors: [
    { name: "Kent" },
    { name: "Mara" },
  ],
  creator: "Kent & Mara",
  publisher: "Kent & Mara",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://kent-and-mara-invitation.vercel.app/"),
  alternates: {
    canonical: "https://kent-and-mara-invitation.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Kent & Mara Wedding | February 26, 2026",
    description:
      "Celebrate the union of Kent & Mara on February 26, 2026 at Municipal Trial Court, Prosperidad, Agusan del Sur. Discover our love story, RSVP, view the gallery, and leave your wishes!",
    url: "https://kent-and-mara-invitation.vercel.app/",
    siteName: "Kent and Mara Wedding",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://kent-and-mara-invitation.vercel.app/Details/LinkPreview.jpg",
        width: 1200,
        height: 630,
        alt: "Kent & Mara Wedding Invitation - February 26, 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
        title: "Kent & Mara Wedding Invitation",
    description:
      "You're invited to the wedding of Kent & Mara! February 26, 2026. RSVP, view our gallery, and leave a message! #KentAndMaraForever",
    images: ["https://kent-and-mara-invitation.vercel.app/Details/LinkPreview.jpg"],
    creator: "@kentandmara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
        name: "Kent & Mara Wedding",
      startDate: "2026-02-26T09:00:00+08:00",
      endDate: "2026-02-26T12:00:00+08:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: [
        {
          "@type": "Place",
          name: "Municipal Trial Court, Prosperidad, Agusan del Sur",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Prosperidad, Agusan del Sur",
            addressLocality: "Prosperidad",
            addressRegion: "Agusan del Sur",
            postalCode: "8421",
            addressCountry: "PH",
          },
        },
        {
          "@type": "Place",
          name: "RCBI Hotel, National Highway, San Isidro, San Francisco, Agusan del Sur",
          address: {
            "@type": "PostalAddress",
            streetAddress: "National Highway, San Isidro, San Francisco, Agusan del Sur",
            addressLocality: "San Francisco",
            addressRegion: "Agusan del Sur",
            postalCode: "8421",
            addressCountry: "PH",
          },
        },
      ],
      image: ["https://kent-and-mara-invitation.vercel.app/Details/LinkPreview.jpg"],
      description:
        "You're invited to the wedding of Kent & Mara! Join us on February 26, 2026 at Municipal Trial Court, Prosperidad, Agusan del Sur. RSVP, read our love story, view our gallery, and leave a message for the couple.",
      organizer: {
        "@type": "Person",
        name: "Kent & Mara",
      },
      offers: {
        "@type": "Offer",
        url: "https://kent-and-mara-invitation.vercel.app/",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "PHP",
      },
          eventHashtag: "#KentAndMaraForever",
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#D4AF37" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/mobile-background/DSCF2614-min.jpg" media="(max-width: 767px)" />
        <link rel="preload" as="image" href="/desktop-background/DSCF2444-min.jpg" media="(min-width: 768px)" />
      </head>
      <body className={`${inter.variable} ${greatVibes.variable} ${crimsonText.variable} ${ephesis.variable} ${chicanos.variable} font-inter antialiased text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
