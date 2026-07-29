"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Bot, FileSearch, FileText, ShieldCheck, Scale, Bell, Calculator, PenTool, TrendingUp, Sparkles } from "lucide-react"

const aiFeatures = [
  { icon: Bot, title: "AI Tax Assistant", desc: "Instant answers to complex tax queries" },
  { icon: FileSearch, title: "AI GST Assistant", desc: "GST compliance & return filing help" },
  { icon: FileText, title: "AI Contract Review", desc: "Smart contract analysis & redlining" },
  { icon: ShieldCheck, title: "AI Compliance Checker", desc: "Real-time regulatory compliance audit" },
  { icon: Scale, title: "AI Legal Assistant", desc: "Legal research & document drafting" },
  { icon: Bell, title: "AI Notice Analyzer", desc: "Parse & respond to tax notices" },
  { icon: Calculator, title: "AI BAS Assistant", desc: "BAS preparation & lodgment" },
  { icon: PenTool, title: "AI Payroll Assistant", desc: "Payroll processing & compliance" },
  { icon: TrendingUp, title: "AI Financial Advisor", desc: "Data-driven financial insights" },
]

export function AIExperience() {
  const sectionRef = useRef<HTMLElement>(null!)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#059669]/5 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#d4a843]/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ y, opacity }} className="text-center mb-16">
          <span className="text-[#d4a843] text-sm font-medium tracking-widest uppercase">AI Experience</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3">
            Meet <span className="text-[#059669]">TaxVolca AI</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            Nine AI-powered tools. One platform. Smarter compliance, faster results, better decisions.
          </p>
        </motion.div>

        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full border border-[#059669]/10 animate-pulse" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {aiFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                className="group"
              >
                <div className="rounded-2xl p-4 bg-white/[0.02] border border-white/[0.06] hover:border-[#059669]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(5,150,105,0.1)] hover:bg-white/[0.04] text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#059669]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-[#059669]" />
                  </div>
                  <h4 className="text-xs font-semibold text-white/80 mb-1">{feature.title}</h4>
                  <p className="text-[10px] text-white/30 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-[#059669]/5 via-transparent to-[#d4a843]/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(5,150,105,0.05)_0%,_transparent_60%)]" />
          <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] text-xs font-medium mb-4">
                <Sparkles className="w-3 h-3" />
                AI-Powered
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Your AI-Powered Compliance & Advisory Platform
              </h3>
              <p className="text-white/40 text-sm sm:text-base max-w-lg mb-6">
                From tax returns to contract reviews, our AI handles the heavy lifting — so your team can focus on strategy.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/50">Real-time</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/50">99.9% Uptime</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/50">Enterprise-grade</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/50">ISO 27001</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[#059669]/20 via-[#059669]/5 to-transparent flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#059669]/10 animate-ping" style={{ animationDuration: "3s" }} />
                <Bot className="w-20 h-20 text-[#059669] opacity-60" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
