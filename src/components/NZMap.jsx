// Stylised NZ SVG map with city dots for each region with representatives.
// Coordinates in viewBox 0 0 400 560.

export default function NZMap({ regional }) {
  const cities = [
    { id: "Auckland",     x: 248, y: 158, label: "Auckland"     },
    { id: "Waikato",      x: 254, y: 198, label: "Waikato"      },
    { id: "Wellington",   x: 235, y: 290, label: "Wellington"   },
    { id: "Christchurch", x: 168, y: 380, label: "Christchurch" },
    { id: "Dunedin",      x: 122, y: 470, label: "Dunedin"      },
  ];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 480 }}>
      <svg
        viewBox="0 0 400 560"
        style={{ width: "100%", height: "auto", display: "block" }}
        aria-label="Map of New Zealand showing NZPSEG regional representatives"
      >
        {/* Stylised North + South Islands */}
        <g
          fill="none"
          stroke="var(--ink)"
          strokeWidth="0.8"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.85"
        >
          {/* North Island */}
          <path
            d="M255,80 Q285,95 295,125 Q300,150 280,165 Q270,180 280,200 Q280,225 260,245
               Q245,265 245,290 Q235,310 220,315 Q205,315 200,295 Q190,275 205,255
               Q210,235 200,215 Q195,195 210,180 Q215,160 230,150 Q240,125 235,100 Q240,82 255,80 Z"
            fill="var(--paper)"
          />
          {/* South Island */}
          <path
            d="M195,330 Q215,335 215,355 Q210,380 190,395 Q175,420 160,440 Q140,460 125,485
               Q105,500 90,490 Q75,475 85,455 Q95,435 110,420 Q115,400 130,385
               Q145,370 155,350 Q175,335 195,330 Z"
            fill="var(--paper)"
          />
          {/* Stewart Island */}
          <path d="M88,520 Q98,520 100,530 Q95,540 85,535 Z" fill="var(--paper)" />
        </g>

        {/* Faint latitude lines */}
        <g stroke="var(--rule)" strokeWidth="0.4" strokeDasharray="2 4" opacity="0.6">
          <line x1="0" y1="150" x2="400" y2="150" />
          <line x1="0" y1="290" x2="400" y2="290" />
          <line x1="0" y1="430" x2="400" y2="430" />
        </g>

        {/* City dots */}
        {cities.map((c) => {
          const r = regional.find((rr) => rr.region === c.id);
          const reps = r ? r.reps : 0;
          return (
            <g key={c.id}>
              <circle cx={c.x} cy={c.y} r="10" fill="var(--accent, var(--navy))" opacity="0.12" />
              <circle cx={c.x} cy={c.y} r="4.5" fill="var(--accent, var(--navy))" />
              <text
                x={c.x + 14}
                y={c.y - 4}
                fontFamily="var(--serif-display)"
                fontSize="13"
                fill="var(--ink)"
              >
                {c.label}
              </text>
              <text
                x={c.x + 14}
                y={c.y + 11}
                fontFamily="var(--mono)"
                fontSize="9"
                letterSpacing="1"
                fill="var(--muted)"
              >
                {reps} {reps === 1 ? "REP" : "REPS"}
              </text>
            </g>
          );
        })}

        {/* N compass mark */}
        <g transform="translate(360, 60)" opacity="0.5">
          <line x1="0" y1="-14" x2="0" y2="14" stroke="var(--ink)" strokeWidth="0.6" />
          <polygon points="0,-14 -4,-4 4,-4" fill="var(--ink)" />
          <text x="0" y="-20" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" fill="var(--muted)">
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
