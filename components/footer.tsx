"use client"

import { PERSONAL_INFO } from "@/lib/constants"
import { smoothScrollTo } from "@/lib/utils"
import { Github, Linkedin, Mail } from "lucide-react"

const SOCIAL_LINKS = [
  { href: PERSONAL_INFO.socialLinks.github, icon: Github, label: "GitHub" },
  { href: PERSONAL_INFO.socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: "Email" }
]

type SocialLinkProps = {
  href: string
  icon: typeof Github
  label: string
}

function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-sm bg-background border border-border flex items-center justify-center text-foreground hover:opacity-80 transition-colors"
    >
      <Icon className="h-3.5 w-3.5" />
    </a>
  )
}

export function Footer() {
  const scrollToTop = () => {
    smoothScrollTo("#home", 72)
  }

  return (
    <footer className="border-t border-border mt-12 bg-background">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Branding */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToTop()
            }}
            className="text-base font-semibold tracking-tight text-foreground"
          >
            Uzair
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-1.5">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
