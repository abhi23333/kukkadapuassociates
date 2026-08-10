'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

const DETAILS: {
  label: string
  value: string
  href?: string
  external?: boolean
}[] = [
  {
    label: 'Email',
    value: 'info@kukkadapuassociates.com',
    href: 'mailto:info@kukkadapuassociates.com',
  },
  {
    label: 'Mobile',
    value: '+91 93902 21318',
    href: 'tel:+919390221318',
  },
  {
    label: 'LinkedIn',
    value: 'Kukkadapu Associates',
    href: 'https://www.linkedin.com/company/kukkadapuassociates/',
    external: true,
  },
  {
    label: 'Location',
    value: 'Kukkadapu Enclave, Miryalaguda — 508207\nNalgonda District, Telangana, India',
  },
]

const FIELDS = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    autoComplete: 'name',
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    autoComplete: 'email',
    required: true,
  },
  {
    name: 'organization',
    label: 'Organization',
    type: 'text',
    autoComplete: 'organization',
    required: false,
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    autoComplete: 'off',
    required: true,
  },
] as const

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/60 bg-secondary/40"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          {/* Left: heading + details */}
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel>07 — Contact</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-7 font-serif text-4xl font-light leading-[1.06] tracking-[-0.015em] text-balance sm:text-5xl md:text-6xl">
                Let&apos;s build what comes{' '}
                <span className="italic">next.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-md font-sans text-base font-light leading-relaxed text-foreground/65">
                Kukkadapu Associates welcomes conversations with entrepreneurs,
                businesses, professionals and prospective partners exploring
                meaningful opportunities for collaboration and long-term growth.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <dl className="mt-14 space-y-8 border-t border-border/70 pt-10">
                {DETAILS.map((d) => (
                  <div
                    key={d.label}
                    className="grid grid-cols-[7rem_1fr] items-baseline gap-4"
                  >
                    <dt className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="font-sans text-sm font-light text-foreground/80">
                      {d.href ? (
                        <a
                          href={d.href}
                          {...(d.external
                            ? {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              }
                            : {})}
                          className="group inline-flex"
                        >
                          <span className="relative">
                            {d.value}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                          </span>
                        </a>
                      ) : (
                        <span className="whitespace-pre-line leading-relaxed">
                          {d.value}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={150}>
              {submitted ? (
                <div
                  role="status"
                  className="flex min-h-[360px] flex-col items-start justify-center border border-border/70 bg-background p-10"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="mt-6 font-serif text-2xl font-light">
                    Thank you for reaching out.
                  </p>
                  <p className="mt-3 max-w-sm font-sans text-sm font-light leading-relaxed text-foreground/60">
                    Your enquiry has been noted. Please also feel free to reach
                    us directly at{' '}
                    <a
                      href="mailto:info@kukkadapuassociates.com"
                      className="text-foreground underline underline-offset-4"
                    >
                      info@kukkadapuassociates.com
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  {FIELDS.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required={field.required}
                        className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 font-sans text-base font-light text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent pb-3 font-sans text-base font-light text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 font-sans text-[0.8rem] font-medium uppercase tracking-[0.16em] text-background transition-opacity duration-300 hover:opacity-90"
                  >
                    Send Enquiry
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="font-sans text-xs font-light leading-relaxed text-muted-foreground">
                    This form is not yet connected to a delivery system. For a
                    guaranteed response, please write to us directly at{' '}
                    <a
                      href="mailto:info@kukkadapuassociates.com"
                      className="text-foreground/80 underline underline-offset-4"
                    >
                      info@kukkadapuassociates.com
                    </a>
                    .
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
