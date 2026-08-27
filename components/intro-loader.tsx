'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function IntroLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-background">
      <div className="relative flex h-[240px] w-[240px] items-center justify-center">
        
        {/* Rotating circle */}
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-foreground/10 border-t-gold" />

        {/* Logo */}
        <Image
          src="/images/kukkadapu-logo-v2.png"
          alt="Kukkadapu Associates"
          width={300}
          height={170}
          priority
          className="h-auto w-[180px] object-contain"
        />

      </div>
    </div>
  )
}
