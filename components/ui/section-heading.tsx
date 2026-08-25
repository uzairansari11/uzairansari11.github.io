"use client"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  tag?: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="text-center mb-10 space-y-2.5">
      <h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-foreground font-sans">
        {title}
      </h2>
      <div className="w-8 h-0.5 mx-auto bg-foreground/80" />
    </div>
  )
}
