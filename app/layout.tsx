import type React from "react"
import "@/app/globals.css"
import { Nunito } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Uzair Ansari | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={nunito.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
