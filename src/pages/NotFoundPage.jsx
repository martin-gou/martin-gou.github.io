import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="route-page">
      <section className="panel-section">
        <div className="wrap">
          <div className="empty-state-card">
            <p className="eyebrow">404</p>
            <h1>Page not found</h1>
            <p>The route does not exist in the new React site yet.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/">
                Go Home
              </Link>
              <Link className="btn btn-secondary" to="/blog">
                Browse Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
