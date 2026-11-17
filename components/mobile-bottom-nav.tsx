"use client"

import { useActiveSection } from "@/hooks/use-active-section"
import { NAV_ITEMS } from "@/lib/constants"
import { cn, smoothScrollTo } from "@/lib/utils"
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
        <nav aria-label="Mobile navigation" className="flex items-center justify-evenly rounded-2xl border border-white/10 bg-[#20211e]/95 px-2 py-2 text-white shadow-2xl shadow-black/30 backdrop-blur-xl">
          {NAV_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.href as keyof typeof ICON_MAP] || Home
            const isActive = activeSection === item.href.slice(1)

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollTo(item.href)}
                aria-label={item.name}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-xl transition-colors",
                  isActive
                    ? "bg-[#d7b77e] text-[#171816]"
                    : "text-white/55 active:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="text-[9px] leading-none font-medium">{item.name}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
