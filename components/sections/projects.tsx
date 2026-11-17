"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { PROJECTS, PROJECTS_CONTENT, type Project } from "@/lib/constants"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.article
      className="surface-glass group h-full overflow-hidden rounded-2xl"
      style={{ transformPerspective: 1000 }}
      whileHover={reduceMotion ? undefined : { y: -5, rotateX: 1, rotateY: -1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-secondary">
        <img src={project.image || "/placeholder.svg"} alt={`${project.title} preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 min-h-[3rem] text-sm leading-6 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">{tag}</span>)}
        </div>
        <div className="mt-5 flex items-center gap-5 border-t border-border pt-4">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline underline-offset-4">
            Live demo <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition-colors">
            <GitHubIcon className="h-4 w-4" /> Source code
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [selected, setSelected] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", loop: false })
  const sync = useCallback(() => {
    if (emblaApi) {
      setSelected(emblaApi.selectedScrollSnap())
      setScrollSnaps(emblaApi.scrollSnapList())
    }
  }, [emblaApi])
  useEffect(() => {
    if (!emblaApi) return
    sync()
    emblaApi.on("select", sync)
    emblaApi.on("reInit", sync)
    return () => { emblaApi.off("select", sync); emblaApi.off("reInit", sync) }
  }, [emblaApi, sync])

  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">
        <SectionHeading title={PROJECTS_CONTENT.heading.title} subtitle={PROJECTS_CONTENT.heading.subtitle} tag="Selected work" />
        <div className="mt-10 md:mt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">Drag to browse <span className="mx-1 text-primary">·</span> Select a project to open its live demo or source</p>
            <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => emblaApi?.scrollPrev()} disabled={!emblaApi?.canScrollPrev()} aria-label="Previous projects" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"><ArrowLeft className="h-4 w-4" /></button>
            <button type="button" onClick={() => emblaApi?.scrollNext()} disabled={!emblaApi?.canScrollNext()} aria-label="Next projects" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"><ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="overflow-hidden" ref={emblaRef} role="region" aria-roledescription="carousel" aria-label="Selected projects">
            <div className="flex -ml-3">
              {PROJECTS.map((project) => <div key={project.id} className="min-w-0 flex-[0_0_88%] pl-3 sm:flex-[0_0_52%] lg:flex-[0_0_34%]"><ProjectCard project={project} /></div>)}
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2" role="group" aria-label={`Project carousel position ${selected + 1} of ${scrollSnaps.length}`}>
            {scrollSnaps.map((_, index) => <button key={index} type="button" onClick={() => emblaApi?.scrollTo(index)} aria-label={`Go to project group ${index + 1}`} aria-current={selected === index ? "true" : undefined} className={`h-1.5 rounded-full transition-all ${selected === index ? "w-7 bg-primary" : "w-1.5 bg-border"}`} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
