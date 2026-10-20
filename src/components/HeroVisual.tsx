/**
 * A lightweight, decorative "data → insight" illustration: noisy points, a fitted trend and one
 * highlighted point. It contains no real data and makes no claims, so it is hidden from assistive tech.
 */
const POINTS: { x: number; y: number }[] = Array.from({ length: 26 }, (_, i) => {
  const x = 40 + i * (400 / 25)
  const trend = 212 - i * 5.1
  const noise = Math.sin(i * 2.3) * 17 + Math.cos(i * 1.1) * 10
  return { x, y: trend + noise }
})

const HIGHLIGHT = 19
const PIPELINE = ['Data', 'Features', 'Model', 'Insight'] as const

export function HeroVisual() {
  const highlight = POINTS[HIGHLIGHT]
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual-card">
        <svg viewBox="0 0 480 300" className="hero-chart" focusable="false">
          <defs>
            <linearGradient id="trend-fade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="var(--accent)" stopOpacity="0.15" />
              <stop offset="1" stopColor="var(--accent)" stopOpacity="1" />
            </linearGradient>
          </defs>

          {[60, 110, 160, 210, 260].map((y) => (
            <line key={y} x1="28" x2="452" y1={y} y2={y} className="hv-grid" />
          ))}
          {[100, 180, 260, 340, 420].map((x) => (
            <line key={x} y1="36" y2="270" x1={x} x2={x} className="hv-grid hv-grid-v" />
          ))}

          <path d="M40 214 L440 84" className="hv-trend" stroke="url(#trend-fade)" />

          {POINTS.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i === HIGHLIGHT ? 5 : 3.2}
              className={i === HIGHLIGHT ? 'hv-dot hv-dot-hot' : 'hv-dot'}
              style={{ animationDelay: `${300 + i * 45}ms` }}
            />
          ))}

          {highlight && (
            <>
              <circle cx={highlight.x} cy={highlight.y} r="13" className="hv-ring" />
              <path
                d={`M${highlight.x} ${highlight.y - 14} V ${highlight.y - 44}`}
                className="hv-leader"
              />
              <rect x={highlight.x - 34} y={highlight.y - 66} width="68" height="22" rx="6" className="hv-tag" />
              <text x={highlight.x} y={highlight.y - 51} textAnchor="middle" className="hv-tag-text">
                insight
              </text>
            </>
          )}
        </svg>

        <ol className="hero-pipeline">
          {PIPELINE.map((step, i) => (
            <li key={step} className={i === PIPELINE.length - 1 ? 'is-last' : undefined}>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
