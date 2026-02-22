# Markdown Blog System

This site now loads blog posts from Markdown files in `content/blog/posts/`.

## How to add a new post

1. Create a new file in `content/blog/posts/` with a slug-style name, e.g. `my-new-post.md`
2. Add frontmatter metadata at the top
3. Write your content in Markdown
4. Rebuild the site (`npm run build`) or run locally (`npm run dev`)

## Frontmatter fields

- `title`
- `date` (recommended format: `YYYY-MM-DD`)
- `category`
- `excerpt`
- `featured` (`true` / `false`)
## Example

See `content/blog/POST_TEMPLATE.md`.
