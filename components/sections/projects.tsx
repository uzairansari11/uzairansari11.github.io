"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { projects } from "@/lib/data"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"

export function Projects() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.2, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 1.5, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
  })

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">My Projects</h2>
          <p className="text-muted-foreground text-lg">Check out some of my recent work</p>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {projects.map((project) => (
              <div key={project.id} className="keen-slider__slide">
                <Card className="flex flex-col h-[500px] overflow-hidden shadow-md">
                  {/* Image Section */}
                  <div className="h-[200px] w-full overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content Section */}
                  <CardContent className="flex-1 p-4 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Footer */}
                  <CardFooter className="border-t p-4 flex gap-2 justify-start">
                    <Button size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              size="icon"
              variant="outline"
              onClick={() => instanceRef.current?.prev()}
              className="rounded-full bg-background/80 backdrop-blur-sm"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => instanceRef.current?.next()}
              className="rounded-full bg-background/80 backdrop-blur-sm"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
