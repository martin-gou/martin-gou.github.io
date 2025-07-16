# Individual Blog Post Dynamic Loading System

## Overview
Individual blog post pages now automatically load their metadata (title, image, date, category) and related posts from the centralized blog data, eliminating ALL repetition across your website.

## 🎯 Problem Solved
**Before**: Each blog post had hardcoded:
- Page title in `<title>` tag
- Header background image  
- Post title in header
- Post date and category
- Related posts section

**After**: Everything loads dynamically from `js/blog-data.js`
- ✅ Automatic title extraction
- ✅ Dynamic header image
- ✅ Smart related posts
- ✅ Consistent metadata everywhere

## 🔧 How It Works

### 1. Automatic Post Detection
The system automatically detects which blog post is being viewed by:
- Extracting filename from URL
- Mapping filename to post ID in blog data
- Loading corresponding post information

### 2. Dynamic Content Population
Each blog post page has placeholder elements that get populated:
```html
<title id="page-title">Loading... - Martin Gou</title>
<h1 id="post-title">Loading...</h1>
<span id="post-date">Loading...</span>
<span id="post-category">Loading...</span>
```

### 3. Smart Related Posts
- Shows posts from the same category first
- Falls back to other categories if needed
- Automatically excludes the current post
- Limits to 2 related posts

## 📝 Implementation

### For Existing Blog Posts
Update these elements in your HTML:

1. **Page Title**:
```html
<title id="page-title">Loading... - Martin Gou</title>
```

2. **Post Header**:
```html
<header class="post-header" id="post-header">
    <div class="header-overlay">...</div>
    <div class="container">
        <h1 id="post-title" style="color: #fff;">Loading...</h1>
        <div class="post-meta">
            <span><i class="far fa-calendar"></i> <span id="post-date">Loading...</span></span>
            <span><i class="far fa-folder"></i> <span id="post-category">Loading...</span></span>
        </div>
    </div>
</header>
```

3. **Related Posts**:
```html
<div class="related-grid" id="related-posts-container">
    <!-- Related posts will be dynamically loaded here -->
</div>
```

4. **Loading Script**:
```html
<script src="../js/blog-data.js"></script>
<script src="../js/main.js"></script>
<script>
document.addEventListener('DOMContentLoaded', () => {
    if (typeof BlogUtils !== 'undefined') {
        BlogUtils.loadCurrentPostPage();
        BlogUtils.loadRelatedPosts();
    }
});
</script>
```

### For New Blog Posts
1. Copy `blog/blog-post-template.html`
2. Rename to your post filename (e.g., `my-post.html`)
3. Add your content in the `<article class="post-content">` section
4. Add post data to `js/blog-data.js`

## 🚀 New BlogUtils Methods

### `getCurrentPostId()`
Automatically detects current post from URL/filename

### `loadCurrentPostPage()`
Loads and displays current post metadata:
- Updates page title
- Sets header background image
- Displays post title, date, category

### `loadRelatedPosts()`
Generates smart related posts:
- Prioritizes same category
- Excludes current post
- Shows exactly 2 related posts

### `generateRelatedPostCard(post)`
Creates HTML for individual related post cards

## 📁 File Mapping
The system maps filenames to post IDs:
```javascript
const filenameMap = {
    'meaning_of_life': 'meaning_of_life',
    'thinking': 'thinking',
    'chinese cooking copy': 'chinese_cooking',
    'post1': 'web_development_demo',
    'post3': 'javascript_tips',
    'post4': 'tech_career'
};
```

## ✨ Benefits

### 1. **Zero Duplication**
- Update post info once in `blog-data.js`
- Changes reflect everywhere automatically

### 2. **Smart Related Posts**
- Automatically generated based on categories
- Always shows relevant content
- Never shows the current post

### 3. **Consistent Design**
- All blog posts use the same layout
- Uniform styling and structure
- Professional appearance

### 4. **Easy Maintenance**
- Add new posts by copying template
- Update existing posts from one file
- No risk of inconsistent information

### 5. **SEO Optimized**
- Dynamic page titles
- Proper meta information
- Clean URL structure

## 🔄 Migration Steps

For each existing blog post:

1. **Update HTML structure** (add IDs to elements)
2. **Remove hardcoded content** (titles, dates, images)
3. **Add dynamic loading script**
4. **Test the page** to ensure data loads correctly

## 🎉 Results

- **All blog posts now use centralized data**
- **Metadata updates instantly across all pages**
- **Related posts are automatically relevant**
- **New posts take minutes to create, not hours**
- **Zero chance of inconsistent information**

Your blog system is now 100% DRY (Don't Repeat Yourself) and professional-grade! 🌟
