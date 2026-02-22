import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { personal } from '../data/content.js';

function ShellLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const brandTokenPath = getBrandTokenPath(location.pathname);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    const root = document.querySelector('.route-stage');
    if (!root) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selectors = [
      '.section-title',
      '.simple-pane',
      '.route-hero-grid > *',
      '.route-aside-card',
      '.media-card',
      '.archive-card',
      '.filter-row',
      '.contact-card',
      '.post-side-panel',
      '.post-article',
      '.detail-side-card',
      '.detail-main-card',
      '.journey-row',
      '[data-reveal]'
    ];

    const targets = Array.from(root.querySelectorAll(selectors.join(', ')));
    const uniqueTargets = [...new Set(targets)];

    uniqueTargets.forEach((element) => {
      if (!element.classList.contains('reveal-item')) {
        element.classList.add('reveal-item');
      }

      const customDelay = element.getAttribute('data-reveal-delay');
      if (customDelay) {
        element.style.setProperty('--reveal-delay', customDelay);
      }
    });

    if (prefersReducedMotion) {
      uniqueTargets.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12
      }
    );

    uniqueTargets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="site-shell">
      <BackgroundGlow />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap nav-row">
          <div className="tmux-pathline" aria-hidden="true">
            tmux: session github_io
          </div>
          <NavLink className="brand" to="/">
            <span className="brand-mark brand-token" aria-hidden="true">
              <span className="brand-token-default">{brandTokenPath}</span>
              <span className="brand-token-hover">{`${brandTokenPath}>`}</span>
            </span>
            <span className="brand-copy">
              <span className="brand-text">Guotao (Martin) Gou</span>
              {/* <span className="brand-subtitle" aria-hidden="true">
                robotics / systems / build
              </span> */}
            </span>
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
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              Home
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
              Blog
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              Projects
            </NavLink>
          </nav>
        </div>
      </header>

      <div key={location.pathname} className="route-stage">
        <Outlet />
      </div>

      <footer className="site-footer">
        <div className="wrap footer-row">
          <div>
            <p className="mono-label">Martin Gou</p>
            <p>Robotics, software, and learning in public.</p>
          </div>
          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Martin Gou</p>
        </div>
      </footer>
    </div>
  );
}

function getBrandTokenPath(pathname) {
  if (pathname === '/' || pathname === '/home') {
    return '~/';
  }

  if (pathname.startsWith('/blog')) {
    return '~/blog';
  }

  if (pathname.startsWith('/projects')) {
    return '~/project';
  }

  return '~/';
}

function BackgroundGlow() {
  return (
    <div className="background-layer" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-noise" />
    </div>
  );
}

export default ShellLayout;
