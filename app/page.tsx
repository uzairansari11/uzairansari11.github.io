"use client"

import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function Home() {
  return (
    <main>
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Experience /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <BackToTop />
    </main>
  )
}
