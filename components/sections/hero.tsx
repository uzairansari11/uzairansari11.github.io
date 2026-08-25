"use client"

import { Button } from "@/components/ui/button"
import { PERSONAL_INFO, HERO_CONTENT } from "@/lib/constants"
import { smoothScrollTo } from "@/lib/utils"
import { ArrowDown, Code2, Download, Github, Linkedin, Mail, Rocket, Send, Users, Sparkles, Phone, Clock } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const ICON_MAP = {
  Github,
  Linkedin,
  Mail,
  Rocket,
  Code2,
  Users,
  Sparkles,
  Phone,
  Clock
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.fromTo("[data-hero-badge]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo("[data-hero-name]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo("[data-hero-title]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo("[data-hero-desc]", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .fromTo("[data-hero-buttons] > *", { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 }, "-=0.2")
        .fromTo("[data-hero-social] > *", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, stagger: 0.06, duration: 0.3 }, "-=0.15")
        .fromTo("[data-hero-stats] > *", { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 }, "-=0.15")
        .fromTo("[data-hero-tech] > *", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.04, duration: 0.3 }, "-=0.2")
        .fromTo("[data-hero-achievement]", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
        .fromTo("[data-hero-image]", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }, "-=0.6")
        .fromTo("[data-hero-exp]", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.2")
        .fromTo("[data-hero-projects]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center pt-24 pb-16 lg:pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-zinc-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 dark:bg-zinc-700/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="section-container w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div data-hero-badge className="inline-flex items-center gap-2 rounded-sm bg-secondary/80 dark:bg-zinc-900/90 px-4 py-1.5 text-xs font-semibold text-foreground dark:text-zinc-200 border border-border/80 dark:border-zinc-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
              {HERO_CONTENT.badge.status}
            </div>

            {/* Name & Title */}
            <div className="space-y-2.5 font-sans">
              <h1 data-hero-name className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-foreground leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p data-hero-title className="text-lg sm:text-xl text-foreground/80 font-normal">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Description */}
            <p data-hero-desc className="text-base sm:text-lg text-muted-foreground dark:text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              {HERO_CONTENT.description}
            </p>

            {/* CTA Buttons */}
            <div data-hero-buttons className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 font-sans">
              <Button
                size="lg"
                className="rounded-sm px-7 h-12 text-sm font-semibold bg-foreground text-background dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-all shadow-sm"
                asChild
              >
                <a
                  href={HERO_CONTENT.cta.primary.href}
                  onClick={(e) => {
                    if (HERO_CONTENT.cta.primary.href.startsWith("#")) {
                      e.preventDefault()
                      smoothScrollTo(HERO_CONTENT.cta.primary.href, 72)
                    }
                  }}
                >
                  <Send className="mr-2 h-4 w-4" /> {HERO_CONTENT.cta.primary.text}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-sm px-7 h-12 text-sm font-semibold bg-background border-border text-foreground hover:bg-secondary transition-all shadow-xs"
                asChild
              >
                <a
                  href={HERO_CONTENT.cta.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" /> {HERO_CONTENT.cta.secondary.text}
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div data-hero-social className="flex items-center gap-3 justify-center lg:justify-start">
              {HERO_CONTENT.socialLinks.map((link) => {
                const href = link.platform === "GitHub" ? PERSONAL_INFO.socialLinks.github :
                             link.platform === "LinkedIn" ? PERSONAL_INFO.socialLinks.linkedin :
                             `mailto:${PERSONAL_INFO.email}`
                const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP]
                return (
                  <a
                    key={link.platform}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm border border-border bg-background flex items-center justify-center text-foreground hover:opacity-80 transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>

            {/* Stats */}
            <div data-hero-stats className="grid grid-cols-3 gap-6">
              {HERO_CONTENT.stats.map(({ icon, value, label }) => {
                const Icon = ICON_MAP[icon as keyof typeof ICON_MAP]
                return (
                  <div key={label} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                      <Icon className="h-4 w-4 text-foreground" />
                      <span className="text-2xl font-medium text-foreground">{value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                )
              })}
            </div>

            {/* Core Technologies */}
            <div>
              <p className="text-xs text-muted-foreground mb-2 text-center lg:text-left">{HERO_CONTENT.coreTechLabel}</p>
              <div data-hero-tech className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {HERO_CONTENT.coreTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-sm bg-background text-foreground border border-border hover:opacity-80 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievement */}
            <div data-hero-achievement className="rounded-sm glass-card p-4 border border-border transition-all">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-1 text-foreground">{HERO_CONTENT.achievement.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{HERO_CONTENT.achievement.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="w-full max-w-[280px] sm:max-w-[320px] space-y-3">
              {/* Profile Image Frame */}
              <div data-hero-image className="relative w-full h-[260px] sm:h-[295px] rounded-sm overflow-hidden border border-border shadow-xs bg-background">
                <img src={PERSONAL_INFO.avatarUrl || "/placeholder.svg"} alt={PERSONAL_INFO.name} className="w-full h-full object-cover object-top" />

                {/* Top Floating Badge */}
                <div data-hero-exp className="absolute top-2.5 right-2.5 bg-background/90 border border-border px-2.5 py-1 rounded-sm backdrop-blur-md shadow-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                    <span className="text-[11px] font-medium text-foreground font-mono">{PERSONAL_INFO.yearsOfExperience} Exp</span>
                  </div>
                </div>
              </div>

              {/* Live Projects Grid */}
              <div data-hero-projects className="rounded-sm glass-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-medium text-foreground uppercase tracking-wider font-mono">{HERO_CONTENT.liveProjectsSection.title}</h3>
                  <span className="text-[11px] font-mono text-muted-foreground">{HERO_CONTENT.liveProjectsSection.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {HERO_CONTENT.liveProjects.map((project) => {
                    const Icon = ICON_MAP[project.icon as keyof typeof ICON_MAP]
                    return (
                      <div
                        key={project.name}
                        className="flex items-center gap-2.5 p-2.5 rounded-sm border border-border bg-background transition-all"
                      >
                        <Icon className="h-4 w-4 text-foreground shrink-0" />
                        <span className="text-xs font-medium text-foreground truncate">{project.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

