export default function MindGraphic() {
  const starAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const tickAngles = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-hidden="true"
    >
      <defs>
        <style>{`
          @keyframes mgDraw {
            0%   { stroke-dashoffset: 500; opacity: 0; }
            6%   { opacity: 1; }
            52%  { stroke-dashoffset: 0; opacity: 1; }
            84%  { stroke-dashoffset: 0; opacity: 0.7; }
            95%  { stroke-dashoffset: 0; opacity: 0; }
            100% { stroke-dashoffset: 500; opacity: 0; }
          }
          @keyframes mgFlow {
            from { stroke-dashoffset: 56; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes mgPulse {
            0%, 100% { opacity: 0.12; }
            50%       { opacity: 0.9; }
          }
          .mg-draw { animation: mgDraw 8s ease-in-out infinite both; }
          .mg-flow { stroke-dasharray: 14 10; animation: mgFlow 2s linear infinite; }
          .mg-pulse { animation: mgPulse 3s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* ── HEAD ─────────────────────────────────── */}
      <circle className="mg-draw" cx="72" cy="180" r="50"
        stroke="#F2EDE4" strokeWidth="1.2" strokeDasharray="315"
        style={{ animationDelay: '0s' }} />
      <line className="mg-draw" x1="32" y1="180" x2="112" y2="180"
        stroke="#F2EDE4" strokeWidth="0.7" strokeDasharray="80" opacity="0.3"
        style={{ animationDelay: '0.25s' }} />
      <line className="mg-draw" x1="72" y1="140" x2="72" y2="220"
        stroke="#F2EDE4" strokeWidth="0.7" strokeDasharray="80" opacity="0.3"
        style={{ animationDelay: '0.4s' }} />
      {/* pulsing mind-eye */}
      <circle className="mg-pulse" cx="72" cy="180" r="8"
        stroke="#F2EDE4" strokeWidth="0.9" fill="none"
        style={{ animationDelay: '0s' }} />

      {/* ── THOUGHT STREAMS ──────────────────────── */}
      {/* Upper → grid */}
      <path className="mg-draw" d="M 122,160 C 168,140 208,100 248,80"
        stroke="#F2EDE4" strokeWidth="0.8" strokeDasharray="175" opacity="0.3"
        style={{ animationDelay: '0.65s' }} />
      {/* Middle → circle (flowing dashes) */}
      <line className="mg-flow" x1="122" y1="180" x2="462" y2="180"
        stroke="#F2EDE4" strokeWidth="0.7" opacity="0.2" />
      {/* Lower → starburst */}
      <path className="mg-draw" d="M 122,200 C 168,222 208,268 248,288"
        stroke="#F2EDE4" strokeWidth="0.8" strokeDasharray="175" opacity="0.3"
        style={{ animationDelay: '0.85s' }} />

      {/* ── GRID (upper right) ───────────────────── */}
      {[260, 280, 300, 320, 340].map((x, i) => (
        <line key={`gv${i}`} className="mg-draw"
          x1={x} y1="50" x2={x} y2="122"
          stroke="#FF3D00" strokeWidth="0.7" strokeDasharray="75"
          style={{ animationDelay: `${1.1 + i * 0.1}s` }} />
      ))}
      {[57, 75, 93, 111].map((y, i) => (
        <line key={`gh${i}`} className="mg-draw"
          x1="250" y1={y} x2="350" y2={y}
          stroke="#FF3D00" strokeWidth="0.7" strokeDasharray="105"
          style={{ animationDelay: `${1.2 + i * 0.1}s` }} />
      ))}
      {/* Grid junction node */}
      <circle className="mg-pulse" cx="248" cy="80" r="2.5"
        stroke="#FF3D00" strokeWidth="1" fill="none"
        style={{ animationDelay: '0.4s' }} />

      {/* ── CIRCLE CONSTRUCTION (middle right) ──── */}
      <circle className="mg-draw" cx="390" cy="180" r="57"
        stroke="#F2EDE4" strokeWidth="1" strokeDasharray="358"
        style={{ animationDelay: '1.6s' }} />
      {/* Diameter + diagonal construction guides */}
      {[
        [333, 180, 447, 180],
        [390, 123, 390, 237],
        [349, 139, 431, 221],
        [431, 139, 349, 221],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={`cg${i}`} className="mg-draw"
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#F2EDE4" strokeWidth="0.55" strokeDasharray="120" opacity="0.25"
          style={{ animationDelay: `${1.8 + i * 0.1}s` }} />
      ))}
      {/* 12 tick marks at circumference */}
      {tickAngles.map((a, i) => (
        <line key={`ct${i}`} className="mg-pulse"
          x1="390" y1="123" x2="390" y2="132"
          stroke="#F2EDE4" strokeWidth="0.8" fill="none"
          transform={`rotate(${a}, 390, 180)`}
          style={{ animationDelay: `${i * 0.12}s` }} />
      ))}
      {/* Node where middle stream meets circle */}
      <circle className="mg-pulse" cx="333" cy="180" r="2.5"
        stroke="#F2EDE4" strokeWidth="1" fill="none"
        style={{ animationDelay: '0.9s' }} />

      {/* ── STARBURST (lower right) ──────────────── */}
      {starAngles.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        return (
          <line key={`sb${i}`} className="mg-draw"
            x1="288" y1="302"
            x2={+(288 + 28 * Math.cos(rad)).toFixed(1)}
            y2={+(302 + 28 * Math.sin(rad)).toFixed(1)}
            stroke="#FF3D00" strokeWidth="1.1" strokeDasharray="30"
            style={{ animationDelay: `${2.2 + i * 0.08}s` }} />
        );
      })}
      {/* Star orbit ring */}
      <circle className="mg-draw" cx="288" cy="302" r="40"
        stroke="#FF3D00" strokeWidth="0.7" strokeDasharray="251"
        style={{ animationDelay: '2.65s' }} />
      {/* Star junction node */}
      <circle className="mg-pulse" cx="248" cy="288" r="2.5"
        stroke="#FF3D00" strokeWidth="1" fill="none"
        style={{ animationDelay: '0.6s' }} />

      {/* ── CURSOR MARK (right edge of stream) ───── */}
      <line className="mg-pulse" x1="457" y1="173" x2="457" y2="187"
        stroke="#F2EDE4" strokeWidth="0.8" fill="none"
        style={{ animationDelay: '0.2s' }} />
      <line className="mg-pulse" x1="450" y1="180" x2="464" y2="180"
        stroke="#F2EDE4" strokeWidth="0.8" fill="none"
        style={{ animationDelay: '0.2s' }} />
    </svg>
  );
}
