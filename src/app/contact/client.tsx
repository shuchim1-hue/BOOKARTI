"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const offices = [
  {
    city: "India Office",
    address: "[City], [State], India",
    phone: "+91-XXX-XXX-XXXX",
    email: "india@caminakshiverma.com",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
  },
  {
    city: "Australia Office",
    address: "[City], [State], Australia",
    phone: "+61-XXX-XXX-XXX",
    email: "australia@caminakshiverma.com",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM AEST",
  },
]

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Get in Touch</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="gold-gradient">Contact</span> Us
            </h1>
            <p className="text-xl text-white/70">
              We&apos;d love to hear from you. Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+91-XXX-XXX-XXXX", sub: "Emergency: +91-XXX-XXX-XXXX" },
              { icon: <Mail className="w-6 h-6" />, title: "Email", value: "info@caminakshiverma.com", sub: "We respond within 24 hours" },
              { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", value: "+91-XXX-XXX-XXXX", sub: "Quick response on chat" },
            ].map((item) => (
              <Card key={item.title} variant="hover">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
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
                <div className="bg-accent/10 rounded-xl p-8 text-center">
                  <p className="text-lg font-semibold text-accent mb-2">Message Sent!</p>
                  <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your requirement..." required />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              {offices.map((office) => (
                <Card key={office.city}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">{office.city}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {office.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent shrink-0" />
                        {office.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent shrink-0" />
                        {office.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent shrink-0" />
                        {office.hours}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="aspect-[16/9] rounded-xl bg-muted flex items-center justify-center">
                <MapPin className="w-8 h-8 text-accent" />
                <span className="ml-2 text-muted-foreground">Interactive Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
