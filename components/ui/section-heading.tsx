"use client"

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
