"use client"

import { useRef, useState } from "react"
import dynamic from "next/dynamic"
import { SectionHeading } from "@/components/ui/section-heading"
import { PERSONAL_INFO, CONTACT_CONTENT } from "@/lib/constants"
import { Mail, MapPin, Phone, MessageCircle, AlertCircle, ExternalLink, ArrowUpRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CopyButton } from "@/components/ui/copy-button"

const LocationMap = dynamic(() => import("@/components/ui/location-map").then((module) => module.LocationMap), { ssr: false })

const ICON_MAP = {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
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
  const isEmail = info.icon === "Mail"
  const isWhatsApp = info.icon === "MessageCircle"

  return (
    <div className="group flex items-center gap-3 rounded-xl px-2.5 py-3 transition-colors duration-300 hover:bg-white/[.035] sm:px-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/[.08] text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/[.12]">
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[.16em] text-muted-foreground">{info.label}</p>
        <div className="flex items-center justify-between gap-2">
          {info.clickable ? (
            <a href={info.href} target={isWhatsApp ? "_blank" : undefined} rel={isWhatsApp ? "noreferrer" : undefined} className="min-w-0 truncate text-xs font-medium leading-tight text-foreground transition-colors hover:text-primary focus-visible:rounded-sm">
              {info.value}
            </a>
          ) : <p className="text-xs font-medium leading-tight text-foreground">{info.value}</p>}
          <div className="flex shrink-0 items-center gap-3">
            {isWhatsApp && <a href={info.href} target="_blank" rel="noreferrer" className="hidden items-center gap-1 text-[11px] font-semibold text-primary transition-colors hover:text-foreground sm:inline-flex">Chat <ArrowUpRight className="h-3 w-3" /></a>}
            {(isEmail || isWhatsApp) && <CopyButton text={info.value} className="text-muted-foreground hover:text-foreground" />}
          </div>
        </div>
      </div>
    </div>
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
  const baseClass = `w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
    error ? "border-destructive ring-2 ring-destructive/15" : ""
  }`

  const InputComponent = rows ? "textarea" : "input"

  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium mb-1.5 text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <InputComponent
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={name === "name" ? "name" : name === "email" ? "email" : "off"}
        required={required}
        {...(rows ? { rows } : {})}
        onChange={onClearError}
        className={rows ? `${baseClass} resize-none` : baseClass}
        suppressHydrationWarning
      />
      {error && (
        <p className="text-red-500 dark:text-red-400 text-xs mt-1 flex items-center gap-1">
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
    <section id="contact" className="section-spacing relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-24 h-[28rem] w-[28rem] rounded-full bg-primary/[.045] blur-[110px]" aria-hidden="true" />
      <div className="section-container relative z-10">
        <SectionHeading title={CONTACT_CONTENT.heading.title} subtitle={CONTACT_CONTENT.heading.subtitle} tag="LET’S CONNECT" />

        <div className="mt-10 space-y-5 lg:mt-12 lg:space-y-6">
          {/* Contact Form */}
          <div>
            <div className="surface-glass rounded-[1.5rem] p-5 sm:p-8 lg:p-9">
              <div>
                <div className="mb-7 border-b border-border/70 pb-5 sm:mb-8 sm:pb-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.2em] text-primary">01 / Start here</p>
                  <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{CONTACT_CONTENT.form.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{CONTACT_CONTENT.form.description}</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      label="Name"
                      name="name"
                      placeholder="Your name"
                      error={errors.name}
                      onClearError={() => clearError("name")}
                    />
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      error={errors.email}
                      onClearError={() => clearError("email")}
                    />
                  </div>

                  <FormField
                    label="Subject"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    error={errors.subject}
                    onClearError={() => clearError("subject")}
                  />

                  <FormField
                    label="Message"
                    name="message"
                    placeholder="A few details about your project or idea..."
                    rows={4}
                    error={errors.message}
                    onClearError={() => clearError("message")}
                  />

                  <button
                    type="submit"
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-14px_rgba(215,183,126,.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(215,183,126,.75)] sm:w-fit"
                  >
                    <Mail className="h-4 w-4" /> Open email draft <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground sm:text-left">You can review and edit the message before sending.</p>
                </form>
              </div>
            </div>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
            {/* Contact options */}
            <div className="surface-glass rounded-2xl p-3 sm:p-4">
              <div className="px-3 pb-3 pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-primary">02 / Direct contact</p>
                <p className="mt-1.5 text-sm text-muted-foreground">Email, phone, or WhatsApp—pick what works for you.</p>
              </div>
              <div className="divide-y divide-border/70">
                {CONTACT_CONTENT.contactInfo.map((info) => (
                  <ContactInfoCard key={info.label} info={info} />
                ))}
              </div>
            </div>
            {/* Location */}
            <div className="surface-glass overflow-hidden rounded-2xl">
              <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-4 w-4" /></span>
                  <div><span className="block text-sm font-semibold">Sakinaka, Mumbai</span><span className="mt-0.5 block text-xs text-muted-foreground">Maharashtra, India</span></div>
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=Sakinaka%2C%20Mumbai" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-primary hover:underline underline-offset-4">Open map <ExternalLink className="h-3.5 w-3.5" /></a>
              </div>
              <div className="h-[250px] border-t border-border sm:h-[280px]" role="region" aria-label="Map showing Sakinaka, Mumbai"><LocationMap /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
