import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </>
  )
}
