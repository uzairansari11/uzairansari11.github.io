"use client"

import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { PERSONAL_INFO } from "@/lib/constants"
import { smoothScrollTo } from "@/lib/utils"
import { BrandMark } from "@/components/ui/brand-mark"

const SOCIAL_LINKS = [
  { href: PERSONAL_INFO.socialLinks.github, icon: Github, label: "GitHub" },
  { href: PERSONAL_INFO.socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: PERSONAL_INFO.socialLinks.whatsapp, icon: MessageCircle, label: "WhatsApp" },
  { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="section-container pb-24 pt-6 md:pb-12">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-[#20211e] px-6 py-10 text-[#f3efe6] sm:px-10 sm:py-12 lg:px-14">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#d7b77e]/15" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-6 -top-14 h-52 w-52 rounded-full border border-[#d7b77e]/15" aria-hidden="true" />
        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.22em] text-[#d7b77e]">Have a good problem to solve?</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-.05em] sm:text-4xl lg:text-5xl">Let&apos;s make something <span className="font-serif italic font-normal text-[#d7b77e]">useful.</span></h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">For GenAI, frontend, and full-stack projects, reach out and tell me what you&apos;re building.</p>
          </div>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#d7b77e] px-6 text-sm font-semibold text-[#171816] transition-transform hover:-translate-y-0.5">
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-5 py-6 sm:flex-row">
        <a href="#home" onClick={(event) => { event.preventDefault(); smoothScrollTo("#home", 72) }} className="text-foreground"><BrandMark className="h-9 w-9" label /></a>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
      </div>
    </footer>
  )
}
