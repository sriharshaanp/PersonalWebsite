import { useMemo, useState } from "react";
import { TimelineCategory, TimelineEntry } from "../../data";

type Props = {
  items: TimelineEntry[];
  categories?: TimelineCategory[];
};

export default function YearTimeline({ items, categories }: Props) {
  const [active, setActive] = useState<TimelineCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((x) => x.category === active);
  }, [items, active]);

  // Group by year (descending)
  const byYear = useMemo(() => {
    const map = new Map<string, TimelineEntry[]>();
    for (const it of filtered) {
      map.set(it.year, [...(map.get(it.year) ?? []), it]);
    }
    return Array.from(map.entries()).sort((a, b) => Number(b[0]) - Number(a[0]));
  }, [filtered]);

  return (
    <div>
      {categories?.length ? (
        <div className="timeline-tabs">
          <button
            className={`pill ${active === "All" ? "active" : ""}`}
            onClick={() => setActive("All")}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={`pill ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      ) : null}

      <div className="year-timeline">
        {byYear.map(([year, entries]) => (
          <div key={year} className="year-row">
            <div className="year-col">{year}</div>

            <div className="entries-col">
              {entries.map((e, idx) => (
                <div className="entry" key={`${e.org}-${idx}`}>
                  <div className="entry-dates">{e.dateRange}</div>
                  <div className="entry-org">{e.org}</div>
                  <div className="entry-role">{e.role}</div>

                  <div className="entry-blocks">
                    {e.blocks.map((b, i) => (
                      <div className="block" key={i}>
                        <div className="block-label">{b.label}:</div>
                        <div className="block-text">{b.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
