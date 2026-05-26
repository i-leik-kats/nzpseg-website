// NZMap — Wikipedia NZ outline (NordNordWest) with city dots at real geographic coordinates.
//
// Projection: equirectangular
//   Bounds (from Wikipedia NZ location map template):
//     W = 166.0°E, E = 179.0°E, N = -34.0°, S = -47.5°
//   SVG canvas: 1927.56 × 2432.122

const W = 166.0;
const E = 179.0;
const N = -34.0;
const S = -47.5;
const SVG_W = 1927.56;
const SVG_H = 2432.122;

function geoToSvg(lat, lon) {
  return {
    x: ((lon - W) / (E - W)) * SVG_W,
    y: ((lat - N) / (S - N)) * SVG_H,
  };
}

export default function NZMap({ regional }) {
  const cities = [
    { id: "Auckland",     lat: -36.87, lon: 174.76, label: "Auckland"     },
    { id: "Waikato",      lat: -37.79, lon: 175.28, label: "Waikato"      },
    { id: "Wellington",   lat: -41.29, lon: 174.78, label: "Wellington"   },
    { id: "Christchurch", lat: -43.53, lon: 172.64, label: "Christchurch" },
    { id: "Dunedin",      lat: -45.87, lon: 170.50, label: "Dunedin"      },
  ];

  // Sizes are in the 1927×2432 coordinate space; the SVG is scaled down to ~480px wide.
  const dotR    = 26;   // main dot radius
  const auraR   = 68;   // outer glow radius
  const fsCity  = 80;   // city name font size
  const fsSub   = 52;   // "N REPS" font size
  const lx      = 52;   // label x-offset from dot centre

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 480 }}>
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        aria-label="Map of New Zealand showing NZPSEG regional representatives"
      >
        {/* Base NZ outline from Wikipedia NordNordWest SVG */}
        <image
          href="/assets/nz-outline.svg"
          x="0"
          y="0"
          width={SVG_W}
          height={SVG_H}
        />

        {/* Faint latitude lines */}
        <g stroke="var(--rule)" strokeWidth="3" strokeDasharray="12 24" opacity="0.6">
          {[-37, -40, -43, -46].map((lat) => {
            const { y } = geoToSvg(lat, W);
            return <line key={lat} x1="0" y1={y} x2={SVG_W} y2={y} />;
          })}
        </g>

        {/* City dots + labels */}
        {cities.map((c) => {
          const { x, y } = geoToSvg(c.lat, c.lon);
          const reg  = regional.find((rr) => rr.region === c.id);
          const reps = reg ? reg.reps : 0;

          return (
            <g key={c.id}>
              {/* Glow aura */}
              <circle cx={x} cy={y} r={auraR} fill="var(--accent, var(--navy))" opacity="0.12" />
              {/* Main dot */}
              <circle cx={x} cy={y} r={dotR}  fill="var(--accent, var(--navy))" />
              {/* City name */}
              <text
                x={x + lx}
                y={y - 6}
                fontFamily="var(--serif-display)"
                fontSize={fsCity}
                fill="var(--ink)"
              >
                {c.label}
              </text>
              {/* Rep count */}
              <text
                x={x + lx}
                y={y + fsSub}
                fontFamily="var(--mono)"
                fontSize={fsSub}
                letterSpacing="5"
                fill="var(--muted)"
              >
                {reps} {reps === 1 ? "REP" : "REPS"}
              </text>
            </g>
          );
        })}

        {/* N compass mark (top-right corner) */}
        <g transform={`translate(${SVG_W - 220}, 180)`} opacity="0.5">
          <line x1="0" y1="-90" x2="0" y2="90" stroke="var(--ink)" strokeWidth="5" />
          <polygon points="0,-90 -28,-28 28,-28" fill="var(--ink)" />
          <text
            x="0"
            y="-116"
            textAnchor="middle"
            fontFamily="var(--mono)"
            fontSize="70"
            fill="var(--muted)"
          >
            N
          </text>
        </g>
      </svg>

      <div
        style={{
          marginTop: 12,
          fontFamily: "var(--mono)",
          fontSize: 10,
          color: "var(--muted-2)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Fig. 01 — Regional representatives across Aotearoa
      </div>
    </div>
  );
}
