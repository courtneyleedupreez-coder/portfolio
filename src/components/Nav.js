import { useState, useEffect } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 120 && y > lastY) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);
  const links = [
    ['#work', 'Work'],
    ['#about', 'About'],
    ['#contact', 'Contact'],
  ];

  return (
    <>
      <nav className={`nav ${hidden ? 'nav--hidden' : ''}`}>
        <a href="#top" className="nav-logo" onClick={close}>
          Courtney <em>du Preez</em>
        </a>
        <ul className="nav-links">
          {links.map(([href, label]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
          <li>
            <a href="#contact" className="nav-cta">Start a project →</a>
          </li>
        </ul>
        <button
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <span style={{ transform: open ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
        </button>
      </nav>
      {open && (
        <div className="nav-mobile">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a href="#contact" onClick={close}>Start a project →</a>
        </div>
      )}
    </>
  );
}
