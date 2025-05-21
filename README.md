# Martin Gou's Personal Website

This repository contains the source code for my personal website, hosted on GitHub Pages.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Blog section for sharing thoughts and insights
- Projects section to showcase my work
- Contact form for easy communication

## Structure

- `index.html` - Main homepage
- `css/` - Stylesheets
  - `style.css` - Main stylesheet
- `js/` - JavaScript files
  - `main.js` - Main JavaScript functionality
- `images/` - Image assets
- `blog/` - Blog section
  - `index.html` - Blog listing page
  - `blog.css` - Blog-specific styles
- `projects/` - Projects section
  - `index.html` - Projects listing page
  - `projects.css` - Project-specific styles
  - `projects.js` - Project filtering and gallery functionality

## Customization

### Adding Blog Posts

1. Create a new HTML file in the `blog/` directory (e.g., `my-new-post.html`)
2. Use the following template structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include the same head content as other blog posts -->
    <title>Post Title - Martin Gou</title>
</head>
<body>
    <!-- Include navigation -->
    
    <!-- Post header -->
    <header class="post-header">
        <div class="container">
            <h1>Your Post Title</h1>
            <div class="post-meta">
                <span class="date">Date</span>
                <span class="category">Category</span>
            </div>
        </div>
    </header>
    
    <!-- Post content -->
    <div class="post-content">
        <!-- Your content here -->
    </div>
    
    <!-- Include footer -->
</body>
</html>
```

3. Add a link to your new post in `blog/index.html`

### Adding Projects

1. Create a new HTML file in the `projects/` directory (e.g., `my-new-project.html`)
2. Use the template structure from existing project pages
3. Add the project to the grid in `projects/index.html`
4. Add appropriate images to the `images/` directory

### Customizing Styles

- Edit `css/style.css` for global styles
- Edit `blog/blog.css` for blog-specific styles
- Edit `projects/projects.css` for project-specific styles

## Image Requirements

- Profile picture: Square image (recommended 500x500px)
- Project thumbnails: 16:9 ratio (recommended 800x450px)
- Blog post images: 16:9 ratio (recommended 800x450px)
- Background images: High resolution, light colors for overlay

## Development

To run this website locally:

1. Clone the repository
2. Open `index.html` in your browser

Or use a local server:

```bash
# Using Python
python -m http.server

# Using Node.js
npx serve
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.