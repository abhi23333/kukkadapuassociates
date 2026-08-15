import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

type Promoter = {
  name: string
  image: string
  bio: React.ReactNode
  quote?: string
}

const PROMOTERS: Promoter[] = [
  {
    name: 'Shri Kukkadapu Maruthi',
    image: '/images/promoter-maruthi.jpeg',
    bio: (
      <>
        <p>
          Shri Kukkadapu Maruthi brings nearly three and a half decades of
          entrepreneurial and business experience across diverse ventures and
          commercial activities.
        </p>
        <p>
          Over the course of his journey, he has developed a practical
          understanding of business, relationships, markets and the importance
          of building enterprises with resilience and integrity. His experience
          has been shaped through years of hands-on involvement in business,
          navigating changing circumstances and identifying opportunities
          across different areas.
        </p>
        <p>
          His approach is grounded in experience, perseverance, relationships
          and long-term thinking. As a promoter of Kukkadapu Associates, he
          provides the foundation of practical business knowledge and
          entrepreneurial experience upon which the organization seeks to build
          its next chapter.
        </p>
      </>
    ),
    quote:
      'Start Unknown, Finish Unforgettable.',
  },
  {
    name: 'Shri Kukkadapu Abhivadan',
    image: '/images/promoter-abhivadan.jpeg',
    bio: (
      <>
        <p>
          Shri Kukkadapu Abhivadan represents the next generation of Kukkadapu
          Associates, bringing a contemporary perspective shaped by technology,
          entrepreneurship and an emerging interest in business and
          institution-building.
        </p>
        <p>
          Currently pursuing an undergraduate engineering degree at Chaitanya
          Bharathi Institute of Technology (CBIT), Hyderabad, he has developed a
          keen interest in entrepreneurship, business strategy and the
          development of new opportunities.
        </p>
        <p>
          Working alongside the founding generation, he seeks to contribute his
          knowledge, energy and contemporary perspective while learning from
          decades of practical business experience. His long-term aspiration is
          to help strengthen and expand the enterprise&apos;s pursuits while
          exploring new avenues for growth and diversification.
        </p>
      </>
    ),
    quote:
      'Respect the experience of the past. Learn from it. Build for what comes next.',
  },
]

export function PromotersSection() {
  return (
    <section
      id="promoters"
      className="scroll-mt-24 border-t border-border/60 bg-secondary/40"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>Our Promoters</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-7 font-serif text-2xl font-light italic leading-[1.3] tracking-[-0.01em] text-balance text-foreground/85 sm:text-3xl">
              Experience rooted in enterprise. Ambition shaped for the future.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-20 md:mt-24 md:grid-cols-2">
          {PROMOTERS.map((p, i) => (
            <Reveal key={p.name} delay={150 + i * 120}>
              <article className="flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-background">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`Portrait of ${p.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="mt-8">
                  <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    Promoter
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-light tracking-[-0.01em] sm:text-3xl">
                    {p.name}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-6 block h-px w-16 bg-gold/70"
                  />
                </div>

                <div className="mt-7 space-y-5 font-sans text-[0.95rem] font-light leading-relaxed text-foreground/70">
                  {p.bio}
                </div>

                {p.quote && (
                  <blockquote className="mt-8 border-l border-gold/60 pl-5 font-serif text-lg font-light italic leading-relaxed text-foreground/85">
                    &ldquo;{p.quote}&rdquo;
                  </blockquote>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
