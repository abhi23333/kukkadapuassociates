import { Reveal } from '@/components/reveal'
import { SectionLabel, SectionHeading } from '@/components/section-heading'

const STEPS = [
  {
    index: 'I',
    title: 'Explore',
    body: 'Identify promising opportunities, emerging markets and ideas with meaningful long-term potential.',
  },
  {
    index: 'II',
    title: 'Build',
    body: 'Develop businesses, partnerships and initiatives through disciplined execution and entrepreneurial thinking.',
  },
  {
    index: 'III',
    title: 'Grow',
    body: 'Pursue sustainable growth while maintaining integrity, adaptability and a long-term perspective.',
  },
]

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 border-y border-border/60 bg-secondary/40"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>02 — Our Approach</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading className="mt-7">
              Explore. Build. <span className="italic">Grow.</span>
            </SectionHeading>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border/70 bg-border/70 md:mt-20 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-secondary/60 md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-2xl font-light text-gold">
                    {step.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-px w-10 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-gold"
                  />
                </div>
                <h3 className="mt-10 font-serif text-3xl font-light tracking-[-0.01em] md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-sm font-sans text-[0.95rem] font-light leading-relaxed text-foreground/65">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
