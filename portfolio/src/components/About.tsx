import Section from "./shared/Section";
import { about } from "../data";

export default function About() {
  return (
    <Section id="about" title="About me" subtitle="Concise, reviewer-friendly bio">
      <div className="tile">
        <div className="tile-title">{about.name}</div>
        <div className="tile-subtitle">{about.role}</div>
        <p className="muted" style={{ lineHeight: 1.7, margin: 0 }}>
          {about.summary}
        </p>
      </div>
    </Section>
  );
}
