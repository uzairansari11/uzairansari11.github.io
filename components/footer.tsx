"use client"

import { PERSONAL_INFO } from "@/lib/constants"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

const SOCIAL_LINKS = [
  { href: PERSONAL_INFO.socialLinks.github, icon: Github, label: "GitHub" },
  { href: PERSONAL_INFO.socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: "Email" }
] as const

function SocialLink({ href, icon: Icon, label }: typeof SOCIAL_LINKS[0]) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
    >
      <Icon className="h-4 w-4" />
    </a>
  )
}

export function Footer() {
  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#home", offsetY: 72 },
      ease: "power3.inOut"
    })
  }

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="flex items-center gap-2"
            >
              <span className="text-lg font-black tracking-tight">
                U<span className="text-primary">A</span>
              </span>
              <span className="text-muted-foreground font-light">|</span>
              <span className="text-sm font-medium">{PERSONAL_INFO.name}</span>
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <span className="hidden sm:inline text-xs text-muted-foreground">{PERSONAL_INFO.title}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
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
