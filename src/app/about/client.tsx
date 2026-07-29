"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader, SectionWrapper } from "@/components/sections/section-wrapper"
import { firmName, teamMembers } from "@/lib/data"
import { motion } from "framer-motion"
import { Award, BookOpen, Briefcase, CheckCircle, Globe, Quote, Star, Target, Users } from "lucide-react"
import Link from "next/link"

const qualifications = [
  "Fellow Chartered Accountant (FCA) - ICAI",
  "CPA Australia - Certified Practising Accountant",
  "Bachelor of Commerce (Hons)",
  "Diploma in International Taxation",
  "Certified Corporate Governance Professional",
]

const expertise = [
  "Corporate Taxation & Planning", "International Tax & Transfer Pricing",
  "GST Advisory & Litigation", "Statutory & Internal Audit",
  "Company Incorporation & ROC Compliance", "Project Finance & CMA Reports",
  "FEMA & FDI Advisory", "Startup Advisory & Fundraising",
  "Australia-India Cross Border Advisory", "Business Valuation & Financial Modeling",
]

export default function AboutPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="gold-gradient">{firmName}</span>
            </h1>
            <p className="text-xl text-white/70">
              A premier Chartered Accountancy and Legal Consultancy firm bridging the gap between
              Indian and Australian business landscapes with Big Four quality and boutique personalization.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-accent/30 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-accent" />
                </div>
                <p className="text-2xl font-bold">{firmName}</p>
                <p className="text-muted-foreground">Est. 2010</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded by <strong>CA Minakshi Verma</strong>, our firm was built on the vision of providing
              world-class financial and legal advisory services that combine global standards with local expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With offices in India and Australia, we serve a diverse clientele ranging from startups to
              established corporate groups, helping them navigate complex regulatory environments, optimize
              their tax positions, and achieve sustainable growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of Chartered Accountants, Company Secretaries, Corporate Lawyers, and Tax Experts
              brings together decades of combined experience across industries and jurisdictions.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Target className="w-8 h-8" />, title: "Our Mission", text: "To empower businesses with strategic financial and legal solutions that drive growth, ensure compliance, and create lasting value." },
            { icon: <Globe className="w-8 h-8" />, title: "Our Vision", text: "To be the most trusted cross-border financial and legal advisory firm, setting benchmarks for excellence in India and Australia." },
            { icon: <Award className="w-8 h-8" />, title: "Our Commitment", text: "Uncompromising integrity, innovation-driven solutions, and client-centric approach in everything we do." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card variant="glass" className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 mx-auto mb-4 flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title="Meet CA Minakshi Verma" subtitle="Founder & Lead Chartered Accountant" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center order-2 lg:order-1">
            <div className="text-center p-8 text-white">
              <Users className="w-20 h-20 mx-auto mb-4 opacity-50" />
              <p className="text-2xl font-bold">CA Minakshi Verma</p>
              <p className="text-accent">FCA, CPA Australia</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-accent" /> Qualifications
                </h3>
                <ul className="space-y-2">
                  {qualifications.map((q) => (
                    <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-accent" /> Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((e) => (
                    <span key={e} className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-accent" /> Professional Memberships
                </h3>
                <div className="flex gap-3">
                  {["ICAI", "CPA Australia", "ICSI"].map((m) => (
                    <span key={m} className="px-4 py-2 rounded-lg border border-border text-sm font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <SectionHeader title="Our Team" subtitle="Expert professionals dedicated to your success" gold />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card variant="glass" className="h-full text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-white">{member.name}</h3>
                  <p className="text-accent text-sm mb-1">{member.role}</p>
                  <p className="text-white/50 text-xs mb-3">{member.qualifications}</p>
                  <p className="text-white/60 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title="Core Values" subtitle="The principles that guide everything we do" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Award className="w-6 h-6" />, title: "Integrity", text: "Uncompromising ethical standards in every engagement" },
            { icon: <Star className="w-6 h-6" />, title: "Excellence", text: "Big Four quality with personalized boutique attention" },
            { icon: <Target className="w-6 h-6" />, title: "Innovation", text: "Technology-driven solutions for modern challenges" },
            { icon: <Users className="w-6 h-6" />, title: "Client First", text: "Your success and satisfaction drive everything we do" },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card variant="hover" className="h-full text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 mx-auto mb-4 flex items-center justify-center text-accent">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Schedule a consultation and discover how our expertise can help your business thrive
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="premium">
              <Link href="/appointment">Book a Consultation</Link>
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
