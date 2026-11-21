
import { ArrowDown, Code2, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <p className="hello">
          HELLO, WELCOME TO MY PORTFOLIO ✨
        </p>

        <h1>
          I'm <span>Yashaswini</span>
        </h1>

        <h2>Information Science Engineering Student</h2>

        <p className="hero-description">
          A passionate student exploring technology,
          programming and creative ideas. I love learning
          new things and building projects that make a difference.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work <ArrowDown size={17} />
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me <Mail size={17} />
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 />
          </a>

          <a
            href="mailto:yashaswinilk056@gmail.com"
            aria-label="Email"
          >
            <Mail />
          </a>
        </div>
      </div>

      <div className="hero-art">
        <div className="profile-card">
          <div className="profile-icon">👩🏻‍💻</div>
          <h3>Creative Mind</h3>
          <p>Learning • Creating • Growing</p>
          <div className="floating-star">✦</div>
          <div className="floating-heart">♡</div>
        </div>
      </div>
    </section>
  );
}
