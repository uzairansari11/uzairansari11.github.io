"use client"

import { useRef, useState } from "react"
import dynamic from "next/dynamic"
import { SectionHeading } from "@/components/ui/section-heading"
import { PERSONAL_INFO, CONTACT_CONTENT } from "@/lib/constants"
import { Mail, MapPin, Phone, Send, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const LocationMap = dynamic(() => import("@/components/ui/location-map").then(m => m.LocationMap), { ssr: false })

const ICON_MAP = {
  Mail,
  MapPin,
  Phone
}

type FormErrors = Record<string, string>

type ContactInfo = {
  icon: string
  label: string
  value: string
  href?: string
  clickable: boolean
}

function ContactInfoCard({ info }: { info: ContactInfo }) {
  const Icon = ICON_MAP[info.icon as keyof typeof ICON_MAP]
  const Component = info.clickable ? "a" : "div"

  return (
    <Component
      {...(info.clickable ? { href: info.href } : {})}
      className={`rounded-xl border border-border/50 bg-card p-3.5 flex items-center gap-3 ${
        info.clickable ? "group hover:border-primary/30 transition-colors cursor-pointer" : ""
      }`}
    >
      <div className={`w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 ${
        info.clickable ? "group-hover:bg-primary/15 transition-colors" : ""
      }`}>
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">{info.label}</p>
        <p className={`text-xs font-semibold leading-tight ${
          info.clickable ? "group-hover:text-primary transition-colors" : ""
        }`}>
          {info.value}
        </p>
      </div>
    </Component>
  )
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  rows,
  error,
  onClearError
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  required?: boolean
  rows?: number
  error?: string
  onClearError: () => void
}) {
  const baseClass = `w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${
    error ? "border-red-500 focus:ring-red-500/30 focus:border-red-500" : "border-border"
  }`

  const InputComponent = rows ? "textarea" : "input"

  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <InputComponent
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...(rows ? { rows } : {})}
        onChange={onClearError}
        className={rows ? `${baseClass} resize-none` : baseClass}
        suppressHydrationWarning
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors(prev => {
        const { [field]: _, ...rest } = prev
        return rest
      })
    }
  }

  const validate = () => {
    const form = formRef.current
    if (!form) return false

    const data = new FormData(form)
    const newErrors: FormErrors = {}

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors before submitting.",
        variant: "destructive"
      })
      return
    }

    const form = formRef.current
    if (form) {
      const data = new FormData(form)
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(data.get("subject") as string)}&body=${encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`
      )}`

      window.location.href = mailtoLink

      toast({
        title: "Opening Email Client",
        description: "Your default email client will open with the message.",
        duration: 3000,
      })

      setTimeout(() => {
        formRef.current?.reset()
        setErrors({})
      }, 500)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <SectionHeading title={CONTACT_CONTENT.heading.title} subtitle={CONTACT_CONTENT.heading.subtitle} />

        <div className="grid gap-8 lg:grid-cols-3 mt-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border/50 bg-card p-5 sm:p-6">
              <h3 className="font-semibold text-base mb-1">{CONTACT_CONTENT.form.title}</h3>
              <p className="text-xs text-muted-foreground mb-5">{CONTACT_CONTENT.form.description}</p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Name"
                    name="name"
                    placeholder="John Doe"
                    error={errors.name}
                    onClearError={() => clearError("name")}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    error={errors.email}
                    onClearError={() => clearError("email")}
                  />
                </div>

                <FormField
                  label="Subject"
                  name="subject"
                  placeholder="Project collaboration"
                  error={errors.subject}
                  onClearError={() => clearError("subject")}
                />

                <FormField
                  label="Message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  error={errors.message}
                  onClearError={() => clearError("message")}
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary text-primary-foreground font-semibold py-3 text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-3">
            {CONTACT_CONTENT.contactInfo.map((info) => (
              <ContactInfoCard key={info.label} info={info} />
            ))}

            {/* Location Map */}
            <div className="rounded-xl border border-border/50 overflow-hidden h-[220px]">
              <LocationMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
