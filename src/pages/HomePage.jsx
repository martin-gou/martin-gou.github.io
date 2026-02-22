import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { getFeaturedPosts } from '../data/blog.js';
import { education, personal } from '../data/content.js';
import { getFeaturedProjects } from '../data/projects.js';

const focusTags = [
  {
    label: 'Multi LLM Agent',
    tone: 'neon',
    hintTags: ['OpenCode', 'LangGraph', 'OpenAI Agent SDK', 'Orchestration']
  },
  {
    label: 'DevOps',
    tone: 'blue',
    hintTags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Prometheus', 'Grafana']
  },
  {
    label: 'Deep Learning',
    tone: 'violet',
    hintTags: ['PyTorch', 'Transformers', 'CLIP']
  },
  {
    label: 'Full-Stack',
    tone: 'amber',
    hintTags: ['React', 'Django', 'PostgreSQL']
  }
];

function HomePage() {
  const featuredWriting = getFeaturedPosts().slice(0, 2);
  const featuredProjects = getFeaturedProjects().slice(0, 2);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="home-page">
      <section id="home-hero" className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy terminal-pane boot-pane" style={{ '--boot-order': 0 }}>
            <div className="pane-titlebar">
              <span className="pane-title">home</span>
              <span className="pane-status">[main]</span>
            </div>
            <p className="eyebrow">Robotics • Software</p>
            <h1>
              Building
              <br />
              <span>
                useful things.
                <span className="terminal-cursor" aria-hidden="true" />
              </span>
            </h1>
            <p className="hero-lead">Robotics student. Builder. Learning in public.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" type="button" onClick={() => scrollTo('projects-preview')}>
                Projects
              </button>
              <Link className="btn btn-ghost" to="/blog">
                Blog
              </Link>
              <button className="btn btn-ghost" type="button" onClick={() => scrollTo('contact')}>
                Contact
              </button>
            </div>
            <ul className="hero-meta" aria-label="Current profile highlights">
              <li>
                <span className="meta-label">Now</span>
                <span className="meta-value">{personal.role}</span>
              </li>
              <li>
                <span className="meta-label">Route</span>
                <span className="meta-value">{personal.locationLine}</span>
              </li>
            </ul>
          </div>

          <div
            className="hero-visual terminal-pane boot-pane"
            style={{ '--hero-texture': `url(${personal.heroTexture})`, '--boot-order': 1 }}
          >
            <div className="pane-titlebar">
              <span className="pane-title">portrait</span>
              <span className="pane-status">[img]</span>
            </div>
            <div className="portrait-frame">
              <img src={personal.profileImage} alt="Martin Gou portrait" />
              <div className="portrait-ring" />
              <div className="portrait-stamp">Curiosity / Build / Reflect</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="panel-section">
        <div className="wrap">
          <SectionTitle
            kicker="About"
            title="About"
            body={null}
          />

          <div className="simple-pane about-simple-pane">
            <div className="pane-titlebar">
              <span className="pane-title">about + journey</span>
              <span className="pane-status">[read-only]</span>
            </div>
            <div className="about-simple-grid">
              <div className="about-simple-copy">
                <p>{personal.shortBio}</p>
              </div>
              <ul className="terminal-list">
                <li>
                  <span className="terminal-key">$ focus</span>
                  <span className="focus-chip-list">
                    {focusTags.map((tag, index) => (
                      <TerminalFocusChip
                        key={tag.label}
                        label={tag.label}
                        tone={tag.tone}
                        hintTags={tag.hintTags}
                        delay={index}
                      />
                    ))}
                  </span>
                </li>
                <li>
                  <span className="terminal-key">$ style</span>
                  <span>Practical, iterative, systems-minded</span>
                </li>
                <li>
                  <span className="terminal-key">$ now</span>
                  <span>TU Delft + build</span>
                </li>
              </ul>
            </div>

            <div className="pane-divider" />

            <div className="pane-subsection">
              <div className="pane-subsection-head">
                <span className="pane-title">journey.log</span>
                <span className="pane-status">[{education.length}]</span>
              </div>
              <div className="journey-table">
                <div className="journey-table-head">
                  <span>Period</span>
                  <span>Program</span>
                  <span>School</span>
                  <span>Location</span>
                </div>
                {education.map((entry, index) => (
                  <div
                    className="journey-row"
                    key={`${entry.school}-${entry.period}`}
                    data-reveal=""
                    data-reveal-delay={`${80 + 70 * index}ms`}
                  >
                    <span className="journey-period">{entry.period}</span>
                    <span>{entry.degree}</span>
                    <span>{entry.school}</span>
                    <span>{entry.location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="writing" className="panel-section">
        <div className="wrap">
          <SectionTitle
            kicker="Writing"
            title="Writing"
            body={null}
          />

          <div className="card-grid">
            {featuredWriting.map((post) => (
              <article className="media-card" key={post.slug} data-reveal="">
                <div className="media-image">
                  <img src={post.coverImage} alt={post.title} />
                </div>
                <div className="media-body">
                  <div className="meta-line">
                    <span>{post.category}</span>
                    <span>{post.dateLabel}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="text-link">
                    Read post
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section-footer-link">
            <Link className="btn btn-secondary" to="/blog">
              Browse All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      <section id="projects-preview" className="panel-section">
        <div className="wrap">
          <SectionTitle
            kicker="Projects"
            title="Projects"
            body={null}
          />

          <div className="card-grid">
            {featuredProjects.map((project) => (
              <article className="media-card project-card" key={project.slug} data-reveal="">
                <div className="media-image">
                  <img src={project.image} alt={project.title} />
                  <div className="image-badge">{project.subtitle}</div>
                </div>
                <div className="media-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span className="chip" key={`${project.slug}-${tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`} className="text-link">
                    View project
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section-footer-link">
            <Link className="btn btn-secondary" to="/projects">
              View Project Archive
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="panel-section contact-section">
        <div className="wrap contact-layout">
          <div className="contact-card">
            <p className="mono-label">Get in touch</p>
            <h2>Get in touch.</h2>
            <p>Email is the fastest way.</p>
            <div className="contact-links">
              <a className="btn btn-primary" href={`mailto:${personal.email}`}>
                {personal.email}
              </a>
              <a className="btn btn-ghost" href={personal.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn-ghost" href={personal.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={personal.x} target="_blank" rel="noreferrer">
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TerminalFocusChip({ label, tone, hintTags, delay }) {
  return (
    <span
      className={`focus-chip-item tone-${tone}`}
      style={{ '--chip-delay': `${delay * 45}ms` }}
      data-reveal=""
    >
      <span className="focus-chip-bracket" aria-hidden="true">
        [
      </span>
      <span className="focus-chip-label">{label}</span>
      <span className="focus-chip-bracket" aria-hidden="true">
        ]
      </span>
      <span className="focus-chip-tooltip" role="note">
        <span className="focus-chip-tooltip-label">tags</span>
        <span className="focus-chip-tooltip-list">
          {hintTags.map((tag, index) => (
            <span
              key={`${label}-${tag}`}
              className="focus-chip-tooltip-tag"
              style={{ '--tooltip-tag-order': index }}
            >
              {tag}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}

export default HomePage;
