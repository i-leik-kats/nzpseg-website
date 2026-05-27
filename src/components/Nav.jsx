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

        {/* Social pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            border: "1px solid var(--rule-strong)",
            borderRadius: 999,
            padding: "6px 14px",
          }}
        >
          {[
            {
              label: "Instagram",
              href: "https://www.instagram.com/nzpseg.uoa/",
              icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/profile.php?id=61585237265256",
              icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              style={{ color: "var(--muted)", display: "flex", padding: "4px 8px", borderRadius: 999, transition: "color 150ms, background 150ms" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.background = "rgba(20,34,58,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "transparent"; }}
            >
              {s.icon}
            </a>
          ))}
        </div>

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
