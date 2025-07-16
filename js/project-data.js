// Central project data - all project information is stored here
const projects = {
    'portfolio_website': {
        id: 'portfolio_website',
        title: 'Personal Portfolio Website',
        description: 'A responsive personal portfolio website built with modern web technologies.',
        fullDescription: 'This personal portfolio website was designed and developed to showcase my skills, projects, and professional experience. The goal was to create a clean, modern, and responsive website that effectively communicates my personal brand and technical abilities.',
        image: 'images/project1.jpg',
        detailImages: [
            'images/project1-detail1.jpg',
            'images/project1-detail2.jpg',
            'images/project1-detail3.jpg',
            'images/project1-detail4.jpg'
        ],
        category: 'web',
        tags: ['HTML', 'CSS', 'JavaScript'],
        url: 'projects/project1.html',
        githubUrl: 'https://github.com/martin-gou/project1',
        liveUrl: '#',
        featured: true,
        status: 'completed',
        date: '2024-12-15',
        // Additional project details
        challenges: 'Creating a responsive design that works across all devices while maintaining visual appeal and performance.',
        solution: 'Implemented CSS Grid and Flexbox for layouts, used modern JavaScript for interactions, and optimized images for web.',
        technologies: ['HTML5', 'CSS3', 'JavaScript ES6', 'Git', 'VS Code']
    },
    'ecommerce_platform': {
        id: 'ecommerce_platform',
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform with product management and payment integration.',
        fullDescription: 'A comprehensive e-commerce solution built with modern web technologies, featuring user authentication, product management, shopping cart functionality, and secure payment processing.',
        image: 'images/project2.jpg',
        detailImages: [
            'images/project2.jpg',
            'images/project2.jpg',
            'images/project2.jpg'
        ],
        category: 'web',
        tags: ['React', 'Node.js', 'MongoDB'],
        url: 'projects/project2.html',
        githubUrl: 'https://github.com/martin-gou/ecommerce',
        liveUrl: '#',
        featured: true,
        status: 'completed',
        date: '2024-11-20',
        challenges: 'Implementing secure payment processing and managing complex state across the application.',
        solution: 'Used React for frontend state management, Node.js with Express for backend APIs, and integrated Stripe for payments.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT Authentication']
    },
    'fitness_app': {
        id: 'fitness_app',
        title: 'Fitness Tracking App',
        description: 'A mobile application for tracking workouts, nutrition, and fitness progress.',
        fullDescription: 'A comprehensive fitness tracking application that helps users monitor their workouts, track nutrition, and visualize their fitness progress over time.',
        image: 'images/project3.jpg',
        detailImages: [
            'images/project3.jpg',
            'images/project3.jpg',
            'images/project3.jpg'
        ],
        category: 'mobile',
        tags: ['React Native', 'Firebase', 'Redux'],
        url: 'projects/project3.html',
        githubUrl: 'https://github.com/martin-gou/fitness-app',
        liveUrl: '#',
        featured: true,
        status: 'completed',
        date: '2024-10-10',
        challenges: 'Creating a smooth user experience across iOS and Android platforms while handling real-time data.',
        solution: 'Used React Native for cross-platform development and Firebase for real-time database and authentication.',
        technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'React Navigation']
    },
    'dashboard_design': {
        id: 'dashboard_design',
        title: 'Travel App UI Design',
        description: 'A modern and intuitive UI design for a travel booking application.',
        image: 'images/project4.jpg',
        category: 'design',
        tags: ['Figma', 'UI/UX', 'Prototyping'],
        url: 'projects/project4.html',
        featured: false,
        status: 'completed',
        date: '2024-09-15'
    },
    'weather_dashboard': {
        id: 'weather_dashboard',
        title: 'Weather Dashboard',
        description: 'A web application that displays weather information using third-party APIs.',
        image: 'images/project5.jpg',
        category: 'web',
        tags: ['JavaScript', 'API', 'CSS'],
        url: 'projects/project5.html',
        featured: false,
        status: 'completed',
        date: '2024-08-01'
    },
    'data_visualization': {
        id: 'data_visualization',
        title: 'Data Visualization Tool',
        description: 'A tool for visualizing complex datasets with interactive charts and graphs.',
        image: 'images/project6.jpg',
        category: 'other',
        tags: ['Python', 'D3.js', 'Data Analysis'],
        url: 'projects/project6.html',
        featured: false,
        status: 'completed',
        date: '2024-07-20'
    }
};

