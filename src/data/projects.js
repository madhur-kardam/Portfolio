import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const projects = [
  {
    title: "Work-Link",
    description:
      "Responsive service booking platform connecting users with blue-collar and grey-collar workers.",
    image: project1,
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Git", "GitHub"],
    features: [
      "Responsive UI",
      "Service Listing",
      "Booking Workflow",
      "REST API Understanding",
      "Backend Integration",
    ],
    github: "https://github.com/madhur-kardam/WORK-LINK",
  },
  {
    title: "Indore Property Price Prediction Platform",
    description:
      "Responsive machine learning powered property prediction website.",
    image: project2,
    tech: ["Python", "FastAPI", "Machine Learning", "HTML", "CSS", "JavaScript"],
    features: [
      "Prediction API",
      "FastAPI Backend",
      "Responsive Interface",
      "Live Prediction",
      "Render Deployment",
    ],
    github: "https://github.com/madhur-kardam/house-price-mlops",
    demo: "https://house-price-mlops-65ta.onrender.com/",
  },
  {
    title: "Personal Portfolio",
    description:
      "Responsive developer portfolio built using React and Tailwind CSS.",
    image: project3,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    features: [
      "Responsive",
      "Theme Switching",
      "Project Showcase",
      "Resume Download",
      "Modern UI",
      "Smooth CSS Animations",
    ],
    github: "https://github.com/madhur-kardam/Portfolio",
    demo: "",
  },
];