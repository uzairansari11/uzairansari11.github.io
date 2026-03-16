"use client"

import type React from "react"

export function AnimatedBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Dot grid overlay */}
      <div className="fixed inset-0 dot-grid pointer-events-none z-0" />

      {/* Floating gradient orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none z-0" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float pointer-events-none z-0" style={{ animationDelay: "-3s" }} />
      <div className="fixed top-3/4 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float pointer-events-none z-0" style={{ animationDelay: "-5s" }} />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
