import ResourcesPageClient from "./client"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Resources", description: "TaxVolca resources - blog, guides, whitepapers, and insights on tax, legal, audit, and business advisory." }

export default function ResourcesPage() { return <ResourcesPageClient /> }
