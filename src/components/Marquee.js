const ITEMS = [
  <>Canva Pro</>,
  <>Figma &amp; <em>Figma Sites</em></>,
  <>Lightroom</>,
  <>Photography</>,
  <>Brand Identity</>,
  <>Campaign Design</>,
  <>Content Strategy</>,
  <>Photoroom</>,
  <>UI &amp; Web</>,
  <>Art Direction</>,
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
