"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "@/lib/data"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const logos = [
  "TechVentures", "Aus-Pacific", "Nair Healthcare", "StyleStreet",
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  const t = testimonials[current]

  return (
    <section className="relative py-24 sm:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(5,150,105,0.03)_0%,_transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#d4a843] text-sm font-medium tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3">
            Trusted by <span className="text-[#d4a843]">Leaders</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Here is what business leaders say about working with TaxVolca.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent p-8 sm:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                <Quote className="w-10 h-10 text-[#d4a843]/30 mx-auto mb-6" />

                <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d4a843] text-[#d4a843]" />
                  ))}
                </div>

                <div className="w-12 h-12 rounded-full bg-[#d4a843]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#d4a843] font-bold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-white/40">{t.role}, {t.company}</p>

                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                  <span className="text-[10px] text-white/30 font-mono">{logos[current]}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-white/50" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-[#d4a843] w-6" : "bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-white/50" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
