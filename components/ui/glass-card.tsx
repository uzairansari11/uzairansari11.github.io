"use client"

import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function GlassCard({ className, hover = true, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card border border-border/50",
        "transition-all duration-300 ease-out",
        hover && "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
