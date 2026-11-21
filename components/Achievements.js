import { Award, Trophy, Medal } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Award />,
      title: "Certifications",
      description:
        "Professional courses and technical certifications."
    },
    {
      icon: <Trophy />,
      title: "Hackathons",
      description:
        "Participation in technical events and hackathons."
    },
    {
      icon: <Medal />,
      title: "Activities",
      description:
        "Academic projects, teamwork and learning activities."
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="section-heading">
        <p>MY MILESTONES</p>
        <h2>Achievements & <span>Activities</span></h2>
      </div>

      <div className="achievement-grid">
        {achievements.map((item) => (
          <div className="achievement-card" key={item.title}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}