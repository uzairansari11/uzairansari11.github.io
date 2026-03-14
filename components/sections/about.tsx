"use client"

import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"
import { Code2, Globe, Layers, Radio } from "lucide-react"

const services = [
  { icon: Globe, title: "Frontend Engineering", desc: "Pixel-perfect, responsive UIs with React, Next.js, and modern CSS." },
  { icon: Layers, title: "Backend Development", desc: "Scalable APIs with Node.js, Express, and MongoDB." },
  { icon: Code2, title: "Full Stack Solutions", desc: "End-to-end product development from DB to deployment." },
  { icon: Radio, title: "Real-Time Systems", desc: "VoIP, WebRTC, live transcription, and real-time communication platforms." },
]

export function About() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title="About Me" subtitle="Engineer who takes ownership — from architecture to deployment" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-5">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              I&apos;m a <span className="text-foreground font-medium">Full Stack Developer</span> with 2+ years of professional experience building production-grade applications. I specialize in the React ecosystem with strong backend foundations.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              At TalkWisely, I independently architected and shipped 3 major products — from a real-time VoIP platform to a financial ERP system. I take ownership from design to deployment.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Based in <span className="text-foreground font-medium">{personalInfo.location}</span>, I&apos;m currently expanding into <span className="text-foreground font-medium">Python &amp; Django</span> while continuing to build with the MERN stack.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full" asChild><a href="#projects">View My Work</a></Button>
              <Button variant="outline" className="rounded-full" asChild><a href="#contact">Get In Touch</a></Button>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, desc }) => (
              <GlassCard key={title} className="p-5 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
