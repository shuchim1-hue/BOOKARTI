"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function SectionWrapper({ children, className = "", id, dark }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-28 ${dark ? "bg-primary text-white" : "bg-background"} ${className}`}
    >
      {dark && (
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,168,67,0.03)_50%,transparent_75%)]" />
      )}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  gold?: boolean
  center?: boolean
}

export function SectionHeader({ title, subtitle, gold, center = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${center ? "text-center" : ""}`}>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${gold ? "gold-gradient" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
