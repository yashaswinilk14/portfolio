"use client";

import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }

  const links = [
    "Home", "About", "Skills", "Projects",
    "Achievements", "Contact"
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">Yashu<span>.</span></a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}