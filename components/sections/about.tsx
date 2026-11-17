"use client"

import { ABOUT_CONTENT } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { smoothScrollTo } from "@/lib/utils"
import { Code2, Globe, Layers, Radio, Sparkles } from "lucide-react"

const ICON_MAP = {
  Globe,
  Layers,
  Code2,
  Radio,
  Sparkles,
}

export function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <SectionHeading title={ABOUT_CONTENT.heading.title} subtitle={ABOUT_CONTENT.heading.subtitle} tag="// ABOUT ME" />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start content-spacing">
          {/* Bio Card */}
          <div className="surface-glass relative overflow-hidden rounded-2xl bg-[#20211e]/45 p-6 text-[#f3efe6] sm:p-9">
            <span className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#d7b77e]/20" aria-hidden="true" />
            <span className="absolute -right-6 -top-6 h-36 w-36 rounded-full border border-[#d7b77e]/15" aria-hidden="true" />
            <p className="relative mb-6 text-[10px] font-semibold uppercase tracking-[.2em] text-[#d7b77e]">A little about my work</p>
            <div className="relative space-y-5">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-7 text-white/65 sm:text-base [&_strong]:font-semibold [&_strong]:text-white"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
            </div>
            <div className="relative mt-8 flex flex-wrap gap-3 border-t border-white/15 pt-6">
              <Button className="h-11 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-none hover:opacity-90" asChild>
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
              <Button variant="outline" className="h-11 rounded-full border-white/20 bg-white/5 px-6 text-sm font-semibold text-white shadow-none hover:bg-white/10" asChild>
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
                  className={`surface-glass group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${num === "05" ? "sm:col-span-2" : ""}`}
                >
                  <span className="absolute right-5 top-5 text-[10px] font-semibold tracking-[.14em] text-primary">
                    {num}
                  </span>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:-rotate-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
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
