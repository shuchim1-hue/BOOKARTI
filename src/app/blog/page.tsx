import type { Metadata } from "next"
import BlogPageClient from "./client"

export const metadata: Metadata = {
  title: "Blog",
  description: "Expert articles on Income Tax, GST, Audit, Company Law, Startup Advisory, NRI Services, Australia Compliance, and Business Growth.",
}

export default function BlogPage() {
  return <BlogPageClient />
}
