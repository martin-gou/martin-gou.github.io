import ReactMarkdown from 'react-markdown';
import { Link, Navigate, useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '../data/blog.js';

function BlogPostPage() {
  const { slug = '' } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getAllPosts()
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .slice(0, 2);

  return (
    <main className="route-page">
      <article className="post-shell">
        <header className="post-hero">
          <div className="post-hero-image">
            <img src={post.coverImage} alt={post.title} />
          </div>
          <div className="post-hero-overlay" />
          <div className="wrap post-hero-content">
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <div className="post-meta-line">
              <span>{post.dateLabel}</span>
              <span>{post.readingTimeLabel}</span>
            </div>
            <p className="post-lead">{post.excerpt}</p>
          </div>
        </header>

        <div className="wrap post-layout">
          <aside className="post-side-panel">
            <p className="mono-label">Article</p>
            <ul>
              <li>
                <Link to="/blog">Back to blog archive</Link>
              </li>
              <li>{post.category}</li>
              <li>{post.readingTimeLabel}</li>
            </ul>
          </aside>

          <section className="post-article">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
          </section>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="panel-section">
          <div className="wrap">
            <div className="section-title">
              <p className="eyebrow">Related</p>
              <h2>More in {post.category}</h2>
            </div>
            <div className="card-grid">
              {related.map((item) => (
                <article className="media-card" key={item.slug}>
                  <div className="media-image">
                    <img src={item.coverImage} alt={item.title} />
                  </div>
                  <div className="media-body">
                    <div className="meta-line">
                      <span>{item.category}</span>
                      <span>{item.dateLabel}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <Link to={`/blog/${item.slug}`} className="text-link">
                      Read post
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

export default BlogPostPage;
