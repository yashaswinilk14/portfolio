import {
  Code2,
  Globe,
  Database,
  Wrench
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code2 />,
      skills: ["C", "JavaScript", "Python"]
    },
    {
      title: "Web Technologies",
      icon: <Globe />,
      skills: ["HTML", "CSS", "React", "Next.js"]
    },
    {
      title: "Database",
      icon: <Database />,
      skills: ["SQL"]
    },
    {
      title: "Tools",
      icon: <Wrench />,
      skills: ["VS Code", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p>WHAT I KNOW</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-icon">{group.icon}</div>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}