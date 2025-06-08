"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, GitFork, Github, RefreshCw, Star, TrendingUp } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

export function GitHubCalendar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [refreshKey, setRefreshKey] = useState(0)

  // Get theme-aware colors with proper hex formatting
  const getThemeColors = () => {
    const isDark = theme?.includes("dark") || theme === "dark"

    if (theme?.includes("purple")) {
      return {
        primary: "8b5cf6",
        secondary: "d946ef",
        accent: "06b6d4",
        text: isDark ? "e5e7eb" : "374151",
        fire: "f093fb",
        ring: "7c3aed",
      }
    } else if (theme?.includes("green")) {
      return {
        primary: "22c55e",
        secondary: "4ade80",
        accent: "f59e0b",
        text: isDark ? "e5e7eb" : "374151",
        fire: "10b981",
        ring: "16a34a",
      }
    } else if (theme?.includes("blue")) {
      return {
        primary: "3b82f6",
        secondary: "06b6d4",
        accent: "f59e0b",
        text: isDark ? "e5e7eb" : "374151",
        fire: "0ea5e9",
        ring: "2563eb",
      }
    } else {
      // Default theme
      return {
        primary: "8b5cf6",
        secondary: "d946ef",
        accent: "06b6d4",
        text: isDark ? "e5e7eb" : "374151",
        fire: "f093fb",
        ring: "7c3aed",
      }
    }
  }

  const colors = getThemeColors()

  const refreshStats = () => {
    setRefreshKey((prev) => prev + 1)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Heading
      tl.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      })

      // Calendar
      tl.from(calendarRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: calendarRef.current,
          start: "top 80%",
        },
      })

      // All Cards
      gsap.from(".github-stat-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      })

      // Floating effect
      gsap.to(".github-stat-card", {
        y: -3,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      })
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background glows using theme colors */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
            <Github className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary">Live GitHub Activity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gradient-rainbow animate-gradient-shift">GitHub</span>{" "}
            <span className="text-foreground">Activity</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Real-time stats and contributions from my GitHub profile
          </p>
          <Button
            onClick={refreshStats}
            variant="outline"
            size="sm"
            className="mt-4 border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Stats
          </Button>
        </div>

        {/* Calendar */}
        <div ref={calendarRef} className="mb-12 w-full">
  <Card className="w-full overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm shadow-2xl hover:shadow-primary/20 transition-all duration-500">
    <CardContent className="p-0 md:p-8 w-full">
      <div className="flex items-center gap-3 mb-6 px-6 pt-6 md:px-0 md:pt-0">
        <div className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20">
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">Contribution Calendar</h3>
      </div>
      <div className="w-full overflow-hidden rounded-xl">
        <iframe
          key={`calendar-${refreshKey}`}
          title="GitHub Contribution Calendar"
          src={`https://ghchart.rshah.org/${colors.primary}/uzairansari11`}
          className="w-full h-[200px] md:h-[250px] bg-transparent border-0"
          loading="lazy"
        />
      </div>
    </CardContent>
  </Card>
</div>


        {/* All Stats Cards */}
        <div ref={statsRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <StatCard
            key={`streak-${refreshKey}`}
            icon={<Star className="h-5 w-5 text-primary" />}
            label="Streak Stats"
            src={`https://github-readme-streak-stats.herokuapp.com?user=uzairansari11&theme=transparent&hide_border=true&border_radius=8&date_format=%5BY%20%5DM%20j&sideNums=${colors.primary}&fire=${colors.fire}&ring=${colors.ring}&currStreakNum=${colors.primary}&currStreakLabel=${colors.primary}&sideLabels=${colors.primary}&dates=${colors.text}&background=00000000`}
            fallbackSrc="https://github-readme-streak-stats.herokuapp.com?user=uzairansari11&theme=dark&hide_border=true"
            gradientFrom="from-primary/20"
            gradientTo="to-secondary/20"
            hoverFrom="group-hover:from-primary/30"
            hoverTo="group-hover:to-secondary/30"
          />
          <StatCard
            key={`languages-${refreshKey}`}
            icon={<Code2 className="h-5 w-5 text-secondary" />}
            label="Top Languages"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=uzairansari11&layout=compact&langs_count=6&bg_color=00000000&hide_border=true&text_color=${colors.text}&title_color=${colors.secondary}&border_radius=8`}
            fallbackSrc="https://github-readme-stats.vercel.app/api/top-langs/?username=uzairansari11&layout=compact&theme=dark"
            gradientFrom="from-secondary/20"
            gradientTo="to-accent/20"
            hoverFrom="group-hover:from-secondary/30"
            hoverTo="group-hover:to-accent/30"
          />
          <StatCard
            key={`stats-${refreshKey}`}
            icon={<GitFork className="h-5 w-5 text-accent" />}
            label="GitHub Stats"
            src={`https://github-readme-stats.vercel.app/api?username=uzairansari11&theme=transparent&show_icons=true&bg_color=00000000&hide_border=true&text_color=${colors.text}&title_color=${colors.accent}&icon_color=${colors.secondary}&border_radius=8&include_all_commits=true&count_private=true`}
            fallbackSrc="https://github-readme-stats.vercel.app/api?username=uzairansari11&theme=dark&show_icons=true"
            gradientFrom="from-accent/20"
            gradientTo="to-primary/20"
            hoverFrom="group-hover:from-accent/30"
            hoverTo="group-hover:to-primary/30"
          />
          <StatCard
            key={`trophies-${refreshKey}`}
            icon={<Star className="h-5 w-5 text-secondary" />}
            label="GitHub Trophies"
            src={`https://github-profile-trophy.vercel.app/?username=uzairansari11&theme=flat&no-frame=true&no-bg=true&margin-w=4&column=3&title_color=${colors.primary}&text_color=${colors.text}`}
            fallbackSrc="https://github-profile-trophy.vercel.app/?username=uzairansari11&theme=dark&no-frame=true"
            gradientFrom="from-secondary/20"
            gradientTo="to-primary/20"
            hoverFrom="group-hover:from-secondary/30"
            hoverTo="group-hover:to-primary/30"
          />
          <StatCard
            key={`activity-${refreshKey}`}
            icon={<TrendingUp className="h-5 w-5 text-primary" />}
            label="Activity Graph"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=uzairansari11&bg_color=00000000&color=${colors.text}&line=${colors.secondary}&point=${colors.accent}&area=true&hide_border=true`}
            fallbackSrc="https://github-readme-activity-graph.vercel.app/graph?username=uzairansari11&theme=github-dark"
            gradientFrom="from-primary/20"
            gradientTo="to-accent/20"
            hoverFrom="group-hover:from-primary/30"
            hoverTo="group-hover:to-accent/30"
          />
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm border border-muted-foreground/20">
            <Github className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Live data from{" "}
              <a
                href="https://github.com/uzairansari11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium hover:underline"
              >
                github.com/uzairansari11
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  label: string
  src: string
  fallbackSrc: string
  gradientFrom: string
  gradientTo: string
  hoverFrom: string
  hoverTo: string
}

function StatCard({ icon, label, src, fallbackSrc, gradientFrom, gradientTo, hoverFrom, hoverTo }: StatCardProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleImageLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
    setHasError(true)
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <Card className="github-stat-card group overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`p-2 rounded-lg bg-gradient-to-r ${gradientFrom} ${gradientTo} ${hoverFrom} ${hoverTo} transition-all duration-300`}
          >
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{label}</h3>
        </div>
        <div className="rounded-lg overflow-hidden min-h-[180px] flex items-center justify-center bg-muted/10">
          {isLoading && (
            <div className="flex items-center justify-center h-[180px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
          {hasError && imgSrc === fallbackSrc ? (
            <div className="flex flex-col items-center justify-center h-[180px] text-muted-foreground">
              <Github className="h-8 w-8 mb-2" />
              <p className="text-sm">Unable to load {label}</p>
            </div>
          ) : (
            <img
              src={imgSrc || "/placeholder.svg"}
              alt={label}
              className={`w-full h-auto transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}
