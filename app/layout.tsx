import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Analytics } from "@/components/analytics"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Uzair Ansari",
  description: "Uzair Ansari Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add your favicon link here */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <AnimatedBackground>
              <div className="relative flex min-h-screen flex-col top-0">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster />
              <Analytics />
              <CustomCursor />
            </AnimatedBackground>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}

