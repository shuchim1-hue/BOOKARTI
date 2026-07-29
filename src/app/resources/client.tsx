"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Calendar, Clock, FileText, Podcast, User, Video } from "lucide-react"
import Link from "next/link"

export default function ResourcesPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient dark:bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">Resource Center</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Insights & <span className="gold-gradient">Resources</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">Expert insights, guides, and thought leadership on tax, legal, audit, and business growth.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card variant="hover" className="h-full group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-[16/9] bg-gradient-to-br from-accent/10 to-emerald-500/10 flex items-center justify-center">
                      <Badge variant="gold" className="absolute top-4 left-4">{post.category}</Badge>
                      <FileText className="w-8 h-8 text-accent/40" />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                      <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
