import type { Metadata } from "next"
import FAQPageClient from "./client"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about Income Tax, GST, Company Registration, Audit, TDS, NRI Services, Australia compliance, and more.",
}

export default function FAQPage() {
  return <FAQPageClient />
}
