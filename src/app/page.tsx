import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CTASection } from "@/components/sections/cta-section"
import AIToolsPreview from "@/components/sections/ai-tools-preview"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AIToolsPreview />
      <ServicesSection />
      <CTASection />
    </>
  )
}
