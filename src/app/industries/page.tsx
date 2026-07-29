import type { Metadata } from "next"
import IndustriesPageClient from "./client"

export const metadata: Metadata = {
  title: "Industries",
  description: "Industry-specific accounting, tax, and legal solutions for hospitality, healthcare, real estate, manufacturing, startups, and more.",
}

export default function IndustriesPage() {
  return <IndustriesPageClient />
}
