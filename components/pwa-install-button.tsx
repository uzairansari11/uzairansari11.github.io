"use client"

import { useEffect, useState } from "react"
import { Share, Smartphone } from "lucide-react"

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export function PwaInstallButton({ onDark = false }: { onDark?: boolean }) {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null)
  const [isIos, setIsIos] = useState(false)
  const [installed, setInstalled] = useState(false)
  const [showIosHelp, setShowIosHelp] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent
    const iosDevice = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    const standalone = window.matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone
    setIsIos(iosDevice)
    setInstalled(Boolean(standalone))

    const handleInstallPrompt = (event: Event) => {
      event.preventDefault()
      setInstallPrompt(event as InstallPromptEvent)
    }
    const handleInstalled = () => {
      setInstalled(true)
      setInstallPrompt(null)
    }

    window.addEventListener("beforeinstallprompt", handleInstallPrompt)
    window.addEventListener("appinstalled", handleInstalled)
    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt)
      window.removeEventListener("appinstalled", handleInstalled)
    }
  }, [])

  const install = async () => {
    if (installPrompt) {
      await installPrompt.prompt()
      const choice = await installPrompt.userChoice
      if (choice.outcome === "accepted") setInstalled(true)
      setInstallPrompt(null)
      return
    }
    if (isIos) setShowIosHelp((open) => !open)
  }

  if (installed || (!installPrompt && !isIos)) return null

  return (
    <div className="relative">
      <button
        type="button"
        onClick={install}
        aria-label="Install portfolio app"
        aria-expanded={showIosHelp}
        aria-haspopup={isIos ? "dialog" : undefined}
        className={`inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-colors ${onDark ? "border-white/20 bg-white/10 text-white hover:bg-white/20" : "border-border bg-secondary text-foreground hover:bg-secondary/80"}`}
      >
        <Smartphone className="h-3.5 w-3.5" /><span className="hidden sm:inline">Install app</span>
      </button>
      {showIosHelp && isIos && (
        <div role="dialog" aria-label="Install this app on iPhone" className="absolute right-0 top-12 z-[70] w-64 rounded-2xl border border-border bg-[#20211e] p-4 text-left text-white shadow-2xl">
          <p className="text-sm font-semibold">Add to your Home Screen</p>
          <p className="mt-2 text-xs leading-5 text-white/65">In Safari, tap <Share className="mx-0.5 inline h-3.5 w-3.5 text-primary" /> Share, then choose <span className="font-medium text-white">Add to Home Screen</span>.</p>
          <button type="button" onClick={() => setShowIosHelp(false)} className="mt-3 text-xs font-semibold text-primary">Got it</button>
        </div>
      )}
    </div>
  )
}
