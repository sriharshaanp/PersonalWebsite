export default function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="panel">
      <div className="panel-scale">
        <div className="panel-inner">
          <div className="section-head">
            <h2>{title}</h2>
            <p className="muted small">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
