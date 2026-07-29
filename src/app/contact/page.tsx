import type { Metadata } from "next"
import ContactPageClient from "./client"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with CA Minakshi Verma & Associates. Visit our India or Australia office, call, email, or WhatsApp us.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
