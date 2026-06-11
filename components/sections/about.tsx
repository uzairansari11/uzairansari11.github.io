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
    <section id="about" className="section-spacing">
      <div className="section-container">
        <SectionHeading title={ABOUT_CONTENT.heading.title} subtitle={ABOUT_CONTENT.heading.subtitle} />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start content-spacing">
          {/* Bio Card */}
          <div className="rounded-2xl glass-card card-padding text-spacing hover:border-border transition-colors">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button className="rounded-full glow-card" asChild>
                <a href={ABOUT_CONTENT.cta.primary.href}>{ABOUT_CONTENT.cta.primary.text}</a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href={ABOUT_CONTENT.cta.secondary.href}>{ABOUT_CONTENT.cta.secondary.text}</a>
              </Button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 p-2 -m-2">
            {ABOUT_CONTENT.services.map(({ icon, title, desc, num }) => {
              const Icon = ICON_MAP[icon as keyof typeof ICON_MAP]
              return (
                <div
                  key={title}
                  className="group relative rounded-2xl glass-card border-border/50 p-5 hover:border-primary/30 transition-all"
                >
                  <span className="absolute top-4 right-4 text-[10px] font-bold text-primary/30 group-hover:text-primary/60 transition-colors">
                    {num}
                  </span>
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
