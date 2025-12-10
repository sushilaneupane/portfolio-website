"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, ChevronRight } from "lucide-react"
import { ProjectModal } from "@/components/project-modal"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  keyFeatures: string[]
  github: string
  demo?: string
}

export function ProjectCard({ title, description, technologies, keyFeatures, github, demo }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const generateImageUrl = (projectTitle: string) => {
    const queries: { [key: string]: string } = {
      "Personal Portfolio Website": "modern portfolio website design",
      "To-Do App": "task management application interface",
      "E-commerce Backend": "backend API architecture and database",
      "E-commerce Frontend": "e-commerce shopping interface",
      "Attendance Management System": "attendance tracking system dashboard",
    }
    const query = queries[projectTitle] || projectTitle
    return `/placeholder.svg?height=250&width=400&query=${encodeURIComponent(query)}`
  }

  return (
    <>
      <div className="group bg-secondary/30 rounded-lg overflow-hidden hover:bg-secondary/50 transition-all duration-300 border border-border hover:border-primary/50 flex flex-col h-full">
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          <img
            src={generateImageUrl(title) || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4 space-y-3 flex flex-col flex-1">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 2).map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                {tech}
              </span>
            ))}
            {technologies.length > 2 && (
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                +{technologies.length - 2}
              </span>
            )}
          </div>

          <div className="flex gap-2 pt-2 mt-auto">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 gap-1 h-9 text-xs bg-transparent hover:bg-primary/10"
              onClick={() => setIsModalOpen(true)}
            >
              <ChevronRight size={14} />
              See More
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-9 w-9 p-0 bg-transparent hover:bg-primary/10"
              onClick={() => window.open(github, "_blank")}
              title="View on GitHub"
            >
              <Github size={14} />
            </Button>
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{ title, description, technologies, keyFeatures, github, demo }}
      />
    </>
  )
}
