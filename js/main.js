// Main JavaScript file for Martin Gou's personal website

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize page transitions
    initPageTransitions();
    
    // Initialize contact form
    initContactForm();
    
    // Load blog posts dynamically
    loadBlogPosts();
    
    // Load projects dynamically
    loadProjects();
});

// Initialize animations
function initAnimations() {
    // Animate hero section text elements
    const animatedElements = document.querySelectorAll('.animate-text');
    
    // Add active class with delay for each element
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('active');
        }, 300 * (index + 1));
    });
    
    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe section headers, project cards, and post cards
    document.querySelectorAll('.section-header, .project-card, .post-card, .about-content, .contact-content').forEach(element => {
        observer.observe(element);
        element.classList.add('animate-text');
    });
}

// Initialize navigation
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Change navbar style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

// Initialize page transitions
function initPageTransitions() {
    const pageTransition = document.querySelector('.page-transition');
    const links = document.querySelectorAll('a[href^="blog/"], a[href^="projects/"]');
    
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Animate page transition
            pageTransition.classList.add('active');
            
            setTimeout(() => {
                window.location.href = href;
            }, 600);
        });
    });
    
    // Hide transition element on page load
    window.addEventListener('load', () => {
        pageTransition.style.transform = 'translateY(-100%)';
        
        setTimeout(() => {
            pageTransition.style.transform = 'translateY(100%)';
            pageTransition.classList.remove('active');
        }, 500);
    });
}

// Initialize contact form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message (in a real implementation, this would happen after successful form submission)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Load blog posts from centralized data
function loadBlogPosts() {
    // Load featured posts on main page
    if (typeof BlogUtils !== 'undefined') {
        BlogUtils.renderMainPagePosts('featured-posts-container');
    }
}

// Load projects from centralized data
function loadProjects() {
    // Load featured projects on main page
    if (typeof ProjectUtils !== 'undefined') {
        ProjectUtils.renderMainPageProjects('featured-projects-container');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});