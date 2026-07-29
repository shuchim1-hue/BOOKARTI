"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { faqs } from "@/lib/data"
import { ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function FAQPageClient() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.map((cat) => ({
    ...cat,
    qa: cat.qa.filter(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  })).filter((cat) => cat.qa.length > 0)

  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">FAQ</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="gold-gradient">Questions</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Find answers to common questions about our services, compliance, and procedures.
            </p>
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl glass text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={faqs[0].category} className="w-full">
            <TabsList className="mb-8 flex-wrap">
              {faqs.map((cat) => (
                <TabsTrigger key={cat.category} value={cat.category}>
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqs.map((cat) => (
              <TabsContent key={cat.category} value={cat.category}>
                <Accordion type="single" collapsible className="w-full">
                  {cat.qa.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left text-base font-medium">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.flatMap((cat) =>
                  cat.qa.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: { "@type": "Answer", text: item.a },
                  }))
                ),
              }),
            }}
          />
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/70 mb-8">Our team is here to help with personalized answers.</p>
          <Button asChild size="lg" variant="premium">
            <Link href="/contact">Contact Us <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </>
  )
}
