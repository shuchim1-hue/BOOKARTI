import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
    title: { default: "BookArti | Faith, made possible.", template: "%s | BookArti" },
    description: "Book pujas, watch live temple darshan, connect with trusted pandits and make seva offerings from anywhere.",
    keywords: ["online puja", "live darshan", "pandit booking", "temple seva", "BookArti"],
  openGraph: {
    type: "website",
    locale: "en_IN",
      siteName: "BookArti",
      title: "BookArti | Faith, made possible.",
      description: "India's spiritual home, online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookArti",
    description: "Faith, made possible.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BookArti",
              description: "Online puja bookings, live temple darshan and community seva.",
              url: "https://bookarti.com",
              areaServed: "IN",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
