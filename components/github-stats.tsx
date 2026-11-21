"use client"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Code, GitFork, Star, Users } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { useEffect, useState } from "react"

import { SectionHeading } from "@/components/ui/section-heading"

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
    <div className="section-spacing">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          title="GitHub Activity & Open Source"
          subtitle="Open source contributions and coding stats"
          tag="// OPEN SOURCE IMPACT"
        />

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-5 flex flex-col items-center text-center transition-all">
              <div className="w-10 h-10 rounded-sm bg-secondary/80 dark:bg-zinc-800/80 border border-border dark:border-zinc-700/60 flex items-center justify-center mb-3">
                <stat.icon className="h-5 w-5 text-foreground dark:text-zinc-200" />
              </div>
              <div className="text-2xl font-bold text-foreground">
                <AnimatedCounter value={stat.value} />
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="rounded-sm" asChild>
            <a href="https://github.com/uzairansari11" target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2 h-4 w-4" /> View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
