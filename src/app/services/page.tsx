import type { Metadata } from "next"
import ServicesPageClient from "./client"

export const metadata: Metadata = {
  title: "Services",
  description: "TaxVolca's six specialized divisions: Tax, Audit, Legal, Capital, Global, and AI-powered solutions for businesses worldwide.",
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
