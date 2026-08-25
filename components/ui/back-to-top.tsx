"use client"

import { useEffect, useState } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"
import { smoothScrollTo } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    smoothScrollTo("#home", 72)
  }

  const scrollToBottom = () => {
    smoothScrollTo("#contact", 72)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col gap-1.5"
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-secondary/80 transition-all shadow-lg shadow-black/20 dark:shadow-black/50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={scrollToBottom}
            className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-secondary/80 transition-all shadow-lg shadow-black/20 dark:shadow-black/50"
            aria-label="Scroll to bottom"
          >
            <ArrowDown className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
