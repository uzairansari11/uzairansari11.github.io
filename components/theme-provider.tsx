"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { createContext, useContext, useEffect, useState } from "react"
import { type AccentColor, defaultAccent, accentColors } from "@/lib/colors"

export type RadiusSize = "none" | "sm" | "md" | "lg" | "full"

interface AppSettingsContextType {
  accent: AccentColor
  setAccent: (color: AccentColor) => void
  radius: RadiusSize
  setRadius: (r: RadiusSize) => void
}

const AppSettingsContext = createContext<AppSettingsContextType>({
  accent: defaultAccent,
  setAccent: () => {},
  radius: "md",
  setRadius: () => {},
})

export function useAccent() {
  const ctx = useContext(AppSettingsContext)
  return { accent: ctx.accent, setAccent: ctx.setAccent }
}

export function useAppSettings() {
  return useContext(AppSettingsContext)
}

const radiusValues: Record<RadiusSize, string> = {
  none: "0",
  sm: "0.375rem",
  md: "0.75rem",
  lg: "1rem",
  full: "9999px",
}

function AppSettingsProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccentState] = useState<AccentColor>(defaultAccent)
  const [radius, setRadiusState] = useState<RadiusSize>("md")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedAccent = localStorage.getItem("accent-color") as AccentColor | null
    const storedRadius = localStorage.getItem("border-radius") as RadiusSize | null
    const activeColor = storedAccent || defaultAccent
    const activeRadius = storedRadius || "md"
    setAccentState(activeColor)
    setRadiusState(activeRadius)
    document.documentElement.setAttribute("data-accent", activeColor)
    document.documentElement.setAttribute("data-radius", activeRadius)
    document.documentElement.style.setProperty("--radius", radiusValues[activeRadius])
    updateFavicon(activeColor)
    setMounted(true)
  }, [])

  const updateFavicon = (color: AccentColor) => {
    const colorConfig = accentColors.find(c => c.value === color)
    const hex = colorConfig?.swatch || "#06b6d4"
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${hex}"/><text font-family="system-ui,-apple-system,sans-serif" font-size="14" font-weight="900" fill="white" text-anchor="middle" x="16" y="22">UA</text></svg>`
    const blob = new Blob([svg], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      document.head.appendChild(link)
    }
    link.href = url
  }

  const setAccent = (color: AccentColor) => {
    setAccentState(color)
    localStorage.setItem("accent-color", color)
    document.documentElement.setAttribute("data-accent", color)
    updateFavicon(color)
  }

  const setRadius = (r: RadiusSize) => {
    setRadiusState(r)
    localStorage.setItem("border-radius", r)
    document.documentElement.setAttribute("data-radius", r)
    document.documentElement.style.setProperty("--radius", radiusValues[r])
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <AppSettingsContext.Provider value={{ accent, setAccent, radius, setRadius }}>
      {children}
    </AppSettingsContext.Provider>
  )
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <AppSettingsProvider>{children}</AppSettingsProvider>
    </NextThemesProvider>
  )
}
