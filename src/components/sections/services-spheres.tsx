"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Scale, FileCheck, Briefcase, TrendingUp, Globe, Shield, Users, BookOpen, Lightbulb, Target } from "lucide-react"

const services = [
  { icon: Scale, title: "Tax", color: "#d4a843", desc: "Income Tax, GST, International Tax, TDS, NRI Tax, Transfer Pricing" },
  { icon: FileCheck, title: "Audit", color: "#059669", desc: "Statutory, Internal, Forensic Audit & Risk Advisory" },
  { icon: Briefcase, title: "Legal", color: "#d4a843", desc: "Corporate Law, M&A, Contracts, IP, Compliance" },
  { icon: TrendingUp, title: "Capital", color: "#059669", desc: "Project Finance, Funding, Valuation, CMA" },
  { icon: Globe, title: "Global", color: "#d4a843", desc: "Cross-border Tax, FEMA, Global Expansion" },
  { icon: Shield, title: "Australia", color: "#059669", desc: "ATO, ASIC, BAS, Payroll, Superannuation" },
  { icon: Users, title: "Payroll", color: "#d4a843", desc: "Salary Structuring, Compliance, Outsourcing" },
  { icon: Lightbulb, title: "AI", color: "#059669", desc: "AI Tax Assistant, AI Legal, AI Compliance" },
  { icon: BookOpen, title: "Academy", color: "#d4a843", desc: "Tax Training, Certification, Workshops" },
  { icon: Target, title: "Ventures", color: "#059669", desc: "Startup Advisory, Funding, Incubation" },
]

export function ServicesSpheres() {
  const sectionRef = useRef<HTMLElement>(null!)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(5,150,105,0.03)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ y }} className="text-center mb-16">
          <span className="text-[#d4a843] text-sm font-medium tracking-widest uppercase">Our Services</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3">
            Everything You Need Under <span className="text-[#d4a843]">One Roof</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            Ten specialized divisions. One integrated approach. Global expertise delivered locally.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 perspective-[1000px]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, rotateX: 15, y: 40 }}
              animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="group cursor-pointer"
            >
              <motion.div
                animate={hovered === i ? { rotateY: 180 } : { rotateY: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative rounded-2xl p-6 bg-white/[0.03] border border-white/[0.06] hover:border-[#d4a843]/20 transition-all duration-500"
                  style={{
                    backfaceVisibility: "hidden",
                    boxShadow: hovered === i ? "0 0 40px rgba(212,168,67,0.1)" : "none",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500"
                    style={{ backgroundColor: `${service.color}12` }}
                  >
                    <service.icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{service.desc}</p>
                  <div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, transparent 50%, ${service.color}10)`,
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      padding: "1px",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
