import { useState } from "react";

export default function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--rule)" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          textAlign: "left",
          background: "transparent",
          border: "none",
          padding: "22px 0",
          cursor: "pointer",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "baseline",
          gap: 24,
          color: "var(--ink)",
        }}
      >
        <span style={{ fontFamily: "var(--serif-display)", fontSize: 22, lineHeight: 1.3 }}>{q}</span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 18,
            color: "var(--muted)",
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform 200ms ease",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 400 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 280ms ease, opacity 220ms ease",
          color: "var(--muted)",
          fontSize: 16,
          lineHeight: 1.55,
          paddingBottom: open ? 24 : 0,
          maxWidth: 760,
        }}
      >
        {a}
      </div>
    </div>
  );
}
