import { portfolioData } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-12 h-1 bg-primary rounded-full" />
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">{portfolioData.bio}</p>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Internships</h3>
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <p className="font-semibold">{exp.position}</p>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-xs text-primary font-medium">{exp.durationInMonths}</p>
                  <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                    {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Education</h3>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-background rounded-lg p-4 text-center hover:border-primary/50 border border-transparent transition-colors">
                <p className="text-2xl font-bold gradient-text">{portfolioData.projects.length}</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center hover:border-primary/50 border border-transparent transition-colors">
                <p className="text-2xl font-bold gradient-text">{portfolioData.experience.length}</p>
                <p className="text-xs text-muted-foreground">Work Exp</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center hover:border-primary/50 border border-transparent transition-colors">
                <p className="text-2xl font-bold gradient-text">{portfolioData.languages.length}</p>
                <p className="text-xs text-muted-foreground">Languages</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8">
              <div className="bg-background rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-muted-foreground text-sm">Full Stack Developer</p>
                  <p className="text-xs text-muted-foreground mt-2">{portfolioData.location}</p>
                  <p className="text-xs text-primary font-semibold mt-4">{portfolioData.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
