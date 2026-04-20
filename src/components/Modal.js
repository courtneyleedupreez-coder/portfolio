import { useEffect } from 'react';

export default function Modal({ project, onClose }) {
  useEffect(() => {
    document.body.classList.add('lock');
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('lock');
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Figure out best gallery layout — 3-col if many, 2-col if few
  const galleryClass = project.gallery.length >= 6 ? 'modal-gallery--3' : 'modal-gallery--2';

  const renderCell = (item, i) => {
    if (item.type === 'video') {
      return (
        <div className="gallery-cell" key={i}>
          <video autoPlay muted loop playsInline>
            <source src={item.src} type="video/mp4" />
          </video>
        </div>
      );
    }
    return (
      <div className="gallery-cell" key={i}>
        <img src={item.src} alt={item.label || ''} loading="lazy" />
      </div>
    );
  };

  return (
    <div className="modal-backdrop" onClick={onBackdrop}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        <div className="modal-inner">
          {/* Header */}
          <div className="modal-header">
            <div className="modal-cat">{project.category}</div>
            <h2 className="modal-title">
              {project.title} <em>{project.titleEm}</em>
            </h2>
            <p className="modal-intro">{project.intro}</p>
          </div>

          {/* Facts */}
          <div className="modal-facts">
            <div>
              <div className="fact-label">Year</div>
              <div className="fact-value">{project.year}</div>
            </div>
            <div>
              <div className="fact-label">Role</div>
              <div className="fact-value">{project.role}</div>
            </div>
            <div>
              <div className="fact-label">Scope</div>
              <div className="fact-value">{project.scope}</div>
            </div>
            <div>
              <div className="fact-label">Tools</div>
              <div className="fact-value">{project.tools}</div>
            </div>
          </div>

          {/* Context / Approach / Craft */}
          <div className="modal-body">
            <div className="modal-body-label">Context</div>
            <div>
              <p className="modal-body-text">{project.context}</p>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-body-label">Approach</div>
            <div>
              <p className="modal-body-text">{project.approach}</p>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-body-label">Craft note</div>
            <div>
              <p className="modal-body-text">{project.craft}</p>
            </div>
          </div>

          {/* Gallery */}
          <div className={`modal-gallery ${galleryClass}`}>
            {project.gallery.map(renderCell)}
          </div>

          {/* Website card if present */}
          {project.siteCard && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="site-card"
            >
              <div className="site-card-preview">
                <div className="site-card-browser">
                  <div className="site-card-bar">
                    <span /><span /><span />
                    <span className="site-card-url">{project.siteCard.url}</span>
                  </div>
                  <div style={{ aspectRatio: '16/10', background: 'var(--ink)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
                    <div style={{ width: '40%', height: '8px', background: 'var(--cream)', opacity: 0.7 }} />
                    <div style={{ width: '70%', height: '18px', background: 'var(--cream)', opacity: 0.9 }} />
                    <div style={{ width: '60%', height: '18px', background: 'var(--cream)', opacity: 0.9 }} />
                    <div style={{ width: '80px', height: '22px', background: 'var(--accent)', marginTop: '6px' }} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', marginTop: '8px' }}>
                      <div style={{ height: '50px', background: 'var(--accent)', opacity: 0.25 }} />
                      <div style={{ height: '50px', background: 'var(--cream)', opacity: 0.15 }} />
                      <div style={{ height: '50px', background: 'var(--accent)', opacity: 0.18 }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-card-body">
                <div className="site-card-label">Also part of this project</div>
                <h4 className="site-card-title">{project.siteCard.title}</h4>
                <p className="site-card-desc">{project.siteCard.desc}</p>
                <div className="site-card-cta">View live site →</div>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
