"use client"

import { useEffect, useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Github, Star, GitFork, Code, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const fallbackStats = [
  { label: "Stars", value: 3, icon: Star },
  { label: "Followers", value: 99, icon: Users },
  { label: "Following", value: 77, icon: Users },
  { label: "Repos", value: 107, icon: Code },
  { label: "Contributions", value: 850, icon: GitFork },
]

export function GitHubStats() {
  const [stats, setStats] = useState(fallbackStats)

  useEffect(() => {
    fetch("https://api.github.com/users/uzairansari11")
      .then((res) => res.json())
      .then((data) => {
        if (data?.public_repos) {
          setStats([
            { label: "Stars", value: 3, icon: Star },
            { label: "Followers", value: data.followers || 99, icon: Users },
            { label: "Following", value: data.following || 77, icon: Users },
            { label: "Repos", value: data.public_repos || 107, icon: Code },
            { label: "Contributions", value: 850, icon: GitFork },
          ])
        }
      })
      .catch(() => {})
  }, [])

  return (
    <div className="py-12 sm:py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">GitHub Activity</h3>
          <p className="text-sm text-muted-foreground">Open source contributions and coding activity</p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-4 flex flex-col items-center text-center">
              <stat.icon className="h-5 w-5 text-primary mb-2" />
              <div className="text-xl font-bold">
                <AnimatedCounter value={stat.value} />
              </div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="rounded-full" asChild>
            <a href="https://github.com/uzairansari11" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
