import SolutionsPageClient from "./client"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "Solutions", description: "TaxVolca solutions for startups, corporates, NRIs, MSMEs, and global businesses." }

export default function SolutionsPage() { return <SolutionsPageClient /> }
