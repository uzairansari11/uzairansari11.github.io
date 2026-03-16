"use client"

import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Code2, Globe, Layers, Radio } from "lucide-react"

const services = [
  { icon: Globe, title: "Frontend Engineering", desc: "Pixel-perfect, responsive UIs with React, Next.js, and modern CSS.", num: "01" },
  { icon: Layers, title: "Backend Development", desc: "Scalable APIs with Node.js, Express, Django, and MongoDB.", num: "02" },
  { icon: Code2, title: "Full Stack Solutions", desc: "End-to-end product development from architecture to deployment.", num: "03" },
  { icon: Radio, title: "Real-Time Systems", desc: "VoIP, WebRTC, live transcription, and real-time communication platforms.", num: "04" },
]

export function About() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Who I Am" subtitle="A developer who takes ownership — from architecture to deployment" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="rounded-xl border border-border/50 bg-card p-6 sm:p-8 space-y-5">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              I&apos;m a <span className="text-foreground font-medium">Software Engineer</span> with 2+ years of experience building production-grade applications. I specialize in the React ecosystem with strong backend foundations in Node.js and Django.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              I independently architected and shipped <span className="text-foreground font-medium">3 major products</span> — from a real-time VoIP platform serving 1,500+ users to a financial ERP system that reduced manual effort by 60%. I take ownership end-to-end.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Based in <span className="text-foreground font-medium">{personalInfo.location}</span>, I&apos;m currently expanding into <span className="text-foreground font-medium">Python &amp; Django</span> while continuing to build with the MERN stack.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full glow-card" asChild><a href="#projects">View My Work</a></Button>
              <Button variant="outline" className="rounded-full" asChild><a href="#contact">Get In Touch</a></Button>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, desc, num }) => (
              <div key={title} className="group relative rounded-xl bg-card border border-border/50 p-5 gradient-border glow-card">
                <span className="absolute top-3 right-3 text-[10px] font-bold text-primary/30 group-hover:text-primary/60 transition-colors">{num}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
