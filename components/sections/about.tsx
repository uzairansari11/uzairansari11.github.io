"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, FileText, Globe, Server } from "lucide-react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const heading = headingRef.current
    const content = contentRef.current
    const cards = cardsRef.current

    if (!section || !heading || !content || !cards) return

    gsap.from(heading, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    gsap.from(content, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: content,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: cards,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 ref={headingRef} className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about me and what I do
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div ref={contentRef} className="space-y-4">
              <p className="text-muted-foreground">{personalInfo.longBio}</p>
              <p className="text-muted-foreground">
                Based in {personalInfo.location}, I work with clients worldwide to create robust, scalable, and
                user-friendly web applications.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
          <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2">
            <Card className="service-card overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating responsive and interactive user interfaces with modern frameworks.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="service-card overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Backend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Building robust APIs and server-side applications with Node.js and Express.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="service-card overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Full Stack Development</h3>
                  <p className="text-sm text-muted-foreground">
                    End-to-end development with the MERN stack for complete web solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="service-card overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">Technical Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    Providing expert advice on web development technologies and best practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
