"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader, SectionWrapper } from "@/components/sections/section-wrapper"
import { divisions } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight, Brain, FileCheck, Globe, Landmark, Scale, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-8 h-8" />,
  FileCheck: <FileCheck className="w-8 h-8" />,
  Scale: <Scale className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
}

export default function DivisionsSection() {
  return (
    <SectionWrapper id="divisions">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          Business Divisions
        </div>
        <SectionHeader
          title="Six Divisions. One Platform."
          subtitle="Specialized expertise across every aspect of tax, legal, audit, finance, and global business advisory"
        />
      </div>

      <div className="space-y-8">
        {divisions.map((div, i) => (
          <motion.div
            key={div.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card variant="hover" className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3">
                  <div className={`p-6 md:p-8 bg-gradient-to-br ${div.gradient} text-white flex flex-col justify-between`}>
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                        {iconMap[div.icon] || <Brain className="w-8 h-8" />}
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{div.name}</h3>
                      <p className="text-white/80 text-sm font-medium italic mb-3">{div.tagline}</p>
                      <p className="text-white/70 text-sm leading-relaxed">{div.desc}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {div.highlights?.map((h) => (
                        <span key={h} className="px-2 py-1 text-[10px] font-medium rounded-full bg-white/20 text-white">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {div.services.map((svc) => (
                        <div key={svc} className="flex items-start gap-2 text-sm text-muted-foreground py-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {svc}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-border">
                      <Button variant="outline" size="sm" asChild className="group/btn">
                        <Link href={`/services/${div.id}`}>
                          Explore {div.name} <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
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
