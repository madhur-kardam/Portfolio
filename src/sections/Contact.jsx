import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../components/Icons";
import { socialLinks } from "../data/links";
import { useScrollFade } from "../hooks/useScrollFade";

const contactDetails = [
  { icon: EmailIcon, label: "Email", value: socialLinks.email, href: `mailto:${socialLinks.email}` },
  { icon: PhoneIcon, label: "Phone", value: socialLinks.phone, href: `tel:${socialLinks.phone}` },
  { icon: LocationIcon, label: "Location", value: socialLinks.location, href: null },
  { icon: GitHubIcon, label: "GitHub", value: "github.com/madhurkardam", href: socialLinks.github },
  { icon: LinkedInIcon, label: "LinkedIn", value: "linkedin.com/in/madhurkardam", href: socialLinks.linkedin },
];

export function Contact() {
  const fadeRef = useScrollFade();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up — this form is presentational only, as requested.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24">
      <div ref={fadeRef} className="section-fade mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Connect"
          description="I'm currently looking for internship and frontend development opportunities. Feel free to connect if you'd like to collaborate or discuss opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact details */}
          <div className="flex flex-col gap-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <Card className="flex items-center gap-4 p-5 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block font-medium text-textmain">{value}</span>
                  </span>
                </Card>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          {/* Contact form */}
          <Card className="p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <EmailIcon className="h-6 w-6" />
                </span>
                <p className="font-heading text-lg font-semibold text-textmain">
                  Message ready to send
                </p>
                <p className="max-w-sm text-sm text-muted">
                  This form is presentational and isn't connected to a backend yet.
                  Reach out directly via email or LinkedIn in the meantime.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-textmain">
                    Name
                  </label>
                  <Input id="name" name="name" type="text" placeholder="Your full name" required />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-textmain">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-textmain">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the opportunity or idea..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
