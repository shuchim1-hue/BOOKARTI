export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "CA Minakshi Verma & Associates",
  description: "Indian & Australian Chartered Accountants | Legal | Tax | Corporate Advisory",
  url: "https://caminakshiverma.com",
  logo: "https://caminakshiverma.com/logo.png",
  email: "info@caminakshiverma.com",
  telephone: "+91-XXX-XXX-XXXX",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "[City]",
    addressRegion: "[State]",
  },
  knowsAbout: [
    "Accounting", "Taxation", "GST", "Audit", "Corporate Services",
    "ROC Compliance", "Legal Services", "Funding & Finance",
    "Startup Services", "FEMA", "NRI Services", "Australia Services",
  ],
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CA Minakshi Verma & Associates",
  description: "Chartered Accountants and Legal Consultancy serving Indian and Australian businesses",
  url: "https://caminakshiverma.com",
  telephone: "+91-XXX-XXX-XXXX",
  email: "info@caminakshiverma.com",
  areaServed: ["India", "Australia"],
  priceRange: "$$",
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function serviceSchema(service: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "AccountingService",
      name: "CA Minakshi Verma & Associates",
    },
  }
}
