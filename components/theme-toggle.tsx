"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle({ className = "", darkSurface = false }: { className?: string; darkSurface?: boolean }) {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full ${darkSurface ? "border border-white/20 bg-white/10" : "border border-border bg-secondary"} flex items-center justify-center ${className}`} />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-colors ${darkSurface ? "border border-white/20 bg-white/10 text-white hover:bg-white/20" : "border border-border bg-secondary text-foreground hover:bg-secondary/80"} ${className}`}
      aria-label="Toggle Theme"
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className={`h-4 w-4 ${darkSurface ? "text-white" : "text-foreground"}`} />
        ) : (
          <Moon className={`h-4 w-4 ${darkSurface ? "text-white" : "text-foreground"}`} />
        )}
      </motion.div>
    </button>
  )
}
