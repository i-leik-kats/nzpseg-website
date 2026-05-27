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
              alignItems: "end",
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

            {/* Right — upcoming event aside */}
            <aside style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 36 }}>
              <div className="eyebrow eyebrow-dot" style={{ marginBottom: 18 }}>
                Upcoming events
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
