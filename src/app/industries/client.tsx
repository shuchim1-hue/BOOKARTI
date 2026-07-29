"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader, SectionWrapper } from "@/components/sections/section-wrapper"
import { industries } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Factory, Heart, Home, Laptop, ShoppingCart, Utensils } from "lucide-react"
import Link from "next/link"

const industryDetails = [
  { icon: <Heart className="w-8 h-8" />, title: "Healthcare", desc: "Comprehensive financial management for hospitals, clinics, nursing homes, and healthcare professionals including doctors and surgeons." },
  { icon: <Home className="w-8 h-8" />, title: "Real Estate & Construction", desc: "Project finance, tax planning, GST compliance, and regulatory advisory for builders, developers, and contractors." },
  { icon: <Factory className="w-8 h-8" />, title: "Manufacturing", desc: "Cost accounting, inventory management, tax optimization, and compliance support for manufacturing enterprises." },
  { icon: <Building2 className="w-8 h-8" />, title: "Hospitality", desc: "Specialized accounting, payroll, and compliance solutions for hotels, restaurants, and food service businesses." },
  { icon: <ShoppingCart className="w-8 h-8" />, title: "E-commerce & Retail", desc: "GST compliance, payment gateway reconciliation, and financial advisory for online and offline retail businesses." },
  { icon: <Laptop className="w-8 h-8" />, title: "IT & Technology", desc: "Tax planning for software exports, STPI/SEZ compliance, ESOP advisory, and startup funding support." },
]

export default function IndustriesPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Industries We Serve</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Deep <span className="gold-gradient">Industry Expertise</span>
            </h1>
            <p className="text-xl text-white/70">
              We combine financial expertise with deep industry knowledge to deliver solutions
              that address your unique business challenges.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industryDetails.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card variant="hover" className="h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    {ind.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <SectionHeader title="All Industries" subtitle="Serving 18+ industry sectors" />
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <Badge key={industry} variant="gold" className="px-5 py-2.5 text-base">
              {industry}
            </Badge>
          ))}
        </div>
      </SectionWrapper>

      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Which Service Fits Your Industry?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Let our experts analyze your business and recommend the right solutions.
          </p>
          <Button asChild size="lg" variant="premium">
            <Link href="/appointment">
              Get a Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
