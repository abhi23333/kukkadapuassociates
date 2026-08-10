import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { PromotersSection } from '@/components/promoters-section'
import { ApproachSection } from '@/components/approach-section'
import { AreasSection } from '@/components/areas-section'
import { VenturesSection } from '@/components/ventures-section'
import { PhilosophySection } from '@/components/philosophy-section'
import { VisionSection } from '@/components/vision-section'
import { OpportunitiesSection } from '@/components/opportunities-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <PromotersSection />
        <ApproachSection />
        <AreasSection />
        <VenturesSection />
        <PhilosophySection />
        <VisionSection />
        <OpportunitiesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
