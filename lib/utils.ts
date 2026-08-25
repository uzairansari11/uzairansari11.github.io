import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export function smoothScrollTo(href: string, offsetY = 72) {
  if (typeof window === "undefined") return

  if (!href || href === "#" || href === "#home") {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: 0, autoKill: false },
      ease: "power2.out",
    })
    return
  }

  const targetSelector = href.startsWith("#") ? href : `#${href}`
  const target = document.querySelector(targetSelector) as HTMLElement | null

  if (target) {
    const targetTop = target.getBoundingClientRect().top + window.scrollY - offsetY
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: Math.max(0, targetTop), autoKill: false },
      ease: "power2.out",
    })
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
}

