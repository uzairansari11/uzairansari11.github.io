import { AnimationProvider } from "@/components/animation-provider"
import { GitHubStats } from "@/components/github-stats"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"

export default function Home() {
  return (
    <AnimationProvider>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <GitHubStats />
      {/* <GitHubCalendar /> */}
      <Contact />
    </AnimationProvider>
  )
}
