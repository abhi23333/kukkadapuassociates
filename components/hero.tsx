import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-12 pt-28 sm:pb-20 sm:pt-32"
    >
      {/* Background image treatment */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-architecture.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.14]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        <h1 className="mt-6 max-w-5xl font-serif text-[2.35rem] font-light leading-[1.04] tracking-[-0.015em] text-balance sm:mt-8 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <Reveal as="span" className="block" delay={150}>
            Building businesses.
          </Reveal>

          <Reveal as="span" className="block" delay={300}>
            Exploring opportunities.
          </Reveal>

          <Reveal
            as="span"
            className="block italic text-muted-foreground"
            delay={450}
          >
            Creating long-term value.
          </Reveal>
        </h1>

        <Reveal delay={600}>
          <p className="mt-6 flex items-center gap-3 font-serif text-lg font-light italic tracking-tight text-foreground/85 sm:mt-8 sm:gap-4 sm:text-2xl">
            <span
              aria-hidden
              className="h-px w-6 shrink-0 bg-gold/70 sm:w-8"
            />
            <span>Relentless in Pursuit, Ruthless in Execution.</span>
          </p>
        </Reveal>

        <Reveal delay={700}>
          <p className="mt-6 max-w-2xl font-sans text-sm font-light leading-relaxed text-foreground/70 sm:mt-7 sm:text-lg">
            Kukkadapu Associates is an entrepreneurial business enterprise
            exploring opportunities across diverse sectors, with a focus on
            sustainable growth, meaningful partnerships and long-term value
            creation.
          </p>
        </Reveal>

        <Reveal delay={800}>
          <div className="mt-8 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#approach"
              className="group inline-flex w-full items-center justify-center gap-2.5 bg-foreground px-6 py-3.5 font-sans text-[0.75rem] font-medium uppercase tracking-[0.14em] text-background transition-opacity duration-300 hover:opacity-90 sm:w-auto sm:px-7 sm:py-4 sm:text-[0.8rem] sm:tracking-[0.16em]"
            >
              Explore Our Approach
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2.5 border border-foreground/25 px-6 py-3.5 font-sans text-[0.75rem] font-medium uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:border-foreground sm:w-auto sm:px-7 sm:py-4 sm:text-[0.8rem] sm:tracking-[0.16em]"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
