"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { skillsWithIcons, tools } from "@/lib/data"
import { Code2, Server, Wrench, Brain } from "lucide-react"

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "Redux", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Chakra UI", "GSAP"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "WebRTC", "SIP.js", "Python", "Django"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "npm/pnpm"],
  },
  {
    title: "Core Skills",
    icon: Brain,
    skills: ["System Design", "Problem Solving", "Agile Development", "Code Reviews", "Team Leadership"],
  },
]

export function Skills() {
  const allIcons = [...skillsWithIcons, ...tools]

  return (
    <section id="skills" className="py-12 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Tech Stack" subtitle="The tools & technologies powering everything I build" />

        {/* Scrolling icon marquee */}
        <div className="relative overflow-hidden mb-14">
          <div className="flex gap-10 animate-marquee">
            {[...allIcons, ...allIcons].map((item, i) => (
              <div key={`${item.id}-${i}`} className="flex flex-col items-center gap-2 shrink-0 group">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                  <img src={item.src} alt={item.title} className="w-8 h-8 object-contain" />
                </div>
                <span className="text-[11px] text-muted-foreground font-medium whitespace-nowrap group-hover:text-foreground transition-colors">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Category grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map(({ title, icon: Icon, skills }) => (
            <div key={title} className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-sm">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-xs bg-muted text-foreground rounded-lg px-3 py-1.5 font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
