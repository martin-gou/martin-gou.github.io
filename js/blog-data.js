// Central blog post data - all blog information is stored here
const blogPosts = {
    'meaning_of_life': {
        id: 'meaning_of_life',
        title: 'The meaning of LIFE (Some of my Thoughts)',
        excerpt: 'What is the meaning of existence of yourself? Let\'s explore this through my experience.',
        date: 'July 16, 2025',
        category: 'Life',
        image: {
            horizontal: 'images/blog/meaning_of_life_horizontal.png',
            vertical: 'images/blog/meaning_of_life.png'
        },
        url: 'blog/meaning_of_life.html',
        featured: true
    },
    'thinking': {
        id: 'thinking',
        title: 'My tips for learning and thinking',
        excerpt: 'Some helpful tips that I found very helpful for myself in learning and thinking',
        date: 'July 17, 2025',
        category: 'Life',
        image: {
            horizontal: 'images/blog2.jpg',
            vertical: 'images/blog2.jpg'
        },
        url: 'blog/thinking.html',
        featured: true
    },
    'chinese_cooking': {
        id: 'chinese_cooking',
        title: 'Why Chinese food is so spicy and full of oil先占个坑',
        excerpt: '中国菜有重油重辣的特点，这是为什么呢？.',
        date: 'July 16, 2025',
        category: 'Life',
        image: {
            horizontal: 'images/blog2.jpg',
            vertical: 'images/blog2.jpg'
        },
        url: 'blog/chinese cooking copy.html',
        featured: false
    },
    'web_development_demo': {
        id: 'web_development_demo',
        title: 'Getting Started with Web Development (Demo)',
        excerpt: 'An introduction to modern web development technologies and practices. Learn about HTML, CSS, JavaScript, and more.',
        date: 'May 21, 2025',
        category: 'Technology',
        image: {
            horizontal: 'images/blog1.jpg',
            vertical: 'images/blog1.jpg'
        },
        url: 'blog/post1.html',
        featured: false
    },
    'javascript_tips': {
        id: 'javascript_tips',
        title: 'Mastering JavaScript: Tips and Tricks',
        excerpt: 'Advanced JavaScript techniques to level up your coding skills. Learn about closures, promises, async/await, and more.',
        date: 'May 10, 2025',
        category: 'Programming',
        image: {
            horizontal: 'images/blog3.jpg',
            vertical: 'images/blog3.jpg'
        },
        url: 'blog/post3.html',
        featured: false
    },
    'tech_career': {
        id: 'tech_career',
        title: 'Navigating a Career in Tech',
        excerpt: 'Insights and advice for building a successful career in the technology industry. From job hunting to skill development.',
        date: 'May 5, 2025',
        category: 'Career',
        image: {
            horizontal: 'images/blog4.jpg',
            vertical: 'images/blog4.jpg'
        },
        url: 'blog/post4.html',
        featured: false
    }
};

