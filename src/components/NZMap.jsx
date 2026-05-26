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
        {/* Islands — accurate outlines traced from NZ geography */}
        <g
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.9"
        >
          {/*
            North Island — clockwise from Cape Reinga (NW tip).
            Key features: Northland peninsula, Auckland isthmus, Coromandel/Bay of Plenty
            bulge east, Taranaki protrusion west (~x=171), Wellington narrow southern tip.
          */}
          <path d="
            M 252,52
            C 278,55 302,70 308,92
            C 314,115 300,132 285,142
            C 274,150 262,154 255,160
            C 270,164 300,172 316,180
            C 334,190 344,205 350,224
            C 356,240 344,260 324,272
            C 310,283 293,302 272,312
            C 260,318 246,318 238,314
            C 220,306 210,286 202,266
            C 190,252 176,241 171,226
            C 169,215 180,204 200,196
            C 212,190 222,180 223,162
            C 224,142 220,120 224,100
            C 229,80 238,64 252,52
            Z" />

          {/*
            South Island — clockwise from Cape Campbell (NE tip).
            Key features: NE-SW tilt, Canterbury Plains straight east coast,
            Fiordland on SW, Farewell Spit / Golden Bay at top left.
            Cook Strait gap is visible between NI bottom (~y=318) and SI top (~y=324).
          */}
          <path d="
            M 280,324
            C 265,336 250,350 234,362
            C 215,375 200,380 198,392
            C 195,405 183,420 168,440
            C 150,458 130,468 116,484
            C 106,495 98,507 95,517
            C 81,512 69,500 65,480
            C 63,462 67,440 78,416
            C 86,396 90,374 92,350
            C 95,334 98,324 106,318
            C 124,313 154,312 180,314
            C 208,315 242,316 262,318
            C 270,319 276,321 280,324
            Z" />

          {/* Stewart Island */}
          <path d="M 87,526 C 98,522 105,530 101,540 C 97,548 86,544 82,535 C 81,529 84,527 87,526 Z" />
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
