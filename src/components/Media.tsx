import Section from "./shared/Section";
import { media } from "../data";
import { isSafeHref } from "./shared/utils";

export default function Media() {
  const item = media[0]; // ✅ one featured tile
  const link = item?.links?.[0]?.href;

  if (!item) {
    return (
      <Section id="media" title="Media articles" subtitle="Published coverage about your work">
        <div className="muted small">No media article added yet.</div>
      </Section>
    );
  }

  return (
    <Section
      id="media"
      title="Media article"
      subtitle="One featured article with published date and link"
    >
      <div className="tile">
        <div className="tile-top">
          <div className="tile-img">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="tile-text">
            <div className="tile-title">{item.title}</div>
            {item.subtitle ? <div className="tile-subtitle">{item.subtitle}</div> : null}

            <div className="muted small" style={{ marginTop: 6 }}>
              Published: <strong>{item.publishedDate ?? "—"}</strong>
              {item.publishedDate ? (
                <>
                  {" "}
                  · <span>{item.publishedDate}</span>
                </>
              ) : null}
            </div>
          </div>
        </div>

        {item.description ? (
          <p className="tile-desc" style={{ marginTop: 10 }}>
            {item.description}
          </p>
        ) : null}

        {link ? (
          <a
            className="btn"
            href={link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (!isSafeHref(link)) {
                e.preventDefault();
                alert("Please use an https:// link for media articles.");
              }
            }}
          >
            Read article
          </a>
        ) : (
          <div className="muted small">No article link added</div>
        )}
      </div>
    </Section>
  );
}
