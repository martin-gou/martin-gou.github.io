import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { personal } from '../data/content.js';

function ShellLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="wrap nav-row">
          <NavLink className="brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              <img src="/tao-caligraphy.png" alt="" />
            </span>
            <span className="brand-text">{personal.name}</span>
          </NavLink>

          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              Projects
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              Blog
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <div key={location.pathname} className="route-stage">
        <Outlet />
      </div>
    </div>
  );
}

export default ShellLayout;
