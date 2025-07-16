# Blog Data Management System

## Overview
This system centralizes all blog post information in a single JavaScript file (`js/blog-data.js`), eliminating the need to manually update blog information in multiple places across your website.

## How it Works

### 1. Centralized Data (`js/blog-data.js`)
All blog posts are defined as objects in the `blogPosts` variable. Each post contains:
- `id`: Unique identifier for the post
- `title`: Post title
- `excerpt`: Brief description/summary
- `date`: Publication date
- `category`: Post category
- `image`: Image paths (horizontal and vertical versions)
- `url`: Relative URL to the post
- `featured`: Whether the post should appear on the main page

### 2. Automatic Rendering
The system automatically renders blog posts in:
- **Main page** (`index.html`): Shows only featured posts
- **Blog index** (`blog/index.html`): Shows all posts

## Adding a New Blog Post

To add a new blog post, simply add a new entry to the `blogPosts` object in `js/blog-data.js`:

```javascript
'new_post_id': {
    id: 'new_post_id',
    title: 'Your New Post Title',
    excerpt: 'A brief description of your post content.',
    date: 'July 17, 2025',
    category: 'Technology', // or 'Life', 'Programming', 'Career', etc.
    image: {
        horizontal: 'images/your-new-image.jpg',
        vertical: 'images/your-new-image.jpg'
    },
    url: 'blog/your-new-post.html',
    featured: true // Set to true if you want it on the main page
}
```

That's it! The post will automatically appear on both the main page (if featured) and the blog index page.

## Benefits

1. **Single Source of Truth**: All blog information is in one place
2. **Easy Maintenance**: Change a post's title, date, or description in just one location
3. **Consistency**: No risk of having different information in different places
4. **Efficiency**: Adding new posts is much faster
5. **Scalability**: Easy to add new features like filtering, sorting, or search

## File Structure

```
js/
├── blog-data.js     # Central blog data and utility functions
└── main.js          # Main JavaScript file (updated to load blog data)

index.html           # Main page (updated to use dynamic blog loading)
blog/
└── index.html       # Blog index page (updated to use dynamic blog loading)
```

## Future Enhancements

This system can be easily extended to include:
- Blog post search functionality
- Category filtering
- Tag support
- Reading time estimation
- Related posts suggestions
- RSS feed generation
