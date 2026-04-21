import heroImg from '../assets/hero-courtney-new.jpg';

export default function About() {
  return (
    <section className="section" id="about" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="page">
        <div className="section-head reveal">
          <div className="section-num">Ch. 03 / About</div>
          <h2 className="section-title">
            The <em>short</em> version<br />
            <span className="muted">of who's behind it.</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left — copy */}
          <div>
            <p className="about-text reveal">
              I'm <em>Courtney du Preez</em> — a social-media designer and content creator working end-to-end, from the camera up.
            </p>
            <p className="about-text reveal">
              I handle the parts that usually live with three different people — <em>photography, editing, design, web</em> — which means brands I work with get a feed that feels considered, not assembled from a template pack.
            </p>
            <p className="about-text reveal">
              Every project in this portfolio was conceived, shot, edited and designed by me. No templates. No stock. Based in Buenos Aires, working remotely with brands globally.
            </p>

            <div className="toolkit reveal">
              <div className="toolkit-title">— Toolkit</div>
              <ul className="toolkit-list">
                <li>Canva Pro</li>
                <li>Figma &amp; Figma Sites</li>
                <li>Lightroom</li>
                <li>Photoroom</li>
                <li>Snapseed</li>
                <li>Meta Business Suite</li>
                <li>Later</li>
                <li>Camera &amp; iPhone Photography</li>
              </ul>
            </div>
          </div>

          {/* Right — sidebar */}
          <aside className="about-sidebar reveal">
            <div className="about-portrait">
              <img src={heroImg} alt="Courtney du Preez" />
            </div>

            <div className="stat-row">
              <div className="stat">
                <div className="stat-num">6+</div>
                <div className="stat-label">Brands</div>
              </div>
              <div className="stat">
                <div className="stat-num">3</div>
                <div className="stat-label">Industries</div>
              </div>
              <div className="stat">
                <div className="stat-num">100%</div>
                <div className="stat-label">Original</div>
              </div>
            </div>

            <div className="toolkit" style={{ marginTop: '40px' }}>
              <div className="toolkit-title">— Services</div>
              <ul className="toolkit-list" style={{ gridTemplateColumns: '1fr' }}>
                <li>Social media design systems</li>
                <li>Product launch campaigns</li>
                <li>Brand identity</li>
                <li>Photography &amp; art direction</li>
                <li>Website &amp; UI design</li>
                <li>Content strategy</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
