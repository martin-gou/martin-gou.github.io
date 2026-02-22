import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { getAllProjects, getProjectCategories } from '../data/projects.js';

function ProjectsIndexPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const projects = getAllProjects();
  const categories = getProjectCategories();
  const visibleProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="route-page">
      <section className="route-hero route-hero-projects">
        <div className="wrap route-hero-grid">
          <div>
            <p className="eyebrow">Projects</p>
            <h1>Builds, experiments, and product thinking in practice</h1>
            <p className="route-hero-copy">
              A project archive with category filters and detail pages, now fully inside the React app.
            </p>
          </div>
          <div className="route-aside-card">
            <p className="mono-label">What this page shows</p>
            <ul className="compact-list">
              <li>Featured and non-featured projects</li>
              <li>Categories / tags / project details</li>
              <li>Reusable layout for future additions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="panel-section">
        <div className="wrap">
          <SectionTitle
            kicker="Archive"
            title="Project library"
            body="Filter by category, then open a detail page for descriptions, tech stack, challenges, and gallery images."
          />

          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                className={`filter-pill ${activeCategory === category.value ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="card-grid">
            {visibleProjects.map((project) => (
              <article className="media-card project-card" key={project.slug}>
                <div className="media-image">
                  <img src={project.image} alt={project.title} />
                  <div className="image-badge">{project.categoryLabel}</div>
                </div>
                <div className="media-body">
                  <div className="meta-line">
                    <span>{project.statusLabel}</span>
                    <span>{project.dateLabel}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.tags.map((tag) => (
                      <span className="chip" key={`${project.slug}-${tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`} className="text-link">
                    View detail
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsIndexPage;
