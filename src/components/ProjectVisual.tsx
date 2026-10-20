import type { VisualKind } from '../data/projects'

/**
 * Custom, lightweight illustrations of what each project does. They are schematic: no numbers,
 * labels or results, so they cannot be mistaken for real outputs. Replace any of them with a real
 * screenshot by setting `image` on the project in src/data/projects.ts.
 */

function Matching() {
  const resumeLines = [86, 70, 80, 60, 84, 66, 76, 50]
  const vocab = [
    { y: 52, on: true, w: 52 },
    { y: 84, on: true, w: 64 },
    { y: 116, on: true, w: 44 },
    { y: 148, on: false, w: 58 },
    { y: 180, on: false, w: 40 },
  ]
  return (
    <svg viewBox="0 0 480 270" className="vz" focusable="false">
      <rect className="vz-panel" x="28" y="36" width="118" height="198" rx="10" />
      <rect className="vz-accent" x="44" y="54" width="42" height="8" rx="4" />
      {resumeLines.map((w, i) => (
        <rect key={i} className="vz-line" x="44" y={84 + i * 16} width={w} height="6" rx="3" />
      ))}

      <path className="vz-stroke-accent" d="M154 135h40m-8-6 8 6-8 6" />

      {vocab.map((chip) => (
        <g key={chip.y}>
          <rect
            className={chip.on ? 'vz-chip-on' : 'vz-chip-off'}
            x="204"
            y={chip.y}
            width="96"
            height="24"
            rx="7"
          />
          <rect className={chip.on ? 'vz-accent' : 'vz-line'} x="216" y={chip.y + 9} width={chip.w} height="6" rx="3" />
        </g>
      ))}

      <path className="vz-stroke-accent" d="M308 135h28m-8-6 8 6-8 6" />

      <rect className="vz-panel" x="346" y="36" width="106" height="198" rx="10" />
      <rect className="vz-line" x="362" y="52" width="44" height="6" rx="3" />
      {[0, 1, 2, 3, 4].map((i) => {
        const cy = 86 + i * 30
        const on = i < 3
        return (
          <g key={i}>
            {on ? (
              <>
                <circle className="vz-accent" cx="372" cy={cy} r="9" />
                <path className="vz-check" d={`M${368} ${cy}l3 3 5-6`} />
              </>
            ) : (
              <circle className="vz-ring-off" cx="372" cy={cy} r="9" />
            )}
            <rect className="vz-line" x="390" y={cy - 3} width={on ? 44 : 34} height="6" rx="3" />
          </g>
        )
      })}
    </svg>
  )
}

function Netflix() {
  return (
    <svg viewBox="0 0 480 270" className="vz" focusable="false">
      <rect className="vz-panel" x="28" y="30" width="170" height="210" rx="10" />
      <circle className="vz-donut-base" cx="113" cy="124" r="52" />
      <circle className="vz-donut-a" cx="113" cy="124" r="52" strokeDasharray="150 327" transform="rotate(-90 113 124)" />
      <circle
        className="vz-donut-b"
        cx="113"
        cy="124"
        r="52"
        strokeDasharray="96 327"
        strokeDashoffset="-158"
        transform="rotate(-90 113 124)"
      />
      <rect className="vz-line" x="58" y="198" width="110" height="6" rx="3" />
      <rect className="vz-line" x="72" y="214" width="82" height="6" rx="3" />

      <rect className="vz-panel" x="214" y="30" width="238" height="124" rx="10" />
      {[62, 88, 114].map((y) => (
        <line key={y} className="vz-grid" x1="230" x2="436" y1={y} y2={y} />
      ))}
      <path className="vz-area" d="M232 128 L266 104 L300 112 L334 76 L368 90 L402 58 L436 70 L436 134 L232 134 Z" />
      <path className="vz-stroke-accent vz-thick" d="M232 128 L266 104 L300 112 L334 76 L368 90 L402 58 L436 70" />

      <rect className="vz-panel" x="214" y="166" width="238" height="74" rx="10" />
      <rect className="vz-line" x="230" y="184" width="40" height="6" rx="3" />
      <rect className="vz-bar-a" x="280" y="182" width="150" height="10" rx="5" />
      <rect className="vz-line" x="230" y="212" width="40" height="6" rx="3" />
      <rect className="vz-bar-b" x="280" y="210" width="92" height="10" rx="5" />
    </svg>
  )
}

function Finance() {
  const bars = [78, 112, 96, 138, 120, 160, 146]
  return (
    <svg viewBox="0 0 480 270" className="vz" focusable="false">
      <rect className="vz-panel" x="28" y="30" width="290" height="210" rx="10" />
      {[70, 110, 150, 190].map((y) => (
        <line key={y} className="vz-grid" x1="44" x2="302" y1={y} y2={y} />
      ))}
      {bars.map((h, i) => (
        <rect key={i} className="vz-bar-a" x={52 + i * 36} y={216 - h} width="22" height={h} rx="4" />
      ))}
      <path
        className="vz-stroke-accent vz-thick vz-on-light"
        d="M63 150 L99 128 L135 138 L171 100 L207 112 L243 78 L279 88"
      />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect className="vz-panel" x="334" y={30 + i * 72} width="118" height="62" rx="10" />
          <rect className="vz-line" x="348" y={46 + i * 72} width="48" height="6" rx="3" />
          <rect className={i === 0 ? 'vz-accent' : 'vz-line-strong'} x="348" y={62 + i * 72} width={i === 0 ? 70 : 58} height="12" rx="4" />
        </g>
      ))}
    </svg>
  )
}

function Maintenance() {
  return (
    <svg viewBox="0 0 480 270" className="vz" focusable="false">
      <rect className="vz-panel" x="28" y="30" width="424" height="210" rx="10" />
      {[70, 110, 150, 190].map((y) => (
        <line key={y} className="vz-grid" x1="44" x2="436" y1={y} y2={y} />
      ))}
      <line className="vz-dash" x1="44" x2="436" y1="92" y2="92" />
      <path
        className="vz-stroke-accent vz-thick"
        d="M44 150 C62 130 74 170 92 150 S122 132 140 152 S170 168 188 148 S212 134 228 152 L246 150 L262 62 L278 176 L294 146 C312 132 322 164 342 150 S378 138 394 154 S420 150 436 146"
      />
      <circle className="vz-ring-hot" cx="262" cy="62" r="11" />
      <circle className="vz-accent" cx="262" cy="62" r="4.5" />
    </svg>
  )
}

export function ProjectVisual({ kind }: { kind: VisualKind }) {
  switch (kind) {
    case 'matching':
      return <Matching />
    case 'netflix':
      return <Netflix />
    case 'finance':
      return <Finance />
    case 'maintenance':
      return <Maintenance />
  }
}
