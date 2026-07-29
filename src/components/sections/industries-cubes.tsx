"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
  Factory, HeartPulse, Cpu, Building2, UtensilsCrossed, ShoppingBag, Home,
  Landmark, Car, GraduationCap, Sprout, Plane, Rocket, Handshake,
} from "lucide-react"

const industries = [
  { icon: Factory, name: "Manufacturing", desc: "GST, excise, customs, factory compliance, supply chain tax" },
  { icon: HeartPulse, name: "Healthcare", desc: "Pharma compliance, medical licensing, healthcare M&A" },
  { icon: Cpu, name: "Technology", desc: "SaaS taxation, IP protection, R&D credits, global structuring" },
  { icon: Building2, name: "Construction", desc: "GST on works contract, TDS, project finance, labor laws" },
  { icon: UtensilsCrossed, name: "Hospitality", desc: "Hotel licensing, F&B compliance, tourism incentives" },
  { icon: ShoppingBag, name: "Retail & E-Commerce", desc: "Online marketplace GST, consumer laws, payment compliance" },
  { icon: Home, name: "Real Estate", desc: "RERA compliance, capital gains, REIT structuring, stamp duty" },
  { icon: Landmark, name: "Financial Services", desc: "RBI compliance, NBFC audit, fund accounting, FEMA" },
  { icon: Car, name: "Automobile", desc: "Dealer compliance, GST input credit, dealership audits" },
  { icon: GraduationCap, name: "Education", desc: "EdTech compliance, trust registration, FCRA, accreditation" },
  { icon: Sprout, name: "Agriculture", desc: "Agri-tax exemption, cooperative audit, agri-export compliance" },
  { icon: Plane, name: "Travel & Tourism", desc: "Travel agency compliance, forex, tour operator licensing" },
  { icon: Rocket, name: "Startups", desc: "Startup India registration, ESOP, funding, convertible notes" },
  { icon: Handshake, name: "NGOs & Trusts", desc: "FCRA, 80G, 12A, trust registration, CSR compliance" },
]

export function IndustriesCubes() {
  const sectionRef = useRef<HTMLElement>(null!)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0])
  const [active, setActive] = useState<number | null>(null)

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,67,0.02)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ y }} className="text-center mb-16">
          <span className="text-[#d4a843] text-sm font-medium tracking-widest uppercase">Industries</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3">
            Deep Expertise Across <span className="text-[#d4a843]">14 Industries</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            We speak your industry's language. Domain-specific compliance, taxation, and advisory for every sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 perspective-[1200px]">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, rotateY: 15, y: 30 }}
              animate={isInView ? { opacity: 1, rotateY: 0, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              className="group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{
                  rotateX: active === i ? 5 : 0,
                  rotateY: active === i ? 10 : 0,
                  scale: active === i ? 1.08 : 1,
                  z: active === i ? 20 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative rounded-2xl p-4 bg-white/[0.02] border border-white/[0.06] hover:border-[#d4a843]/20 transition-colors duration-500 h-full"
                style={{
                  boxShadow: active === i ? "0 20px 60px rgba(212,168,67,0.12)" : "none",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#d4a843]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-5 h-5 text-[#d4a843]" />
                </div>
                <h3 className="text-sm font-semibold text-white/80 mb-1">{industry.name}</h3>
                <motion.p
                  initial={false}
                  animate={{
                    height: active === i ? "auto" : 0,
                    opacity: active === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-[10px] text-white/30 leading-relaxed overflow-hidden"
                >
                  {industry.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
