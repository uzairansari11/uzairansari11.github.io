import type React from "react"
import "@/app/globals.css"
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ScrollProgress } from "@/components/scroll-progress"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Uzair Ansari | Software Engineer – GenAI & Full Stack",
  description: "Software Engineer – GenAI at Newtuple Technologies. Building enterprise AI proofs of concept, conversational interfaces, workflow automation, and React and Next.js products.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent" as const,
    title: "Uzair Ansari",
  },
}

import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { PwaRegister } from "@/components/pwa-register"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${firaCode.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#171816" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased transition-colors duration-300 relative pb-16 md:pb-0">
        <PwaRegister />
        <ScrollProgress />
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Footer />
        <MobileBottomNav />
        <Toaster />
      </body>
    </html>
  )
}
