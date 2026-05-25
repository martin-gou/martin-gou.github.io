import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">Projects</p>
          <h1>Things I have built</h1>
          <p>A simple project archive. Replace these placeholders with real work over time.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="wrap narrow">
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

          <div className="link-list">
            {visibleProjects.map((project) => (
              <Link className="list-row" to={`/projects/${project.slug}`} key={project.slug}>
                <span>
                  <strong>{project.title}</strong>
                  <small>{project.description}</small>
                </span>
                <time>{project.dateLabel}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsIndexPage;
