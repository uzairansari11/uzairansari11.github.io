"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { personalInfo } from "@/lib/data"
import emailjs from "@emailjs/browser"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Set current time in hidden input before sending
    if (formRef.current) {
      const timeInput = formRef.current.querySelector<HTMLInputElement>('input[name="time"]')
      if (timeInput) {
        timeInput.value = new Date().toLocaleString()
      }

      // Debug: Log all form data keys and values
      const formData = new FormData(formRef.current)
      for (const [key, value] of formData.entries()) {
        console.log(key, value)
      }
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      formRef.current?.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive",
      })
    }

    setIsSubmitting(false)
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || !headingRef.current || !formRef.current || !infoRef.current) return

    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    })

    gsap.from(formRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
      },
    })

    gsap.from(infoRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
      },
    })

    gsap.from(".contact-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <h2 ref={headingRef} className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get In Touch
          </h2>
          <p className="text-muted-foreground md:text-xl">Have a project in mind? Let's work together!</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Your email" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message" className="min-h-[150px]" required />
              </div>

              {/* Hidden input for current time, set dynamically before sending */}
              <input type="hidden" name="time" />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          <div ref={infoRef} className="grid gap-6">
            <Card className="contact-card overflow-hidden">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                      {personalInfo.email}
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="contact-card overflow-hidden">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-sm text-muted-foreground mt-1">{personalInfo.location}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="contact-card overflow-hidden">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href="tel:+917271880500" className="hover:text-primary transition-colors">
                      +91 (7271) 880-500
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg overflow-hidden h-[250px] contact-card">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7363569788236!2d72.89634777517167!3d19.12021265003625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7bc2879e5a5%3A0xeda2c6f0d8a9fd58!2sPowai%2C%20Mumbai%2C%20Maharashtra%20400076!5e0!3m2!1sen!2sin!4v1717741830620!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
