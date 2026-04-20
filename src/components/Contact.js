import { useState } from 'react';

const FORMSPREE_ID = 'xwvrnabq';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setErr(false);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', project: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else { setErr(true); }
    } catch { setErr(true); } finally { setLoading(false); }
  };

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

        <div className="contact-grid">
          {/* Info */}
          <div className="reveal">
            <div className="contact-info-group">
              <div className="contact-info-label">Based in</div>
              <div className="contact-info-value">Buenos Aires, Argentina</div>
            </div>
            <div className="contact-info-group">
              <div className="contact-info-label">Working with</div>
              <div className="contact-info-value">Brands, agencies & founders — globally, remote.</div>
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
                <a href="https://www.linkedin.com/in/courtney-du-preez-4b7a851a4" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '2px' }}>LinkedIn</a>
                <a href="https://www.instagram.com/courtneyduprz" target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '2px' }}>Instagram</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="form reveal" onSubmit={submit}>
            <div className="form-row">
              <input className="form-input" name="name" placeholder="Your name" value={form.name} onChange={change} required />
              <input className="form-input" type="email" name="email" placeholder="Email" value={form.email} onChange={change} required />
            </div>
            <input className="form-input" name="project" placeholder="Project type" value={form.project} onChange={change} />
            <textarea className="form-input form-textarea" name="message" placeholder="Tell me about the brief" value={form.message} onChange={change} required />
            <button type="submit" className={`form-btn ${sent ? 'sent' : ''}`} disabled={loading}>
              {loading ? 'Sending…' : sent ? '✓ Sent — talk soon' : 'Send message →'}
            </button>
            {err && <p className="form-note" style={{ color: 'var(--accent)' }}>Didn't go through. Email me directly at courtneyleedupreez@gmail.com</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
