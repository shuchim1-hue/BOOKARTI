"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export function CTAV3() {
  const ref = useRef<HTMLElement>(null!)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />

      <motion.div style={{ scale, opacity }} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#d4a843] text-sm font-medium tracking-widest uppercase"
        >
          Get Started
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4"
        >
          Ready to Grow <span className="text-[#d4a843]">Globally</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-lg max-w-xl mx-auto mb-10"
        >
          Let's build your global compliance and growth strategy — backed by AI, powered by expertise, trusted by thousands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4a843] text-[#020617] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(212,168,67,0.3)] transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Book Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`https://wa.me/${918288855262}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Talk on WhatsApp
          </Link>
          <Link
            href="tel:+918288855262"
            className="inline-flex items-center gap-2 px-8 py-4 text-white/40 font-medium rounded-full hover:text-white/60 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
