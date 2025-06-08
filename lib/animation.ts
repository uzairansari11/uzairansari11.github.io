"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

// ✅ Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

export const fadeIn = (element: string | Element, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 1,
    delay,
    ease: "power3.out",
  })
}

export const fadeInLeft = (element: string | Element, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    x: -50,
    duration: 1,
    delay,
    ease: "power3.out",
  })
}

export const fadeInRight = (element: string | Element, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    x: 50,
    duration: 1,
    delay,
    ease: "power3.out",
  })
}

export const staggerFadeIn = (elements: string | Element[], stagger = 0.1, delay = 0) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    stagger,
    duration: 0.8,
    delay,
    ease: "power3.out",
  })
}

export const textReveal = (element: string | Element, text: string, delay = 0) => {
  const tl = gsap.timeline({ delay })

  gsap.set(element, { text: "" })

  return tl.to(element, {
    duration: 2,
    text: text,
    ease: "none",
  })
}

export const createScrollTrigger = (
  trigger: string | Element,
  animation: gsap.core.Tween | gsap.core.Timeline,
  start = "top 80%"
) => {
  return ScrollTrigger.create({
    trigger,
    animation,
    start,
    toggleActions: "play none none none",
  })
}
