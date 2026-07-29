"use client"

import { whatsapp } from "@/lib/data"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <Link
       href={`https://wa.me/${whatsapp}?text=Hi%20TaxVolca%2C%20I%20need%20a%20consultation`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 animate-pulse-gold group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-[10px] flex items-center justify-center font-bold">
        1
      </span>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-primary px-4 py-2 rounded-xl shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat on WhatsApp
      </span>
    </Link>
  )
}
