// Reusable section wrapper used across all pages.
// Props: id, label (eyebrow text), title (h2), kicker (lead paragraph),
//        dark (inverted ink background), style (extra styles)

export default function Section({ id, label, title, kicker, children, dark, style }) {
  return (
    <section
      id={id}
      style={{
        background: dark ? "var(--ink)" : "transparent",
        color: dark ? "var(--paper)" : "inherit",
        padding: "96px 0",
        borderTop: dark ? "none" : "1px solid var(--rule)",
        ...style,
      }}
    >
      <div className="container">
        {label && (
          <div
            className="eyebrow eyebrow-dot"
            style={{
              marginBottom: 18,
              color: dark ? "rgba(255,255,255,0.65)" : "var(--muted)",
            }}
          >
            {label}
          </div>
        )}
        {title && (
          <h2
            style={{
              maxWidth: 880,
              marginBottom: kicker ? 14 : 36,
              color: dark ? "var(--paper)" : "var(--ink)",
            }}
          >
            {title}
          </h2>
        )}
        {kicker && (
          <p
            style={{
              maxWidth: 720,
              fontSize: 19,
              lineHeight: 1.5,
              color: dark ? "rgba(255,255,255,0.75)" : "var(--muted)",
              marginBottom: 44,
            }}
          >
            {kicker}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
