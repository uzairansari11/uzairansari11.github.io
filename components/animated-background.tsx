"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useTheme } from "next-themes"

interface AnimatedBackgroundProps {
  children: React.ReactNode
}

export function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing particles
    const container = containerRef.current
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    // Create particles
    const particleCount = 30
    const particles: HTMLDivElement[] = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full opacity-20"

      // Set size (random between 10px and 80px)
      const size = Math.random() * 70 + 10
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Set initial position (random within container)
      const x = Math.random() * 100
      const y = Math.random() * 100
      particle.style.left = `${x}%`
      particle.style.top = `${y}%`

      // Set color based on theme
      if (theme === "purple" || theme === "purple-dark") {
        particle.style.backgroundColor = "hsl(262.1, 83.3%, 57.8%)"
      } else if (theme === "green" || theme === "green-dark") {
        particle.style.backgroundColor = "hsl(142.1, 76.2%, 36.3%)"
      } else if (theme === "blue" || theme === "blue-dark") {
        particle.style.backgroundColor = "hsl(221.2, 83.2%, 53.3%)"
      } else {
        particle.style.backgroundColor = "hsl(var(--primary))"
      }

      container.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles
    particles.forEach((particle) => {
      animateParticle(particle)
    })

    function animateParticle(particle: HTMLDivElement) {
      // Random duration between 10 and 20 seconds
      const duration = Math.random() * 10 + 10

      // Random movement distance
      const xMove = (Math.random() - 0.5) * 20
      const yMove = (Math.random() - 0.5) * 20

      gsap.to(particle, {
        x: `+=${xMove}%`,
        y: `+=${yMove}%`,
        duration,
        ease: "sine.inOut",
        opacity: Math.random() * 0.2 + 0.1,
        scale: Math.random() + 0.5,
        repeat: -1,
        yoyo: true,
        onComplete: () => animateParticle(particle),
      })
    }

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = container.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      particles.forEach((particle, index) => {
        // Calculate distance from mouse
        const particleRect = particle.getBoundingClientRect()
        const particleX = particleRect.left - rect.left + particleRect.width / 2
        const particleY = particleRect.top - rect.top + particleRect.height / 2

        const distanceX = x - particleX
        const distanceY = y - particleY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        // Move particles away from mouse
        if (distance < 200) {
          const angle = Math.atan2(distanceY, distanceX)
          const force = (200 - distance) / 10

          gsap.to(particle, {
            x: `-=${Math.cos(angle) * force}`,
            y: `-=${Math.sin(angle) * force}`,
            duration: 0.5,
            ease: "power2.out",
          })
        }
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      gsap.killTweensOf(particles)
    }
  }, [theme])

  return (
    <div className="relative overflow-hidden">
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
      {children}
    </div>
  )
}
