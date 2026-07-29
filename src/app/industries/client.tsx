"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader, SectionWrapper } from "@/components/sections/section-wrapper"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Factory, Heart, Home, Laptop, ShoppingCart, Utensils } from "lucide-react"
import Link from "next/link"

const industryList = [
  "Technology & SaaS", "Healthcare & Pharma", "Real Estate & Construction", "Manufacturing",
  "E-commerce & Retail", "FinTech & Banking", "Hospitality & Tourism", "Education & EdTech",
  "Logistics & Transport", "Energy & Infrastructure", "Professional Services", "Non-Profits & NGOs",
  "Agriculture & Food", "Media & Entertainment", "Automotive", "Aerospace & Defense",
]

const industryDetails = [
  { icon: <Heart className="w-8 h-8" />, title: "Healthcare & Pharma", desc: "Financial management, tax planning, and regulatory compliance for hospitals, pharma companies, and healthcare providers." },
  { icon: <Home className="w-8 h-8" />, title: "Real Estate & Construction", desc: "Project finance, tax optimization, GST compliance, and regulatory advisory for developers and contractors." },
  { icon: <Factory className="w-8 h-8" />, title: "Manufacturing", desc: "Cost accounting, inventory management, tax optimization, and compliance for manufacturing enterprises." },
  { icon: <Building2 className="w-8 h-8" />, title: "Technology & SaaS", desc: "Tax planning for software exports, STPI/SEZ compliance, ESOP advisory, and startup funding support." },
  { icon: <ShoppingCart className="w-8 h-8" />, title: "E-commerce & Retail", desc: "GST compliance, payment reconciliation, marketplace compliance, and financial advisory." },
  { icon: <Laptop className="w-8 h-8" />, title: "FinTech & Banking", desc: "Regulatory compliance, audit, tax structuring, and licensing support for financial technology companies." },
]

export default function IndustriesPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient dark:bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">Industries</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Deep <span className="gold-gradient">Industry Expertise</span>
          </h1>
          <p className="text-lg text-white/60">Specialized knowledge across 16+ industries.</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industryDetails.map((ind, i) => (
            <motion.div key={ind.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card variant="hover" className="h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">{ind.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <SectionHeader title="All Industries" subtitle="16+ sectors and growing" />
        <div className="flex flex-wrap justify-center gap-3">
          {industryList.map((ind) => (
            <Badge key={ind} variant="gold" className="px-5 py-2.5 text-base">{ind}</Badge>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
