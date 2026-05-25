import { personal } from '../data/content.js';

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="wrap hero-inner">
          <p className="hero-greeting">{personal.greeting}</p>
          <h1>{personal.name}.</h1>
          <p className="hero-line">{personal.headline}</p>
          <p className="hero-copy">{personal.shortBio}</p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
