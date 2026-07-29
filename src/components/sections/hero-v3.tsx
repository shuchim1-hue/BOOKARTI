"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Play } from "lucide-react"
import Link from "next/link"

export function HeroV3() {
  return (
    <>
      <div className="relative w-full">
        <img
          src="/hero-bg.png"
          alt="TaxVolca global team"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "80vh" }}
        />
      </div>

      <section className="relative py-16 sm:py-20 bg-[#020617]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3"
          >
            <span className="text-white">TaxVolca</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/40 text-base sm:text-lg max-w-xl mx-auto mb-8 font-light"
          >
            Global Tax, Legal & Business Advisory
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#d4a843] text-[#020617] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(212,168,67,0.3)] transition-all duration-300"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              Explore Global Services
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white/50 font-medium rounded-full hover:text-white/80 transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              Watch Overview
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
