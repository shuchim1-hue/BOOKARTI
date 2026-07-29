import { HeroV3 } from "@/components/sections/hero-v3"
import { ImpactSection } from "@/components/sections/impact-section"
import { ServicesSpheres } from "@/components/sections/services-spheres"
import { WhyTaxvolca } from "@/components/sections/why-taxvolca"
import { AIExperience } from "@/components/sections/ai-experience"
import { IndustriesCubes } from "@/components/sections/industries-cubes"
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel"
import { CTAV3 } from "@/components/sections/cta-v3"

export default function HomePage() {
  return (
    <>
      <HeroV3 />
      <ImpactSection />
      <ServicesSpheres />
      <IndustriesCubes />
      <WhyTaxvolca />
      <TestimonialsCarousel />
      <AIExperience />
      <CTAV3 />
    </>
  )
}
