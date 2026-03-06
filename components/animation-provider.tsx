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
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin)
      initialized.current = true
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
