"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.5,
    })

    gsap.from(".logo", {
      opacity: 0,
      x: -20,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="logo flex items-center space-x-2">
          <motion.div
            initial={{ rotate: -90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-primary p-1 flex items-center justify-center"
            style={{ width: 40, height: 40 }}
          >
            {/* Replace letter U with animated SVG image */}
            <img
              src="/favicon.svg"
              alt="Uzair Ansari Logo"
              className="h-6 w-6"
            />
          </motion.div>
          <span className="hidden font-bold sm:inline-block">Uzair Ansari</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-item text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex md:hidden">
          <ThemeToggle />
          <Button className="ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className={cn("h-5 w-5", mobileMenuOpen ? "hidden" : "block")} />
            <X className={cn("h-5 w-5", mobileMenuOpen ? "block" : "hidden")} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="container py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}
