"use client"

import { firmName, navItems } from "@/lib/data"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "./ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 dark:bg-primary/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-bold text-primary text-sm transition-transform group-hover:scale-110">
              CMV
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold tracking-tight block leading-tight">
                {firmName}
              </span>
              <span className="text-[10px] text-accent font-medium tracking-widest uppercase">
                Chartered Accountants
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground/80 hover:text-accent hover:bg-accent/5",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden border-t border-border bg-background shadow-xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground/80 hover:text-accent hover:bg-accent/5",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/appointment" onClick={() => setIsOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
