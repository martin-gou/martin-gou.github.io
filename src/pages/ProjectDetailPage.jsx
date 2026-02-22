import { Link, Navigate, useParams } from 'react-router-dom';
import { getAllProjects, getProjectBySlug } from '../data/projects.js';

function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = getAllProjects()
    .filter((item) => item.slug !== slug && item.category === project.category)
    .slice(0, 3);

  return (
    <main className="route-page">
      <section className="project-detail-hero">
        <div className="project-detail-hero-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-detail-hero-overlay" />
        <div className="wrap project-detail-hero-content">
          <p className="eyebrow">{project.categoryLabel}</p>
          <h1>{project.title}</h1>
          <p className="route-hero-copy">{project.fullDescription || project.description}</p>
          <div className="hero-actions">
            {project.githubUrl ? (
              <a className="btn btn-primary" href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : null}
            {project.liveUrl && project.liveUrl !== '#' ? (
              <a className="btn btn-ghost" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            ) : null}
            <Link className="btn btn-secondary" to="/projects">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="panel-section">
        <div className="wrap project-detail-layout">
          <aside className="detail-side-card">
            <p className="mono-label">Project Info</p>
            <ul className="compact-list">
              <li>Status: {project.statusLabel}</li>
              <li>Date: {project.dateLabel}</li>
              <li>Category: {project.categoryLabel}</li>
            </ul>
            <div className="chip-row">
              {project.tags.map((tag) => (
                <span className="chip" key={`${project.slug}-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </aside>

          <div className="detail-main-card">
            <section className="detail-section">
              <h2>Overview</h2>
              <p>{project.fullDescription || project.description}</p>
            </section>

            {project.gallery?.length ? (
              <section className="detail-section">
                <h2>Gallery</h2>
                <div className="detail-gallery">
                  {project.gallery.map((image, index) => (
                    <figure key={`${project.slug}-gallery-${index}`}>
                      <img src={image.src} alt={image.alt} />
                      {image.alt ? <figcaption>{image.alt}</figcaption> : null}
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}

            {project.technologies?.length ? (
              <section className="detail-section">
                <h2>Technologies</h2>
                <ul className="detail-bullets">
                  {project.technologies.map((item) => (
                    <li key={`${project.slug}-tech-${item}`}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.challenges ? (
              <section className="detail-section">
                <h2>Challenges</h2>
                <p>{project.challenges}</p>
              </section>
            ) : null}

            {project.solution ? (
              <section className="detail-section">
                <h2>Solution</h2>
                <p>{project.solution}</p>
              </section>
            ) : null}

            {project.features?.length ? (
              <section className="detail-section">
                <h2>Key Features</h2>
                <ul className="detail-bullets">
                  {project.features.map((item) => (
                    <li key={`${project.slug}-feature-${item}`}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.futureImprovements?.length ? (
              <section className="detail-section">
                <h2>Future Improvements</h2>
                <ul className="detail-bullets">
                  {project.futureImprovements.map((item) => (
                    <li key={`${project.slug}-future-${item}`}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="panel-section">
          <div className="wrap">
            <div className="section-title">
              <p className="eyebrow">Related</p>
              <h2>More {project.categoryLabel} work</h2>
            </div>
            <div className="card-grid">
              {related.map((item) => (
                <article className="media-card" key={item.slug}>
                  <div className="media-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="media-body">
                    <div className="meta-line">
                      <span>{item.statusLabel}</span>
                      <span>{item.dateLabel}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={`/projects/${item.slug}`} className="text-link">
                      View detail
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default ProjectDetailPage;