// Utility functions to work with blog data
const BlogUtils = {
    // Get all blog posts as an array
    getAllPosts() {
        return Object.values(blogPosts);
    },

    // Get featured posts only
    getFeaturedPosts() {
        return Object.values(blogPosts).filter(post => post.featured);
    },

    // Get a specific post by ID
    getPost(id) {
        return blogPosts[id];
    },

    // Get posts by category
    getPostsByCategory(category) {
        return Object.values(blogPosts).filter(post => post.category === category);
    },

    // Generate HTML for a blog card (for index.html and blog/index.html)
    generateBlogCard(post, isMainPage = false) {
        const imageUrl = isMainPage ? post.image.horizontal : `../${post.image.horizontal}`;
        const postUrl = isMainPage ? post.url : post.url.replace('blog/', '');
        
        return `
            <div class="post-card">
                <div class="post-image">
                    <img src="${imageUrl}" alt="${post.title}">
                </div>
                <div class="post-info">
                    <div class="post-meta">
                        <span class="date">${post.date}</span>
                        <span class="category">${post.category}</span>
                    </div>
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <a href="${postUrl}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
    },

    // Generate HTML for blog card in blog index (different structure)
    generateBlogIndexCard(post) {
        return `
            <article class="blog-card">
                <div class="blog-image">
                    <img src="../${post.image.horizontal}" alt="${post.title}">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="date">${post.date}</span>
                        <span class="category">${post.category}</span>
                    </div>
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <a href="${post.url.replace('blog/', '')}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `;
    },

    // Get current post ID from URL or filename
    getCurrentPostId() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        // Extract post ID from filename (remove .html extension)
        const postId = filename.replace('.html', '');
        
        // Map common filenames to post IDs
        const filenameMap = {
            'meaning_of_life': 'meaning_of_life',
            'thinking': 'thinking',
            'chinese cooking copy': 'chinese_cooking',
            'post1': 'web_development_demo',
            'post3': 'javascript_tips',
            'post4': 'tech_career'
        };
        
        return filenameMap[postId] || postId;
    },

    // Load current post data and update page elements
    loadCurrentPostPage() {
        const postId = this.getCurrentPostId();
        const post = this.getPost(postId);
        
        if (!post) {
            console.error('Post not found:', postId);
            return false;
        }

        // Update page title
        const titleElement = document.getElementById('page-title');
        if (titleElement) {
            titleElement.textContent = `${post.title} - Martin Gou`;
        }
        
        // Update header background image
        const headerElement = document.getElementById('post-header');
        if (headerElement) {
            headerElement.style.backgroundImage = `url('../${post.image.horizontal}')`;
            headerElement.style.backgroundSize = 'cover';
            headerElement.style.backgroundPosition = 'center';
            headerElement.style.backgroundRepeat = 'no-repeat';
            headerElement.style.position = 'relative';
        }
        
        // Update post title
        const postTitleElement = document.getElementById('post-title');
        if (postTitleElement) {
            postTitleElement.textContent = post.title;
        }
        
        // Update post date
        const postDateElement = document.getElementById('post-date');
        if (postDateElement) {
            postDateElement.textContent = post.date;
        }
        
        // Update post category
        const postCategoryElement = document.getElementById('post-category');
        if (postCategoryElement) {
            postCategoryElement.textContent = post.category;
        }
        
        return true;
    },

    // Load related posts for the current post
    loadRelatedPosts() {
        const postId = this.getCurrentPostId();
        const currentPost = this.getPost(postId);
        
        if (!currentPost) return;
        
        // Get posts from the same category, excluding the current post
        const relatedPosts = this.getPostsByCategory(currentPost.category)
            .filter(post => post.id !== postId)
            .slice(0, 2); // Show only 2 related posts
        
        // If not enough posts in same category, add posts from other categories
        if (relatedPosts.length < 2) {
            const otherPosts = this.getAllPosts()
                .filter(post => post.id !== postId && post.category !== currentPost.category)
                .slice(0, 2 - relatedPosts.length);
            relatedPosts.push(...otherPosts);
        }
        
        // Generate HTML for related posts
        const container = document.getElementById('related-posts-container');
        if (container && relatedPosts.length > 0) {
            container.innerHTML = relatedPosts.map(post => this.generateRelatedPostCard(post)).join('');
        }
    },

    // Generate HTML for a related post card
    generateRelatedPostCard(post) {
        return `
            <div class="post-card">
                <div class="post-image">
                    <img src="../${post.image.horizontal}" alt="${post.title}">
                </div>
                <div class="post-info">
                    <div class="post-meta">
                        <span class="date">${post.date}</span>
                        <span class="category">${post.category}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="${post.url.replace('blog/', '')}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
    },

    // Render blog posts in the main page
    renderMainPagePosts(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const featuredPosts = this.getFeaturedPosts();
        container.innerHTML = featuredPosts.map(post => this.generateBlogCard(post, true)).join('');
    },

    // Render blog posts in the blog index page
    renderBlogIndexPosts(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const allPosts = this.getAllPosts();
        container.innerHTML = allPosts.map(post => this.generateBlogIndexCard(post)).join('');
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogPosts, BlogUtils };
}
