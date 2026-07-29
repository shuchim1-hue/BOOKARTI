import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
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
    "Premium Chartered Accountancy and Legal Consultancy firm serving businesses in India and Australia. Expert taxation, GST, audit, corporate services, and cross-border advisory with AI-powered solutions.",
  keywords: [
    "Chartered Accountant", "CA Zirakpur", "CA India", "CPA Australia", "Taxation", "GST",
    "Audit", "Corporate Services", "Business Advisory", "Indian CA", "Australian Tax",
    "NRI Services", "Company Registration", "Startup India", "Legal Consultancy",
    "Tax Consultant", "CA Minakshi Verma", "Zirakpur CA",
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
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/logo.svg",
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
              telephone: "+91-8146-252-252",
              address: {
                "@type": "PostalAddress",
                streetAddress: "#90, Dikshant School Road, VIP Road",
                addressLocality: "Zirakpur",
                addressRegion: "Punjab",
                postalCode: "140603",
                addressCountry: "IN",
              },
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
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
