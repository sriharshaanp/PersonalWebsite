import Section from "./shared/Section";
import { publications } from "../data";
import TileGrid from "./shared/TileGrid";

export default function Publications() {
  return (
    <Section
      id="publications"
      title="Publications"
      subtitle="Research manuscripts and published work"
    >
      <TileGrid items={publications} />
    </Section>
  );
}
