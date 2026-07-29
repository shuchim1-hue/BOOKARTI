"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader, SectionWrapper } from "@/components/sections/section-wrapper"
import { serviceCategories } from "@/lib/data"
import { motion } from "framer-motion"
import {
  ArrowRight, Banknote, Building2, FileCheck, FileText, Globe, Handshake,
  Landmark, Scale, Shield, TrendingUp,
} from "lucide-react"
import Link from "next/link"

const categoryIcons: Record<string, React.ReactNode> = {
  Accounting: <FileText className="w-8 h-8" />,
  Taxation: <Landmark className="w-8 h-8" />,
  GST: <Shield className="w-8 h-8" />,
  "Audit & Assurance": <FileCheck className="w-8 h-8" />,
  "Corporate Services": <Building2 className="w-8 h-8" />,
  "ROC Compliance": <FileCheck className="w-8 h-8" />,
  "Legal Services": <Scale className="w-8 h-8" />,
  "Funding & Finance": <TrendingUp className="w-8 h-8" />,
  "CMA Reports": <FileText className="w-8 h-8" />,
  "Startup Services": <Globe className="w-8 h-8" />,
  "FEMA & International Tax": <Globe className="w-8 h-8" />,
  "NRI Services": <Handshake className="w-8 h-8" />,
  "Australia Services": <Globe className="w-8 h-8" />,
}

export default function ServicesPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete <span className="gold-gradient">Service Catalogue</span>
            </h1>
            <p className="text-xl text-white/70">
              End-to-end financial, legal, and compliance services designed to help your business
              thrive in India and Australia.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Card variant="hover" className="h-full group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {categoryIcons[category.title] || <Building2 className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Every business is unique. Let us tailor our services to meet your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="premium">
              <Link href="/appointment">
                Schedule a Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="premium-outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
