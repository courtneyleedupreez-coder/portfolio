import { useState } from 'react';
import { PROJECTS } from './projectsData';
import Modal from './Modal';

const LAYOUT = [
  { slug: 'yonex',        className: 'work-card' },
  { slug: 'lizzard',      className: 'work-card' },
  { slug: 'match-point',  className: 'work-card' },
  { slug: 'open-pinamar', className: 'work-card' },
  { slug: 'skincare',     className: 'work-card' },
  { slug: 'b2b',          className: 'work-card' },
];

export default function Work() {
  const [active, setActive] = useState(null);

  const projects = LAYOUT.map((l) => ({
    ...PROJECTS.find((p) => p.slug === l.slug),
    className: l.className,
  }));

  return (
    <>
      <section className="section" id="work">
        <div className="page">
          <div className="section-head reveal">
            <div className="section-num">Ch. 02 / Index</div>
            <h2 className="section-title">
              Selected<br />
              <em>work.</em> <span className="muted">Six projects, three industries, one designer.</span>
            </h2>
          </div>

          <div className="work-grid">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                className={`${p.className} reveal`}
                onClick={() => setActive(p)}
                aria-label={`Open ${p.title} case study`}
              >
                <img src={p.cover.src} alt={p.title} />
                <span className="work-card-num">№ {String(i + 1).padStart(2, '0')}</span>
                <span className="work-card-tag">{p.year}</span>
                <div className="work-card-overlay">
                  <h3 className="work-card-title">
                    {p.title} <em>{p.titleEm}</em>
                  </h3>
                  <div className="work-card-cat">{p.category}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && <Modal project={active} onClose={() => setActive(null)} />}
    </>
  );
}
