import { useState } from 'react';
import { PROJECTS } from './projectsData';
import Modal from './Modal';

export default function Featured() {
  const [open, setOpen] = useState(false);
  const project = PROJECTS[0]; // Yonex

  return (
    <>
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="page">
          <div className="section-head reveal">
            <div className="section-num">Ch. 01 / Featured</div>
            <h2 className="section-title">
              A self-initiated<br />
              <em>Yonex</em> concept <span className="muted">— the case for how I think.</span>
            </h2>
          </div>

          <div className="featured reveal">
            <div className="featured-label">Latest work · 2026</div>

            <button
              className="featured-hero"
              onClick={() => setOpen(true)}
              aria-label={`Open ${project.title} case study`}
            >
              <img src={project.cover.src} alt={`${project.title} ${project.titleEm}`} />
              <div className="featured-hero-overlay">
                <h3 className="featured-hero-title">
                  Yonex Vcore<br />
                  <em>2026.</em>
                </h3>
                <span className="btn btn-primary" style={{ pointerEvents: 'none' }}>
                  Open case <span className="arrow">→</span>
                </span>
              </div>
            </button>

            <div className="featured-meta">
              <div>
                <div className="featured-meta-label">Category</div>
                <div className="featured-meta-value">{project.category}</div>
              </div>
              <div>
                <div className="featured-meta-label">Scope</div>
                <div className="featured-meta-value">{project.scope}</div>
              </div>
              <div>
                <div className="featured-meta-label">Tools</div>
                <div className="featured-meta-value">{project.tools}</div>
              </div>
              <div>
                <div className="featured-meta-label">Year</div>
                <div className="featured-meta-value">{project.year}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && <Modal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}
