"use client"

import { Button } from "@/components/ui/button"
import { brand, stats, trustBadges, whatsapp } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MessageCircle, Phone, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [value])
  return <span className="text-4xl sm:text-5xl font-bold text-white">{count}{suffix}</span>
}

function WorldMapDots() {
  const dots = [
    { x: "28%", y: "35%", size: "w-2 h-2", delay: 0 }, // India
    { x: "86%", y: "30%", size: "w-2 h-2", delay: 0.3 }, // Australia
    { x: "18%", y: "30%", size: "w-1.5 h-1.5", delay: 0.6 }, // US East
    { x: "52%", y: "25%", size: "w-1.5 h-1.5", delay: 0.9 }, // UK
    { x: "45%", y: "28%", size: "w-1.5 h-1.5", delay: 1.2 }, // Europe
    { x: "38%", y: "40%", size: "w-1.5 h-1.5", delay: 1.5 }, // Dubai
    { x: "14%", y: "38%", size: "w-1.5 h-1.5", delay: 1.8 }, // Canada
    { x: "75%", y: "55%", size: "w-1.5 h-1.5", delay: 2.1 }, // Singapore
    { x: "88%", y: "38%", size: "w-1.5 h-1.5", delay: 2.4 }, // Japan
  ]
  return (
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
        <ellipse cx="400" cy="250" rx="350" ry="180" fill="none" stroke="rgba(212,168,67,0.15)" strokeWidth="1" strokeDasharray="4 4" />
        <ellipse cx="400" cy="250" rx="300" ry="140" fill="none" stroke="rgba(212,168,67,0.1)" strokeWidth="0.5" strokeDasharray="2 4" />
        <ellipse cx="400" cy="250" rx="250" ry="100" fill="none" stroke="rgba(212,168,67,0.08)" strokeWidth="0.5" strokeDasharray="1 3" />
        {dots.map((dot, i) => (
          <g key={i}>
            <circle cx={dot.x} cy={dot.y} r="4" fill="#d4a843" opacity="0.1" className="animate-pulse-glow" />
            <circle cx={dot.x} cy={dot.y} r="2" fill="#d4a843" opacity="0.8" />
          </g>
        ))}
        <path d="M 28% 35% L 86% 30%" stroke="rgba(212,168,67,0.2)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 28% 35% L 38% 40%" stroke="rgba(212,168,67,0.2)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 28% 35% L 52% 25%" stroke="rgba(212,168,67,0.15)" strokeWidth="0.5" strokeDasharray="2 4" />
      </svg>
    </div>
  )
}

function AIGridBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,150,105,0.03)_70%,transparent_100%)]" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient dark:bg-[#020617] overflow-hidden">
      <WorldMapDots />
      <AIGridBg />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm mb-6 border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Where Compliance Meets Growth
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
            >
              <span className="gold-gradient">{brand.name}</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white/80">
                {brand.tagline}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed"
            >
              AI-powered tax, legal, audit, and business advisory platform serving
              clients across 25+ countries. Enterprise-grade expertise, boutique attention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-emerald-500/25">
                <Link href="/contact"><Calendar className="w-5 h-5 mr-2" />Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/about"><ArrowRight className="w-5 h-5 mr-2" />Talk to Expert</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href={`https://wa.me/${whatsapp}`} target="_blank"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/client-portal"><User className="w-5 h-5 mr-2" />Client Login</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {trustBadges.map((badge) => (
                <span key={badge} className="px-3 py-1 text-[10px] font-medium rounded-full glass text-white/60 border border-white/5">
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-6 backdrop-blur-xl animate-slide-up border-white/5"
                  style={{ animationDelay: `${(i + 1) * 150}ms` }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                </div>
              ))}

              <div className="col-span-2 glass rounded-2xl p-5 backdrop-blur-xl border-white/5 mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0a1628] bg-emerald-500/30 flex items-center justify-center text-[10px] font-bold text-emerald-300">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-accent font-semibold text-sm">Trusted Globally</p>
                    <p className="text-white/40 text-xs">25+ Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background dark:from-[#0f172a] to-transparent" />
    </section>
  )
}
