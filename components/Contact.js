"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:yashaswinilk056@gmail.com?subject=${subject}&body=${body}`;

    setStatus("Your email application is opening!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <p>LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Have something in mind? 💌</h3>

          <p>
            Feel free to reach out for collaborations,
            opportunities or just to say hello!
          </p>

          <a href="mailto:yashaswinilk056@gmail.com">
            <Mail size={20} />
            yashaswinilk056@gmail.com
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Mail size={20} />
            GitHub Profile
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="primary-btn">
            Send Message <Send size={17} />
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}