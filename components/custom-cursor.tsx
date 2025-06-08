"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power1.out",
      })

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      })
    }

    const onMouseDown = () => {
      gsap.to([cursor, follower], {
        scale: 0.8,
        duration: 0.2,
      })
    }

    const onMouseUp = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.2,
      })
    }

    const onMouseEnterLink = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
      })
    }

    const onMouseLeaveLink = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
      })
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink)
      link.addEventListener("mouseleave", onMouseLeaveLink)
    })

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink)
        link.removeEventListener("mouseleave", onMouseLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{ opacity: 0.8 }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-40 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ opacity: 0.4 }}
      />
    </>
  )
}
