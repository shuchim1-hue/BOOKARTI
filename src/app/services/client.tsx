"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DivisionsSection from "@/components/sections/divisions-section"
import Link from "next/link"

export default function ServicesPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient dark:bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(5,150,105,0.06),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise-Grade <span className="gold-gradient">Business Advisory</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Six specialized divisions working in concert to deliver comprehensive tax, legal,
              audit, capital, global, and AI-powered solutions. Big Four quality, boutique service.
            </p>
          </div>
        </div>
      </section>

      <DivisionsSection />

      <section className="relative py-20 bg-gradient-to-r from-primary dark:from-[#020617] to-primary-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Every business is unique. Our experts will design a solution tailored to your specific needs.
          </p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/contact">Speak with Our Team</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
