import Section from "./shared/Section";
import { media } from "../data";
import TileGrid from "./shared/TileGrid";

export default function Media() {
  return (
    <Section id="media" title="Media articles" subtitle="Published coverage about your work">
      <TileGrid items={media} />
    </Section>
  );
}
