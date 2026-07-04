import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { GitHubIcon, ExternalLinkIcon } from "../components/Icons";
import { projects } from "../data/projects";
import { useScrollFade } from "../hooks/useScrollFade";

export function Projects() {
  const fadeRef = useScrollFade();

  return (
    <section id="projects" className="py-24">
      <div ref={fadeRef} className="section-fade mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="My Work"
          title="Projects"
          description="A few projects I've built while learning, experimenting, and solving real problems."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image placeholder */}
              <div className="aspect-video w-full overflow-hidden bg-background">
                <img
                  src={project.image}
                  alt={`${project.title} preview screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-semibold text-textmain">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <ul className="mt-4 flex flex-col gap-1.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <span className="h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <GitHubIcon className="h-4 w-4" /> GitHub
                    </a>
                  </Button>
{project.demo && (
  <Button size="sm" asChild className="flex-1">
    <a href={project.demo} target="_blank" rel="noreferrer">
      <ExternalLinkIcon className="h-4 w-4" /> Live Demo
    </a>
  </Button>
)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
