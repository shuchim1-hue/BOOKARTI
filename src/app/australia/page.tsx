import type { Metadata } from "next"
import AustraliaPageClient from "./client"

export const metadata: Metadata = {
  title: "Australia Services",
  description: "Australian tax, BAS, ASIC compliance, company registration, and cross-border advisory services for Indian and Australian businesses.",
}

export default function AustraliaPage() {
  return <AustraliaPageClient />
}
