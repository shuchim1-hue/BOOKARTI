"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader, SectionWrapper } from "@/components/sections/section-wrapper"
import { aiTools } from "@/lib/data"
import { motion } from "framer-motion"
import { Activity, Bell, Bot, Calculator, Scan, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-8 h-8" />,
  Calculator: <Calculator className="w-8 h-8" />,
  Bell: <Bell className="w-8 h-8" />,
  Scan: <Scan className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
}

export default function AIToolsPreview() {
  return (
    <SectionWrapper id="ai-tools">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          AI-Powered Solutions
        </div>
        <SectionHeader
          title="Smart AI Tools for Your Business"
          subtitle="Leverage the power of artificial intelligence to simplify tax, compliance, and financial planning"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiTools.slice(0, 6).map((tool, i) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Card variant="hover" className="h-full group overflow-hidden">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {iconMap[tool.icon] || <Bot className="w-8 h-8" />}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                <ul className="space-y-1.5">
                  {tool.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Sparkles className="w-3 h-3 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button asChild size="lg">
          <Link href="/ai-tools">
            Explore All AI Tools <Sparkles className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
