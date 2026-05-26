import { useNavigate } from "react-router-dom";

function FooterCol({ title, items }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted-2)",
          marginBottom: 18,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
        {items.map((it, i) => (
          <li key={i}>
            <button
              onClick={it.onClick || undefined}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--ink)",
                cursor: it.onClick ? "pointer" : "default",
                padding: 0,
                fontSize: 14,
                fontFamily: "var(--sans)",
                textAlign: "left",
              }}
              onMouseEnter={(e) => { if (it.onClick) e.currentTarget.style.color = "var(--muted)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--ink)"; }}
            >
              {it.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{ background: "var(--paper)", color: "var(--ink)", borderTop: "1px solid var(--rule)", paddingTop: 48, paddingBottom: 36 }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            paddingTop: 48,
            borderTop: "1px solid var(--rule)",
          }}
        >
          {/* Brand blurb */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <img
                src="/assets/nzpseg-logo.jpg"
                alt=""
                style={{
                  width: 32,
                  height: 32,
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
              <div style={{ fontFamily: "var(--serif-display)", fontSize: 19, color: "var(--ink)" }}>
                NZPSEG
              </div>
            </div>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 14,
                lineHeight: 1.55,
                maxWidth: 360,
              }}
            >
              A student-led education group for medical students in Aotearoa interested in plastic &amp;
              reconstructive surgery.
            </p>
          </div>

          <FooterCol
            title="Site"
            items={[
              { label: "Home",      onClick: () => navigate("/") },
              { label: "Events",    onClick: () => navigate("/events") },
              { label: "Committee", onClick: () => navigate("/committee") },
              { label: "Contact",   onClick: () => navigate("/contact") },
            ]}
          />

          <FooterCol
            title="Connect"
            items={[
              { label: "Email committee", onClick: () => navigate("/contact") },
              { label: "Mailing list",    onClick: () => navigate("/contact") },
              { label: "Instagram" },
              { label: "LinkedIn" },
            ]}
          />

          <FooterCol
            title="Legal"
            items={[
              { label: "Code of conduct" },
              { label: "Privacy" },
              { label: "Acknowledgements" },
            ]}
          />
        </div>

        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: "1px solid var(--rule)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--muted-2)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <div>© {new Date().getFullYear()} NZPSEG · Aotearoa New Zealand</div>
          <div>comunnications.nzpseg@gmail.com</div>
        </div>
      </div>
    </footer>
  );
}
