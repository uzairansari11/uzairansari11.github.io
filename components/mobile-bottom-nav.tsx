"use client"

import { cn } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import { Home, User, Briefcase, Code, Mail } from "lucide-react"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollToPlugin)

const NAV_ITEMS = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function MobileBottomNav() {
  const activeSection = useActiveSection()

  const scrollTo = (href: string) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: href, offsetY: 80 },
      ease: "power2.out"
    })
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-border/50 backdrop-blur-xl pb-safe">
      <div className="container mx-auto max-w-7xl px-2">
        <div className="flex items-center justify-around h-16">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.slice(1)

            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-[60px]",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-active"
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className={cn("h-5 w-5 relative z-10", isActive && "scale-110")} />
                <span className={cn(
                  "text-[10px] font-medium relative z-10",
                  isActive && "font-semibold"
                )}>
                  {item.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
