"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Github, Star, GitFork, Code, Users } from "lucide-react"

interface GitHubStats {
  stars: number
  followers: number
  following: number
  repos: number
  contributions: number
}

export function GitHubStats() {
  const containerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  // These would typically come from an API call to GitHub
  const stats: GitHubStats = {
    stars: 3,
    followers: 99,
    following: 77,
    repos: 107,
    contributions: 850,
  }

  useEffect(() => {
    if (!containerRef.current || !statsRef.current) return

    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    gsap.from(".stat-item", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.3,
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Animate numbers counting up
    gsap.from(".stat-number", {
      textContent: 0,
      duration: 2,
      ease: "power1.inOut",
      snap: { textContent: 1 },
      stagger: 0.2,
      delay: 0.5,
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: function (this: any) {
        const target = this.targets()[0]
        const maxValue = Number.parseInt(target.getAttribute("data-value"), 10)
        target.textContent = Math.ceil(this.targets()[0].textContent)
      },
    })

    return () => {
      gsap.killTweensOf(".stat-number")
    }
  }, [])

  return (
    <div ref={containerRef} className="py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">GitHub Stats</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My open source contributions and activity
            </p>
          </div>
        </div>

        <div ref={statsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <Card className="stat-item overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold mb-1">
                <span className="stat-number" data-value={stats.stars}>
                  {stats.stars}
                </span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">Stars</p>
            </CardContent>
          </Card>

          <Card className="stat-item overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold mb-1">
                <span className="stat-number" data-value={stats.followers}>
                  {stats.followers}
                </span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">Followers</p>
            </CardContent>
          </Card>

          <Card className="stat-item overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold mb-1">
                <span className="stat-number" data-value={stats.following}>
                  {stats.following}
                </span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">Following</p>
            </CardContent>
          </Card>

          <Card className="stat-item overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold mb-1">
                <span className="stat-number" data-value={stats.repos}>
                  {stats.repos}
                </span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">Repositories</p>
            </CardContent>
          </Card>

          <Card className="stat-item overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <GitFork className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold mb-1">
                <span className="stat-number" data-value={stats.contributions}>
                  {stats.contributions}
                </span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">Contributions</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/uzairansari11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <Github className="mr-2 h-5 w-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}
