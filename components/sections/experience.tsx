"use client"

import { useState, useCallback, useEffect } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { EXPERIENCES, PROJECT_HIGHLIGHTS, EXPERIENCE_CONTENT, type ProjectHighlight } from "@/lib/constants"
import { Briefcase, Calendar, X, ArrowRight, ExternalLink, BarChart3, Package, PhoneCall, ChevronDown, Clock } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"

const PROJECT_ICONS = {
  Nourma: BarChart3,
  Lineomatic: Package,
  Pulse: PhoneCall,
  TimeTracker: Clock,
} as const

function ProjectModal({ project, onClose }: { project: ProjectHighlight; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="bg-card border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-card border-b px-6 py-4 flex items-start justify-between rounded-t-2xl shrink-0">
          <div>
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-sm text-primary font-medium">{project.tagline}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-5 space-y-5 overflow-y-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

          {project.metrics && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-primary/5 border border-primary/10 p-3 text-center glow-card">
                  <span className="block text-lg font-bold text-primary">{m.value}</span>
                  <span className="text-[11px] text-muted-foreground">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">My Contributions</h4>
            <ul className="space-y-2.5">
              {project.contributions.map((c, i) => (
                <li key={i} className="text-sm flex gap-2 leading-relaxed">
                  <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onClick }: { project: ProjectHighlight; onClick: () => void }) {
  const Icon = PROJECT_ICONS[project.name as keyof typeof PROJECT_ICONS] || BarChart3

  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left glass-card rounded-2xl p-6 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Header with Icon and Title */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
          <Icon className="h-5 w-5 text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base mb-1">{project.name}</h3>
          <p className="text-sm text-muted-foreground">{project.tagline}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && (
        <div className="grid grid-cols-3 gap-4 mb-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold mb-1">{m.value}</div>
              <div className="text-xs text-muted-foreground leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* View Details Link */}
      <div className="pt-4 border-t border-border/30">
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-medium group-hover:text-primary group-hover:gap-2 transition-all">
          View details <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </div>
    </button>
  )
}

function ExperienceAccordion({ experience, isOpen, onToggle }: {
  experience: typeof EXPERIENCES[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline Icon */}
      <div className="hidden sm:flex flex-col items-center shrink-0">
        <div className={`w-[31px] h-[31px] rounded-full glass border-2 flex items-center justify-center z-10 transition-all ${
          isOpen ? "border-primary shadow-md shadow-primary/20" : "border-border"
        }`}>
          <Briefcase className={`h-3.5 w-3.5 transition-colors ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
        </div>
      </div>

      {/* Accordion Card */}
      <div className={`flex-1 rounded-xl glass-card overflow-hidden transition-all ${
        isOpen ? "border-primary/30 shadow-lg shadow-primary/5" : "border-border/50 hover:border-border"
      }`}>
        <button
          type="button"
          onClick={onToggle}
          className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-3"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1 min-w-0">
            <div className="min-w-0">
              <h3 className="font-bold text-base">{experience.position}</h3>
              <p className="text-primary text-sm font-semibold">{experience.company}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary rounded-full px-3 py-1.5 shrink-0 w-fit font-medium">
              <Calendar className="h-3 w-3" /> {experience.duration}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 mt-1"
          >
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                <div className="h-px bg-border/50 mb-5" />
                <ul className="space-y-2.5 mb-5">
                  {experience.description.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
                      <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="text-[11px] bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export function Experience() {
  const [selectedProject, setSelectedProject] = useState<ProjectHighlight | null>(null)
  const [openExp, setOpenExp] = useState<string>("exp-1")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: false,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const onInit = useCallback(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onInit()
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onInit)
  }, [emblaApi, onInit, onSelect])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scrollPrev()
      } else if (e.key === 'ArrowRight') {
        scrollNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [scrollPrev, scrollNext])

  return (
    <section id="experience" className="section-spacing">
      <div className="section-container">
        <SectionHeading title={EXPERIENCE_CONTENT.heading.title} subtitle={EXPERIENCE_CONTENT.heading.subtitle} />

        {/* Product Highlights */}
        <div className="content-spacing mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <h3 className="font-semibold">{EXPERIENCE_CONTENT.sections.products}</h3>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous project"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next project"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Embla Carousel */}
          <div className="py-4 -my-4">
            <div className="overflow-hidden -mx-3" ref={emblaRef}>
              <div className="flex py-2">
                {PROJECT_HIGHLIGHTS.map((project) => (
                  <div
                    key={project.name}
                    className="flex-none w-full sm:w-1/2 lg:w-1/3 min-w-0 px-3"
                  >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* Carousel Dots */}
          {scrollSnaps.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {scrollSnaps.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollTo(idx)}
                  className={`rounded-full transition-all ${
                    selectedIndex === idx
                      ? "w-6 h-2 bg-primary shadow-md shadow-primary/30"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Work History */}
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-4 w-4 text-primary" />
          <h3 className="font-semibold">{EXPERIENCE_CONTENT.sections.workHistory}</h3>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-border hidden sm:block" />

          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <ExperienceAccordion
                key={exp.id}
                experience={exp}
                isOpen={openExp === exp.id}
                onToggle={() => setOpenExp(openExp === exp.id ? "" : exp.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
