"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Building2, DollarSign, FileCheck, Globe } from "lucide-react"
import Link from "next/link"

const ausServices = [
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "BAS & GST Australia",
    items: ["BAS Lodgment (Monthly/Quarterly)", "GST Registration", "GST Return Filing", "Fuel Tax Credits", "Wine Equalisation Tax", "Luxury Car Tax"],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "ASIC Compliance",
    items: ["Company Registration", "Annual Review", "Director Changes", "Share Structure", "Business Name Registration", "ASIC Lodgments"],
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Bookkeeping & Accounting",
    items: ["Xero Setup & Management", "MYOB Accounting", "QuickBooks Online", "Payroll Processing", "Bank Reconciliation", "Financial Statements"],
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Tax Return & ATO",
    items: ["Individual Tax Returns", "Company Tax Returns", "PAYG Withholding", "Fringe Benefits Tax", "Capital Gains Tax", "ATO Correspondence"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Cross Border Advisory",
    items: ["India-Australia DTAA", "Indian Subsidiary Setup", "Australian Subsidiary Setup", "International Structuring", "Repatriation Planning", "Transfer Pricing"],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Business Advisory",
    items: ["Business Structure Advisory", "Cash Flow Management", "Budgeting & Forecasting", "Business Valuations", "Succession Planning", "Exit Strategy"],
  },
]

export default function AustraliaPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Australia Office</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="gold-gradient">Australia</span> Services
            </h1>
            <p className="text-xl text-white/70">
              Complete Australian tax, compliance, and business advisory services with a focus on
              India-Australia cross-border transactions.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ausServices.map((service, i) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need Australian Compliance Support?</h2>
          <p className="text-white/70 mb-8">Our Australia team provides end-to-end ATO, ASIC, and BAS services.</p>
          <Button asChild size="lg" variant="premium">
            <Link href="/appointment">Book a Consultation <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </>
  )
}
