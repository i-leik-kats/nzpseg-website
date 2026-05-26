import Section from "../components/Section";
import { committee } from "../data/committee";

export default function CommitteePage() {
  return (
    <div className="page-enter">
      {/* ── PAGE HEADER ── */}
      <section style={{ padding: "72px 0 56px" }}>
        <div className="container">
          <div className="eyebrow eyebrow-dot" style={{ marginBottom: 22 }}>
            Committee &amp; people
          </div>
          <h1 style={{ maxWidth: "16ch", marginBottom: 28 }}>
            The students who run NZPSEG.
          </h1>
          <p style={{ fontSize: 19, color: "var(--muted)", maxWidth: 620 }}>
            NZPSEG is led by a national committee of medical students drawn from across New Zealand, united by our interest in plastic surgery.
          </p>
        </div>
      </section>

      {/* ── COMMITTEE GRID ── */}
      <Section
        label={`National committee — ${new Date().getFullYear()}`}
        style={{ paddingTop: 24, borderTop: "1px solid var(--rule)" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {committee.map((m, i) => (
            <div key={i}>
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 5",
                    objectFit: "cover",
                    marginBottom: 18,
                    display: "block",
                  }}
                />
              ) : (
                <div className="ph" style={{ aspectRatio: "4 / 5", marginBottom: 18, fontSize: 10 }}>
                  <span>Portrait<br />(800 × 1000)</span>
                </div>
              )}
              <div
                style={{
                  fontFamily: "var(--serif-display)",
                  fontSize: 22,
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}
              >
                {m.name}
              </div>
              <div style={{ fontSize: 14, color: "var(--ink)", marginBottom: 2 }}>{m.role}</div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>{m.school}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Faculty advisors section removed — add back when advisors are confirmed */}
      {/* Regional reps section removed — add back when reps are confirmed */}
    </div>
  );
}
