import type { Metadata } from "next"
import AdminPageClient from "./client"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Administrative dashboard for TaxVolca - manage appointments, clients, documents, and more.",
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  return <AdminPageClient />
}
