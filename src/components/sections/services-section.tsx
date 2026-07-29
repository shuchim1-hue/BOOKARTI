"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { serviceCategories } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight, Building2, FileCheck, Globe, Handshake, Landmark, Scale, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"
import { SectionHeader, SectionWrapper } from "./section-wrapper"

const categoryIcons: Record<string, React.ReactNode> = {
  Accounting: <FileCheck className="w-6 h-6" />,
  Taxation: <Landmark className="w-6 h-6" />,
  GST: <Shield className="w-6 h-6" />,
  "Audit & Assurance": <Building2 className="w-6 h-6" />,
  "Corporate Services": <Building2 className="w-6 h-6" />,
  "ROC Compliance": <FileCheck className="w-6 h-6" />,
  "Legal Services": <Scale className="w-6 h-6" />,
  "Funding & Finance": <TrendingUp className="w-6 h-6" />,
  "CMA Reports": <FileCheck className="w-6 h-6" />,
  "Startup Services": <Globe className="w-6 h-6" />,
  "FEMA & International Tax": <Globe className="w-6 h-6" />,
  "NRI Services": <Handshake className="w-6 h-6" />,
  "Australia Services": <Globe className="w-6 h-6" />,
}

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        title="Complete Service Catalogue"
        subtitle="End-to-end financial, legal, and compliance services for businesses and individuals across India and Australia"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {serviceCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <Card variant="hover" className="h-full group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {categoryIcons[category.title] || <Building2 className="w-6 h-6" />}
                </div>
                <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.slice(0, 5).map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                  {category.items.length > 5 && (
                    <li className="text-sm text-accent font-medium">
                      +{category.items.length - 5} more
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/services">
            View All Services <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
