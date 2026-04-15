"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { projects, type Project } from "@/lib/data"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card rounded-xl border border-border/50 overflow-hidden flex flex-col h-full min-h-[380px] gradient-border glow-card">
      <div className="h-40 sm:h-44 shrink-0 overflow-hidden bg-muted relative">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold mb-1 text-sm sm:text-base">{project.title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-[10px] bg-primary/10 text-primary rounded-full px-2 py-0.5 font-medium">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] bg-secondary text-secondary-foreground rounded-full px-2 py-0.5">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
        <div className="flex gap-2 mt-auto">
          <Button size="sm" className="rounded-full flex-1 h-8 text-xs" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-3 w-3" /> Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" className="rounded-full flex-1 h-8 text-xs" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="mr-1 h-3 w-3" /> Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [current, setCurrent] = useState(0)
  const total = projects.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <section id="projects" className="py-12 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title="What I've Built" subtitle="Side projects and apps crafted from the ground up" />

        {/* Desktop: static 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile/tablet: transform-based carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full shrink-0 pr-0">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {projects.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    current === idx
                      ? "w-6 h-2 bg-primary shadow-md shadow-primary/30"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
