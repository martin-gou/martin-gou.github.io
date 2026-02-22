import lifePostImage from '../../images/blog/meaning_of_life_horizontal.png';
import thinkingPostImage from '../../images/blog2.jpg';
import webPostImage from '../../images/blog1.jpg';
import spicyPostImage from '../../images/blog2.jpg';
import jsPostImage from '../../images/blog3.jpg';
import careerPostImage from '../../images/blog4.jpg';

const rawModules = import.meta.glob('../../content/blog/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

const coverImageMap = {
  'meaning-of-life': lifePostImage,
  thinking: thinkingPostImage,
  'web-development-demo': webPostImage,
  'chinese-cooking': spicyPostImage,
  'javascript-tips': jsPostImage,
  'tech-career': careerPostImage
};

const blogTagsBySlug = {
  'meaning-of-life': ['life'],
  thinking: ['learn'],
  'chinese-cooking': ['life'],
  'web-development-demo': ['Tech'],
  'javascript-tips': ['Tech'],
  'tech-career': ['Tech']
};

const blogTagOptions = [
  { value: 'all', label: 'All' },
  { value: 'life', label: 'life' },
  { value: 'learn', label: 'learn' },
  { value: 'Tech', label: 'Tech' }
];

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return { frontmatter: {}, body: raw.trim() };
  }

  const closing = raw.indexOf('\n---', 3);
  if (closing === -1) {
    return { frontmatter: {}, body: raw.trim() };
  }

  const frontmatterBlock = raw.slice(3, closing).trim();
  const body = raw.slice(closing + 4).trim();
  const frontmatter = {};

  for (const line of frontmatterBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }
    const separatorIndex = trimmed.indexOf(':');
    if (separatorIndex === -1) {
      continue;
    }
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    frontmatter[key] = normalizeValue(value);
  }

  return { frontmatter, body };
}

function normalizeValue(input) {
  const unquoted = input.replace(/^['"]|['"]$/g, '');

  if (unquoted === 'true') return true;
  if (unquoted === 'false') return false;

  if (unquoted.includes(',') && !/^\d{4}-\d{2}-\d{2}$/.test(unquoted)) {
    return unquoted.split(',').map((item) => item.trim()).filter(Boolean);
  }

  return unquoted;
}

function estimateReadingTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function formatDate(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

const posts = Object.entries(rawModules)
  .map(([filePath, raw]) => {
    const { frontmatter, body } = parseFrontmatter(raw);
    const slug = filePath.split('/').pop().replace(/\.md$/, '');
    const date = String(frontmatter.date || '');
    const readingTime = estimateReadingTime(body);

    return {
      slug,
      title: String(frontmatter.title || slug),
      excerpt: String(frontmatter.excerpt || ''),
      category: String(frontmatter.category || 'General'),
      tags: blogTagsBySlug[slug] || ['Tech'],
      date,
      dateLabel: formatDate(date),
      featured: Boolean(frontmatter.featured),
      coverImage: coverImageMap[slug] || webPostImage,
      body,
      readingTimeLabel: `${readingTime} min read`
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllPosts() {
  return posts;
}

export function getFeaturedPosts() {
  return posts.filter((post) => post.featured);
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function getBlogTagOptions() {
  return blogTagOptions;
}
