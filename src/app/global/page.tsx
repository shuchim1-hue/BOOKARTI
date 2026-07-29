import type { Metadata } from "next"
import GlobalPageClient from "./client"

export const metadata: Metadata = {
  title: "Global",
  description: "TaxVolca's global business advisory services - cross-border tax, FEMA, international structuring, and market entry across 25+ countries.",
}

export default function GlobalPage() {
  return <GlobalPageClient />
}
