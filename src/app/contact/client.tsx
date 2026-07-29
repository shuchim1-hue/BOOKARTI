"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { address, email, phone, phoneAus, whatsapp } from "@/lib/data"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient dark:bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">Get in Touch</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gold-gradient">Contact</span> TaxVolca
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">Three offices. Three continents. One global team ready to help.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Phone", value: phone, sub: `Australia: ${phoneAus}` },
              { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", value: `+${whatsapp}`, sub: "Quick response within minutes" },
              { icon: <Mail className="w-6 h-6" />, title: "Email", value: email, sub: "We respond within 24 hours" },
            ].map((item) => (
              <Card key={item.title} variant="hover">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-emerald-500/10 rounded-xl p-8 text-center">
                  <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Message Sent!</p>
                  <p className="text-muted-foreground">We'll respond within 24 hours. For urgent matters, WhatsApp us.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label htmlFor="name">Full Name *</Label><Input id="name" placeholder="Your name" required /></div>
                    <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" type="email" placeholder="your@email.com" required /></div>
                  </div>
                  <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" placeholder={phone} /></div>
                  <div className="space-y-2"><Label htmlFor="subject">Subject</Label><Input id="subject" placeholder="How can we help you?" /></div>
                  <div className="space-y-2"><Label htmlFor="message">Message *</Label><Textarea id="message" placeholder="Tell us about your requirement..." required /></div>
                  <Button type="submit" className="w-full" size="lg">Send Message</Button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              {Object.values(address).map((off) => (
                <Card key={off.name}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">{off.name}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />{off.full}</p>
                      <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent shrink-0" />{off.phone}</p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent shrink-0" />{email}</p>
                      <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent shrink-0" />{off.hours}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-accent/5 to-emerald-500/5 flex flex-col items-center justify-center border border-border">
                <MapPin className="w-10 h-10 text-accent mb-2" />
                <span className="text-muted-foreground text-sm font-medium">Global Offices</span>
                <span className="text-xs text-muted-foreground">India · Australia · UAE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
