import { portfolioData } from "@/lib/portfolio-data"

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: portfolioData.skills.frontend,
    },
    {
      category: "Backend",
      skills: portfolioData.skills.backend,
    },
    {
      category: "Database",
      skills: portfolioData.skills.database,
    },
    {
      category: "Tools & Other",
      skills: [...portfolioData.skills.tools, ...portfolioData.skills.other],
    },
  ]

  return (
    <section id="skills" className="section-padding px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
          <p className="text-muted-foreground mt-4">
            A comprehensive set of technologies and tools I've mastered throughout my development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-lg font-bold mb-4 text-primary">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-16 space-y-8">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience</h3>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-secondary/30 rounded-lg p-8 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold">{exp.position}</h4>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.duration}</span>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
