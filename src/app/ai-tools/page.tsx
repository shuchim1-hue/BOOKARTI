import type { Metadata } from "next"
import AIToolsPageClient from "./client"

export const metadata: Metadata = {
  title: "AI Tools",
  description: "AI-powered tax assistant, compliance reminder, document analyzer, business health check, and funding eligibility checker for your business.",
}

export default function AIToolsPage() {
  return <AIToolsPageClient />
}
