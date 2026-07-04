import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/ui/Card";
import { LaptopIcon, CapIcon, LocationIcon } from "../components/Icons";
import { useScrollFade } from "../hooks/useScrollFade";

const infoCards = [
  {
    icon: LaptopIcon,
    label: "Projects",
    value: "3+ Built",
  },
  {
    icon: CapIcon,
    label: "Education",
    value: "B.Tech, IT",
  },
  {
    icon: LocationIcon,
    label: "Location",
    value: "Indore, India",
  },
];

export function About() {
  const fadeRef = useScrollFade();

  return (
    <section id="about" className="py-24">
      <div ref={fadeRef} className="section-fade mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            I am a B.Tech Information Technology student passionate about frontend
            development and modern web technologies. I enjoy building responsive,
            accessible, and user-friendly web applications that solve real-world
            problems. I have hands-on experience with JavaScript, React.js, Node.js,
            REST APIs, and modern development workflows using Git and GitHub. I
            continuously improve my skills by building practical projects and
            exploring industry best practices.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {infoCards.map(({ icon: Icon, label, value }) => (
              <Card
                key={label}
                className="flex items-center gap-4 p-5 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted">{label}</span>
                  <span className="block font-heading font-semibold text-textmain">
                    {value}
                  </span>
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
