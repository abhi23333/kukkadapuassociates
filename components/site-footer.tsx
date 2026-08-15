import Image from 'next/image'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Areas of Interest', href: '#areas' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Image
              src="/images/kukkadapu-logo-v2.png"
              alt="Kukkadapu Associates"
              width={1710}
              height={960}
              className="h-auto w-52 object-contain mix-blend-multiply sm:w-60 md:w-64"
            />
            <p className="mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-foreground/55">
              Building businesses. Exploring opportunities. Creating long-term value.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2 md:col-start-8">
            <ul className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex font-sans text-sm font-light text-foreground/70 transition-colors hover:text-foreground"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 md:col-start-10">
            <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Get in touch
            </p>
            <address className="mt-4 space-y-2 font-sans text-sm font-light not-italic text-foreground/70">
              <p>Miryalaguda, Telangana, India</p>
              <p>
                <a
                  href="mailto:info@kukkadapuassociates.com"
                  className="transition-colors hover:text-foreground"
                >
                  info@kukkadapuassociates.online
                </a>
              </p>
              <p>
                <a
                  href="tel:+919390221318"
                  className="transition-colors hover:text-foreground"
                >
                  +91 93902 21318
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/kukkadapuassociates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs font-light tracking-wide text-muted-foreground">
            © 2026 Kukkadapu Associates. All rights reserved.
          </p>
          <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            India
          </p>
        </div>
      </div>
    </footer>
  )
}
