"use client"

import { Button } from "@/components/ui/button"
import { address, brand, email, phone, phoneAus, stats, whatsapp } from "@/lib/data"
import { ExternalLink, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Divisions: [
    { label: "TaxVolca Tax", href: "/services" },
    { label: "TaxVolca Audit", href: "/services" },
    { label: "TaxVolca Legal", href: "/services" },
    { label: "TaxVolca Capital", href: "/services" },
    { label: "TaxVolca Global", href: "/global" },
    { label: "TaxVolca AI", href: "/ai" },
  ],
  Solutions: [
    { label: "Startup Ecosystem", href: "/solutions" },
    { label: "Corporate Suite", href: "/solutions" },
    { label: "NRI Solutions", href: "/solutions" },
    { label: "MSME Growth", href: "/solutions" },
    { label: "Business Setup", href: "/solutions" },
    { label: "Global Expansion", href: "/global" },
  ],
  Company: [
    { label: "About TaxVolca", href: "/about" },
    { label: "Leadership", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Insights", href: "/blog" },
    { label: "Client Portal", href: "/client-portal" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary dark:bg-[#020617] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,168,67,0.02)_50%,transparent_75%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt={brand.name} width={48} height={48} className="w-12 h-12" />
              <div>
                <h3 className="font-bold text-lg">{brand.name}</h3>
                <p className="text-xs text-accent/80">{brand.tagline}</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-md">
              {brand.mission}
            </p>
            <p className="text-accent font-serif italic text-sm mb-6">"{brand.promise}"</p>
            <div className="flex gap-3">
              {[Globe, ExternalLink, Globe, ExternalLink].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/50 hover:text-accent text-sm transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/40">
          {Object.values(address).map((addr) => (
            <div key={addr.name} className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-white/60">{addr.name}</p>
                <p>{addr.full}</p>
                <p className="text-xs mt-1">{addr.hours}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/40">
          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent shrink-0" />{phone} | {phoneAus}</div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent shrink-0" />{email}</div>
          <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-accent shrink-0" />WhatsApp: +{whatsapp}</div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-accent transition-colors">Security</Link>
            <Link href="#" className="hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
