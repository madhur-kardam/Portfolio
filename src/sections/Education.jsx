import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/ui/Card";
import { CapIcon } from "../components/Icons";
import { education } from "../data/education";
import { useScrollFade } from "../hooks/useScrollFade";


export function Education() {
  const fadeRef = useScrollFade();

  return (
    <section id="education" className="bg-card/40 py-24">
      <div ref={fadeRef} className="section-fade mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="My Journey" title="Education" />

        <div className="relative">
          {/* Vertical timeline line */}
          <span className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-1/2" />

          <div className="flex flex-col gap-10">
            {education.map((item, i) => (
              <div
                key={item.degree}
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <span className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background sm:left-1/2" />

                <div className="w-full pl-10 sm:w-1/2 sm:px-8 sm:pl-8">
                  <Card className="p-6 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <CapIcon className="h-5 w-5" />
                      </span>
                      <p className="text-sm font-medium text-primary">
                        {item.duration}
                      </p>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-textmain">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.field}</p>
                    <p className="mt-1 text-sm font-medium text-textmain">
                      {item.institute}
                    </p>
                  </Card>
                </div>

                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
