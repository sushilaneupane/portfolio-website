"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export function Contact() {
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

        {/* Contact Info Only */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-secondary/30 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-primary" size={24} />
              <h3 className="font-bold">Email</h3>
            </div>
            <p className="text-muted-foreground break-all">{portfolioData.email}</p>
          </div>

          {/* Phone */}
          <div className="bg-secondary/30 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="text-primary" size={24} />
              <h3 className="font-bold">Phone</h3>
            </div>
            <p className="text-muted-foreground">{portfolioData.phone}</p>
          </div>

          {/* Location */}
          <div className="bg-secondary/30 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="text-primary" size={24} />
              <h3 className="font-bold">Location</h3>
            </div>
            <p className="text-muted-foreground">{portfolioData.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
