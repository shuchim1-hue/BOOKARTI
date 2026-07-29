import type { Metadata } from "next"
import IndiaPageClient from "./client"

export const metadata: Metadata = {
  title: "India Services",
  description: "Comprehensive accounting, taxation, GST, audit, corporate services, and compliance solutions for Indian businesses under Indian laws and regulations.",
}

export default function IndiaPage() {
  return <IndiaPageClient />
}
