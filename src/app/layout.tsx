import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: "TaxVolca® | Global Tax, Legal & Business Advisory",
    template: "%s | TaxVolca®",
  },
  description: "AI-powered global tax, legal, audit, and business advisory platform. Serving clients across 25+ countries with enterprise-grade expertise and boutique attention.",
  keywords: ["Tax", "Legal", "Audit", "Business Advisory", "AI Tax", "GST", "Company Registration", "International Tax", "Startup", "NRI", "India", "Australia"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "TaxVolca®",
    title: "TaxVolca® | Global Tax, Legal & Business Advisory",
    description: "Where Compliance Meets Growth. AI-powered tax, legal, audit & corporate advisory platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxVolca®",
    description: "Global Tax, Legal & Business Advisory",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/favicon.svg", apple: "/logo-app.svg" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "TaxVolca",
              description: "Global Tax, Legal & Business Advisory",
              url: "https://taxvolca.com",
              email: "hello@taxvolca.com",
              telephone: "+91-8146-252-252",
              address: {
                "@type": "PostalAddress",
                streetAddress: "#90, Dikshant School Road, VIP Road",
                addressLocality: "Zirakpur",
                addressRegion: "Punjab",
                postalCode: "140603",
                addressCountry: "IN",
              },
              areaServed: ["India", "Australia", "UAE", "Singapore", "United States", "United Kingdom", "Canada"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
