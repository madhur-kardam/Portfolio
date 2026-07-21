import { useTypingEffect } from "../hooks/useTypingEffect";
import { Button } from "../components/ui/Button";
import {
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
  PhoneIcon,
  ArrowDownIcon,
} from "../components/Icons";
import { socialLinks } from "../data/links";
import profileImage from "../assets/profileImage.png";
import resume from "../assets/Madhur_Resume.pdf";

const roles = ["Frontend Developer", "React Developer", "Problem Solver"];

export function Hero() {
  const typedText = useTypingEffect(roles);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 lg:pt-20"
    >
      {/* Soft ambient background accent */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
        {/* Text content */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="font-heading text-lg font-medium text-primary">Hi, I'm</p>
          <h1 className="mt-2 font-heading text-4xl font-bold leading-tight text-textmain sm:text-5xl lg:text-6xl">
            Madhur Kardam
          </h1>

          <div className="mt-3 flex h-9 items-center justify-center text-xl font-semibold text-accent lg:justify-start sm:text-2xl">
            <span>{typedText}</span>
            <span className="typing-caret h-6 animate-blink sm:h-7" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted lg:mx-0">
            Frontend developer with strong fundamentals in HTML, CSS, JavaScript, React,
            and responsive web development. Passionate about building modern, clean, and
            user-friendly web applications while continuously improving development
            skills through real-world projects.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start">
            <Button onClick={scrollToContact}>Hire Me</Button>
            <Button variant="outline" asChild>
              <a href={resume} download="Madhur_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-textmain transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-textmain transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Send email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-textmain transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <EmailIcon className="h-4 w-4" />
            </a>
            <a
              href={`tel:${socialLinks.phone}`}
              aria-label="Call phone number"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-textmain transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Profile image inside an organic CSS blob shape */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-0 animate-blob bg-gradient-to-br from-primary to-accent opacity-20 blur-sm" />
            <div className="absolute inset-3 animate-blob overflow-hidden border-4 border-card shadow-xl shadow-primary/10 [animation-delay:0.4s]">
              <img
                src={profileImage}
                alt="Madhur Kardam profile"
                loading="lazy"
                className="h-full w-full object-cover bg-card"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors duration-300 hover:text-primary sm:flex"
      >
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
