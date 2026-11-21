
import { Code2, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Student Expense Tracker",
      description:
        "A web application designed to help students record, organize and manage their daily expenses.",
      tech: ["Next.js", "React", "CSS", "JavaScript"],
      github: "https://github.com/",
      demo: ""
    },
    {
      number: "02",
      title: "Personal Portfolio Website",
      description:
        "A responsive personal website to showcase my profile, technical skills, projects and achievements.",
      tech: ["Next.js", "React", "CSS"],
      github: "https://github.com/",
      demo: ""
    },
    {
      number: "03",
      title: "Food Card Application",
      description:
        "A simple component-based food card interface displaying food details, images and prices.",
      tech: ["React", "CSS", "JavaScript"],
      github: "https://github.com/",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p>MY RECENT WORK</p>
        <h2>My <span>Projects</span></h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <div className="project-number">
              {project.number}
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="skill-tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} /> GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
