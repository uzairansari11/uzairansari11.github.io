"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Clock3, Package, PhoneCall, X } from "lucide-react"
import { PROJECT_HIGHLIGHTS, type ProjectHighlight } from "@/lib/constants"

const PRODUCT_ART = {
  Nourma: { icon: BarChart3, mark: "01", palette: "from-[#594529] via-[#2a2924] to-[#171816]", orb: "bg-[#d7b77e]/50" },
  Lineomatic: { icon: Package, mark: "02", palette: "from-[#ded4c4] via-[#bbb1a2] to-[#827a70]", orb: "bg-[#f5ead5]/75" },
  Pulse: { icon: PhoneCall, mark: "03", palette: "from-[#4a3c53] via-[#28232e] to-[#17151b]", orb: "bg-[#cfadc9]/55" },
  TimeTracker: { icon: Clock3, mark: "04", palette: "from-[#89907c] via-[#4a5245] to-[#282d27]", orb: "bg-[#d4d6bd]/60" },
} as const

function CaseStudyCard({ project, onOpen }: { project: ProjectHighlight; onOpen: () => void }) {
  const art = PRODUCT_ART[project.name as keyof typeof PRODUCT_ART] || PRODUCT_ART.Nourma
  const Icon = art.icon
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group h-full overflow-hidden rounded-2xl border border-white/[.09] bg-white/[.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_70px_-48px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-colors duration-500 hover:border-primary/30"
      style={{ transformPerspective: 1000 }}
      whileHover={reduceMotion ? undefined : { y: -5, rotateX: 1, rotateY: -1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <div className={`relative isolate aspect-[1.45] overflow-hidden bg-gradient-to-br ${art.palette} p-5 text-white sm:p-7`}>
        <div className={`case-orb-float absolute -right-8 -top-14 h-44 w-44 rounded-full ${art.orb} blur-[1px]`} aria-hidden="true" />
        <div className="absolute -right-3 -top-8 h-40 w-40 rounded-full border border-white/30 [transform:rotateX(65deg)_rotateZ(-28deg)]" aria-hidden="true" />
        <div className="absolute -right-10 -top-2 h-40 w-40 rounded-full border border-white/20 [transform:rotateX(65deg)_rotateZ(35deg)]" aria-hidden="true" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/65">Product case study</span>
            <span className="font-serif text-sm italic text-white/55">{art.mark} / 04</span>
          </div>
          <div className="flex items-end justify-between">
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm sm:h-14 sm:w-14">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            {project.metrics[0] && <div className="text-right"><p className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.metrics[0].value}</p><p className="mt-1 max-w-28 text-[9px] leading-4 text-white/60 sm:text-[10px]">{project.metrics[0].label}</p></div>}
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-primary">{project.tagline}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
        <button type="button" onClick={onOpen} className="mt-5 inline-flex w-fit items-center gap-2 border-b border-primary/50 pb-1 text-sm font-semibold text-foreground transition-colors hover:text-primary">
          Explore case study <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  )
}

function CaseStudyDialog({ project, onClose }: { project: ProjectHighlight; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose() }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <motion.div role="dialog" aria-modal="true" aria-labelledby="case-study-title" className="max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl" initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} transition={{ duration: .2 }}>
        <div className="flex items-start justify-between gap-6 border-b border-border p-5 sm:p-7">
          <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-primary">Enterprise product · TalkWisely</p><h2 id="case-study-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h2><p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p></div>
          <button type="button" onClick={onClose} aria-label="Close case study" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"><X className="h-4 w-4" /></button>
        </div>
        <div className="max-h-[calc(88vh-108px)] space-y-7 overflow-y-auto p-5 sm:p-7">
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{project.description}</p>
          <div className="grid gap-3 sm:grid-cols-3">{project.metrics.map((metric) => <div key={metric.label} className="rounded-xl border border-border bg-card p-4"><p className="text-2xl font-semibold tracking-tight text-primary">{metric.value}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{metric.label}</p></div>)}</div>
          <div className="grid gap-8 md:grid-cols-2">
            <div><h3 className="text-sm font-semibold">What it does</h3><ul className="mt-4 space-y-3">{project.keyFeatures.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{feature}</li>)}</ul></div>
            <div><h3 className="text-sm font-semibold">My contributions</h3><ul className="mt-4 space-y-3">{project.contributions.map((contribution) => <li key={contribution} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{contribution}</li>)}</ul></div>
          </div>
          <div className="border-t border-border pt-5"><h3 className="text-[10px] font-semibold uppercase tracking-[.18em] text-muted-foreground">Technology</h3><div className="mt-3 flex flex-wrap gap-2">{project.techStack.map((technology) => <span key={technology} className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium">{technology}</span>)}</div></div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProductHighlights() {
  const [selectedProject, setSelectedProject] = useState<ProjectHighlight | null>(null)
  const [selectedSnap, setSelectedSnap] = useState(0)
  const [snaps, setSnaps] = useState<number[]>([])
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", loop: false })
  const sync = useCallback(() => {
    if (!emblaApi) return
    setSelectedSnap(emblaApi.selectedScrollSnap())
    setSnaps(emblaApi.scrollSnapList())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    sync()
    emblaApi.on("select", sync)
    emblaApi.on("reInit", sync)
    return () => { emblaApi.off("select", sync); emblaApi.off("reInit", sync) }
  }, [emblaApi, sync])

  return (
    <div className="mt-20 border-t border-border pt-14">
      <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-primary">Built at TalkWisely</p><h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Selected product work</h3><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Four enterprise products across finance, supply chain, communications, and team operations.</p></div>
        <div className="flex gap-2"><button type="button" onClick={() => emblaApi?.scrollPrev()} disabled={!emblaApi?.canScrollPrev()} aria-label="Previous product case studies" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card disabled:opacity-40"><ArrowLeft className="h-4 w-4" /></button><button type="button" onClick={() => emblaApi?.scrollNext()} disabled={!emblaApi?.canScrollNext()} aria-label="Next product case studies" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card disabled:opacity-40"><ArrowRight className="h-4 w-4" /></button></div>
      </div>
      <div ref={emblaRef} className="overflow-hidden" role="region" aria-label="Enterprise product case studies" aria-roledescription="carousel"><div className="-ml-4 flex items-stretch">{PROJECT_HIGHLIGHTS.map((project) => <div key={project.name} className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_58%] lg:flex-[0_0_38%]"><CaseStudyCard project={project} onOpen={() => setSelectedProject(project)} /></div>)}</div></div>
      <div className="mt-6 flex justify-center gap-2" role="group" aria-label={`Case study carousel position ${selectedSnap + 1} of ${snaps.length}`}>{snaps.map((_, index) => <button key={index} type="button" onClick={() => emblaApi?.scrollTo(index)} aria-label={`Go to case study group ${index + 1}`} aria-current={selectedSnap === index ? "true" : undefined} className={`h-1.5 rounded-full transition-all ${selectedSnap === index ? "w-7 bg-primary" : "w-1.5 bg-border"}`} />)}</div>
      <AnimatePresence>{selectedProject && <CaseStudyDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
    </div>
  )
}
