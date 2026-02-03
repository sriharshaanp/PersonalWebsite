import Section from "./shared/Section";
import YearTimeline from "./shared/YearTimeline";
import { experienceTimeline } from "../data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Top-to-bottom timeline">
      <YearTimeline
        items={experienceTimeline}
        categories={["Entrepreneurship", "Consultation", "Full time"]}
      />
    </Section>
  );
}
