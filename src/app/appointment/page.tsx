import type { Metadata } from "next"
import AppointmentPageClient from "./client"

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Schedule a consultation with CA Minakshi Verma & Associates. Choose from video meeting, office visit, phone, or WhatsApp consultation.",
}

export default function AppointmentPage() {
  return <AppointmentPageClient />
}
