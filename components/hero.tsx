import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 sm:pb-24"
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

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <Reveal delay={100}>
          <span className="inline-flex items-center gap-3 font-sans text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            <span aria-hidden className="h-px w-8 bg-gold/70" />
            An Entrepreneurial Business Enterprise · India
          </span>
        </Reveal>

        <h1 className="mt-8 max-w-5xl font-serif text-[2.7rem] font-light leading-[1.02] tracking-[-0.015em] text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]">
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
          <p className="mt-8 flex items-center gap-4 font-serif text-xl font-light italic tracking-tight text-foreground/85 sm:text-2xl">
            <span aria-hidden className="h-px w-8 shrink-0 bg-gold/70" />
            Relentless in Pursuit, Ruthless in Execution.
          </p>
        </Reveal>

        <Reveal delay={700}>
          <p className="mt-7 max-w-2xl font-sans text-base font-light leading-relaxed text-foreground/70 sm:text-lg">
            Kukkadapu Associates is an entrepreneurial business enterprise
            exploring opportunities across diverse sectors, with a focus on
            sustainable growth, meaningful partnerships and long-term value
            creation.
          </p>
        </Reveal>

        <Reveal delay={800}>
          <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#approach"
              className="group inline-flex items-center justify-center gap-2.5 bg-foreground px-7 py-4 font-sans text-[0.8rem] font-medium uppercase tracking-[0.16em] text-background transition-opacity duration-300 hover:opacity-90"
            >
              Explore Our Approach
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 border border-foreground/25 px-7 py-4 font-sans text-[0.8rem] font-medium uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:border-foreground"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
