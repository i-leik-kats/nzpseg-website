import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import SponsorStrip from "../components/SponsorStrip";
import { upcomingEvent, comingUp } from "../data/events";

const pillars = [
  {
    n: "01",
    t: "Careers Advice",
    b: "Honest conversations about getting onto the training programme — electives, research opportunities, and what life as a plastics trainee actually looks like.",
  },
  {
    n: "02",
    t: "National Network",
    b: "Regional representatives at every NZ medical school, connecting students with mentors, registrars and consultants across the motu.",
  },
  {
    n: "03",
    t: "Education",
    b: "Bi-weekly journal clubs and teaching sessions led by registrars and consultants — recent literature, anatomy refreshers, and case-based learning.",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section style={{ padding: "72px 0 96px", position: "relative", overflow: "hidden" }}>
        <div className="container">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.25fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            {/* Left — main copy */}
            <div>
              <div className="eyebrow eyebrow-dot" style={{ marginBottom: 28 }}>
                Who we are
              </div>
              <h1 style={{ marginBottom: 36, maxWidth: "14ch" }}>
                A community for the future of plastic &amp; reconstructive surgery in Aotearoa.
              </h1>
              <p
                style={{
                  fontSize: 19,
                  lineHeight: 1.55,
                  color: "var(--muted)",
                  maxWidth: 580,
                  marginBottom: 40,
                }}
              >
                The New Zealand Plastic Surgery Education Group connects medical students with the
                registrars, fellows and consultants through teaching evenings, bi-weekly journal
                clubs, careers nights, and a national peer network.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button
                  className="btn btn-primary btn-arrow"
                  onClick={() => navigate("/events")}
                >
                  Upcoming events
                </button>
                <button className="btn btn-ghost" onClick={() => navigate("/contact")}>
                  Get in touch
                </button>
              </div>
            </div>

            {/* Right — socials + upcoming event aside */}
            <aside style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 36 }}>

              {/* Find us online */}
              <div className="eyebrow" style={{ marginBottom: 14 }}>Find us online</div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 1,
                  background: "var(--rule)",
                  border: "1px solid var(--rule)",
                  marginBottom: 48,
                }}
              >
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/nzpseg.uoa/",
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
                  },
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/profile.php?id=61585237265256",
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                  },
                  {
                    label: "Email",
                    href: "mailto:communications.nzpseg@gmail.com",
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    style={{
                      background: "var(--paper)",
                      padding: "16px 18px",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      color: "var(--muted)",
                      textDecoration: "none",
                      fontFamily: "var(--serif-display)",
                      fontSize: 15,
                      transition: "color 150ms, background 150ms",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(20,34,58,0.04)"; e.currentTarget.style.color = "var(--ink)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "var(--paper)"; e.currentTarget.style.color = "var(--muted)"; }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>

              {/* Upcoming event */}
              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 28, marginBottom: 18 }}>
                <div className="eyebrow eyebrow-dot">Upcoming events</div>
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 10,
                }}
              >
                {upcomingEvent.type}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif-display)",
                  fontSize: 28,
                  lineHeight: 1.18,
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                {upcomingEvent.title}
              </div>
              <p style={{ color: "var(--muted)", marginBottom: 22, fontSize: 14.5 }}>
                {upcomingEvent.description}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  rowGap: 10,
                  columnGap: 18,
                  fontSize: 13,
                  fontFamily: "var(--mono)",
                }}
              >
                <span style={{ color: "var(--muted-2)" }}>WHEN</span>
                <span>{upcomingEvent.when}</span>
                <span style={{ color: "var(--muted-2)" }}>FORMAT</span>
                <span>{upcomingEvent.format}</span>
                <span style={{ color: "var(--muted-2)" }}>HOST</span>
                <span>{upcomingEvent.host}</span>
              </div>
              <button
                className="btn btn-ghost btn-arrow"
                onClick={() => navigate("/events")}
                style={{
                  marginTop: 24,
                  padding: "10px 0",
                  border: "none",
                  borderBottom: "1px solid var(--ink)",
                  borderRadius: 0,
                }}
              >
                Event details
              </button>

              <div
                style={{
                  marginTop: 32,
                  paddingTop: 22,
                  borderTop: "1px solid var(--rule)",
                  fontSize: 13,
                  color: "var(--muted)",
                }}
              >
                <span
                  style={{
                    color: "var(--muted-2)",
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginRight: 8,
                  }}
                >
                  Coming up
                </span>
                {comingUp}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <Section
        label="What we do"
        title="Here's what we do"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--rule)",
            border: "1px solid var(--rule)",
          }}
        >
          {pillars.map((p, i) => (
            <div key={i} style={{ background: "var(--paper)", padding: "40px 32px", minHeight: 240 }}>
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                {p.n}
              </div>
              <h3 style={{ marginBottom: 14 }}>{p.t}</h3>
              <p style={{ color: "var(--muted)", fontSize: 15 }}>{p.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SPONSORS ── */}
      <SponsorStrip />

      {/* ── CTA ── */}
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
            padding: "24px 0",
          }}
        >
          <h2 style={{ maxWidth: 480 }}>Interested in plastic surgery? Come along.</h2>
          <div>
            <p style={{ color: "var(--muted)", marginBottom: 24, fontSize: 17 }}>
              All medical students in Aotearoa are welcome at our events. Drop us a line and we'll
              add you to the mailing list.
            </p>
            <button
              className="btn btn-primary btn-arrow"
              onClick={() => navigate("/contact")}
            >
              Contact NZPSEG
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
