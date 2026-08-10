import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

export function VenturesSection() {
  return (
    <section
      id="ventures"
      className="scroll-mt-24 border-y border-border/60 bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-40">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel className="text-primary-foreground/60">
                04 — Ventures
              </SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-7 font-serif text-4xl font-light leading-[1.08] tracking-[-0.01em] sm:text-5xl md:text-6xl">
                Our Ventures
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 font-serif text-xl font-light italic text-primary-foreground/70 md:text-2xl">
                A portfolio in the making.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={150}>
              <p className="max-w-xl font-sans text-base font-light leading-relaxed text-primary-foreground/70 sm:text-lg">
                Kukkadapu Associates is at an early stage of building and
                evaluating its portfolio of businesses and ventures. As the
                platform evolves, this section will grow to reflect businesses
                and initiatives that form part of the wider ecosystem.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 border border-primary-foreground/15 p-10 md:p-14">
                <span className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.28em] text-primary-foreground/50">
                  In Development
                </span>
                <p className="mt-6 font-serif text-3xl font-light leading-tight tracking-[-0.01em] md:text-4xl">
                  Building what comes next.
                </p>
                <a
                  href="#opportunities"
                  className="group mt-10 inline-flex items-center gap-2.5 font-sans text-[0.8rem] font-medium uppercase tracking-[0.16em] text-primary-foreground"
                >
                  <span className="relative">
                    Discuss an Opportunity
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-gold transition-transform duration-300 group-hover:scale-x-0" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
