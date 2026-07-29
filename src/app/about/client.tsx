"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader, SectionWrapper } from "@/components/sections/section-wrapper"
import { brand, divisions, teamMembers } from "@/lib/data"
import { motion } from "framer-motion"
import { Award, Brain, Building2, Globe, Quote, Sparkles, Target, Users } from "lucide-react"
import Link from "next/link"

const companyValues = [
  { icon: <Target className="w-6 h-6" />, title: "Innovation First", desc: "AI and technology at the core of everything we do" },
  { icon: <Award className="w-6 h-6" />, title: "Enterprise Excellence", desc: "Big Four quality standards across all engagements" },
  { icon: <Globe className="w-6 h-6" />, title: "Global Mindset", desc: "25+ country expertise with local execution" },
  { icon: <Users className="w-6 h-6" />, title: "Client Partnership", desc: "Your success is the measure of our success" },
]

const locations = [
  { name: "India", address: "#90, Dikshant School Road, VIP Road, Zirakpur, Punjab", flag: "🇮🇳" },
  { name: "Australia", address: "[City], [State]", flag: "🇦🇺" },
  { name: "UAE", address: "Dubai", flag: "🇦🇪" },
]

export default function AboutPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient dark:bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(5,150,105,0.06),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">About {brand.name}</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Where Compliance <span className="gold-gradient">Meets Growth</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              {brand.mission}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-500/10 to-accent/5 flex items-center justify-center">
            <div className="text-center p-8">
              <Building2 className="w-16 h-16 text-accent mx-auto mb-4" />
              <p className="text-2xl font-bold">{brand.name}</p>
              <p className="text-muted-foreground">Est. {brand.year} · Global Presence</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in {brand.year}, {brand.name} began with a vision to redefine professional services
              through technology. What started as a boutique practice has grown into a global platform
              serving 10,000+ clients across 25+ countries.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team of 100+ experts — Chartered Accountants, Company Secretaries, Corporate Lawyers,
              AI Engineers, and Business Strategists — works seamlessly across offices in India, Australia,
              and the UAE to deliver integrated solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our proprietary AI platform powers smarter compliance, real-time insights, and predictive
              analytics — making us the most technology-forward firm in the professional services industry.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <SectionHeader title="Our Values" subtitle="The principles that drive everything we do" gold />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card variant="glass" className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 mx-auto mb-4 flex items-center justify-center text-accent">{v.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-white/50 text-sm">{v.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title="Our Leadership" subtitle="Experienced professionals driving global excellence" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card variant="hover" className="h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-center">{member.name}</h3>
                  <p className="text-accent text-sm text-center mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground text-center mb-3">{member.qualifications}</p>
                  <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title="Business Divisions" subtitle="Six specialized practices under one roof" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {divisions.map((div) => (
            <Card key={div.id} variant="hover" className="text-center">
              <CardContent className="p-5">
                <h3 className="font-bold mb-1">{div.name}</h3>
                <p className="text-xs text-muted-foreground italic">{div.tagline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <SectionHeader title="Global Presence" subtitle="Offices across three continents" gold />
        <div className="grid sm:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div key={loc.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card variant="glass" className="text-center h-full">
                <CardContent className="p-6">
                  <span className="text-4xl mb-3 block">{loc.flag}</span>
                  <h3 className="font-bold text-white mb-2">{loc.name}</h3>
                  <p className="text-white/50 text-sm">{loc.address}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <section className="relative py-20 bg-gradient-to-r from-primary dark:from-[#020617] to-primary-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Join 10,000+ businesses that trust {brand.name}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700"><Link href="/contact">Book a Consultation</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Link href="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>
    </>
  )
}
