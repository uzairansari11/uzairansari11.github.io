"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { experiences, projectHighlights, type ProjectHighlight } from "@/lib/data"
import { Briefcase, Calendar, X, ArrowRight, ExternalLink, BarChart3, Package, PhoneCall, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const projectIcons: Record<string, typeof BarChart3> = {
  "Nourma": BarChart3,
  "Lineomatic": Package,
  "Pulse": PhoneCall,
}

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
        <div className="bg-card border-b px-6 py-4 flex items-start justify-between rounded-t-2xl shrink-0">
          <div>
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-sm text-primary font-medium">{project.tagline}</p>
          </div>
          <button type="button" onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0">
            <X className="h-4 w-4" />
          </button>
        </div>

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
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">My Contributions</h4>
            <ul className="space-y-2.5">
              {project.contributions.map((c, i) => (
                <li key={i} className="text-sm flex gap-2 leading-relaxed">
                  <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />{c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Experience() {
  const [selectedProject, setSelectedProject] = useState<ProjectHighlight | null>(null)
  const [openExp, setOpenExp] = useState<string>("exp-1")

  return (
    <section id="experience" className="py-12 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Where I've Worked" subtitle="2+ years shipping production systems — VoIP, ERP, CRM & more" />

        {/* Product Highlights */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Products I Built</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {projectHighlights.map((project) => (
              <button
                key={project.name}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group text-left border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
                style={{ borderRadius: "12px" }}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  {(() => { const Icon = projectIcons[project.name] || BarChart3; return (
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                  ) })()}
                  <span className="font-bold text-sm">{project.name}</span>
                </div>
                <p className="text-xs text-primary font-medium mb-2">{project.tagline}</p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">{project.description}</p>

                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-3 pt-3 border-t border-border/30">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <span className="block text-sm font-bold text-primary">{m.value}</span>
                        <span className="text-[10px] text-muted-foreground leading-tight">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                  View details <ExternalLink className="h-3 w-3" />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Work history — accordion */}
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-4 w-4 text-primary" />
          <h3 className="font-semibold">Work History</h3>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-border hidden sm:block" />

          <div className="space-y-4">
            {experiences.map((exp) => {
              const isOpen = openExp === exp.id
              return (
                <div key={exp.id} className="relative flex gap-4 sm:gap-6">
                  <div className="hidden sm:flex flex-col items-center shrink-0">
                    <div className={`w-[31px] h-[31px] rounded-full bg-card border-2 flex items-center justify-center z-10 transition-all duration-300 ${isOpen ? "border-primary shadow-md shadow-primary/20" : "border-border"}`}>
                      <Briefcase className={`h-3.5 w-3.5 transition-colors ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                  </div>

                  <div className={`flex-1 rounded-xl border bg-card overflow-hidden transition-all duration-300 ${isOpen ? "border-primary/30 shadow-lg shadow-primary/5" : "border-border/50 hover:border-border"}`}>
                    <button
                      type="button"
                      onClick={() => setOpenExp(isOpen ? "" : exp.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1 min-w-0">
                        <div className="min-w-0">
                          <h3 className="font-bold text-base">{exp.position}</h3>
                          <p className="text-primary text-sm font-semibold">{exp.company}</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary rounded-full px-3 py-1.5 shrink-0 w-fit font-medium">
                          <Calendar className="h-3 w-3" /> {exp.duration}
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
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                            <div className="h-px bg-border/50 mb-5" />
                            <ul className="space-y-2.5 mb-5">
                              {exp.description.map((item, j) => (
                                <li key={j} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
                                  <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.technologies.map((tech) => (
                                <span key={tech} className="text-[11px] bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
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
