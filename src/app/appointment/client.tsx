"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Calendar, CheckCircle, MessageCircle, Phone, Video, MapPin } from "lucide-react"
import Link from "next/link"

const consultationTypes = [
  { icon: <Video className="w-5 h-5" />, title: "Video Meeting", desc: "Google Meet / Zoom" },
  { icon: <MapPin className="w-5 h-5" />, title: "Office Visit", desc: "In-person consultation" },
  { icon: <Phone className="w-5 h-5" />, title: "Phone Call", desc: "Telephonic discussion" },
  { icon: <MessageCircle className="w-5 h-5" />, title: "WhatsApp", desc: "Chat consultation" },
]

export default function AppointmentPageClient() {
  const [selectedType, setSelectedType] = useState<string>("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="relative pt-32 pb-20 hero-gradient min-h-screen flex items-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-accent/20 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Request Submitted!</h1>
          <p className="text-white/70 mb-8">
            We will confirm your appointment within 24 hours via email and WhatsApp.
          </p>
          <Button asChild variant="premium">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Book Appointment</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Schedule Your <span className="gold-gradient">Consultation</span>
            </h1>
            <p className="text-xl text-white/70">
              Choose your preferred consultation mode and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Consultation Type</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {consultationTypes.map((type) => (
                  <button
                    key={type.title}
                    onClick={() => setSelectedType(type.title)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedType === type.title
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3">
                      {type.icon}
                    </div>
                    <h3 className="font-semibold text-sm">{type.title}</h3>
                    <p className="text-xs text-muted-foreground">{type.desc}</p>
                  </button>
                ))}
              </div>

              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-semibold mb-4">What happens next?</h3>
                <ol className="space-y-3">
                  {[
                    "Fill in your details and submit the form",
                    "We review your request within 24 hours",
                    "You receive confirmation via email & WhatsApp",
                    "Reminder sent 24 hours before the appointment",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
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
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" required />
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Date</Label>
                      <Input type="date" required />
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Time</Label>
                      <Input type="time" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        className="flex h-11 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select a service</option>
                        <option>Income Tax</option>
                        <option>GST</option>
                        <option>Audit</option>
                        <option>Company Registration</option>
                        <option>ROC Compliance</option>
                        <option>Australia Services</option>
                        <option>NRI Services</option>
                        <option>Funding & Finance</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Brief Description *</Label>
                      <Textarea
                        id="message"
                        placeholder="Briefly describe your requirement..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Calendar className="w-5 h-5 mr-2" />
                      Request Appointment
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
