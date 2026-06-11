import type React from "react"
import "@/app/globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Navbar } from "@/components/navbar"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Uzair Ansari | Frontend Engineer | Full Stack Developer",
  description: "Frontend Engineer & Full Stack Developer specializing in React, Next.js, Node.js, PostgreSQL and modern web technologies. 2.5+ years building enterprise-grade applications.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans">
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <Navbar />
          <main className="pb-16 md:pb-0">{children}</main>
          <MobileBottomNav />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
