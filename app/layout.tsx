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
  title: "Japoi & Regine - Wedding Invitation",
  description:
    "You're invited to the wedding of Japoi & Regine! Join us on March 15, 2026 at Twin Lakes Tagaytay, Glass House. RSVP, read our love story, view our gallery, and leave a message for the couple.",
  keywords:
    "Japoi & Regine wedding, Filipino wedding, RSVP, wedding gallery, wedding message wall, wedding invitation, 2026 weddings, love story, guestbook, wedding registry, wedding details, wedding venues Twin Lakes Tagaytay, Glass House, #AnJAPaAngForeverNiREGINE",
  authors: [
    { name: "Japoi" },
    { name: "Regine" },
  ],
  creator: "Japoi & Regine",
  publisher: "Japoi & Regine",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://japoi-and-regine-invitation.vercel.app/"),
  alternates: {
    canonical: "https://japoi-and-regine-invitation.vercel.app/",
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
    title: "Japoi & Regine Wedding | March 15, 2026",
    description:
      "Celebrate the union of Japoi & Regine on March 15, 2026 at Twin Lakes Tagaytay, Glass House. Discover our love story, RSVP, view the gallery, and leave your wishes!",
    url: "https://japoi-and-regine-invitation.vercel.app/",
    siteName: "Japoi and Regine Wedding",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://japoi-and-regine-invitation.vercel.app/Details/linkPreview.png",
        width: 1200,
        height: 630,
        alt: "Japoi & Regine Wedding Invitation - March 15, 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japoi & Regine Wedding Invitation",
    description:
      "You're invited to the wedding of Japoi & Regine! March 15, 2026. RSVP, view our gallery, and leave a message! #AnJAPaAngForeverNiREGINE",
    images: ["https://japoi-and-regine-invitation.vercel.app/Details/linkPreview.png"],
    creator: "@japoiandregine",
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
      name: "Jay-R & Jennifer Wedding",
      startDate: "2026-01-24T09:00:00+08:00",
      endDate: "2026-01-24T12:00:00+08:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: [
        {
          "@type": "Place",
          name: "Twin Lakes Tagaytay, Glass House, Tagaytay City",
          address: {
            "@type": "PostalAddress",
            streetAddress: "#24 San Juan St., Brgy. Poblacion, Tagaytay City",
            addressLocality: "Tagaytay City",
            addressRegion: "Tagaytay City",
            postalCode: "1440",
            addressCountry: "PH",
          },
        },
        {
          "@type": "Place",
          name: "Twin Lakes Tagaytay, Glass House, Tagaytay City",
          address: {
            "@type": "PostalAddress",
            streetAddress: "#24 San Juan St., Brgy. Poblacion, Tagaytay City",
            addressLocality: "Tagaytay City",
            addressRegion: "Tagaytay City",
            postalCode: "4120",
            addressCountry: "PH",
          },
        },
      ],
      image: ["https://japoi-and-regine-invitation.vercel.app/Details/linkPreview.png"],
      description:
        "You're invited to the wedding of Japoi & Regine! Join us on March 15, 2026 at Twin Lakes Tagaytay, Glass House, Tagaytay City. RSVP, read our love story, view our gallery, and leave a message for the couple.",
      organizer: {
        "@type": "Person",
        name: "Japoi & Regine",
      },
      offers: {
        "@type": "Offer",
        url: "https://japoi-and-regine-invitation.vercel.app/",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "PHP",
      },
        eventHashtag: "#AnJAPaAngForeverNiREGINE",
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
