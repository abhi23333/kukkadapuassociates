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
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close mobile menu when the user scrolls.
  useEffect(() => {
    if (!open) return

    const closeMenu = () => {
      setOpen(false)
    }

    window.addEventListener('scroll', closeMenu, {
      passive: true,
      once: true,
    })

    return () => {
      window.removeEventListener('scroll', closeMenu)
    }
  }, [open])

  // Close mobile menu when moving to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Close mobile menu with Escape.
  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <>
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[100] transition-all duration-300 ease-out',
          scrolled
            ? 'border-b border-border/70 bg-background/90 py-3 backdrop-blur-md'
            : 'border-b border-transparent bg-background/20 py-4 backdrop-blur-sm',
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            aria-label="Kukkadapu Associates home"
            className="relative z-[110] flex shrink-0 items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/kukkadapu-logo-v2.png"
              alt="Kukkadapu Associates"
              width={1710}
              height={960}
              priority
              sizes="220px"
              className={cn(
                'w-auto object-contain mix-blend-multiply transition-[height] duration-300 ease-out',
                scrolled
                  ? 'h-12 sm:h-14 md:h-16'
                  : 'h-14 sm:h-16 md:h-20',
              )}
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="ml-auto hidden items-center gap-6 xl:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative whitespace-nowrap font-sans text-[0.78rem] font-normal tracking-wide text-foreground/75 transition-colors duration-200 hover:text-foreground"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#opportunities"
            className="ml-8 hidden shrink-0 items-center whitespace-nowrap border border-foreground/25 px-4 py-2.5 font-sans text-[0.7rem] font-medium uppercase tracking-[0.14em] text-foreground transition-colors duration-200 hover:border-foreground hover:bg-foreground hover:text-background xl:inline-flex"
          >
            Explore Opportunities
          </a>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={cn(
              'relative z-[110] ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center border border-foreground/20 bg-background/70 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-background xl:hidden',
              open && 'border-foreground bg-background',
            )}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile / Tablet Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-[90] bg-background transition-[opacity,visibility] duration-300 xl:hidden',
          open
            ? 'visible opacity-100'
            : 'invisible pointer-events-none opacity-0',
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28 sm:px-10 sm:pt-32">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-5 font-serif text-2xl font-light text-foreground transition-opacity duration-200 hover:opacity-60 sm:py-6 sm:text-3xl"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#opportunities"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex w-full items-center justify-center border border-foreground bg-foreground px-6 py-4 font-sans text-[0.72rem] font-medium uppercase tracking-[0.16em] text-background transition-opacity duration-200 hover:opacity-90 sm:w-auto"
          >
            Explore Opportunities
          </a>
        </div>
      </div>
    </>
  )
}
