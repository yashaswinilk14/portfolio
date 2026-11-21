import { BookOpen, Code, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Hey there! I'm Yashaswini 👋</h3>

          <p>
            I am an Information Science and Engineering
            student with an interest in technology and
            software development.
          </p>

          <p>
            I enjoy exploring new technologies, improving
            my programming skills and working on creative
            projects. I believe in learning through practice
            and continuously improving myself.
          </p>

          <p>
            My goal is to become a skilled software
            professional and contribute to meaningful
            technology solutions.
          </p>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <BookOpen />
            <h3>Education</h3>
            <p>Information Science Engineering</p>
          </div>

          <div className="info-card">
            <Code />
            <h3>Development</h3>
            <p>Learning Web Development</p>
          </div>

          <div className="info-card">
            <Lightbulb />
            <h3>Interests</h3>
            <p>Technology, Coding & Creativity</p>
          </div>
        </div>
      </div>
    </section>
  );
}