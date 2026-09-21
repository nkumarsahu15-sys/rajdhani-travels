/**
 * Neutral vector illustrations used as replaceable image placeholders.
 * They are decorative stand-ins, not depictions of Rajdhani Travels' actual vehicles.
 */

export function BusArt({ variant = 'seater', className }: { variant?: 'sleeper' | 'seater'; className?: string }) {
  const rows = variant === 'sleeper' ? [58, 100] : [64];
  const rowHeight = variant === 'sleeper' ? 34 : 62;
  const panes = [56, 118, 180, 242, 304, 366, 428];
  return (
    <svg viewBox="0 0 660 270" className={className} aria-hidden focusable="false">
      <defs>
        <linearGradient id={`bus-body-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F6F8FB" />
          <stop offset="1" stopColor="#AFBCCF" />
        </linearGradient>
        <linearGradient id={`bus-glass-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16324F" />
          <stop offset="1" stopColor="#0A1A2F" />
        </linearGradient>
        <linearGradient id={`bus-beam-${variant}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFD27A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFD27A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="320" cy="254" rx="290" ry="9" fill="#000" opacity="0.35" />
      <polygon points="618,150 660,128 660,182 618,166" fill={`url(#bus-beam-${variant})`} />
      <path
        d="M28 70 Q28 40 58 40 L540 40 Q560 40 580 62 L610 110 Q618 122 618 140 L618 205 Q618 218 605 218 L36 218 Q28 218 28 208 Z"
        fill={`url(#bus-body-${variant})`}
      />
      {rows.map((y) =>
        panes.map((x) => (
          <rect key={`${y}-${x}`} x={x} y={y} width={56} height={rowHeight} rx={8} fill={`url(#bus-glass-${variant})`} />
        )),
      )}
      <path d="M494 58 L546 58 Q558 58 566 70 L598 122 L494 122 Z" fill={`url(#bus-glass-${variant})`} />
      <rect x="28" y="152" width="590" height="9" fill="#F4A300" />
      <rect x="28" y="166" width="590" height="3" fill="#0A1A2F" opacity="0.35" />
      <rect x="508" y="132" width="50" height="80" rx="5" fill="#0A1A2F" opacity="0.85" />
      <circle cx="606" cy="152" r="8" fill="#FFE7A3" />
      {[140, 470].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={218} r={42} fill="#0A1A2F" />
          <circle cx={cx} cy={218} r={33} fill="#050E1B" />
          <circle cx={cx} cy={218} r={19} fill="#5A6A80" />
          <circle cx={cx} cy={218} r={7} fill="#C9D2DE" />
        </g>
      ))}
    </svg>
  );
}

export function CarArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 270" className={className} aria-hidden focusable="false">
      <defs>
        <linearGradient id="car-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F6F8FB" />
          <stop offset="1" stopColor="#9FB0C6" />
        </linearGradient>
        <linearGradient id="car-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16324F" />
          <stop offset="1" stopColor="#0A1A2F" />
        </linearGradient>
        <linearGradient id="car-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFD27A" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FFD27A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="320" cy="252" rx="270" ry="9" fill="#000" opacity="0.35" />
      <polygon points="596,176 640,158 640,206 596,196" fill="url(#car-beam)" />
      <path
        d="M40 200 L40 172 Q40 154 62 148 L150 132 Q190 92 250 84 L380 84 Q432 88 468 128 L560 142 Q598 150 602 178 L602 200 Q602 214 588 214 L54 214 Q40 214 40 200 Z"
        fill="url(#car-body)"
      />
      <path d="M172 130 Q202 100 252 96 L306 96 L306 130 Z" fill="url(#car-glass)" />
      <path d="M320 96 L378 96 Q414 100 442 130 L320 130 Z" fill="url(#car-glass)" />
      <rect x="40" y="170" width="562" height="6" fill="#F4A300" opacity="0.9" />
      <ellipse cx="588" cy="170" rx="9" ry="6" fill="#FFE7A3" />
      {[150, 490].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={214} r={38} fill="#0A1A2F" />
          <circle cx={cx} cy={214} r={30} fill="#050E1B" />
          <circle cx={cx} cy={214} r={17} fill="#5A6A80" />
          <circle cx={cx} cy={214} r={6} fill="#C9D2DE" />
        </g>
      ))}
    </svg>
  );
}

export function InteriorArt({ className }: { className?: string }) {
  const rows = [3, 2, 1, 0];
  return (
    <svg viewBox="0 0 640 400" className={className} aria-hidden focusable="false" preserveAspectRatio="xMidYMax slice">
      <rect x="0" y="0" width="640" height="400" fill="none" />
      <path d="M250 60 L390 60 L520 400 L120 400 Z" fill="#0F2440" />
      <rect x="296" y="40" width="48" height="6" rx="3" fill="#F4A300" />
      {rows.map((i) => {
        const s = 1 - i * 0.22;
        const w = 130 * s;
        const h = 170 * s;
        const gap = 34 * s;
        const y = 390 - h - i * 26;
        return (
          <g key={i} opacity={1 - i * 0.1}>
            <rect x={320 - gap - w} y={y} width={w} height={h} rx={16 * s} fill="#16324F" />
            <rect x={320 - gap - w} y={y} width={w} height={8 * s} rx={4 * s} fill="#F4A300" opacity={0.85} />
            <rect x={320 + gap} y={y} width={w} height={h} rx={16 * s} fill="#16324F" />
            <rect x={320 + gap} y={y} width={w} height={8 * s} rx={4 * s} fill="#F4A300" opacity={0.85} />
          </g>
        );
      })}
    </svg>
  );
}

export function RoadArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 400" className={className} aria-hidden focusable="false" preserveAspectRatio="xMidYMax slice">
      <circle cx="470" cy="120" r="38" fill="#F4A300" opacity="0.92" />
      <path d="M0 250 Q90 170 190 236 Q290 150 400 240 Q500 180 640 246 L640 400 L0 400 Z" fill="#0F2440" />
      <polygon points="270,250 370,250 600,400 40,400" fill="#14263F" />
      {[262, 290, 326, 378].map((y, i) => (
        <rect key={y} x={320 - (2 + i) * 1.6} y={y} width={(4 + i * 3.2)} height={10 + i * 6} fill="#F4A300" opacity={0.85} />
      ))}
    </svg>
  );
}

export function GarlandArt({ className }: { className?: string }) {
  const beads = Array.from({ length: 13 }, (_, i) => ({
    x: 60 + i * 43.3,
    y: 40 + 46 * Math.sin((Math.PI * i) / 12),
  }));
  return (
    <svg viewBox="0 0 640 120" className={className} aria-hidden focusable="false">
      {beads.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r={i % 2 ? 7 : 9} fill={i % 2 ? '#FFD27A' : '#F4A300'} opacity={0.9} />
      ))}
    </svg>
  );
}
