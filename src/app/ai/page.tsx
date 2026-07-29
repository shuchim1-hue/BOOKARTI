import AIPageClient from "./client"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "TaxVolca AI", description: "TaxVolca AI - intelligent tax assistant, compliance automation, document analyzer, and predictive analytics powered by artificial intelligence." }

export default function AIPage() { return <AIPageClient /> }
