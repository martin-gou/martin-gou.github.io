import {
  estimateReadingTime,
  formatDateLabel,
  normalizeArray,
  parseFrontmatter
} from './contentLoader.js';

const rawModules = import.meta.glob('../../content/blog/*/content*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

const imageModules = import.meta.glob('../../content/blog/*/images/*', {
  eager: true,
  query: '?url',
  import: 'default'
});

const DEFAULT_COVER_IMAGE = '/background-placeholder.svg';

function getContentPathParts(filePath) {
  const match = filePath.match(/content\/blog\/([^/]+)\/(content(?:_english)?)\.md$/);
  return {
    slug: match?.[1] || '',
    language: match?.[2] === 'content_english' ? 'en' : 'zh'
  };
}

function buildImageMap(modules) {
  const map = new Map();

  for (const [filePath, url] of Object.entries(modules)) {
    const match = filePath.match(/content\/blog\/([^/]+)\/images\/([^/]+)$/);
    if (!match) {
      continue;
    }

    const [, slug, filename] = match;
    const images = map.get(slug) || [];
    images.push({ filename, src: url });
    map.set(slug, images);
  }

  for (const images of map.values()) {
    images.sort((a, b) => {
      const aIsCover = /^cover\./i.test(a.filename);
      const bIsCover = /^cover\./i.test(b.filename);
      if (aIsCover !== bIsCover) {
        return aIsCover ? -1 : 1;
      }

      return a.filename.localeCompare(b.filename);
    });
  }

  return map;
}

const imageMap = buildImageMap(imageModules);
const contentMap = Object.entries(rawModules).reduce((map, [filePath, raw]) => {
  const { slug, language } = getContentPathParts(filePath);
  if (!slug) {
    return map;
  }

  const entry = map.get(slug) || {};
  entry[language] = parseFrontmatter(raw);
  map.set(slug, entry);
  return map;
}, new Map());

const posts = Array.from(contentMap.entries())
  .map(([slug, translations]) => {
    const primary = translations.zh || translations.en;
    const english = translations.en || null;
    const { frontmatter, body } = primary;
    const date = String(frontmatter.date || '');
    const readingTime = estimateReadingTime(body);
    const tags = normalizeArray(frontmatter.tags);
    const images = imageMap.get(slug) || [];

    return {
      slug,
      title: String(frontmatter.title || slug),
      excerpt: String(frontmatter.excerpt || ''),
      category: String(frontmatter.category || 'General'),
      tags: tags.length > 0 ? tags : [String(frontmatter.category || 'general').toLowerCase()],
      date,
      dateLabel: formatDateLabel(date),
      featured: Boolean(frontmatter.featured),
      coverImage: images[0]?.src || DEFAULT_COVER_IMAGE,
      coverAlt: String(frontmatter.coverAlt || frontmatter.title || slug),
      body,
      translations: {
        zh: {
          title: String(frontmatter.title || slug),
          body
        },
        en: english
          ? {
              title: String(english.frontmatter.title || frontmatter.title || slug),
              body: english.body
            }
          : null
      },
      readingTimeLabel: `${readingTime} min read`
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllPosts() {
  return posts;
}

export function getFeaturedPosts() {
  const featured = posts.filter((post) => post.featured);
  return featured.length > 0 ? featured : posts.slice(0, 2);
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function getBlogTagOptions() {
  const tags = [...new Set(posts.flatMap((post) => post.tags))].sort((a, b) => a.localeCompare(b));
  return [{ value: 'all', label: 'All' }, ...tags.map((tag) => ({ value: tag, label: tag }))];
}
