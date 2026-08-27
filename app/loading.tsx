import Image from 'next/image'

export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-logo">
        <Image
          src="/icon.svg"
          alt="Kukkadapu Associates"
          width={180}
          height={180}
          priority
        />
      </div>
    </div>
  )
}
