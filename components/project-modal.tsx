"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    technologies: string[]
    keyFeatures: string[]
    github: string
    demo?: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Key Features */}
          {project.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t">
            {project.demo && (
              <Button className="gap-2 flex-1" onClick={() => window.open(project.demo, "_blank")}>
                <ExternalLink size={18} />
                View Demo
              </Button>
            )}
            <Button
              variant="outline"
              className="gap-2 flex-1 bg-transparent"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github size={18} />
              GitHub Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
