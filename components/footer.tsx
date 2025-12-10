import { Github, Linkedin, Mail } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/40 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">{portfolioData.name}</h3>
            <p className="text-muted-foreground text-sm">{portfolioData.bio}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#skills" className="hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold">Connect</h4>
            <div className="flex gap-4">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200"
                aria-label="GitHub"
                title="Visit GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200"
                aria-label="LinkedIn"
                title="Visit LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.social.email}`}
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200"
                aria-label="Email"
                title="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="pt-4 border-t border-border/50 space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-semibold">Email:</span> {portfolioData.email}
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Phone:</span> {portfolioData.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
