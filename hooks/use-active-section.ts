"use client"

import { useEffect, useState } from "react"

const sections = ["home", "about", "projects", "experience", "skills", "contact"]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
            // Update URL hash without scrolling
            window.history.replaceState(null, "", `#${id}`)
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return activeSection
}
