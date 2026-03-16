"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { projects } from "@/lib/data"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"

export function Projects() {
  const [current, setCurrent] = useState(0)
  const [ready, setReady] = useState(false)

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
    },
    slideChanged(s) { setCurrent(s.track.details.rel) },
    created() { setReady(true) },
  })

  return (
    <section id="projects" className="py-12 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title="What I've Built" subtitle="Side projects and apps crafted from the ground up" />

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {projects.map((project) => (
              <div key={project.id} className="keen-slider__slide" style={{ minWidth: 0 }}>
                <div className="bg-card rounded-xl border border-border/50 overflow-hidden flex flex-col h-full min-h-[380px] gradient-border glow-card">
                  <div className="h-40 sm:h-44 shrink-0 overflow-hidden bg-muted relative">
                    <img src={project.image || "/placeholder.svg"} alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="text-[10px] bg-primary/10 text-primary rounded-full px-2 py-0.5 font-medium">{tag}</span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] bg-secondary text-secondary-foreground rounded-full px-2 py-0.5">+{project.tags.length - 4}</span>
                      )}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Button size="sm" className="rounded-full flex-1 h-8 text-xs" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-1 h-3 w-3" /> Demo</a>
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full flex-1 h-8 text-xs" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="mr-1 h-3 w-3" /> Code</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {ready && slider.current && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button type="button" onClick={() => slider.current?.prev()}
                className="w-10 h-10 rounded-full border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {projects.map((_, idx) => (
                  <button type="button" key={idx} onClick={() => slider.current?.moveToIdx(idx)}
                    className={`rounded-full transition-all duration-300 ${current === idx ? "w-6 h-2 bg-primary shadow-md shadow-primary/30" : "w-2 h-2 bg-border hover:bg-muted-foreground"}`} />
                ))}
              </div>
              <button type="button" onClick={() => slider.current?.next()}
                className="w-10 h-10 rounded-full border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
