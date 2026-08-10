import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

const PRINCIPLES = [
  {
    title: 'Integrity',
    body: 'Relationships and decisions grounded in honesty and responsibility.',
  },
  {
    title: 'Discipline',
    body: 'Thoughtful execution, financial prudence and attention to fundamentals.',
  },
  {
    title: 'Adaptability',
    body: 'The willingness to learn, evolve and respond to changing opportunities.',
  },
  {
    title: 'Long-Term Thinking',
    body: 'Building with the perspective that meaningful institutions take time.',
  },
]

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-24 md:px-10 md:py-40"
    >
      <div className="max-w-4xl">
        <Reveal>
          <SectionLabel>05 — Philosophy</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-8 font-serif text-4xl font-light leading-[1.05] tracking-[-0.015em] text-balance sm:text-5xl md:text-7xl">
            Built for the <span className="italic">long term.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 max-w-2xl font-serif text-2xl font-light leading-[1.4] text-foreground/75 text-pretty md:text-3xl">
            &ldquo;We believe the strongest businesses are not built around
            short-term momentum, but around enduring principles.&rdquo;
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div className="group flex h-full flex-col justify-between gap-16 bg-background p-8 transition-colors duration-500 hover:bg-secondary/50 md:p-9">
              <span
                aria-hidden
                className="font-serif text-3xl font-light text-gold/80"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-light tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="mt-3 font-sans text-[0.9rem] font-light leading-relaxed text-foreground/60">
                  {p.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
