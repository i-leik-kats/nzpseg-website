import { useState } from "react";

// Underline-style form field. Supports text inputs and textareas.
export default function Field({ label, value, onChange, type = "text", textarea, placeholder }) {
  const [focus, setFocus] = useState(false);

  const baseStyle = {
    width: "100%",
    border: "none",
    borderBottom: `1px solid ${focus ? "var(--ink)" : "var(--rule-strong)"}`,
    background: "transparent",
    padding: "10px 0",
    fontFamily: "var(--sans)",
    fontSize: 16,
    color: "var(--ink)",
    outline: "none",
    transition: "border-color 160ms ease",
  };

  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          rows={4}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ ...baseStyle, resize: "vertical" }}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={baseStyle}
        />
      )}
    </label>
  );
}
