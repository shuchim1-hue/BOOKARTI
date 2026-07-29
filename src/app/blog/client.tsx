"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

export default function BlogPageClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Our Blog</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights & <span className="gold-gradient">Expert Advice</span>
            </h1>
            <p className="text-xl text-white/70">
              Stay informed with expert articles on taxation, compliance, business strategy, and cross-border advisory.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="gold" className="cursor-pointer">All</Badge>
            {["Income Tax", "GST", "Startup", "NRI", "Australia", "Funding", "Legal", "Company Law"].map((cat) => (
              <Badge key={cat} variant="outline" className="cursor-pointer hover:bg-accent/10">
                {cat}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card variant="hover" className="h-full group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-[16/9] bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                      <Badge variant="gold" className="absolute top-4 left-4">{post.category}</Badge>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="w-3 h-3" /> {post.author}
                        </span>
                        <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
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
