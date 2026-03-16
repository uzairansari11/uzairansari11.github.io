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
        "rounded-xl bg-card border border-border/50 gradient-border",
        "transition-all duration-300 ease-out",
        hover && "glow-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
