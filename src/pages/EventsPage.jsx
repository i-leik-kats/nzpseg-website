import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import { upcomingEvent, featuredEvent, pastEvents } from "../data/events";

export default function EventsPage() {
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      {/* ── PAGE HEADER ── */}
      <section style={{ padding: "72px 0 56px" }}>
        <div className="container">
          <div className="eyebrow eyebrow-dot" style={{ marginBottom: 22 }}>
            Events &amp; meetings
          </div>
          <h1 style={{ maxWidth: "16ch", marginBottom: 28 }}>
            What we're running, and what we've run.
          </h1>
          <p style={{ fontSize: 19, color: "var(--muted)", maxWidth: 620 }}>
            Teaching sessions, careers evenings, workshops, and more.
          </p>
        </div>
      </section>

      {/* ── UPCOMING JOURNAL CLUB ── */}
      <section style={{ paddingBottom: 32 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 22, color: "var(--accent, var(--navy))" }}>
            UPCOMING · THIS FORTNIGHT
          </div>
          <div
            style={{
              border: "1px solid var(--rule-strong)",
              borderLeft: "3px solid var(--accent, var(--navy))",
              background: "var(--paper)",
              display: "grid",
              gridTemplateColumns: "180px 1fr auto",
              gap: 32,
              alignItems: "center",
              padding: "28px 32px",
            }}
          >
            {/* Date + time */}
            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--muted-2)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {upcomingEvent.dayLabel}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif-display)",
                  fontSize: 28,
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                {upcomingEvent.time}
                <span style={{ fontSize: 16, color: "var(--muted)" }}>{upcomingEvent.timeSuffix}</span>
              </div>
            </div>

            {/* Details */}
            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 6,
                }}
              >
                {upcomingEvent.type}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif-display)",
                  fontSize: 26,
                  lineHeight: 1.2,
                  marginBottom: 6,
                }}
              >
                {upcomingEvent.title}
              </div>
              <div style={{ color: "var(--muted)", fontSize: 14 }}>
                {upcomingEvent.description}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button
                className="btn btn-primary btn-arrow"
                onClick={() => navigate("/contact")}
                style={{ padding: "10px 18px", fontSize: 13 }}
              >
                Join mailing list
              </button>
              <button className="btn btn-ghost" style={{ padding: "10px 18px", fontSize: 13 }}>
                Add to calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENT (CAREERS EVENING) ── */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div
            style={{
              border: "1px solid var(--rule-strong)",
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              background: "var(--paper)",
            }}
          >
            {/* Copy side */}
            <div style={{ padding: "48px 48px 44px" }}>
              <div
                className="eyebrow"
                style={{ color: "var(--accent, var(--navy))", marginBottom: 22 }}
              >
                {featuredEvent.eyebrow}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif-display)",
                  fontSize: "clamp(36px, 4.2vw, 56px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: 22,
                }}
              >
                {featuredEvent.title}
              </div>
              <p style={{ color: "var(--muted)", fontSize: 16, marginBottom: 32, maxWidth: 460 }}>
                {featuredEvent.description}
              </p>

              {/* Details grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  rowGap: 12,
                  columnGap: 28,
                  fontSize: 14,
                  fontFamily: "var(--mono)",
                  paddingTop: 24,
                  borderTop: "1px solid var(--rule)",
                }}
              >
                {Object.entries(featuredEvent.details).map(([k, v]) => (
                  <>
                    <span key={k + "-k"} style={{ color: "var(--muted-2)" }}>{k}</span>
                    <span key={k + "-v"}>{v}</span>
                  </>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
                <button
                  className="btn btn-primary btn-arrow"
                  onClick={() => navigate("/contact")}
                >
                  Register interest
                </button>
                <button className="btn btn-ghost">Add to calendar</button>
              </div>
            </div>

            {/* Image side */}
            {featuredEvent.image ? (
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 480 }}
              />
            ) : (
              <div className="ph" style={{ minHeight: 480, fontSize: 11 }}>
                <span>Event photo / hero<br />(1200 × 900)</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PAST EVENTS ── */}
      <Section label="Archive" title="Past events" style={{ paddingTop: 0, borderTop: "none" }}>
        <div>
          {pastEvents.map((e, i) => (
            <article
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr auto",
                gap: 32,
                alignItems: "baseline",
                padding: "28px 0",
                borderBottom: "1px solid var(--rule)",
                cursor: "default",
                transition: "background 160ms ease",
              }}
              onMouseEnter={(ev) => (ev.currentTarget.style.background = "rgba(20,34,58,0.025)")}
              onMouseLeave={(ev) => (ev.currentTarget.style.background = "transparent")}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--muted-2)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {e.date}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--serif-display)",
                    fontSize: 22,
                    lineHeight: 1.25,
                    marginBottom: 6,
                  }}
                >
                  {e.title}
                </div>
                <div style={{ color: "var(--muted)", fontSize: 14 }}>{e.who}</div>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  fontFamily: "var(--mono)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {e.location}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
