"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/data"

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const heading = headingRef.current
    const timeline = timelineRef.current

    if (!section || !heading || !timeline) return

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

    gsap.from(".experience-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: timeline,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 ref={headingRef} className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Work Experience
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and career highlights
            </p>
          </div>
        </div>

        <div
          ref={timelineRef}
          className="mt-12 space-y-8 relative before:absolute before:inset-0 before:left-[15px] before:ml-[7px] before:h-full before:w-[2px] before:bg-muted md:before:mx-auto md:before:left-0 md:before:right-0 md:space-y-12"
        >
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`experience-card relative grid grid-cols-1 gap-4 md:grid-cols-2 ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}
            >
              <div className={`pb-4 md:pb-0 ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                <div className="flex items-center space-x-2 md:justify-end">
                  <div className="absolute left-0 z-10 flex h-7 w-7 items-center justify-center rounded-full border bg-background md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>{experience.position}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-semibold">{experience.company}</p>
                        <p className="text-sm text-muted-foreground">{experience.duration}</p>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {experience.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
