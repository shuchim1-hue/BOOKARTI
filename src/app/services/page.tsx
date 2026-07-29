import type { Metadata } from "next"
import ServicesPageClient from "./client"

export const metadata: Metadata = {
  title: "Services",
  description: "Complete range of accounting, taxation, GST, audit, corporate, legal, and advisory services for businesses in India and Australia.",
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
