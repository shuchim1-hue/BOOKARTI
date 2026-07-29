"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { brand, navigation, testimonials } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight, Award, CheckCircle, Quote, Star } from "lucide-react"
import Link from "next/link"
import { SectionHeader, SectionWrapper } from "./section-wrapper"

const values = [
  { title: "Integrity", description: "Uncompromising ethical standards in every engagement" },
  { title: "Excellence", description: "Delivering Big Four quality with personalized attention" },
  { title: "Innovation", description: "Leveraging technology for efficient solutions" },
  { title: "Client First", description: "Your success is our primary objective" },
]

export function AboutSection() {
  return (
    <SectionWrapper id="about" dark>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        <div>
          <Badge variant="gold" className="mb-4">About {brand.name}</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Trusted <span className="gold-gradient">Financial & Legal</span> Partner
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Led by <strong className="text-white">CA Minakshi Verma</strong>, a Fellow Chartered Accountant
            and CPA Australia member with 15+ years of experience, our firm combines global expertise
            with local knowledge to serve clients across India and Australia.
          </p>
          <p className="text-white/60 mb-8">
            From startups to multinational corporations, we provide comprehensive accounting, taxation,
            legal, and business advisory services that drive growth and ensure compliance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="premium">
              <Link href="/about">
                Know More <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="premium-outline">
              <Link href="/contact">Meet the Team</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card variant="glass" className="h-full">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-white mb-1">{v.title}</h3>
                  <p className="text-white/50 text-sm">{v.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <SectionHeader title="Industries We Serve" subtitle="Deep domain expertise across diverse sectors" gold />
        <div className="flex flex-wrap justify-center gap-3">
          {navigation.megaMenu.industries.map((industry) => (
            <Badge
              key={industry}
              variant="gold"
              className="px-4 py-2 text-sm"
            >
              {industry}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="What Our Clients Say" subtitle="Trusted by 500+ businesses worldwide" gold />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card variant="glass" className="h-full">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-accent/50 mb-4" />
                  <p className="text-white/70 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}, {t.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
