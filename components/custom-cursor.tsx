"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const onMouseMove = (e: MouseEvent) => {
      if (!visible) setVisible(true)
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power1.out" })
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "power3.out" })

      const target = e.target as HTMLElement
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select")
      gsap.to([cursor, follower], { scale: isInteractive ? 1.5 : 1, duration: 0.3 })
    }

    document.addEventListener("mousemove", onMouseMove)
    return () => document.removeEventListener("mousemove", onMouseMove)
  }, [visible])

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block ${visible ? "opacity-70" : "opacity-0"}`}
      />
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 w-7 h-7 border border-primary rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block ${visible ? "opacity-30" : "opacity-0"}`}
      />
    </>
  )
}
