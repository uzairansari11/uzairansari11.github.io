"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import { TextPlugin } from "gsap/dist/TextPlugin"

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      // Register GSAP plugins
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin)

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault()
          const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
          if (targetId && targetId !== "#") {
            gsap.to(window, {
              duration: 1,
              scrollTo: {
                y: targetId,
                offsetY: 80,
              },
              ease: "power3.inOut",
            })
          }
        })
      })

      initialized.current = true
    }

    // Cleanup function to kill all ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
