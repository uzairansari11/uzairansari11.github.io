"use client"

import { cn } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"
import { NAV_ITEMS } from "@/lib/constants"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle"

gsap.registerPlugin(ScrollToPlugin)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: href, offsetY: 80 },
      ease: "power2.out"
    })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong border-b shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home") }} className="flex items-center group">
          <span className="text-xl font-black tracking-tight">
            U
            <span className="relative inline-block">
              <span className="text-primary">A</span>
              <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
          </span>
          <span className="hidden sm:inline text-xl font-light text-muted-foreground ml-1.5 tracking-tight">
            | <span className="text-sm font-medium ml-1">Uzair Ansari</span>
          </span>
        </a>

        {/* Desktop Nav — centered pill */}
        <nav className="hidden md:flex items-center gap-0.5 glass rounded-full px-1 py-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
              className={cn(
                "relative px-3 py-2 rounded-full text-[13px] font-medium transition-all duration-300",
                activeSection === item.href.slice(1)
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Theme Toggle - Hidden on mobile since we have bottom nav */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
        </div>

        {/* Mobile - only theme toggle, no hamburger menu */}
        <div className="flex md:hidden items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
