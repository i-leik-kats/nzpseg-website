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
          color: "rgba(255,255,255,0.5)",
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
                color: "var(--paper)",
                cursor: it.onClick ? "pointer" : "default",
                padding: 0,
                fontSize: 14,
                fontFamily: "var(--sans)",
                textAlign: "left",
              }}
              onMouseEnter={(e) => { if (it.onClick) e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
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
    <footer style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: 48, paddingBottom: 36 }}>
      <div className="container">
        <div className="grid-footer">
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
                  filter: "brightness(1.4) contrast(0.9)",
                  mixBlendMode: "screen",
                }}
              />
              <div style={{ fontFamily: "var(--serif-display)", fontSize: 19, color: "var(--paper)" }}>
                NZPSEG
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
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
              { label: "Instagram", onClick: () => window.open("https://www.instagram.com/nzpseg.uoa/", "_blank") },
              { label: "Facebook",  onClick: () => window.open("https://www.facebook.com/p/New-Zealand-Plastic-Surgery-Education-Group-61585237265256/", "_blank") },
            ]}
          />

          <FooterCol
            title="Legal"
            items={[
              { label: "Privacy" },
              { label: "Acknowledgements" },
            ]}
          />
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} NZPSEG</div>
          <div>communications.nzpseg@gmail.com</div>
        </div>
      </div>
    </footer>
  );
}
