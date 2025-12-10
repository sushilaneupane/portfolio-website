"use client"
import { ProjectCard } from "@/components/project-card"
import { portfolioData } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Here are some of my notable projects showcasing my skills in full-stack development, from responsive
            frontends to scalable backends.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              keyFeatures={project.keyFeatures}
              github={project.github}
              demo={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
