"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Globe, Rocket, Sparkles, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const solutions = [
  { icon: <Rocket className="w-8 h-8" />, title: "Startup Ecosystem", tagline: "From idea to IPO", desc: "Complete startup support - registration, funding, ESOP, compliance, and advisory.", gradient: "from-purple-500 to-pink-500", services: ["Company Registration", "Fundraising Support", "ESOP Structuring", "Investor Pitch Deck", "Compliance Management"] },
  { icon: <Building2 className="w-8 h-8" />, title: "Corporate Suite", tagline: "Enterprise excellence", desc: "Comprehensive corporate services including virtual CFO, ROC, audit, legal, and tax.", gradient: "from-blue-500 to-indigo-500", services: ["Virtual CFO Services", "ROC Compliance", "Statutory Audit", "Legal Advisory", "Tax Planning"] },
  { icon: <Users className="w-8 h-8" />, title: "NRI Solutions", tagline: "Your India connection", desc: "Complete NRI tax, investment, property, and compliance services.", gradient: "from-emerald-500 to-teal-500", services: ["Tax Return Filing", "Property Tax Advisory", "Investment Advisory", "Repatriation", "PAN/Aadhaar"] },
  { icon: <TrendingUp className="w-8 h-8" />, title: "MSME Growth", tagline: "Small business, big dreams", desc: "MSME registration, government schemes, loans, and growth advisory.", gradient: "from-amber-500 to-orange-500", services: ["MSME Registration", "MUDRA Loans", "CGTMSE Support", "Govt Schemes", "Tax Compliance"] },
  { icon: <Globe className="w-8 h-8" />, title: "Business Setup", tagline: "Global ready", desc: "Company formation in India, Australia, UAE, and Singapore.", gradient: "from-cyan-500 to-blue-500", services: ["India Registration", "Australia Setup", "UAE Formation", "Singapore Registration", "Bank Account Opening"] },
  { icon: <Rocket className="w-8 h-8" />, title: "Global Expansion", tagline: "Go global with confidence", desc: "Cross-border tax, legal, and compliance for international expansion.", gradient: "from-rose-500 to-red-500", services: ["Market Entry Strategy", "International Tax", "FEMA Compliance", "Subsidiary Setup", "Global Mobility"] },
]

export default function SolutionsPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient dark:bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">Solutions</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tailored <span className="gold-gradient">Solutions</span> for Every Business
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">Whether you're a startup founder, established enterprise, NRI, or MSME - we have a solution designed for you.</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div key={sol.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card variant="hover" className="h-full group overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${sol.gradient} p-6 text-white`}>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {sol.icon}
                    </div>
                    <h3 className="text-xl font-bold">{sol.title}</h3>
                    <p className="text-white/70 text-sm italic">{sol.tagline}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">{sol.desc}</p>
                    <ul className="space-y-1.5 mb-4">
                      {sol.services.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Sparkles className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href="/contact">Learn More <ArrowRight className="w-3 h-3 ml-2" /></Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
