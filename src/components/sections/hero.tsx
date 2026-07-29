"use client"

import { Button } from "@/components/ui/button"
import { firmName, stats, taglineAlt, trustBadges } from "@/lib/data"
import { motion } from "framer-motion"
import { Calendar, ChevronRight, Download, Phone, Play } from "lucide-react"
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
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-3xl sm:text-4xl font-bold text-white">
      {count}+{suffix}
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,67,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Indian & Australian Chartered Accountants
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Your Global Business & <span className="gold-gradient">Compliance Partner</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl"
            >
              {taglineAlt}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" variant="premium">
                <Link href="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="premium-outline">
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Expert
                </Link>
              </Button>
              <Button asChild size="lg" variant="premium-outline">
                <Link href="#">
                  <Download className="w-5 h-5 mr-2" />
                  Company Profile
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 text-xs font-medium rounded-full glass text-white/70 border border-white/10"
                >
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
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="glass rounded-2xl p-6 backdrop-blur-xl animate-fade-in-up"
                    style={{ animationDelay: `${(i + 1) * 200}ms` }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
                <div className="col-span-2 glass rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Play className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Watch Our Story</p>
                      <p className="text-white/50 text-sm">See how we help businesses grow</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 glass rounded-2xl p-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-primary bg-accent/30 flex items-center justify-center text-xs font-bold text-accent"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-sm">
                  Trusted by <span className="text-accent font-semibold">500+</span> clients
                </p>
                <ChevronRight className="w-5 h-5 text-accent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
