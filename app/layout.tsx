import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uzair Ansari — Frontend Engineer · Full Stack Developer',
  description: 'Uzair Ansari is a Mumbai-based frontend and full-stack engineer building enterprise products with React, Next.js, Node.js, and PostgreSQL, with a growing focus on GenAI.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
