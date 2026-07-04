import { SectionHeading } from "../components/SectionHeading";
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/Card";
import { skillCategories } from "../data/skills";
import { useScrollFade } from "../hooks/useScrollFade";

export function Skills() {
  const fadeRef = useScrollFade();

  return (
    <section id="skills" className="bg-card/40 py-24">
      <div ref={fadeRef} className="section-fade mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills"
          description="A snapshot of the languages, frameworks, and tools I use to build clean, functional web applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-background px-3 py-1.5 text-sm text-muted transition-colors duration-300 group-hover:border-primary/30 border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
