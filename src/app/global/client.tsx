"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader, SectionWrapper } from "@/components/sections/section-wrapper"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Shield, Users, Building2, BookOpen } from "lucide-react"
import Link from "next/link"

const globalServices = [
  { icon: <Globe className="w-8 h-8" />, title: "International Tax", desc: "Cross-border tax planning, DTAA advisory, transfer pricing, and global tax compliance across jurisdictions.", items: ["Tax Treaty Analysis", "Permanent Establishment Advisory", "Foreign Tax Credit", "Global Mobility Tax"] },
  { icon: <Shield className="w-8 h-8" />, title: "FEMA & RBI Compliance", desc: "Complete FEMA advisory for FDI, ODI, ECB, overseas investments, and regulatory compliance.", items: ["FDI Compliance & Reporting", "ODI Structuring", "ECB Advisory", "Foreign Investment Approvals"] },
  { icon: <Building2 className="w-8 h-8" />, title: "Market Entry & Expansion", desc: "Strategic market entry support for India, Australia, UAE, and global markets.", items: ["India Entry Strategy", "Australia Setup", "UAE Company Formation", "Singapore Registration"] },
  { icon: <Users className="w-8 h-8" />, title: "Cross-Border Structuring", desc: "Optimize your global corporate structure for tax efficiency, compliance, and growth.", items: ["Holding Company Setup", "IP Holding Structures", "Financing Structures", "Exit Planning"] },
  { icon: <BookOpen className="w-8 h-8" />, title: "Global Compliance", desc: "Multi-jurisdiction compliance management for international businesses.", items: ["Transfer Pricing", "Country-by-Country Reporting", "Global Minimum Tax", "OECD Compliance"] },
  { icon: <ArrowRight className="w-8 h-8" />, title: "India-Australia Corridor", desc: "Specialized services for businesses operating between India and Australia.", items: ["DTAA Benefits", "Subsidiary Setup", "Visa & Immigration", "Repatriation Planning"] },
]

export default function GlobalPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient dark:bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">TaxVolca Global</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="gold-gradient">Global</span> Business Advisory
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Navigate cross-border complexities with confidence. From market entry to ongoing compliance,
              we help businesses expand globally with strategic tax, legal, and regulatory support.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {globalServices.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card variant="hover" className="h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{svc.desc}</p>
                  <ul className="space-y-1.5">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <section className="relative py-20 bg-gradient-to-r from-primary dark:from-[#020617] to-primary-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Planning Global Expansion?</h2>
          <p className="text-white/60 mb-8">Let our global team guide you through every step.</p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/contact">Start Your Global Journey</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
