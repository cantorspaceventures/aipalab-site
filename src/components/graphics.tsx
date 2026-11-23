type Pt = [number, number];

const X0 = 44;
const X1 = 520;
const Y0 = 196; // value 0
const Y1 = 20; // value 30
const years = 6;

const sx = (i: number) => X0 + ((X1 - X0) / (years - 1)) * i;
const sy = (v: number) => Y0 - ((Y0 - Y1) * v) / 30;

// Cumulative free cash flow, AED m, years 0 to 5.
const P10 = [0, -1.2, 0.4, 2.6, 5.1, 8.3];
const P25 = [0, -0.6, 2.0, 5.4, 9.2, 13.6];
const P50 = [0, 0.1, 3.6, 8.2, 13.9, 20.8];
const P75 = [0, 0.8, 5.2, 11.0, 18.1, 26.0];
const P90 = [0, 1.4, 6.6, 13.6, 21.6, 29.6];

const pts = (s: number[]): Pt[] => s.map((v, i) => [sx(i), sy(v)]);
const path = (s: number[]) =>
  pts(s)
    .map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
const band = (hi: number[], lo: number[]) =>
  [...pts(hi), ...pts(lo).reverse()].map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

export function ScenarioFan() {
  const ticks = [0, 10, 20, 30];
  const end = pts(P50)[years - 1];
  return (
    <figure className="fan" style={{ margin: 0 }}>
      <svg
        viewBox="0 0 580 222"
        role="img"
        aria-label="Example scenario fan: cumulative free cash flow over five years. P50 ends at AED 20.8 million, P10 at 8.3 million and P90 at 29.6 million."
      >
        {ticks.map((t) => (
          <g key={t}>
            <line className="grid" x1={X0} x2={X1} y1={sy(t)} y2={sy(t)} />
            <text className="axis" x={X0 - 8} y={sy(t) + 4} textAnchor="end">
              {t === 0 ? "0" : `${t}m`}
            </text>
          </g>
        ))}
        {P50.map((_, i) => (
          <text key={i} className="axis" x={sx(i)} y={216} textAnchor="middle">
            Y{i}
          </text>
        ))}
        <polygon className="band-outer" points={band(P90, P10)} />
        <polygon className="band-inner" points={band(P75, P25)} />
        <path className="edge" d={path(P90)} />
        <path className="edge" d={path(P10)} />
        <path className="p50" d={path(P50)} />
        <circle className="end" cx={end[0]} cy={end[1]} r={4} />
        <text className="axis" x={X1 + 10} y={sy(P90[5]) + 4}>P90</text>
        <text className="axis" x={X1 + 10} y={sy(P50[5]) + 4}>P50</text>
        <text className="axis" x={X1 + 10} y={sy(P10[5]) + 4}>P10</text>
      </svg>
    </figure>
  );
}

const shapes = {
  recommended: <circle cx="6" cy="6" r="5" fill="currentColor" />,
  conditions: (
    <>
      <circle cx="6" cy="6" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 1.75a4.25 4.25 0 0 1 0 8.5z" fill="currentColor" />
    </>
  ),
  watchlist: <circle cx="6" cy="6" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.5" />,
  declined: <path d="M2.5 2.5l7 7M9.5 2.5l-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />,
};

const words = {
  recommended: "Recommended",
  conditions: "Recommended with conditions",
  watchlist: "Watchlist",
  declined: "Not recommended",
};

export type Rating = keyof typeof words;

export function RatingBadge({ rating }: { rating: Rating }) {
  return (
    <span className={`rating rating--${rating}`}>
      <svg viewBox="0 0 12 12" aria-hidden="true">
        {shapes[rating]}
      </svg>
      {words[rating]}
    </span>
  );
}

export function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
