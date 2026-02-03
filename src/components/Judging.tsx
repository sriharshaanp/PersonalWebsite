import { useMemo, useState } from "react";
import Section from "./shared/Section";
import { judging, Tile } from "../data";
import { isSafeHref } from "./shared/utils";

export default function Judging() {
  const tiles = useMemo(() => judging, []);
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openCert = async (item: Tile) => {
    const url = item.proof;
    if (!url) return;

    if (!isSafeHref(url)) {
      alert("Please use a local /assets/... path or an https:// link for proof.");
      return;
    }

    setBusy(true);
    setError(null);
    setPreviewTitle(item.title);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to load proof: ${res.status} ${res.statusText}`);

      const blob = await res.blob();

      const maxBytes = 10 * 1024 * 1024;
      if (blob.size > maxBytes) {
        throw new Error("Proof file is too large to preview. Please open it directly.");
      }

      const reader = new FileReader();
      const dataUrl: string = await new Promise((resolve, reject) => {
        reader.onerror = () => reject(new Error("FileReader failed"));
        reader.onload = () => resolve(String(reader.result));
        reader.readAsDataURL(blob);
      });

      setPreviewDataUrl(dataUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setPreviewDataUrl(null);
    } finally {
      setBusy(false);
    }
  };

  const close = () => {
    setPreviewDataUrl(null);
    setPreviewTitle("");
    setError(null);
  };

  return (
    <Section
      id="judging"
      title="Judging"
      subtitle="Hover a tile for details. Preview opens certificate in a modal."
    >
      <div className="grid">
        {tiles.map((item) => {
          const proof = item.proof;

          return (
            <div key={item.title} className="tile tile-hover">
              {/* Header: always visible */}
              <div className="tile-top">
                <div className="tile-img">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="tile-text">
                  <div className="tile-title">{item.title}</div>
                  {item.subtitle ? (
                    <div className="tile-subtitle">{item.subtitle}</div>
                  ) : null}
                </div>
              </div>

              {/* Always visible link */}
              {proof ? (
                <a
                  className="tile-link"
                  href={proof}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    if (!isSafeHref(proof)) {
                      e.preventDefault();
                      alert("Please use a local /assets/... path or an https:// link for proof.");
                    }
                  }}
                >
                  View certificate
                </a>
              ) : (
                <span className="muted small">No certificate link added</span>
              )}

              {/* Hover-only content */}
              <div className="tile-hover-content">
                {item.description ? (
                  <p className="tile-desc">{item.description}</p>
                ) : (
                  <p className="tile-desc">
                    Add a short description in <code>data.ts</code> for this judging activity.
                  </p>
                )}

                <div className="tile-actions">
                  {proof ? (
                    <>
                      <button
                        className="btn"
                        disabled={busy}
                        onClick={() => {
                          if (!busy) openCert(item);
                        }}
                      >
                        {busy && previewTitle === item.title ? "Loading…" : "Preview Certificate"}
                      </button>

                      <a
                        className="link"
                        href={proof}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          if (!isSafeHref(proof)) {
                            e.preventDefault();
                            alert("Please use a local /assets/... path or an https:// link for proof.");
                          }
                        }}
                      >
                        Open original file
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {(previewDataUrl || error) && (
        <div className="modal" role="dialog" aria-modal="true" onClick={close}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="modal-title">{previewTitle}</div>
                <div className="muted small">Certificate preview</div>
              </div>
              <button className="nav-btn" onClick={close} aria-label="Close modal">
                Close
              </button>
            </div>

            {error ? (
              <div className="error">{error}</div>
            ) : (
              <img className="modal-img" src={previewDataUrl ?? ""} alt="Certificate preview" />
            )}

            {!error && (
              <a
                className="link"
                href={tiles.find((t) => t.title === previewTitle)?.proof}
                target="_blank"
                rel="noreferrer"
              >
                Open original file
              </a>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
