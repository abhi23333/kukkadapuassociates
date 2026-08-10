'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Areas of Interest', href: '#areas' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ease-out',
        scrolled
          ? 'border-b border-border/70 bg-background/85 py-4 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-6',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/kukkadapu-logo-v2.png"
            alt="Kukkadapu Associates"
            width={1710}
            height={960}
            priority
            sizes="220px"
            className={cn(
              'w-auto object-contain mix-blend-multiply transition-[height] duration-500 ease-out',
              scrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24',
            )}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-sans text-[0.82rem] font-normal tracking-wide text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href="#opportunities"
            className="hidden items-center border border-foreground/25 px-5 py-2.5 font-sans text-[0.75rem] font-medium uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background md:inline-flex"
          >
            Explore Opportunities
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-40 flex flex-col bg-background px-6 pt-24 transition-[opacity,transform] duration-500 ease-out lg:hidden',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-4 opacity-0',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-5 font-serif text-2xl font-light text-foreground"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#opportunities"
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex items-center justify-center border border-foreground bg-foreground px-6 py-4 font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-background"
        >
          Explore Opportunities
        </a>
      </div>
    </header>
  )
}
