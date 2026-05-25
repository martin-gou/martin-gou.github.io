import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, getBlogTagOptions } from '../data/blog.js';

function BlogIndexPage() {
  const [activeTag, setActiveTag] = useState('all');
  const posts = getAllPosts();
  const tagOptions = getBlogTagOptions();
  const visiblePosts =
    activeTag === 'all' ? posts : posts.filter((post) => post.tags.includes(activeTag));

  return (
    <main className="route-page">
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">Blog</p>
          <h1>Notes and writing</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="wrap narrow">
          <div className="filter-row">
            {tagOptions.map((tag) => (
              <button
                key={tag.value}
                type="button"
                className={`filter-pill ${activeTag === tag.value ? 'is-active' : ''}`}
                onClick={() => setActiveTag(tag.value)}
              >
                {tag.label}
              </button>
            ))}
          </div>

          <div className="link-list">
            {visiblePosts.map((post) => (
              <Link className="list-row" to={`/blog/${post.slug}`} key={post.slug}>
                <span>
                  <strong>{post.title}</strong>
                  <small>{post.excerpt}</small>
                </span>
                <time>{post.dateLabel}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogIndexPage;
