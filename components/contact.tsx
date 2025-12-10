"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react"
import { contactFormSchema } from "@/lib/schemas"
import { portfolioData } from "@/lib/portfolio-data"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setSuccess(false)

    try {
      // Validate with Zod
      const validatedData = contactFormSchema.parse(formData)

      setIsSubmitting(true)
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 500))

      console.log("Form submitted:", validatedData)
      setSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      if (error instanceof Error && "errors" in error) {
        // Handle Zod validation errors
        const zodErrors = (error as any).errors
        const errorMap: Record<string, string> = {}
        zodErrors.forEach((err: any) => {
          errorMap[err.path[0]] = err.message
        })
        setErrors(errorMap)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-secondary/30 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-primary" size={24} />
              <h3 className="font-bold">Email</h3>
            </div>
            <p className="text-muted-foreground break-all">{portfolioData.email}</p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="text-primary" size={24} />
              <h3 className="font-bold">Phone</h3>
            </div>
            <p className="text-muted-foreground">{portfolioData.phone}</p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="text-primary" size={24} />
              <h3 className="font-bold">Location</h3>
            </div>
            <p className="text-muted-foreground">{portfolioData.location}</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-secondary/30 rounded-lg p-8 border border-border space-y-6"
        >
          {/* Success Message */}
          {success && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
              <CheckCircle className="text-green-500" size={20} />
              <p className="text-sm text-green-500">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full px-4 py-2 rounded-lg bg-background border transition-colors focus:outline-none focus:ring-2 text-foreground placeholder:text-muted-foreground ${
                  errors.name ? "border-red-500/50 focus:ring-red-500/50" : "border-border focus:ring-primary"
                }`}
              />
              {errors.name && (
                <div className="flex items-center gap-2 text-xs text-red-500">
                  <AlertCircle size={14} />
                  {errors.name}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-2 rounded-lg bg-background border transition-colors focus:outline-none focus:ring-2 text-foreground placeholder:text-muted-foreground ${
                  errors.email ? "border-red-500/50 focus:ring-red-500/50" : "border-border focus:ring-primary"
                }`}
              />
              {errors.email && (
                <div className="flex items-center gap-2 text-xs text-red-500">
                  <AlertCircle size={14} />
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={5}
              className={`w-full px-4 py-2 rounded-lg bg-background border transition-colors focus:outline-none focus:ring-2 text-foreground placeholder:text-muted-foreground resize-none ${
                errors.message ? "border-red-500/50 focus:ring-red-500/50" : "border-border focus:ring-primary"
              }`}
            />
            {errors.message && (
              <div className="flex items-center gap-2 text-xs text-red-500">
                <AlertCircle size={14} />
                {errors.message}
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 gap-2 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
