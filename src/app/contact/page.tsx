import ContactPageClient from "./client"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Contact", description: "Contact TaxVolca - offices in India, Australia, and UAE. Book a consultation or reach out via phone, email, or WhatsApp." }

export default function ContactPage() { return <ContactPageClient /> }
