import Image from 'next/image'
import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

type Promoter = {
  name: string
  image: string
  bio: ReactNode
  quote?: string
}

const PROMOTERS: Promoter[] = [
  {
    name: 'Shri Kukkadapu Abhivadan',
    image: '/images/promoter-abhivadan.jpeg',
    bio: (
      <>
        <p>
          Shri Kukkadapu Abhivadan is drawn to the timeless principles of
          enterprise — hard work, integrity, discipline and the patience to
          build something that lasts. His interests lie in traditional
          businesses, trade, industry and the many possibilities within the
          world of enterprise.
        </p>
        <p>
          He believes that good businesses are built slowly, through trust,
          relationships and a deep understanding of the work behind them.
          Rather than seeking recognition, he values learning from experience,
          respecting those who have built before him and finding his own path
          through consistent effort.
        </p>
        <p>
          With a long-term outlook, he hopes to build and grow businesses of
          lasting value, while staying grounded in the principles that have
          stood the test of time. For him, the journey is about learning,
          taking responsibility and gradually building something worthy of
          being remembered.
        </p>
      </>
    ),
    quote: 'Start Unknown, Finish Unforgettable.',
  },
]

export function PromotersSection() {
  return (
    <section
      id="promoters"
      className="scroll-mt-24 border-t border-border/60 bg-secondary/40"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>Our Promoters</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-7 font-serif text-2xl font-light italic leading-[1.3] tracking-[-0.01em] text-balance text-foreground/85 sm:text-3xl">
              Experience rooted in enterprise. Ambition shaped for the future.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex justify-center md:mt-24">
          {PROMOTERS.map((p, i) => (
            <Reveal key={p.name} delay={150 + i * 120}>
              <article className="flex w-full max-w-[620px] flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-background">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`Portrait of ${p.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="mt-8 text-center">
                  <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    Promoter
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-light tracking-[-0.01em] sm:text-3xl">
                    {p.name}
                  </h3>

                  <span
                    aria-hidden
                    className="mx-auto mt-6 block h-px w-16 bg-gold/70"
                  />
                </div>

                <div className="mt-7 space-y-5 text-center font-sans text-[0.95rem] font-light leading-relaxed text-foreground/70">
                  {p.bio}
                </div>

                {p.quote && (
                  <blockquote className="mt-8 border-l border-gold/60 pl-5 text-left font-serif text-lg font-light italic leading-relaxed text-foreground/85">
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
