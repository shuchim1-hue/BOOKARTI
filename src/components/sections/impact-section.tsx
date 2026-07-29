"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion"
import { useEffect, useState } from "react"
import { Globe, Building2, Users, Briefcase, FileCheck, Shield, TrendingUp } from "lucide-react"

const impacts = [
  { icon: Globe, value: 25, suffix: "+", label: "Countries Served", desc: "Global reach across continents" },
  { icon: Building2, value: 10000, suffix: "+", label: "Businesses Supported", desc: "From startups to enterprises" },
  { icon: Users, value: 100, suffix: "+", label: "Expert Professionals", desc: "CA, CS, Lawyers & advisors" },
  { icon: Briefcase, value: 500, suffix: "+", label: "Corporate Clients", desc: "Listed & multinational" },
  { icon: FileCheck, value: 50000, suffix: "+", label: "Tax Returns Filed", desc: "Across all jurisdictions" },
  { icon: Shield, value: 5000, suffix: "+", label: "Audits Completed", desc: "Statutory & internal" },
  { icon: TrendingUp, value: 99, suffix: "%", label: "Client Success Rate", desc: "Industry-leading outcomes" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null!)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useMotionValueEvent(springValue, "change", (latest) => {
    setDisplay(Math.round(latest))
  })

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-white tabular-nums">
      {display.toLocaleString()}
      <span className="text-[#d4a843]">{suffix}</span>
    </span>
  )
}

export function ImpactSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0.1, 0.3], [100, 0])
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const sectionRef = useRef<HTMLElement>(null!)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,67,0.03)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ y, opacity }} className="text-center mb-16">
          <span className="text-[#d4a843] text-sm font-medium tracking-widest uppercase">Global Impact</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3">
            Trusted by Businesses <span className="text-[#d4a843]">Worldwide</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            Numbers don't lie. Our track record speaks for itself — spanning industries, countries, and decades of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#d4a843]/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-[#d4a843]" />
              </div>
              <Counter value={item.value} suffix={item.suffix} />
              <p className="text-sm font-medium text-white/70 mt-1">{item.label}</p>
              <p className="text-xs text-white/30 mt-0.5 hidden sm:block">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
