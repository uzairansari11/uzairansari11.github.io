"use client"

import { useEffect, useRef, useState } from "react"
import { Moon, Sun, Settings2, Check } from "lucide-react"
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

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        aria-label="Settings"
        onClick={() => setOpen(!open)}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
          open ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
        )}
      >
        <Settings2 className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-card border border-border/50 shadow-2xl z-[200] overflow-hidden"
          >
            <div className="p-4 space-y-5">
              {/* Theme Mode */}
              <div>
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">Mode</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all border",
                      !isDark ? "bg-primary text-primary-foreground border-primary" : "bg-muted/50 text-muted-foreground border-border/50 hover:border-border"
                    )}
                  >
                    <Sun className="h-3.5 w-3.5" /> Light
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all border",
                      isDark ? "bg-primary text-primary-foreground border-primary" : "bg-muted/50 text-muted-foreground border-border/50 hover:border-border"
                    )}
                  >
                    <Moon className="h-3.5 w-3.5" /> Dark
                  </button>
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">Accent Color</p>
                <div className="flex items-center gap-2.5">
                  {accentColors.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => setAccent(color.value)}
                      className={cn(
                        "w-7 h-7 rounded-full transition-all hover:scale-110 flex items-center justify-center",
                        accent === color.value && "ring-2 ring-offset-2 ring-offset-card ring-foreground/30 scale-110"
                      )}
                      style={{ backgroundColor: color.swatch }}
                      title={color.label}
                    >
                      {accent === color.value && <Check className="h-3.5 w-3.5 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
