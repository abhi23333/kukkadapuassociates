import { Reveal } from '@/components/reveal'
import { SectionLabel, SectionHeading } from '@/components/section-heading'

const AREAS = [
  {
    number: '01',
    title: 'Agri & Food',
    body: 'Exploring opportunities across agriculture, food and allied businesses.',
  },
  {
    number: '02',
    title: 'Technology & Digital',
    body: 'Exploring technology-led businesses and emerging digital opportunities.',
  },
  {
    number: '03',
    title: 'Trade & Commerce',
    body: 'Evaluating opportunities across domestic and international commerce.',
  },
  {
    number: '04',
    title: 'Manufacturing & Infrastructure',
    body: 'Exploring businesses with long-term industrial and infrastructure potential.',
  },
  {
    number: '05',
    title: 'Emerging Opportunities',
    body: 'Remaining open to new sectors, ventures and ideas with compelling potential.',
  },
]

export function AreasSection() {
  return (
    <section
      id="areas"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-24 md:px-10 md:py-36"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel>03 — Areas of Interest</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading className="mt-7 md:text-5xl">
              Areas of Interest
            </SectionHeading>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-md font-sans text-base font-light leading-relaxed text-foreground/65">
              We remain open to opportunities across industries where thoughtful
              execution, entrepreneurial thinking and long-term value creation
              can make a meaningful difference.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-7 max-w-md border-l-2 border-gold/50 pl-4 font-sans text-[0.82rem] font-light leading-relaxed text-muted-foreground">
              These are areas of interest — not claims that Kukkadapu Associates
              currently operates businesses in each of these sectors.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <ul className="border-t border-border/70">
            {AREAS.map((area, i) => (
              <Reveal as="li" key={area.title} delay={i * 80}>
                <div className="group flex items-start gap-6 border-b border-border/70 py-7 transition-colors duration-500 hover:bg-secondary/40 md:gap-10 md:py-9">
                  <span className="mt-1 font-sans text-[0.72rem] font-medium tracking-[0.2em] text-gold">
                    {area.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-light tracking-[-0.01em] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                      {area.title}
                    </h3>
                    <p className="mt-2.5 max-w-lg font-sans text-[0.95rem] font-light leading-relaxed text-foreground/60">
                      {area.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
