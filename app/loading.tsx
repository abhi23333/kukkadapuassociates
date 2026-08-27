import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        {/* Loading ring */}
        <div className="absolute h-[230px] w-[230px] animate-spin rounded-full border-[2px] border-foreground/10 border-t-gold" />

        {/* Logo */}
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
