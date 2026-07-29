"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/data"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function BlogPostClient() {
  const params = useParams()
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button asChild><Link href="/blog">Back to Blog</Link></Button>
      </div>
    )
  }

  return (
    <>
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <Badge variant="gold" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <button className="flex items-center gap-2 text-accent hover:text-accent-light">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 mb-8" />
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is a sample blog post. In the production version, this would contain the full article content
              with detailed analysis, expert insights, and practical guidance on {post.category.toLowerCase()} topics.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At TaxVolca, we regularly publish articles to help businesses and individuals
              stay informed about the latest developments in taxation, compliance, and business advisory.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For personalized advice on {post.category.toLowerCase()} matters, please book a consultation with our expert team.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <User className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground">Founder & Chartered Accountant</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Tags:</span>
            <Badge variant="outline">{post.category}</Badge>
            <Badge variant="outline">Taxation</Badge>
            <Badge variant="outline">Compliance</Badge>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Need Expert Advice?</h2>
          <p className="text-white/70 mb-8">Book a consultation with our team for personalized guidance.</p>
          <Button asChild size="lg" variant="premium">
            <Link href="/appointment">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            author: { "@type": "Person", name: post.author },
            datePublished: post.date,
            description: post.excerpt,
          }),
        }}
      />
    </>
  )
}
