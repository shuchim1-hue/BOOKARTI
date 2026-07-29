import type { Metadata } from "next"
import BlogPostClient from "./client"

export async function generateStaticParams() {
  return [
    { slug: "income-tax-return-filing-deadline-2026" },
    { slug: "gst-compliance-business-guide" },
    { slug: "startup-registration-india-benefits" },
    { slug: "nri-tax-planning-india" },
    { slug: "company-registration-private-limited-vs-llp" },
    { slug: "australia-business-setup-guide" },
    { slug: "project-finance-cma-report" },
    { slug: "tds-return-filing-guide" },
    { slug: "fdi-india-guide-foreign-investors" },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Blog - ${slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
    description: "Expert insights and advice from TaxVolca.",
  }
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
