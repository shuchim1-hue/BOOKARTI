"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader, SectionWrapper } from "@/components/sections/section-wrapper"
import { motion } from "framer-motion"
import { Activity, Bell, Bot, Calculator, Brain, Scan, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const aiTools = [
  { icon: <Bot className="w-8 h-8" />, title: "AI Tax Assistant", desc: "Get instant answers to your tax queries powered by AI", color: "from-emerald-600 to-teal-600" },
  { icon: <Bell className="w-8 h-8" />, title: "Compliance Engine", desc: "Never miss a deadline with smart reminders", color: "from-amber-600 to-orange-600" },
  { icon: <Scan className="w-8 h-8" />, title: "Document Analyzer", desc: "AI extracts & organizes your financial data", color: "from-purple-600 to-pink-600" },
  { icon: <Calculator className="w-8 h-8" />, title: "Tax Calculator", desc: "Compare old vs new regime instantly", color: "from-blue-600 to-indigo-600" },
  { icon: <Activity className="w-8 h-8" />, title: "Business Health Score", desc: "AI-powered financial health assessment", color: "from-cyan-600 to-blue-600" },
  { icon: <Zap className="w-8 h-8" />, title: "Funding Eligibility", desc: "Check loan & scheme eligibility in seconds", color: "from-rose-600 to-red-600" },
]

export default function AIToolsPreview() {
  return (
    <SectionWrapper id="ai-tools">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          <Brain className="w-4 h-4" />
          TaxVolca AI Platform
        </div>
        <SectionHeader title="Intelligence. Automation. Insights." subtitle="Our proprietary AI platform powers smarter compliance, real-time insights, and predictive analytics" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiTools.map((tool, i) => (
          <motion.div key={tool.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <Card variant="hover" className="h-full group overflow-hidden">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button asChild size="lg">
          <Link href="/ai">Explore AI Platform <Sparkles className="w-5 h-5 ml-2" /></Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
