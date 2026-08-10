import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function VisionSection() {
  return (
    <section
      aria-labelledby="vision-heading"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/vision-landscape.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-48">
        <div className="max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-3 font-sans text-[0.7rem] font-medium uppercase tracking-[0.28em] text-primary-foreground/50">
              <span aria-hidden className="h-px w-8 bg-gold/70" />
              Our Vision
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h2
              id="vision-heading"
              className="mt-9 font-serif text-4xl font-light leading-[1.06] tracking-[-0.015em] text-balance sm:text-5xl md:text-7xl"
            >
              To build an institution that outlasts individual{' '}
              <span className="italic text-gold">ventures.</span>
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-10 max-w-2xl font-sans text-lg font-light leading-relaxed text-primary-foreground/70">
              Kukkadapu Associates aims to develop a diversified portfolio of
              businesses grounded in integrity, disciplined execution and a
              long-term perspective.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
