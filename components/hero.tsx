"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Carousel } from "@/components/carousel"
import { portfolioData } from "@/lib/portfolio-data"

export function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Sushila Neupane Full-Stack resume.pdf"
    link.download = "Sushila Neupane Full-Stack resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 md:pt-24 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="gradient-text">Hi, I'm {portfolioData.name}</span>
                <br />
                <span className="text-foreground">{portfolioData.title}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{portfolioData.bio}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2" onClick={downloadCV}>
                Download CV <Download size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-transparent"
                onClick={() => window.open(portfolioData.social.github, "_blank")}
              >
                View GitHub
              </Button>
            </div>

            <div className="flex gap-4 pt-8">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.social.email}`}
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="h-96 md:h-full">
            <Carousel images={carouselImages} autoPlay={true} interval={4000} />
          </div>
        </div>

        <div className="flex justify-center pt-12">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

const carouselImages = [
  {
    src: "/susss.jpg",
    alt: "Developer workspace",
  },
   {
    src: "/suss.jpg",
    alt: "Team collaboration",
  },
   {
    src: "/sussss.jpg",
    alt: "Team collaboration",
  },
    {
    src: "/susss.jpg",
    alt: "Team collaboration",
  },
   {
    src: "/susnd.jpg",
    alt: "Team collaboration",
  },
   
]
  

