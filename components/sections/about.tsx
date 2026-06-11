"use client"

import { PERSONAL_INFO, ABOUT_CONTENT } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Code2, Globe, Layers, Radio } from "lucide-react"

const ICON_MAP = {
  Globe,
  Layers,
  Code2,
  Radio
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <SectionHeading title={ABOUT_CONTENT.heading.title} subtitle={ABOUT_CONTENT.heading.subtitle} />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start mt-16">
          {/* Bio Card */}
          <div className="rounded-2xl border border-border/50 bg-card p-8 space-y-6 hover:border-border transition-colors">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full glow-card" asChild>
                <a href={ABOUT_CONTENT.cta.primary.href}>{ABOUT_CONTENT.cta.primary.text}</a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href={ABOUT_CONTENT.cta.secondary.href}>{ABOUT_CONTENT.cta.secondary.text}</a>
              </Button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {ABOUT_CONTENT.services.map(({ icon, title, desc, num }) => {
              const Icon = ICON_MAP[icon as keyof typeof ICON_MAP]
              return (
                <div
                  key={title}
                  className="group relative rounded-2xl bg-card border border-border/50 p-6 hover:border-primary/30 transition-all"
                >
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-primary/30 group-hover:text-primary/60 transition-colors">
                    {num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
