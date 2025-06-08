"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/lib/data"

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const heading = headingRef.current
    const cards = cardsRef.current

    if (!section || !heading || !cards) return

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

    gsap.from(".skill-card", {
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

    gsap.from(".skill-item", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.05,
      scrollTrigger: {
        trigger: cards,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 ref={headingRef} className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies and tools I work with
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <Card key={skill.category} className="skill-card overflow-hidden">
              <CardHeader>
                <CardTitle>{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="skill-item inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
