"use client"

import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProductHighlights } from "@/components/sections/product-highlights"
import { EXPERIENCES, EXPERIENCE_CONTENT } from "@/lib/constants"
import { smoothScrollTo } from "@/lib/utils"

function ExperienceCard({ experience, index }: { experience: (typeof EXPERIENCES)[number]; index: number }) {
  const cardRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] })
  const rotateX = useTransform(scrollYProgress, [0, 0.22, 0.52, 0.82, 1], [5, 0, 0, -3, -7])
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.52, 0.82, 1], [0.97, 1, 1, 0.985, 0.96])
  const opacity = useTransform(scrollYProgress, [0, 0.16, 0.48, 0.84, 1], [0.58, 0.92, 1, 0.82, 0.48])

  return (
    <motion.article
      ref={cardRef}
      initial={reduceMotion ? false : { y: 22 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.07, 0.28), ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      style={reduceMotion ? undefined : { rotateX, scale, opacity, transformPerspective: 1200, transformOrigin: "center top" }}
      className="group relative isolate grid gap-6 overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_24px_70px_-48px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-500 hover:border-primary/35 hover:bg-white/[.05] sm:p-7 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-9 lg:p-8"
    >
      <span className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/[.07]" aria-hidden="true" />
      <div className="relative border-b border-border/80 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7">
        <span className="absolute bottom-0 left-0 h-px w-12 bg-primary/60 lg:bottom-auto lg:left-auto lg:right-[-1px] lg:top-0 lg:h-12 lg:w-px" aria-hidden="true" />
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.08em] text-primary"><CalendarDays className="h-4 w-4" />{experience.duration}</p>
        <p className="mt-4 text-base font-semibold leading-snug text-foreground">{experience.company}</p>
        {experience.location && <p className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-muted-foreground"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />{experience.location}</p>}
      </div>

      <div className="min-w-0">
        <h4 className="text-xl font-semibold tracking-tight sm:text-2xl">{experience.position}</h4>
        <ul className="mt-5 grid gap-x-10 gap-y-3.5 text-sm leading-6 text-muted-foreground xl:grid-cols-2">
          {experience.description.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border/80 pt-5">
          {experience.technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-border/70 bg-secondary/60 px-3 py-1.5 text-[11px] font-medium text-secondary-foreground">{technology}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <div className="section-container">
        <SectionHeading title={EXPERIENCE_CONTENT.heading.title} subtitle={EXPERIENCE_CONTENT.heading.subtitle} tag="Experience" />

        <div className="mt-10 w-full md:mt-12">
          <div className="space-y-16">
            {([
              { name: "Software & GenAI", entries: EXPERIENCES.filter((item) => item.group === "Software") },
              { name: "Earlier engineering experience", entries: EXPERIENCES.filter((item) => item.group === "Earlier engineering") },
            ]).map((group, groupIndex) => (
              <div key={group.name}>
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-border/80 pb-4 sm:mb-7">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.2em] text-primary">Chapter {String(groupIndex + 1).padStart(2, "0")}</p>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{group.name}</h3>
                  </div>
                  <span className="mb-0.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground">{String(group.entries.length).padStart(2, "0")} roles</span>
                </div>
                <div className="space-y-5">
                  {group.entries.map((experience, index) => <ExperienceCard key={experience.id} experience={experience} index={index} />)}
                </div>
              </div>
            ))}
          </div>

          <ProductHighlights />

          <div className="relative mt-10 flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[#d7b77e]/20 bg-[#20211e]/75 px-6 py-7 text-[#f3efe6] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_70px_-48px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:flex-row sm:items-center sm:px-9 sm:py-8">
            <div className="pointer-events-none absolute -right-10 -top-24 h-56 w-56 rounded-full border border-[#d7b77e]/10" aria-hidden="true" />
            <div className="relative">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#d7b77e]">Explore the work</p>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">See what I&apos;ve helped build.</h3>
              <p className="mt-2 text-sm text-white/55">Selected product work and case studies.</p>
            </div>
            <a href="#projects" onClick={(event) => { event.preventDefault(); smoothScrollTo("#projects", 72) }} className="relative inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#d7b77e] px-5 text-sm font-semibold text-[#171816] transition-transform hover:-translate-y-0.5">
              View selected work <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
