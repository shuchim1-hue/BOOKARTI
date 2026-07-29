import type { Metadata } from "next"
import AboutPageClient from "./client"

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet CA Minakshi Verma and our team of Chartered Accountants, Corporate Lawyers, and Tax Experts. Learn about our mission, vision, and values.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
