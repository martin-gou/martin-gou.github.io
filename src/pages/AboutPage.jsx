import { nowList, personal } from '../data/content.js';

function AboutPage() {
  return (
    <main className="route-page">
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">About</p>
          <h1>Who I am</h1>
          <p>{personal.about}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="wrap narrow prose-card">
          <h2>Now</h2>
          <ul>
            {nowList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Elsewhere</h2>
          <p>
            <a href={personal.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {' / '}
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {' / '}
            <a href={`mailto:${personal.email}`}>Email</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
