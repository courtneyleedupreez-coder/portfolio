export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="page">
        {/* Meta strip — top */}
        <div className="hero-meta reveal">
          <div className="hero-meta-item">
            <span className="hero-meta-label">Index</span>
            <span className="hero-meta-value">№ 001 / 2026</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Discipline</span>
            <span className="hero-meta-value">Graphic Design · Content</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Based</span>
            <span className="hero-meta-value">Buenos Aires · Remote</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Status</span>
            <span className="hero-meta-value">
              <span className="dot" />
              Open for briefs
            </span>
          </div>
        </div>

        {/* Giant title */}
        <h1 className="hero-title reveal">
          Courtney<br />
          <em>du&nbsp;Preez.</em>
        </h1>

        {/* Lede + CTAs */}
        <div className="hero-sub">
          <p className="hero-lede reveal">
            Independent <em>social&nbsp;media &amp; graphic designer</em>. I build content from the camera up — photograph, edit, design, publish — for brands that need their feed to feel considered, not templated.
          </p>
          <div className="hero-right reveal">
            <a href="#work" className="btn btn-primary">
              View the work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a project <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
