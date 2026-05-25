# Markdown Blog System

This site loads blog posts from folders in `content/blog/`.

## How to add a new post

1. Create a slug-style folder, e.g. `content/blog/my-new-post/`
2. Add `content/blog/my-new-post/content.md`
3. Optional: add `content/blog/my-new-post/content_english.md`
4. Optional: add images under `content/blog/my-new-post/images/`
5. Use `images/cover.*` for the archive/detail cover image
6. Rebuild the site (`npm run build`) or run locally (`npm run dev`)

## Frontmatter fields

- `title`
- `date` (recommended format: `YYYY-MM-DD`)
- `category`
- `tags` (comma-separated)
- `excerpt`
- `featured` (`true` / `false`)
- `coverAlt`

## Example

See `content/blog/POST_TEMPLATE.md`.

## Language files

- `content.md` is the default Chinese version.
- `content_english.md` is optional. When present, the article page shows a language switch button.
