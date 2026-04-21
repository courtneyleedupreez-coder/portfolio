export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="page">
        <div className="reveal">
          <div className="mono" style={{ marginBottom: '40px', color: 'var(--accent)' }}>
            Ch. 04 / Contact
          </div>
          <h2 className="contact-title">
            Let's make<br />
            <em>something good.</em>
          </h2>
          <a href="mailto:courtneyleedupreez@gmail.com" className="contact-email">
            courtneyleedupreez@gmail.com →
          </a>
        </div>

        <div className="contact-info-block reveal">
          <div className="contact-info-group">
            <div className="contact-info-label">Based in</div>
            <div className="contact-info-value">Buenos Aires, Argentina</div>
          </div>
          <div className="contact-info-group">
            <div className="contact-info-label">Working with</div>
            <div className="contact-info-value">Brands, agencies &amp; founders — globally, remote.</div>
          </div>
          <div className="contact-info-group">
            <div className="contact-info-label">Best for</div>
            <div className="contact-info-value">Social campaigns, brand identity, product launches, speculative pitches.</div>
          </div>
          <div className="contact-info-group">
            <div className="contact-info-label">Response time</div>
            <div className="contact-info-value">Within 24 hours on weekdays.</div>
          </div>
          <div className="contact-info-group">
            <div className="contact-info-label">Elsewhere</div>
            <div className="contact-info-value" style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <a href="mailto:courtneyleedupreez@gmail.com" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '2px' }}>Email</a>
              <a
                href="https://www.linkedin.com/in/courtney-du-preez-5a9359261"
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '2px' }}
              >LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
