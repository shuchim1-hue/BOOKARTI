"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { motion } from "framer-motion"
import { ArrowRight, Building2, FileCheck, Landmark, Scale, Shield } from "lucide-react"
import Link from "next/link"

const indiaServices = [
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Income Tax Services",
    items: ["Tax Planning & Advisory", "ITR Filing", "Tax Audit (44AB)", "TDS Compliance", "Transfer Pricing", "Capital Gain Tax", "Tax Litigation & Appeals"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "GST Services",
    items: ["GST Registration", "Monthly/Quarterly Returns", "Annual Return (GSTR-9)", "GST Audit", "Refund Claims", "E-way Bill", "GST Litigation"],
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Audit & Assurance",
    items: ["Statutory Audit", "Internal Audit", "Stock Audit", "Concurrent Audit", "Forensic Audit", "Bank Audit", "Due Diligence"],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Corporate Services",
    items: ["Company Registration", "LLP Formation", "ROC Compliance", "Board Resolutions", "Annual Filing", "Company Closure"],
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Legal & FEMA",
    items: ["Corporate Legal Advisory", "FDI/ODI Compliance", "Contract Drafting", "M&A Support", "Joint Ventures", "International Structuring"],
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Funding & CMA",
    items: ["CMA Reports", "Project Finance", "Working Capital Loans", "Startup Funding", "Business Valuation", "Financial Modeling"],
  },
]

export default function IndiaPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">India Office</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="gold-gradient">India</span> Services
            </h1>
            <p className="text-xl text-white/70">
              Comprehensive financial and compliance solutions under Indian regulatory framework.
              Serving businesses across all states with expert local knowledge.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indiaServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card variant="hover" className="h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
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

      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need Indian Tax or Compliance Help?</h2>
          <p className="text-white/70 mb-8">Our India office team is ready to assist you.</p>
          <Button asChild size="lg" variant="premium">
            <Link href="/appointment">Book a Consultation <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </>
  )
}
