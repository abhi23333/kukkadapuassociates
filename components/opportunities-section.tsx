import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

export function OpportunitiesSection() {
  return (
    <section
      id="opportunities"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-24 md:px-10 md:py-36"
    >
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <SectionLabel>06 — Opportunities &amp; Partnerships</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-7 font-serif text-4xl font-light leading-[1.08] tracking-[-0.015em] text-balance sm:text-5xl md:text-6xl">
              Open to meaningful <span className="italic">opportunities.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-foreground/65 sm:text-lg">
              We welcome conversations with entrepreneurs, businesses,
              professionals and partners exploring opportunities for
              collaboration, investment, strategic relationships and new
              ventures.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
          <Reveal delay={250}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-foreground px-8 py-5 font-sans text-[0.8rem] font-medium uppercase tracking-[0.16em] text-background transition-opacity duration-300 hover:opacity-90"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