// Utility functions to work with project data
const ProjectUtils = {
    // Get all projects as an array
    getAllProjects() {
        return Object.values(projects);
    },

    // Get featured projects only
    getFeaturedProjects() {
        return Object.values(projects).filter(project => project.featured);
    },

    // Get a specific project by ID
    getProject(id) {
        return projects[id];
    },

    // Get projects by category
    getProjectsByCategory(category) {
        if (category === 'all') {
            return Object.values(projects);
        }
        return Object.values(projects).filter(project => project.category === category);
    },

    // Get projects by status
    getProjectsByStatus(status) {
        return Object.values(projects).filter(project => project.status === status);
    },

    // Get all unique categories
    getCategories() {
        const categories = [...new Set(Object.values(projects).map(project => project.category))];
        return ['all', ...categories];
    },

    // Get all unique tags
    getTags() {
        const tags = [...new Set(Object.values(projects).flatMap(project => project.tags))];
        return tags;
    },

    // Generate HTML for a project card (for index.html main page)
    generateProjectCard(project, isMainPage = false) {
        const imageUrl = isMainPage ? project.image : `../${project.image}`;
        const projectUrl = isMainPage ? project.url : project.url.replace('projects/', '');
        
        return `
            <div class="project-card">
                <div class="project-image">
                    <img src="${imageUrl}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <a href="${projectUrl}" class="btn small">View Project</a>
                </div>
            </div>
        `;
    },

    // Generate HTML for project card in projects index (with overlay and filtering)
    generateProjectIndexCard(project) {
        return `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    <img src="../${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <a href="${project.url.replace('projects/', '')}" class="btn small">View Details</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    // Generate category buttons
    generateCategoryButtons() {
        const categories = this.getCategories();
        const categoryLabels = {
            'all': 'All',
            'web': 'Web Development',
            'mobile': 'Mobile Apps',
            'design': 'UI/UX Design',
            'other': 'Other'
        };

        return categories.map((category, index) => {
            const activeClass = index === 0 ? 'active' : '';
            const label = categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1);
            return `<button class="category-btn ${activeClass}" data-filter="${category}">${label}</button>`;
        }).join('');
    },

    // Render featured projects in the main page
    renderMainPageProjects(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const featuredProjects = this.getFeaturedProjects();
        container.innerHTML = featuredProjects.map(project => this.generateProjectCard(project, true)).join('');
    },

    // Render all projects in the projects index page
    renderProjectsIndexPage(containerId, categoriesId = null) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const allProjects = this.getAllProjects();
        container.innerHTML = allProjects.map(project => this.generateProjectIndexCard(project)).join('');

        // Also render category buttons if container is provided
        if (categoriesId) {
            const categoriesContainer = document.getElementById(categoriesId);
            if (categoriesContainer) {
                categoriesContainer.innerHTML = this.generateCategoryButtons();
            }
        }
    },

    // Filter projects by category
    filterProjects(category) {
        const projectCards = document.querySelectorAll('.project-card[data-category]');
        
        projectCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                card.classList.add('show');
            } else {
                card.style.display = 'none';
                card.classList.remove('show');
            }
        });

        // Update active button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            }
        });
    },

    // Initialize project filtering
    initializeFiltering() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-btn')) {
                const category = e.target.dataset.filter;
                this.filterProjects(category);
            }
        });
    },

    // Get current project ID from URL or filename
    getCurrentProjectId() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        // Extract project ID from filename (remove .html extension)
        const projectId = filename.replace('.html', '');
        
        // Map common filenames to project IDs
        const filenameMap = {
            'project1': 'portfolio_website',
            'project2': 'ecommerce_platform',
            'project3': 'fitness_app',
            'project4': 'dashboard_design',
            'project5': 'weather_dashboard',
            'project6': 'data_visualization'
        };
        
        return filenameMap[projectId] || projectId;
    },

    // Load current project data and update page elements
    loadCurrentProjectPage() {
        const projectId = this.getCurrentProjectId();
        const project = this.getProject(projectId);
        
        if (!project) {
            console.error('Project not found:', projectId);
            return false;
        }

        // Update page title
        const titleElement = document.getElementById('page-title');
        if (titleElement) {
            titleElement.textContent = `${project.title} - Martin Gou`;
        }
        
        // Update project title
        const projectTitleElement = document.getElementById('project-title');
        if (projectTitleElement) {
            projectTitleElement.textContent = project.title;
        }
        
        // Update project meta links
        const githubLinkElement = document.getElementById('github-link');
        if (githubLinkElement && project.githubUrl) {
            githubLinkElement.href = project.githubUrl;
        }
        
        const liveLinkElement = document.getElementById('live-link');
        if (liveLinkElement && project.liveUrl) {
            liveLinkElement.href = project.liveUrl;
        }
        
        // Update project overview
        const overviewElement = document.getElementById('project-overview');
        if (overviewElement && project.fullDescription) {
            overviewElement.textContent = project.fullDescription;
        }
        
        // Update project gallery
        this.loadProjectGallery(project);
        
        // Update project details sections
        this.loadProjectDetails(project);
        
        return true;
    },

    // Load project gallery images
    loadProjectGallery(project) {
        const galleryContainer = document.getElementById('project-gallery-container');
        if (!galleryContainer || !project.detailImages) return;
        
        const galleryHTML = project.detailImages.map((image, index) => `
            <div class="gallery-item">
                <img src="../${image}" alt="${project.title} - Image ${index + 1}">
            </div>
        `).join('');
        
        galleryContainer.innerHTML = galleryHTML;
    },

    // Load project details (technologies, challenges, etc.)
    loadProjectDetails(project) {
        // Update technologies
        const techContainer = document.getElementById('technologies-container');
        if (techContainer && project.technologies) {
            techContainer.innerHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        }
        
        // Update challenges
        const challengesElement = document.getElementById('project-challenges');
        if (challengesElement && project.challenges) {
            challengesElement.textContent = project.challenges;
        }
        
        // Update solution
        const solutionElement = document.getElementById('project-solution');
        if (solutionElement && project.solution) {
            solutionElement.textContent = project.solution;
        }
    },

    // Load related projects for project detail page
    loadRelatedProjects() {
        const projectId = this.getCurrentProjectId();
        const currentProject = this.getProject(projectId);
        
        if (!currentProject) return;
        
        // Get projects from the same category, excluding the current project
        const relatedProjects = this.getProjectsByCategory(currentProject.category)
            .filter(project => project.id !== projectId)
            .slice(0, 3); // Show up to 3 related projects
        
        // If not enough projects in same category, add projects from other categories
        if (relatedProjects.length < 3) {
            const otherProjects = this.getAllProjects()
                .filter(project => project.id !== projectId && project.category !== currentProject.category)
                .slice(0, 3 - relatedProjects.length);
            relatedProjects.push(...otherProjects);
        }
        
        // Generate HTML for related projects
        const container = document.getElementById('related-projects-container');
        if (container && relatedProjects.length > 0) {
            container.innerHTML = relatedProjects.map(project => this.generateRelatedProjectCard(project)).join('');
        }
    },

    // Generate HTML for a related project card
    generateRelatedProjectCard(project) {
        return `
            <div class="project-card">
                <div class="project-image">
                    <img src="../${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <a href="${project.url.replace('projects/', '')}" class="btn small">View Project</a>
                </div>
            </div>
        `;
    },

    // ...existing code...
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, ProjectUtils };
}
