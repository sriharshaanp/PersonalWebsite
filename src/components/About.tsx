import Section from "./shared/Section";
import { about } from "../data";

export default function About() {
  return (
    <Section id="about" title="About me" >
      <div className="about-wrap tile">
        {/* Headshot */}
        <img
          src={`${import.meta.env.BASE_URL}assets/images/Headshot.jpeg`}
          alt="SriHarsha Anand Pushkala headshot"
          className="about-headshot"
        />

        {/* Text */}
        <div className="about-text">
          <div className="tile-title">{about.name}</div>
          <div className="tile-subtitle">{about.role}</div>

          <p className="muted about-text">{about.summary}</p>

        </div>
      </div>
    </Section>
  );
}
