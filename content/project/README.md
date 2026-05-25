# Markdown Project System

Projects are loaded from folders in `content/project/`.

## How to add a new project

1. Create a slug-style folder, e.g. `content/project/my-project/`
2. Add `content/project/my-project/content.md`
3. Optional: add `content/project/my-project/content_english.md`
4. Optional: add images under `content/project/my-project/images/`
5. Use `images/cover.*` for the project cover image
6. Rebuild the site (`npm run build`) or run locally (`npm run dev`)

## Frontmatter fields

- `title`
- `date` (recommended format: `YYYY-MM-DD`)
- `category`
- `status`
- `excerpt`
- `featured` (`true` / `false`)
- `tags` (comma-separated)
- `githubUrl`
- `liveUrl`
- `coverAlt`

## Folder shape

```text
content/project/my-project/
  content.md
  content_english.md
  images/
    cover.jpg
```

## Language files

- `content.md` is the default Chinese version.
- `content_english.md` is optional. When present, the project page shows a language switch button.
