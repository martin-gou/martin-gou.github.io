import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Navigate, useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import { getProjectBySlug } from '../data/projects.js';

function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const [language, setLanguage] = useState('zh');
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentContent = project.translations[language] || project.translations.zh;
  const hasEnglish = Boolean(project.translations.en);

  return (
    <main className="route-page reading-page">
      <article className="wrap reading-wrap">
        <header className="reading-header">
          <div className="reading-header-row">
            <h1>{currentContent.title}</h1>
            {hasEnglish ? (
              <button
                className="language-toggle"
                type="button"
                onClick={() => setLanguage((value) => (value === 'zh' ? 'en' : 'zh'))}
              >
                {language === 'zh' ? 'English' : '中文'}
              </button>
            ) : null}
          </div>
          <time>{project.dateLabel}</time>
        </header>

        <section className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentContent.body}</ReactMarkdown>
        </section>
      </article>
    </main>
  );
}

export default ProjectDetailPage;
