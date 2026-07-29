"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { BookOpen, TrendingUp, Shield, Cpu, Globe, Sparkles } from "lucide-react"

const timeline = [
  { year: "2015", icon: BookOpen, title: "Traditional CA Firm", desc: "Started with core tax & compliance services in Zirakpur, Punjab." },
  { year: "2018", icon: TrendingUp, title: "Technology Integration", desc: "Adopted cloud accounting, paperless workflows, and digital compliance tools." },
  { year: "2020", icon: Shield, title: "Automation Era", desc: "Automated tax filings, GST returns, and compliance monitoring systems." },
  { year: "2022", icon: Cpu, title: "Artificial Intelligence", desc: "Launched AI-powered tax assistant, contract review, and compliance checker." },
  { year: "2024", icon: Globe, title: "Global Advisory", desc: "Expanded to Australia, UAE, Singapore, UK, and USA markets." },
  { year: "2026", icon: Sparkles, title: "Future of Compliance", desc: "Tomorrow's compliance, today — AI-first, global-first, enterprise-grade." },
]

export function WhyTaxvolca() {
  const sectionRef = useRef<HTMLElement>(null!)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,168,67,0.03)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ y, opacity }} className="text-center mb-16">
          <span className="text-[#d4a843] text-sm font-medium tracking-widest uppercase">Our Journey</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3">
            Why <span className="text-[#d4a843]">TaxVolca</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            From a traditional CA firm to a global AI-powered advisory — our evolution defines who we are.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a843]/0 via-[#d4a843]/30 to-[#059669]/0 hidden lg:block" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                <div className="inline-block">
                  <span className="text-[#d4a843] text-sm font-mono font-bold">{item.year}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-white/40 mt-2 max-w-md text-sm">{item.desc}</p>
                </div>
              </div>

              <div className="relative z-10 hidden lg:flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#0a1628] border-2 border-[#d4a843]/30 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#d4a843]" />
                </div>
              </div>

              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
