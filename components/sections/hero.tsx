"use client"

import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { gsap } from "gsap"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const shapesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current
    const subheading = subheadingRef.current
    const cta = ctaRef.current
    const scroll = scrollRef.current
    const image = imageRef.current
    const shapes = shapesRef.current

    if (!section || !heading || !subheading || !cta || !scroll || !image || !shapes) return

    // Create shapes
    const shapeCount = 5
    for (let i = 0; i < shapeCount; i++) {
      const shape = document.createElement("div")
      const size = Math.random() * 100 + 50
      shape.className = "absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
      shape.style.width = `${size}px`
      shape.style.height = `${size}px`
      shape.style.backgroundColor = `hsl(var(--primary) / 0.15)`
      shape.style.left = `${Math.random() * 100}%`
      shape.style.top = `${Math.random() * 100}%`
      shapes.appendChild(shape)
    }

    // Main timeline
    const tl = gsap.timeline()

    // Animate shapes
    gsap.to(shapes.children, {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      duration: "random(15, 30)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    })

    // Animate content
    tl.from(heading, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        subheading,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        cta,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        image,
        {
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          rotation: -5,
        },
        "-=0.8",
      )
      .from(
        scroll,
        {
          y: -10,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          repeat: -1,
          yoyo: true,
        },
        "-=0.2",
      )

    // Parallax effect
    gsap.to(".hero-bg", {
      y: 100,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    // Text animation
    const chars = heading.textContent?.split("") || []
    heading.textContent = ""

    chars.forEach((char) => {
      const span = document.createElement("span")
      span.textContent = char
      span.style.display = "inline-block"
      heading.appendChild(span)
    })

    gsap.from(heading.children, {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.05,
      duration: 0.8,
      ease: "back.out",
    })

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 20
      const yPos = (clientY / window.innerHeight - 0.5) * 20

      gsap.to(image, {
        x: xPos,
        y: yPos,
        rotation: xPos * 0.05,
        duration: 1,
        ease: "power2.out",
      })

      gsap.to(shapes.children, {
        x: (i) => xPos * ((i % 3) + 1) * 0.5,
        y: (i) => yPos * ((i % 2) + 1) * 0.5,
        duration: 1,
        ease: "power2.out",
        stagger: 0.05,
      })
    }

    section.addEventListener("mousemove", handleMouseMove)

    return () => {
      tl.kill()
      section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      <div ref={shapesRef} className="absolute inset-0 -z-10 overflow-hidden"></div>

      <div className="hero-bg absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 ref={headingRef} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m  {personalInfo.name}
                <span className="text-primary">.</span>
              </h1>
              {/* <p ref={subheadingRef} className="max-w-[600px] text-muted-foreground md:text-xl">
                {personalInfo.title}
              </p> */}
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{personalInfo.bio}</p>
            </div>
            <div ref={ctaRef} className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              ref={imageRef}
              className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-4 border-primary/20"
            >
              <img
                src={personalInfo.avatarUrl || "/placeholder.svg"}
                alt={personalInfo.name}
                width={400}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-primary" />
      </div>
    </section>
  )
}
