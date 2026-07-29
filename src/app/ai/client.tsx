"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { motion } from "framer-motion"
import { Activity, Bell, Bot, Brain, Calculator, MessageCircle, Scan, Send, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const aiTools = [
  { icon: <Bot className="w-8 h-8" />, title: "AI Tax Assistant", desc: "Get instant answers to your tax queries. Ask about deductions, exemptions, filing, and planning.", color: "from-emerald-600 to-teal-600" },
  { icon: <Bell className="w-8 h-8" />, title: "Compliance Engine", desc: "Never miss a deadline. AI-powered reminders for GST, TDS, ITR, ROC, and more.", color: "from-amber-600 to-orange-600" },
  { icon: <Scan className="w-8 h-8" />, title: "Document Analyzer", desc: "Upload documents. AI extracts, analyzes, and organizes data for filing and compliance.", color: "from-purple-600 to-pink-600" },
  { icon: <Calculator className="w-8 h-8" />, title: "Tax Calculator", desc: "Compare old vs new regime. Calculate HRA, capital gains, and Section 80 deductions instantly.", color: "from-blue-600 to-indigo-600" },
  { icon: <Activity className="w-8 h-8" />, title: "Business Health Score", desc: "AI-powered financial health assessment with benchmarking and recommendations.", color: "from-cyan-600 to-blue-600" },
  { icon: <Zap className="w-8 h-8" />, title: "Funding Eligibility", desc: "Check eligibility for loans, startup funding, and government schemes in seconds.", color: "from-rose-600 to-red-600" },
]

export default function AIPageClient() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "ai", text: "Welcome to TaxVolca AI! I'm your intelligent compliance assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages((prev) => [...prev, { role: "user", text: input }])
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: "Thank you for your question! Our AI is processing your request. For personalized assistance, you can book a consultation with our expert team." }])
    }, 1000)
    setInput("")
  }

  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient dark:bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">TaxVolca AI</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gold-gradient">AI-Powered</span> Compliance Platform
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">Built by tax experts and engineers. Our proprietary AI transforms how businesses manage tax, compliance, and advisory.</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Brain className="w-6 h-6 text-accent" /> AI Assistant</h2>
            <Card className="h-[460px] flex flex-col">
              <CardContent className="p-4 flex flex-col h-full">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-accent text-primary rounded-br-sm" : "bg-muted rounded-bl-sm"}`}>{msg.text}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about tax, compliance, company registration..." onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
                  <Button onClick={sendMessage} size="icon"><Send className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Sparkles className="w-6 h-6 text-accent" /> Quick Actions</h2>
            <div className="grid gap-3">
              {aiTools.slice(0, 3).map((tool, i) => (
                <motion.div key={tool.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Card variant="hover">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shrink-0`}>{tool.icon}</div>
                      <div>
                        <h3 className="font-semibold text-sm">{tool.title}</h3>
                        <p className="text-xs text-muted-foreground">{tool.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">All AI Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {aiTools.map((tool, i) => (
              <motion.div key={tool.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card variant="hover" className="h-full group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>{tool.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                    <Button variant="outline" size="sm" className="mt-4 w-full">Try Now <Zap className="w-3 h-3 ml-2" /></Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
