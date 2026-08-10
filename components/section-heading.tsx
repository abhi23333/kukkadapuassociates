import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 font-sans text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted-foreground',
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-gold/70" />
      {children}
    </span>
  )
}

export function SectionHeading({
  children,
  className,
  as: Tag = 'h2',
}: {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}) {
  return (
    <Tag
      className={cn(
        'font-serif text-4xl font-light leading-[1.08] tracking-[-0.01em] text-balance sm:text-5xl md:text-6xl',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
