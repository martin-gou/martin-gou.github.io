import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { getAllPosts, getBlogTagOptions } from '../data/blog.js';

function BlogIndexPage() {
  const [activeTag, setActiveTag] = useState('all');
  const posts = getAllPosts();
  const tagOptions = getBlogTagOptions();
  const visiblePosts =
    activeTag === 'all' ? posts : posts.filter((post) => post.tags.includes(activeTag));

  return (
    <main className="route-page">
      <section className="route-hero route-hero-blog">
        <div className="wrap route-hero-grid">
          <div>
            <p className="eyebrow">Blog</p>
            <h1>Thoughts, experiments, and learning notes</h1>
            <p className="route-hero-copy">
              A Markdown-powered writing space for ideas about life, technology, and how I learn.
            </p>
          </div>
          <div className="route-aside-card">
            <p className="mono-label">Content System</p>
            <p>Posts are loaded automatically from `content/blog/posts/*.md` with frontmatter metadata.</p>
            <div className="chip-row">
              {tagOptions.map((tag) => (
                <span className="chip" key={tag.value}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="panel-section">
        <div className="wrap">
          <SectionTitle
            kicker="Archive"
            title={`${posts.length} posts and growing`}
            body="Filter by blog tag."
          />

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

          <div className="blog-list-stack">
            {visiblePosts.map((post) => (
              <article className="archive-card" key={post.slug}>
                <div className="archive-card-image">
                  <img src={post.coverImage} alt={post.title} />
                </div>
                <div className="archive-card-body">
                  <div className="meta-line">
                    <span>{post.category}</span>
                    <span>{post.dateLabel}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="archive-card-footer">
                    <div className="chip-row archive-tags">
                      {post.tags.map((tag) => (
                        <span className="chip" key={`${post.slug}-${tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mono-label">{post.readingTimeLabel}</span>
                    <Link to={`/blog/${post.slug}`} className="text-link">
                      Read article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogIndexPage;
