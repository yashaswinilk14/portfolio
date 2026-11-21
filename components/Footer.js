
import { Heart, Code2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        Yashu<span>.</span>
      </a>

      <p>
        Made with <Heart size={15} /> by Yashaswini
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Code2 />
        </a>

        <a href="mailto:yashaswinilk056@gmail.com">
          <Mail />
        </a>
      </div>

      <small>
        © 2026 Yashaswini. All rights reserved.
      </small>
    </footer>
  );
}
