import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import SponsorStrip from "../components/SponsorStrip";
import { upcomingEvent, featuredEvent } from "../data/events";

const pillars = [
  {
    n: "01",
    t: "Careers Advice",
    b: "Honest conversations about getting onto the training programme — research, clinical experience, and what life in plastics actually looks like.",
  },
  {
    n: "02",
    t: "National Network",
    b: "Regional representatives at clinical sites, connecting students with mentors, registrars and consultants.",
  },
  {
    n: "03",
    t: "Education",
    b: "Bi-weekly journal clubs, careers evenings, and workshops.",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section className="hero-section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div className="grid-hero">
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
            </div>

            {/* Right — upcoming event aside */}
            <aside className="hero-aside">
              <div className="eyebrow eyebrow-dot" style={{ marginBottom: 18 }}>
                Upcoming events
              </div>
              {upcomingEvent && (
                <>
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
                </>
              )}

              {/* Careers Evening */}
              <div style={{ marginTop: 32, paddingTop: 28, borderTop: "1px solid var(--rule)" }}>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 8,
                  }}
                >
                  {featuredEvent.eyebrow}
                </div>
                <div
                  style={{
                    fontFamily: "var(--serif-display)",
                    fontSize: 20,
                    lineHeight: 1.2,
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {featuredEvent.title}
                </div>
                <p style={{ color: "var(--muted)", marginBottom: 14, fontSize: 14.5 }}>
                  {featuredEvent.description}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    rowGap: 8,
                    columnGap: 18,
                    fontSize: 13,
                    fontFamily: "var(--mono)",
                  }}
                >
                  {Object.entries(featuredEvent.details).map(([k, v]) => (
                    <>
                      <span key={k + "-k"} style={{ color: "var(--muted-2)" }}>{k}</span>
                      <span key={k + "-v"}>{v}</span>
                    </>
                  ))}
                </div>
                <button
                  className="btn btn-ghost btn-arrow"
                  onClick={() => navigate("/events")}
                  style={{
                    marginTop: 18,
                    padding: "10px 0",
                    border: "none",
                    borderBottom: "1px solid var(--ink)",
                    borderRadius: 0,
                  }}
                >
                  Event details
                </button>
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
        <div className="grid-pillars">
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
        <div className="grid-cta">
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
