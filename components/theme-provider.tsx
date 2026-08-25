"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)
  const [transitionState, setTransitionState] = useState<{
    active: boolean
    mode: "to-light" | "to-dark"
    key: number
  }>({ active: false, mode: "to-light", key: 0 })

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme)
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      // Default to dark mode for matte black experience
      document.documentElement.classList.add("dark")
    }
  }, [])

  const setTheme = (newTheme: Theme) => {
    if (newTheme === theme) return

    const isToLight = newTheme === "light"
    const transitionClass = isToLight ? "theme-transition-to-light" : "theme-transition-to-dark"

    const updateDOM = () => {
      setThemeState(newTheme)
      localStorage.setItem("theme", newTheme)
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.documentElement.classList.remove("theme-transition-to-light", "theme-transition-to-dark")
      document.documentElement.classList.add(transitionClass)

      const transition = (document as any).startViewTransition(() => {
        updateDOM()
      })

      transition.finished.finally(() => {
        document.documentElement.classList.remove("theme-transition-to-light", "theme-transition-to-dark")
      })
      return
    }

    // Fallback for browsers without View Transitions
    updateDOM()
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
