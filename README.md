# Martin Gou's Personal Website

This repository contains the source code for my personal website, hosted on GitHub Pages.

## Features

- React + Vite frontend
- GitHub Pages deployment via GitHub Actions
- Blog and project pages with React Router
- Folder-based blog and project content
- Responsive, quiet personal-site UI

## Structure

- `src/` - React app source (pages, components, styles, data)
- `content/blog/<slug>/content.md` - Markdown blog posts
- `content/blog/<slug>/content_english.md` - Optional English blog version
- `content/blog/<slug>/images/` - Images for a specific blog post
- `content/project/<slug>/content.md` - Markdown project pages
- `content/project/<slug>/content_english.md` - Optional English project version
- `content/project/<slug>/images/` - Images for a specific project
- `public/` - Static assets such as the favicon and background placeholder
- `index.html` - Vite app entry
- `vite.config.js` - Vite configuration
- `.github/workflows/deploy-pages.yml` - GitHub Pages CI/CD

## Customization

### Adding Blog Posts

1. Create a folder such as `content/blog/my-new-post/`
2. Use `content/blog/POST_TEMPLATE.md`
3. Add `content/blog/my-new-post/content.md`
4. Add optional English content at `content/blog/my-new-post/content_english.md`
5. Add optional images under `content/blog/my-new-post/images/`
6. Rebuild the site (`npm run build`) or run locally (`npm run dev`)

### Adding Projects

1. Create a folder such as `content/project/my-project/`
2. Use `content/project/PROJECT_TEMPLATE.md`
3. Add `content/project/my-project/content.md`
4. Add optional English content at `content/project/my-project/content_english.md`
5. Add optional images under `content/project/my-project/images/`
6. Use `content/project/my-project/images/cover.*` as the cover image
7. Rebuild the site (`npm run build`) or run locally (`npm run dev`)

### Customizing Styles

- Edit `src/styles.css`

## Image Requirements

- Project cover images: 16:9 ratio recommended
- Blog cover images: 16:9 ratio recommended
- Background image placeholder: `public/background-placeholder.svg`

## Development

To run this website locally:

1. Clone the repository
2. Install dependencies
3. Run the dev server

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
