"use client"

import { BrandMark } from "@/components/ui/brand-mark"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  tag?: string
}

export function SectionHeading({ title, subtitle, tag }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      {tag && <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[.2em] text-primary sm:text-xs"><BrandMark className="h-4 w-4 rounded-[5px]" />{tag.replace(/^\/\//, "").trim()}</p>}
      <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-.055em] text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{subtitle}</p>}
    </div>
  )
}
