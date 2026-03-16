"use client"

import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { ArrowDown, Code2, Download, Github, Linkedin, Mail, Rocket, Send, Users } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.fromTo("[data-hero-badge]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo("[data-hero-name]", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
        .fromTo("[data-hero-title]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo("[data-hero-desc]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo("[data-hero-buttons] > *", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, "-=0.3")
        .fromTo("[data-hero-social] > *", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, stagger: 0.08, duration: 0.4 }, "-=0.2")
        .fromTo("[data-hero-stats] > *", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, "-=0.2")
        .fromTo("[data-hero-tech] > *", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.05, duration: 0.4 }, "-=0.3")
        .fromTo("[data-hero-achievement]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo("[data-hero-status]", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
        .fromTo("[data-hero-image]", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)" }, "-=1.0")
        .fromTo("[data-hero-exp]", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5 }, "-=0.3")

      // Scroll indicator bounce
      gsap.to(scrollRef.current, { y: 8, duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut" })

      // Floating background blobs
      gsap.to("[data-blob-1]", { y: -20, x: 10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" })
      gsap.to("[data-blob-2]", { y: 15, x: -15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center pt-16 pb-8 sm:pt-20 sm:pb-12">
      <div className="absolute inset-0 -z-10">
        <div data-blob-1 className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div data-blob-2 className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5 text-center lg:text-left">
            <div data-hero-badge className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20" style={{ opacity: 0 }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </div>

            <div className="space-y-2">
              <h1 data-hero-name className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-gradient" style={{ opacity: 0 }}>
                {personalInfo.name}
              </h1>
              <p data-hero-title className="text-xl sm:text-2xl text-primary font-medium" style={{ opacity: 0 }}>
                {personalInfo.title}
              </p>
              <p data-hero-desc className="text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed pt-2" style={{ opacity: 0 }}>
                Software Engineer with 2+ years of experience developing scalable web applications and product workflows. Specialized in building CRM systems, finance automation tools, and real-time communication platforms.
              </p>
            </div>

            <div data-hero-buttons className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full px-8 glow-card" asChild>
                <a href="#contact"><Send className="mr-2 h-4 w-4" /> Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> View Resume
                </a>
              </Button>
            </div>

            <div data-hero-social className="flex items-center gap-3 justify-center lg:justify-start">
              {[
                { href: personalInfo.socialLinks.github, icon: Github, label: "GitHub" },
                { href: personalInfo.socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div data-hero-stats className="grid grid-cols-3 gap-4 pt-2">
              {[
                { icon: Rocket, value: "3+", label: "Products Shipped" },
                { icon: Code2, value: "20+", label: "Technologies" },
                { icon: Users, value: "1,500+", label: "Active Users" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center lg:text-left" style={{ opacity: 0 }}>
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold text-foreground">{value}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3 text-center lg:text-left">Core Technologies:</p>
              <div data-hero-tech className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["React.js", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "MongoDB"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-card border text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300" style={{ opacity: 0 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <div data-hero-achievement className="rounded-xl bg-card border p-4 hover:border-primary/30 glow-card transition-all duration-300" style={{ opacity: 0 }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Key Achievement</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Shipped 3 production products serving 1,500+ active users — reduced manual effort by 80% and boosted revenue by 30%
                    </p>
                  </div>
                </div>
              </div>

              <div data-hero-status className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground" style={{ opacity: 0 }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Open to Opportunities</span>
                </div>
                <div className="h-3 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <span>Remote & Onsite Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Spinning ring behind avatar */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />

              <div data-hero-image className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl shadow-primary/10" style={{ opacity: 0 }}>
                <img src={personalInfo.avatarUrl || "/placeholder.svg"} alt={personalInfo.name} className="w-full h-full object-cover" />
              </div>
              <div data-hero-exp className="absolute -bottom-3 -right-3 rounded-2xl bg-card border shadow-lg px-4 py-3 text-center glow-card" style={{ opacity: 0 }}>
                <span className="text-2xl font-bold text-primary">2+</span>
                <span className="block text-xs text-muted-foreground">Years Exp.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        ref={scrollRef}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll to next section"
      >
        <span className="text-xs text-muted-foreground">Scroll</span>
        <ArrowDown className="h-4 w-4 text-muted-foreground" />
      </button>
    </section>
  )
}
