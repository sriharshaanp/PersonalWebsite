import About from "./components/About";
import Memberships from "./components/Memberships";
import Judging from "./components/Judging";
import Publications from "./components/Publications";
import Media from "./components/Media";

export default function App() {
  return (
    <div className="page">
      <HeaderNav />

      <main className="container">
        <Hero />
        <About />
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

function HeaderNav() {
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
          <div className="brand">Public Evidence Portfolio</div>
          <div className="muted small">Single page · proof links included</div>
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
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <h1>Public Evidence Portfolio</h1>
      <p className="muted">
        One public link to validate memberships, judging activity, publications,
        and media coverage. Each item includes proof links (certificate, PDF,
        verification URL).
      </p>
    </div>
  );
}
