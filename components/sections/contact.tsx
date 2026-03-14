"use client"

import { useRef, useState } from "react"
import dynamic from "next/dynamic"
import { SectionHeading } from "@/components/ui/section-heading"
import { personalInfo } from "@/lib/data"
import emailjs from "@emailjs/browser"
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const LocationMap = dynamic(() => import("@/components/ui/location-map").then(m => m.LocationMap), { ssr: false })

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const validate = () => {
    const form = formRef.current
    if (!form) return false
    const data = new FormData(form)
    const newErrors: Record<string, string> = {}

    const name = (data.get("name") as string)?.trim()
    const email = (data.get("email") as string)?.trim()
    const subject = (data.get("subject") as string)?.trim()
    const message = (data.get("message") as string)?.trim()

    if (!name || name.length < 2) newErrors.name = "Name must be at least 2 characters"
    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!subject || subject.length < 3) newErrors.subject = "Subject must be at least 3 characters"
    if (!message || message.length < 10) newErrors.message = "Message must be at least 10 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) {
      toast({ title: "Validation Error", description: "Please fix the errors before submitting.", variant: "destructive" })
      return
    }

    setIsSubmitting(true)
    if (formRef.current) {
      const timeInput = formRef.current.querySelector<HTMLInputElement>('input[name="time"]')
      if (timeInput) timeInput.value = new Date().toLocaleString()
    }
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_placeholder"
      )
      setSent(true)
      setErrors({})
      formRef.current?.reset()
      toast({ title: "Message Sent!", description: "I'll get back to you as soon as possible." })
      setTimeout(() => setSent(false), 5000)
    } catch {
      toast({ title: "Failed to Send", description: "Please try again or email me directly.", variant: "destructive" })
    }
    setIsSubmitting(false)
  }

  const inputClass = (field: string) =>
    `w-full rounded-xl border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors[field] ? "border-red-500 focus:ring-red-500/30 focus:border-red-500" : "border-border"}`

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Let's Connect" subtitle="Got a project idea or want to collaborate? I'd love to hear from you" />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
              <h3 className="font-bold text-lg mb-1">Send me a message</h3>
              <p className="text-sm text-muted-foreground mb-6">Fill out the form and I'll get back to you as soon as possible.</p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      onChange={() => errors.name && setErrors(prev => { const { name: _, ...rest } = prev; return rest })}
                      className={inputClass("name")}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      onChange={() => errors.email && setErrors(prev => { const { email: _, ...rest } = prev; return rest })}
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="Project collaboration"
                    required
                    onChange={() => errors.subject && setErrors(prev => { const { subject: _, ...rest } = prev; return rest })}
                    className={inputClass("subject")}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    onChange={() => errors.message && setErrors(prev => { const { message: _, ...rest } = prev; return rest })}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.message}</p>}
                </div>

                <input type="hidden" name="time" />

                <button
                  type="submit"
                  disabled={isSubmitting || sent}
                  className="w-full rounded-xl bg-primary text-primary-foreground font-semibold py-3.5 text-sm flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60 transition-all"
                >
                  {sent ? (
                    <><CheckCircle2 className="h-4 w-4" /> Message Sent!</>
                  ) : isSubmitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="h-4 w-4" /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group rounded-2xl border border-border/50 bg-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{personalInfo.email}</p>
              </div>
            </a>

            <div className="rounded-2xl border border-border/50 bg-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                <p className="text-sm font-semibold">{personalInfo.location}</p>
              </div>
            </div>

            <a
              href="tel:+917271880500"
              className="group rounded-2xl border border-border/50 bg-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                <p className="text-sm font-semibold group-hover:text-primary transition-colors">+91 (7271) 880-500</p>
              </div>
            </a>

            {/* Map */}
            <div className="rounded-2xl border border-border/50 overflow-hidden flex-1 min-h-[200px]">
              <LocationMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
