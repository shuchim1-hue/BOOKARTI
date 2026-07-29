"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { aiTools } from "@/lib/data"
import { motion } from "framer-motion"
import { Activity, Bell, Bot, Calculator, MessageCircle, Scan, Send, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-10 h-10" />,
  Calculator: <Calculator className="w-10 h-10" />,
  Bell: <Bell className="w-10 h-10" />,
  Scan: <Scan className="w-10 h-10" />,
  Activity: <Activity className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
}

const chatSuggestions = [
  "What is the ITR deadline for FY 2025-26?",
  "How to register a company in India?",
  "What GST return do I need to file?",
  "Calculate my tax under new regime",
  "NRI tax filing requirements",
  "Documents needed for bank loan",
]

export default function AIToolsPageClient() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "ai", text: "Hello! I'm your AI Tax Assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages((prev) => [...prev, { role: "user", text: input }])
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Thank you for your question! Our team will respond shortly. For immediate assistance, please book a consultation or WhatsApp us." },
      ])
    }, 1000)
    setInput("")
  }

  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient-animated overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">AI-Powered Solutions</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="gold-gradient">AI Tools</span> for Smart Business
            </h1>
            <p className="text-xl text-white/70">
              Leverage cutting-edge artificial intelligence to simplify tax compliance, financial planning,
              and business advisory. Your intelligent partner in business growth.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent" />
              AI Tax Assistant Chat
            </h2>
            <Card className="h-[500px] flex flex-col">
              <CardContent className="p-4 flex flex-col h-full">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === "user"
                          ? "bg-accent text-primary rounded-br-sm"
                          : "bg-muted rounded-bl-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about tax, compliance..."
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <Button onClick={sendMessage} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 flex flex-wrap gap-2">
              {chatSuggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => { setInput(s); setChatOpen(true) }}
                  className="px-3 py-1.5 text-xs rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-accent" />
              Quick Tools
            </h2>
            <div className="grid gap-4">
              {aiTools.slice(0, 3).map((tool, i) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card variant="hover">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shrink-0`}>
                        {iconMap[tool.icon]}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{tool.title}</h3>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {tool.features.map((f) => (
                            <span key={f} className="px-2 py-0.5 text-[10px] rounded-full bg-accent/10 text-accent">{f}</span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">All AI-Powered Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card variant="hover" className="h-full group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {iconMap[tool.icon]}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                    <ul className="space-y-1.5">
                      {tool.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Sparkles className="w-3 h-3 text-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      Try Now <Zap className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-light overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Smart Tools, Smarter Business</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our AI tools are constantly evolving. Get personalized insights and recommendations for your business.
          </p>
          <Button asChild size="lg" variant="premium">
            <Link href="/appointment">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
