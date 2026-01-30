import { Tile } from "../../data";
import { isSafeHref } from "./utils";

export default function TileGrid({
  items,
  onPrimaryAction,
  primaryActionLabel
}: {
  items: Tile[];
  onPrimaryAction?: (item: Tile) => void;
  primaryActionLabel?: string;
}) {
  return (
    <div className="grid">
      {items.map((it) => (
        <div key={it.title} className="tile">
          <div className="tile-top">
            <div className="tile-img">
              <img src={it.image} alt={it.title} />
            </div>
            <div>
              <div className="tile-title">{it.title}</div>
              {it.subtitle ? <div className="tile-subtitle">{it.subtitle}</div> : null}
            </div>
          </div>

          <div className="tile-actions">
            {onPrimaryAction && primaryActionLabel ? (
              <button className="btn" onClick={() => onPrimaryAction(it)}>
                {primaryActionLabel}
              </button>
            ) : null}

            {it.links?.map((l) => (
              <a
                key={l.label}
                className="link"
                href={l.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (!isSafeHref(l.href)) {
                    e.preventDefault();
                    alert("Please use a local /assets/... path or an https:// link.");
                  }
                }}
              >
                {l.label}
              </a>
            ))}

            {!it.links?.length && it.proof ? (
              <a
                className="link"
                href={it.proof}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (!isSafeHref(it.proof!)) {
                    e.preventDefault();
                    alert("Please use a local /assets/... path or an https:// link.");
                  }
                }}
              >
                Proof
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
