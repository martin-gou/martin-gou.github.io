# Martin Gou's Personal Website

This repository contains the source code for my personal website, hosted on GitHub Pages.

## Features

- React + Vite frontend
- GitHub Pages deployment via GitHub Actions
- Blog and project pages with React Router
- Markdown-based blog posts (`content/blog/posts/*.md`)
- Responsive, terminal/tmux-inspired UI

## Structure

- `src/` - React app source (pages, components, styles, data)
- `content/blog/posts/` - Markdown blog posts
- `images/` - Image assets used by the React app
- `index.html` - Vite app entry
- `vite.config.js` - Vite configuration
- `.github/workflows/deploy-pages.yml` - GitHub Pages CI/CD

## Customization

### Adding Blog Posts

1. Create a new Markdown file in `content/blog/posts/` (e.g. `my-new-post.md`)
2. Use `content/blog/POST_TEMPLATE.md`
3. Add frontmatter fields: `title`, `date`, `category`, `excerpt`, `featured`
4. Rebuild the site (`npm run build`) or run locally (`npm run dev`)

### Adding Projects

1. Add/update a project entry in `src/data/projects.js`
2. Add image assets to `images/` if needed
3. Rebuild the site

### Customizing Styles

- Edit `src/styles.css`

## Image Requirements

- Profile picture: Portrait / square image
- Project thumbnails: 16:9 ratio (recommended 800x450px)
- Blog post images: 16:9 ratio (recommended 800x450px)
- Background images: optional

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
