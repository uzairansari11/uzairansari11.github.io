"use client"

import dynamic from "next/dynamic"
import { AnimationProvider } from "@/components/animation-provider"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { BackToTop } from "@/components/ui/back-to-top"

// Lazy load non-critical components for better initial load performance
const GitHubStats = dynamic(() => import("@/components/github-stats").then(m => ({ default: m.GitHubStats })), {
  ssr: false,
  loading: () => <div className="py-12 sm:py-16" />
})

export default function Home() {
  return (
    <AnimationProvider>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <GitHubStats />
      <Contact />
      <BackToTop />
    </AnimationProvider>
  )
}
