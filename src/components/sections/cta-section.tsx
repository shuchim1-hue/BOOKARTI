"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.1),transparent_60%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          Schedule a consultation with our expert team and discover how we can help your business achieve its goals
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="xl" variant="premium">
            <Link href="/appointment">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>
          </Button>
          <Button asChild size="xl" variant="premium-outline">
            <Link href="#">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Link>
          </Button>
          <Button asChild size="xl" variant="premium-outline">
            <Link href="tel:+91XXXXXXXXXX">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Link>
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-white/50 text-sm">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Free initial consultation
          <span className="w-2 h-2 rounded-full bg-accent" />
          No obligation
          <span className="w-2 h-2 rounded-full bg-accent" />
          Confidential
        </div>
      </div>
    </section>
  )
}
