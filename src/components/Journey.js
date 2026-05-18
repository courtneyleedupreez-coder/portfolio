import { useState } from 'react';

const STOPS = [
  {
    id: 'sa',
    city: 'Durban',
    country: 'South Africa',
    years: '1998 – 2023',
    tag: 'Origin',
    headline: 'Where the eye was trained.',
    body: 'Born and raised in South Africa. Studied Social Sciences at the University of KwaZulu-Natal — psychology, organisational behaviour, consumer research, brand strategy. The academic foundation that sits under every creative decision.',
    detail: 'BSc Social Sciences · University of KwaZulu-Natal · 2020–2023',
  },
  {
    id: 'madrid',
    city: 'Madrid',
    country: 'Spain',
    years: '2023 – 2024',
    tag: 'Chapter Two',
    headline: 'Where the range expanded.',
    body: 'The European chapter. Living and working across cultures — Spanish language, different market registers, design for audiences with different visual literacy. The work that travels internationally was shaped here.',
    detail: 'Remote design work · Spanish language (native level)',
  },
  {
    id: 'bsas',
    city: 'Buenos Aires',
    country: 'Argentina',
    years: '2024 – present',
    tag: 'Current',
    headline: 'Where the portfolio lives.',
    body: 'Currently based in Buenos Aires, working remotely with brands globally. Dual role: Senior Graphic Designer handling campaigns end-to-end, and Educator at Northlands School — a discipline that sharpens communication to its essentials.',
    detail: 'Senior Graphic Designer (remote) · Northlands School Educator · 2025–present',
  },
];

const SKILLS = [
  {
    cat: 'Marketing & Strategy',
    items: ['Consumer behaviour', 'Brand positioning & storytelling', 'Campaign planning', 'Market research', 'Digital marketing', 'Social media strategy'],
  },
  {
    cat: 'Content Creation',
    items: ['Visual storytelling', 'Photography', 'Short & long-form content', 'Copywriting', 'Personal branding', 'Content scheduling'],
  },
  {
    cat: 'Psychology & Insight',
    items: ['Industrial & org psychology', 'Motivation & performance', 'Audience engagement', 'Behavioural insight', 'Communication psychology'],
  },
  {
    cat: 'Professional',
    items: ['High-performance mindset', 'Leadership & teamwork', 'Public speaking', 'Time management', 'Coaching & mentoring', 'Bilingual EN / ES'],
  },
];

export default function Journey() {
  const [active, setActive] = useState('bsas');
  const activeStop = STOPS.find((s) => s.id === active);

  return (
    <section className="section journey-section" id="journey" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="page">

        {/* Header */}
        <div className="section-head reveal">
          <div className="section-num">Ch. 04 / The Designer</div>
          <h2 className="section-title">
            Three cities.<br />
            <span className="muted">One creative through-line.</span>
          </h2>
        </div>

        {/* ── LOCATION TIMELINE ──────────────────── */}
        <div className="journey-track reveal">
          {STOPS.map((stop, i) => (
            <button
              key={stop.id}
              className={`journey-stop ${active === stop.id ? 'journey-stop--active' : ''}`}
              onClick={() => setActive(stop.id)}
            >
              <div className="journey-stop-num">0{i + 1}</div>
              <div className="journey-stop-city">{stop.city}</div>
              <div className="journey-stop-country">{stop.country}</div>
              <div className="journey-stop-years">{stop.years}</div>
              {stop.id === 'bsas' && <span className="journey-live-dot" />}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className="journey-panel reveal" key={active}>
          <div className="journey-panel-tag">{activeStop.tag}</div>
          <h3 className="journey-panel-headline">{activeStop.headline}</h3>
          <p className="journey-panel-body">{activeStop.body}</p>
          <div className="journey-panel-detail">{activeStop.detail}</div>
        </div>

        {/* ── SKILL FLIP CARDS ───────────────────── */}
        <div className="skill-grid reveal">
          {SKILLS.map((s) => (
            <div key={s.cat} className="skill-card">
              <div className="skill-card-inner">
                <div className="skill-card-front">
                  <div className="skill-card-cat">{s.cat}</div>
                  <div className="skill-card-hint">hover to explore →</div>
                </div>
                <div className="skill-card-back">
                  <ul className="skill-card-list">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── EDUCATION CALLOUT ──────────────────── */}
        <div className="edu-callout reveal">
          <div className="edu-callout-left">
            <div className="edu-label">Education</div>
            <div className="edu-degree">BSc Social Sciences</div>
            <div className="edu-school">University of KwaZulu-Natal · South Africa</div>
          </div>
          <div className="edu-callout-right">
            <div className="edu-years">2020 – 2023</div>
            <p className="edu-focus">
              Focus on psychology, organisational behaviour, and marketing strategies.
              Developed strong analytical, communication and people-management skills
              applicable to professional environments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
