"use client"

import { PERSONAL_INFO, ABOUT_CONTENT } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { smoothScrollTo } from "@/lib/utils"
import { Code2, Globe, Layers, Radio } from "lucide-react"

const ICON_MAP = {
  Globe,
  Layers,
  Code2,
  Radio
}

export function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <SectionHeading title={ABOUT_CONTENT.heading.title} subtitle={ABOUT_CONTENT.heading.subtitle} tag="// ABOUT ME" />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start content-spacing">
          {/* Bio Card */}
          <div className="rounded-sm glass-card p-6 sm:p-8 space-y-6 transition-colors shadow-xs">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg leading-relaxed text-foreground/90 dark:text-zinc-300 [&_strong]:text-foreground [&_strong]:dark:text-zinc-100 [&_strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button className="rounded-sm px-6 h-11 text-sm font-medium bg-foreground text-background dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-colors shadow-xs" asChild>
                <a
                  href={ABOUT_CONTENT.cta.primary.href}
                  onClick={(e) => {
                    if (ABOUT_CONTENT.cta.primary.href.startsWith("#")) {
                      e.preventDefault()
                      smoothScrollTo(ABOUT_CONTENT.cta.primary.href, 72)
                    }
                  }}
                >
                  {ABOUT_CONTENT.cta.primary.text}
                </a>
              </Button>
              <Button variant="outline" className="rounded-sm px-6 h-11 text-sm font-medium bg-background border-border text-foreground hover:bg-secondary transition-colors" asChild>
                <a
                  href={ABOUT_CONTENT.cta.secondary.href}
                  onClick={(e) => {
                    if (ABOUT_CONTENT.cta.secondary.href.startsWith("#")) {
                      e.preventDefault()
                      smoothScrollTo(ABOUT_CONTENT.cta.secondary.href, 72)
                    }
                  }}
                >
                  {ABOUT_CONTENT.cta.secondary.text}
                </a>
              </Button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            {ABOUT_CONTENT.services.map(({ icon, title, desc, num }) => {
              const Icon = ICON_MAP[icon as keyof typeof ICON_MAP]
              return (
                <div
                  key={title}
                  className="group relative rounded-sm glass-card p-6 transition-all space-y-3"
                >
                  <span className="absolute top-4 right-4 text-[11px] font-mono font-medium text-muted-foreground opacity-60">
                    {num}
                  </span>
                  <div className="w-12 h-12 rounded-sm bg-secondary border border-border flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
                    <Icon className="h-6 w-6 text-foreground dark:text-zinc-200" />
                  </div>
                  <h3 className="font-medium text-lg text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-normal">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
