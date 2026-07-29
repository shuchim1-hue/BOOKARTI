"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Globe, Play } from "lucide-react"
import Link from "next/link"

export function HeroV3() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#020617]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617] pointer-events-none" />

      <motion.div style={{ opacity, scale }} className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a843]/30 bg-[#d4a843]/5 text-[#d4a843] text-xs font-medium tracking-widest uppercase">
            <Globe className="w-3 h-3" />
            Global Tax, Legal & Business Advisory
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-4"
        >
          <span className="text-white">TaxVolca</span>
          <span className="text-[#d4a843]">®</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white/40 text-lg sm:text-xl max-w-2xl mb-8 font-light tracking-wide"
        >
          Where compliance meets growth — global tax, legal, audit & business advisory powered by AI and world-class expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#d4a843] text-[#020617] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,67,0.3)]"
          >
            <span className="relative z-10">Book Consultation</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4a843] to-[#b8932f] opacity-0 group-hover:opacity-100 transition-opacity" />
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Explore the Future</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#d4a843]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
