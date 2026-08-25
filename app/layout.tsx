import type React from "react"
import "@/app/globals.css"
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
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
  title: "Uzair Ansari | Senior Frontend Engineer & Full Stack Developer",
  description: "Frontend Engineer & Full Stack Developer specializing in React, Next.js, Node.js, PostgreSQL, and enterprise web applications.",
}

import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased transition-colors duration-300 relative pb-16 md:pb-0">
        <ThemeProvider>
          <ScrollProgress />
          <AnimatedBackground />
          {/* Monochrome Ambient Background Depth */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full bg-black/4 dark:bg-white/4 blur-[140px] animate-float-1" />
            <div className="absolute top-1/3 -right-40 w-[38rem] h-[38rem] rounded-full bg-black/3 dark:bg-white/3 blur-[140px] animate-float-2" />
            <div className="absolute bottom-10 left-1/4 w-[44rem] h-[44rem] rounded-full bg-black/4 dark:bg-white/4 blur-[150px] animate-float-1" />
          </div>

          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <MobileBottomNav />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
