import type { Metadata } from "next"
import ClientPortalPageClient from "./client"

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Secure client portal for document upload, report downloads, invoice management, and compliance tracking.",
}

export default function ClientPortalPage() {
  return <ClientPortalPageClient />
}
