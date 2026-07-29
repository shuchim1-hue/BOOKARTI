import type { Metadata } from "next"
import AboutPageClient from "./client"

export const metadata: Metadata = {
  title: "About TaxVolca",
  description: "Learn about TaxVolca's mission, leadership, global presence, and technology-driven approach to tax, legal, and business advisory.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
