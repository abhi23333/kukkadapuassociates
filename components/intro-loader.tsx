'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function IntroLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false)
    }, 2000)

    return () => window.clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#f5f3ec]">
      <div className="relative flex h-[220px] w-[220px] items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-black/10 border-t-black" />

        <Image
          src="/images/kukkadapu-logo-v2.png"
          alt="Kukkadapu Associates"
          width={300}
          height={170}
          priority
          className="h-auto w-[170px] object-contain"
        />
      </div>
    </div>
  )
}
