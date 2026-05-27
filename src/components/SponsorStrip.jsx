import { sponsors } from "../data/sponsors";

export default function SponsorStrip() {
  return (
    <section className="sponsor-section" style={{ borderTop: "1px solid var(--rule)" }}>
      <div className="container">
        <div className="eyebrow eyebrow-dot" style={{ marginBottom: 36 }}>
          With thanks to our supporters
        </div>
        <div className="grid-sponsors">
          {sponsors.map((s, i) => (
            <div
              key={i}
              className={`sponsor-item${i > 0 ? " sponsor-item--bordered" : ""}`}
              style={{
                padding: "36px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 110,
              }}
            >
              {s.logo ? (
                <img
                  src={s.logo}
                  alt={s.name}
                  style={{ maxHeight: 48, maxWidth: "100%", objectFit: "contain", opacity: 0.7 }}
                />
              ) : (
                <div
                  style={{
                    fontFamily: "var(--serif-display)",
                    fontSize: 17,
                    color: "var(--muted)",
                    opacity: 0.7,
                    letterSpacing: "0.02em",
                    textAlign: "center",
                  }}
                >
                  {s.name}
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 18,
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--muted-2)",
            letterSpacing: "0.06em",
          }}
        >
          Logos to be supplied · placeholder names shown
        </div>
      </div>
    </section>
  );
}
