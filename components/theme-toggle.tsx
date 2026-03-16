"use client"

import { useEffect, useRef, useState } from "react"
import { Moon, Sun, Palette, Check, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { useAppSettings } from "@/components/theme-provider"
import { accentColors } from "@/lib/colors"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { accent, setAccent } = useAppSettings()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    const id = setTimeout(() => document.addEventListener("mousedown", handler), 0)
    return () => { clearTimeout(id); document.removeEventListener("mousedown", handler) }
  }, [open])

  if (!mounted) return <div className="w-8 h-8" />

  const isDark = resolvedTheme === "dark"
  const activeColor = accentColors.find(c => c.value === accent)

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        aria-label="Appearance"
        onClick={() => setOpen(!open)}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          open
            ? "text-primary scale-110"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
        )}
      >
        <Palette className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-card border border-border/50 shadow-2xl z-[200] overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="px-5 pt-4 pb-3 flex items-center gap-2 border-b border-border/30">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold">Appearance</span>
            </div>

            <div className="p-5 space-y-5">
              {/* Theme Mode */}
              <div>
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Theme</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={cn(
                      "relative flex items-center justify-center gap-2.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 border",
                      !isDark
                        ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                        : "bg-muted/30 text-muted-foreground border-border/50 hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    <Sun className="h-4 w-4" /> Light
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={cn(
                      "relative flex items-center justify-center gap-2.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 border",
                      isDark
                        ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                        : "bg-muted/30 text-muted-foreground border-border/50 hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    <Moon className="h-4 w-4" /> Dark
                  </button>
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Accent</p>
                  <span className="text-[10px] font-medium text-primary">{activeColor?.label}</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {accentColors.map((color) => {
                    const isActive = accent === color.value
                    return (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => setAccent(color.value)}
                        className="flex flex-col items-center gap-1.5 group"
                        title={color.label}
                      >
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                            isActive && "ring-2 ring-offset-2 ring-offset-card shadow-lg"
                          )}
                          style={{
                            backgroundColor: color.swatch,
                            boxShadow: isActive ? `0 4px 15px ${color.swatch}40` : undefined,
                            ["--tw-ring-color" as string]: color.swatch,
                          }}
                        >
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0, rotate: -90 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 90 }}
                                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                              >
                                <Check className="h-4 w-4 text-white" strokeWidth={3} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                        <span className={cn(
                          "text-[9px] font-medium transition-colors",
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        )}>
                          {color.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
