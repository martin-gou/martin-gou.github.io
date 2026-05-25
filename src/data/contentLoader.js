export function parseFrontmatter(raw) {
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

export function normalizeArray(value) {
  if (Array.isArray(value)) {
    return value.map(String).map((item) => item.trim()).filter(Boolean);
  }

  if (!value) {
    return [];
  }

  return String(value).split(',').map((item) => item.trim()).filter(Boolean);
}

export function estimateReadingTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDateLabel(dateValue) {
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

function normalizeValue(input) {
  const unquoted = input.replace(/^['"]|['"]$/g, '');

  if (unquoted === 'true') return true;
  if (unquoted === 'false') return false;

  if (unquoted.includes(',') && !/^\d{4}-\d{2}-\d{2}$/.test(unquoted)) {
    return unquoted.split(',').map((item) => item.trim()).filter(Boolean);
  }

  return unquoted;
}
