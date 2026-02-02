import Section from "./shared/Section";
import { memberships } from "../data";
import TileGrid from "./shared/TileGrid";

export default function Memberships() {
  return (
    <Section
      id="memberships"
      title="Memberships"
      subtitle="Tiles with badges/logos + certificate links"
    >
      <TileGrid items={memberships} />
    </Section>
  );
}
