'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-[230px] w-[230px] animate-spin rounded-full border-[2px] border-foreground/10 border-t-gold" />

        <Image
          src="/images/kukkadapu-logo-v2.png"
          alt="Kukkadapu Associates"
          width={300}
          height={170}
          priority
          className="relative h-auto w-[180px] object-contain"
        />
      </div>
    </div>
  )
}
