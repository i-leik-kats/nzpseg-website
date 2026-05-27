import { NavLink } from "react-router-dom";

const items = [
  { to: "/",          label: "Home"      },
  { to: "/events",    label: "Events"    },
  { to: "/committee", label: "Committee" },
  { to: "/contact",   label: "Contact"   },
];

export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "color-mix(in oklab, var(--paper) 88%, transparent)",
        backdropFilter: "blur(12px) saturate(140%)",
        WebkitBackdropFilter: "blur(12px) saturate(140%)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          padding: "18px 32px",
        }}
      >
        {/* Brand */}
        <NavLink
          to="/"
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
        >
          <img
            src="/assets/nzpseg-logo.jpg"
            alt=""
            style={{ width: 36, height: 36, objectFit: "contain", mixBlendMode: "multiply" }}
          />
          <div style={{ textAlign: "left", lineHeight: 1.1 }}>
            <div
              style={{
                fontFamily: "var(--serif-display)",
                fontSize: 19,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
              }}
            >
              NZPSEG
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              NZ Plastic Surgery Education Group
            </div>
          </div>
        </NavLink>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: 36, justifyContent: "flex-end" }}>
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.to === "/"}
              style={({ isActive }) => ({
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "var(--ink)" : "var(--muted)",
                position: "relative",
                fontFamily: "var(--sans)",
                letterSpacing: "0.01em",
                textDecoration: "none",
                display: "inline-block",
              })}
            >
              {({ isActive }) => (
                <>
                  {it.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -19,
                        height: 2,
                        background: "var(--accent, var(--navy))",
                        display: "block",
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
