import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Navigate, useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../data/blog.js';

function BlogPostPage() {
  const { slug = '' } = useParams();
  const [language, setLanguage] = useState('zh');
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentContent = post.translations[language] || post.translations.zh;
  const hasEnglish = Boolean(post.translations.en);

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
          <time>{post.dateLabel}</time>
        </header>

        <section className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentContent.body}</ReactMarkdown>
        </section>
      </article>
    </main>
  );
}

export default BlogPostPage;
