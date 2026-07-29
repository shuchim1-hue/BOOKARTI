"use client"

import { addressIndia, addressAustralia, email, firmName, phone, phoneAustralia, tagline, workingHours, whatsapp } from "@/lib/data"
import { ExternalLink, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Accounting & Bookkeeping", href: "/services" },
    { label: "Taxation & TDS", href: "/services" },
    { label: "GST Services", href: "/services" },
    { label: "Audit & Assurance", href: "/services" },
    { label: "Corporate Services", href: "/services" },
    { label: "ROC Compliance", href: "/services" },
  ],
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "AI Tax Assistant", href: "/ai-tools" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Client Portal", href: "/client-portal" },
    { label: "Book Appointment", href: "/appointment" },
    { label: "India Services", href: "/india" },
    { label: "Australia Services", href: "/australia" },
    { label: "Admin Dashboard", href: "/admin" },
    { label: "Privacy Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,168,67,0.03)_50%,transparent_75%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt={firmName}
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-bold text-lg">{firmName}</h3>
                <p className="text-xs text-accent/80">{tagline}</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              A premier Chartered Accountancy and Legal Consultancy firm, providing
              comprehensive business solutions to clients across India and Australia
              with a perfect blend of global expertise and personalized service.
            </p>
            <div className="flex gap-3">
              {[Globe, ExternalLink, Globe, ExternalLink].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-accent text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/40">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-white/60">India Office</p>
              <p>{addressIndia.full}</p>
              <p className="text-xs mt-1">{workingHours.india}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-white/60">Australia Office</p>
              <p>{addressAustralia.full}</p>
              <p className="text-xs mt-1">{workingHours.australia}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>{phone} | {phoneAustralia}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-accent shrink-0" />
              <span>WhatsApp: +{whatsapp}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} {firmName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-accent transition-colors">Disclaimer</Link>
            <Link href="#" className="hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
