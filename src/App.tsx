import { useEffect, useState } from "react";
import About from "./components/About";
import Memberships from "./components/Memberships";
import Judging from "./components/Judging";
import Publications from "./components/Publications";
import Media from "./components/Media";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="page">
      <HeaderNav isDark={isDark} setIsDark={setIsDark} />

      <main className="main">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Memberships />
        <Judging />
        <Publications />
        <Media />
      </main>



      <footer className="footer">
        © {new Date().getFullYear()} SriHarsha Anand Pushkala
      </footer>
    </div>
  );
}

function HeaderNav({ isDark, setIsDark }: { isDark: boolean; setIsDark: (isDark: boolean) => void }) {
  const items = [
    { id: "about", label: "About" },
    { id: "memberships", label: "Memberships" },
    { id: "judging", label: "Judging" },
    { id: "publications", label: "Publications" },
    { id: "media", label: "Media" }
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <div>
          <div className="brand">Sriharsha Anand Pushkala</div>
          <div className="muted small">Fraud Analytics | AI Evangelist</div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          {items.map((it) => (
            <button
              key={it.id}
              className="nav-btn"
              onClick={() => scrollToId(it.id)}
            >
              {it.label}
            </button>
          ))}
          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <h1>SriHarsha Anand Pushkala</h1>
      <p className="muted">Director of Fraud Strategy & Analytics specializing in applied AI, fraud detection, and risk decisioning.</p>
    </div>
  );
}
