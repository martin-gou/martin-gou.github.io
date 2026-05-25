import { formatDateLabel, normalizeArray, parseFrontmatter } from './contentLoader.js';

const rawModules = import.meta.glob('../../content/project/*/content*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

const imageModules = import.meta.glob('../../content/project/*/images/*', {
  eager: true,
  query: '?url',
  import: 'default'
});

const DEFAULT_PROJECT_IMAGE = '/background-placeholder.svg';

function getContentPathParts(filePath) {
  const match = filePath.match(/content\/project\/([^/]+)\/(content(?:_english)?)\.md$/);
  return {
    slug: match?.[1] || '',
    language: match?.[2] === 'content_english' ? 'en' : 'zh'
  };
}

function buildImageMap(modules) {
  const map = new Map();

  for (const [filePath, url] of Object.entries(modules)) {
    const match = filePath.match(/content\/project\/([^/]+)\/images\/([^/]+)$/);
    if (!match) {
      continue;
    }

    const [, slug, filename] = match;
    const images = map.get(slug) || [];
    images.push({ filename, src: url, alt: filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') });
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

function toTitleCase(value) {
  return String(value || '')
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
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

const projectList = Array.from(contentMap.entries())
  .map(([slug, translations]) => {
    const primary = translations.zh || translations.en;
    const english = translations.en || null;
    const { frontmatter, body } = primary;
    const date = String(frontmatter.date || '');
    const category = String(frontmatter.category || 'Project');
    const status = String(frontmatter.status || 'completed');
    const images = imageMap.get(slug) || [];
    const gallery = images.map((image, index) => ({
      ...image,
      alt:
        index === 0
          ? String(frontmatter.coverAlt || frontmatter.title || image.alt)
          : image.alt
    }));

    return {
      slug,
      title: String(frontmatter.title || toTitleCase(slug)),
      description: String(frontmatter.excerpt || frontmatter.description || ''),
      fullDescription: String(frontmatter.excerpt || frontmatter.description || ''),
      category,
      categoryLabel: category,
      tags: normalizeArray(frontmatter.tags),
      githubUrl: frontmatter.githubUrl ? String(frontmatter.githubUrl) : '',
      liveUrl: frontmatter.liveUrl ? String(frontmatter.liveUrl) : '',
      featured: Boolean(frontmatter.featured),
      status,
      statusLabel: status === 'completed' ? 'Completed' : toTitleCase(status),
      date,
      dateLabel: formatDateLabel(date),
      image: gallery[0]?.src || DEFAULT_PROJECT_IMAGE,
      gallery,
      body,
      translations: {
        zh: {
          title: String(frontmatter.title || toTitleCase(slug)),
          body
        },
        en: english
          ? {
              title: String(english.frontmatter.title || frontmatter.title || toTitleCase(slug)),
              body: english.body
            }
          : null
      }
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllProjects() {
  return projectList;
}

export function getFeaturedProjects() {
  const featured = projectList.filter((project) => project.featured);
  return featured.length > 0 ? featured : projectList.slice(0, 3);
}

export function getProjectBySlug(slug) {
  return projectList.find((project) => project.slug === slug);
}

export function getProjectCategories() {
  const values = [...new Set(projectList.map((project) => project.category))].sort((a, b) =>
    a.localeCompare(b)
  );

  return [{ value: 'all', label: 'All' }, ...values.map((value) => ({ value, label: value }))];
}
