"use client"

import { useActiveSection } from "@/hooks/use-active-section"
import { NAV_ITEMS } from "@/lib/constants"
import { cn, smoothScrollTo } from "@/lib/utils"
import { motion } from "framer-motion"
import { Home, User, Code2, Briefcase, FolderKanban, Mail } from "lucide-react"

const ICON_MAP = {
  "#home": Home,
  "#about": User,
  "#experience": Briefcase,
  "#skills": Code2,
  "#projects": FolderKanban,
  "#contact": Mail,
}

export function MobileBottomNav() {
  const activeSection = useActiveSection()

  const scrollTo = (href: string) => {
    smoothScrollTo(href, 72)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-[env(safe-area-inset-bottom,8px)]">
      <div className="mx-4 mb-2">
        <nav className="bg-background/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-border/60 dark:border-zinc-800 rounded-2xl px-2 py-2 shadow-lg shadow-black/10 dark:shadow-black/40 flex items-center justify-evenly">
          {NAV_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.href as keyof typeof ICON_MAP] || Home
            const isActive = activeSection === item.href.slice(1)

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollTo(item.href)}
                aria-label={item.name}
                className={cn(
                  "relative flex flex-col items-center justify-center w-11 h-11 rounded-xl transition-colors gap-0.5",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground active:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-active"
                    className="absolute inset-0 bg-secondary/80 dark:bg-zinc-800 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="h-4 w-4 relative z-10" />
                <span className="relative z-10 text-[9px] leading-none font-medium">{item.name}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
