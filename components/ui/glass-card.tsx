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
        "rounded-sm glass-card transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
