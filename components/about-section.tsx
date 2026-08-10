import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-24 md:px-10 md:py-36"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel>01 — About Us</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-7 font-serif text-3xl font-light leading-[1.12] tracking-[-0.01em] text-balance sm:text-4xl md:text-[2.9rem]">
              An entrepreneurial platform for long-term growth.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-2">
          <div className="max-w-xl space-y-7 font-sans text-base font-light leading-relaxed text-foreground/70 sm:text-lg">
            <Reveal delay={150}>
              <p>
                Kukkadapu Associates is built around a simple belief: enduring
                businesses are created through thoughtful decisions, strong
                relationships and a willingness to pursue opportunities with
                patience and discipline.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p>
                Kukkadapu Associates is currently exploring opportunities across
                selected sectors while developing the foundations for a
                diversified portfolio of businesses.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
