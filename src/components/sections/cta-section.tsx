"use client"

import { Button } from "@/components/ui/button"
import { brand } from "@/lib/data"
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary dark:from-[#020617] dark:via-[#0f172a] dark:to-[#020617]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,150,105,0.1),transparent_60%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Compliance?
        </h2>
        <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 10,000+ businesses worldwide that trust {brand.name} for their tax, legal, audit,
          and business advisory needs. Let&apos;s build your success story.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="xl" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl">
            <Link href="/contact">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Consultation
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Link href={`https://wa.me/918146252252`} target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Link href="tel:+918146252252">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Link>
          </Button>
        </div>
        <p className="mt-6 text-white/30 text-sm">
          Free initial consultation · No obligation · Confidential
        </p>
      </div>
    </section>
  )
}
