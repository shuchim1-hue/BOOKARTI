import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "CA Minakshi Verma & Associates | Indian & Australian Chartered Accountants",
    template: "%s | CA Minakshi Verma & Associates",
  },
  description:
    "Premium Chartered Accountancy and Legal Consultancy firm serving businesses in India and Australia. Expert taxation, GST, audit, corporate services, and cross-border advisory.",
  keywords: [
    "Chartered Accountant", "CA India", "CPA Australia", "Taxation", "GST", "Audit",
    "Corporate Services", "Business Advisory", "Indian CA", "Australian Tax",
    "NRI Services", "Company Registration", "Startup India", "Legal Consultancy",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "CA Minakshi Verma & Associates",
    title: "CA Minakshi Verma & Associates | Your Global Business & Compliance Partner",
    description: "Indian & Australian Chartered Accountants | Legal | Tax | Corporate Advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "CA Minakshi Verma & Associates",
    description: "Your Global Business & Compliance Partner",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "CA Minakshi Verma & Associates",
              description: "Indian & Australian Chartered Accountants | Legal | Tax | Corporate Advisory",
              url: "https://caminakshiverma.com",
              email: "info@caminakshiverma.com",
              knowsAbout: ["Accounting", "Taxation", "GST", "Audit", "Corporate Services", "ROC Compliance", "Legal Services", "Funding & Finance", "Startup Services", "FEMA", "NRI Services", "Australia Services"],
              areaServed: ["India", "Australia"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
