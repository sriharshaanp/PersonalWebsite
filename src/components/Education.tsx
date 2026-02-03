import Section from "./shared/Section";
import YearTimeline from "./shared/YearTimeline";
import { educationTimeline } from "../data";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Top-to-bottom timeline">
      <YearTimeline items={educationTimeline} categories={["Learning", "Reading"]} />
    </Section>
  );
}
