"use client"

import { Button } from "@/components/ui/button"
import { PERSONAL_INFO, HERO_CONTENT } from "@/lib/constants"
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
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div data-hero-badge className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 opacity-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {HERO_CONTENT.badge.status}
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 data-hero-name className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-gradient leading-tight opacity-0">
                {PERSONAL_INFO.name}
              </h1>
              <p data-hero-title className="text-xl sm:text-2xl text-primary font-semibold opacity-0">
                {PERSONAL_INFO.title}
              </p>
              <p data-hero-desc className="text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-0">
                {HERO_CONTENT.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div data-hero-buttons className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button size="lg" className="rounded-full px-8 glow-card" asChild>
                <a href={HERO_CONTENT.cta.primary.href}>
                  <Send className="mr-2 h-4 w-4" /> {HERO_CONTENT.cta.primary.text}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href={HERO_CONTENT.cta.secondary.href} target="_blank" rel="noopener noreferrer">
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
                    className="w-10 h-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
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
                  <div key={label} className="text-center lg:text-left opacity-0">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-2xl font-bold">{value}</span>
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
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-card border hover:border-primary/40 hover:bg-primary/5 transition-all opacity-0"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievement */}
            <div data-hero-achievement className="rounded-xl glass-card p-4 hover:border-primary/30 transition-all opacity-0">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{HERO_CONTENT.achievement.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{HERO_CONTENT.achievement.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -inset-2 rounded-full border border-primary/20 border-dashed animate-spin-slow" />
              <div data-hero-image className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-[3px] border-primary/30 shadow-2xl shadow-primary/20 opacity-0">
                <img src={PERSONAL_INFO.avatarUrl || "/placeholder.svg"} alt={PERSONAL_INFO.name} className="w-full h-full object-cover" />

                {/* Experience Overlay */}
                <div data-hero-exp className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-sm py-3 opacity-0">
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-bold text-primary">{PERSONAL_INFO.yearsOfExperience}</span>
                      <span className="text-xs font-semibold text-white/90">{HERO_CONTENT.experienceLabel.years}</span>
                    </div>
                    <p className="text-[9px] text-white/70 uppercase tracking-wider mt-0.5">{HERO_CONTENT.experienceLabel.experience}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Projects */}
            <div data-hero-projects className="w-full max-w-md opacity-0">
              <div className="rounded-2xl glass p-5 shadow-lg">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-semibold">{HERO_CONTENT.liveProjectsSection.title}</h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-green-500">{HERO_CONTENT.liveProjectsSection.status}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {HERO_CONTENT.liveProjects.map((project) => {
                    const Icon = ICON_MAP[project.icon as keyof typeof ICON_MAP]
                    return (
                      <div
                        key={project.name}
                        className="group rounded-xl bg-background/50 hover:bg-primary/5 border border-border/40 hover:border-primary/40 p-3.5 transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center flex-shrink-0 transition-all">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold leading-snug">{project.name}</p>
                          </div>
                        </div>
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
