"use client"

import { personalInfo } from "@/lib/data"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export function Footer() {
  const scrollTo = (href: string) => {
    gsap.to(window, { duration: 1, scrollTo: { y: href, offsetY: 72 }, ease: "power3.inOut" })
  }

  return (
    <footer className="border-t border-border/50">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left — branding */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("#home") }}
              className="flex items-center gap-2"
            >
              <span className="text-lg font-black tracking-tight">U<span className="text-primary">A</span></span>
              <span className="text-muted-foreground font-light">|</span>
              <span className="text-sm font-medium">Uzair Ansari</span>
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <span className="hidden sm:inline text-xs text-muted-foreground">Full Stack Developer</span>
          </div>

          {/* Center — social icons with primary color */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Right — copyright + back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Uzair Ansari
            </p>
            <button
              onClick={() => scrollTo("#home")}
              className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
