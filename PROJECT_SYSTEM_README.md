# Project Data Management System

## Overview
This system centralizes all project information in a single JavaScript file (`js/project-data.js`), eliminating the need to manually update project information in multiple places across your website.

## How it Works

### 1. Centralized Data (`js/project-data.js`)
All projects are defined as objects in the `projects` variable. Each project contains:
- `id`: Unique identifier for the project
- `title`: Project title
- `description`: Brief description of the project
- `image`: Path to project image
- `category`: Project category (web, mobile, design, other)
- `tags`: Array of technology tags
- `url`: Relative URL to the project detail page
- `featured`: Whether the project should appear on the main page
- `status`: Project status (completed, in-progress, planned)
- `date`: Project completion/start date

### 2. Automatic Rendering
The system automatically renders projects in:
- **Main page** (`index.html`): Shows only featured projects
- **Projects index** (`projects/index.html`): Shows all projects with filtering

### 3. Dynamic Filtering
Projects can be filtered by category with automatic button generation and filtering functionality.

## Adding a New Project

To add a new project, simply add a new entry to the `projects` object in `js/project-data.js`:

```javascript
'my_new_project': {
    id: 'my_new_project',
    title: 'My Amazing New Project',
    description: 'A groundbreaking application that will change the world.',
    image: 'images/my-new-project.jpg',
    category: 'web', // 'web', 'mobile', 'design', 'other'
    tags: ['React', 'Node.js', 'MongoDB'],
    url: 'projects/my-new-project.html',
    featured: true, // Set to true if you want it on the main page
    status: 'completed', // 'completed', 'in-progress', 'planned'
    date: '2025-07-17'
}
```

That's it! The project will automatically appear on both the main page (if featured) and the projects index page.

## Features

### Category Filtering
- Automatic generation of category filter buttons
- Smooth filtering animations
- Dynamic button states
- Support for custom categories

### Status Tracking
- Track project completion status
- Filter by status if needed
- Visual indicators for project state

### Tag System
- Multiple technology tags per project
- Automatic tag rendering
- Consistent tag styling

## Benefits

1. **Single Source of Truth**: All project information is in one place
2. **Easy Maintenance**: Change a project's details in just one location
3. **Consistency**: No risk of having different information in different places
4. **Efficiency**: Adding new projects is much faster
5. **Scalability**: Easy to add new features like search, sorting, or advanced filtering
6. **Dynamic Filtering**: Automatic category-based filtering system

## File Structure

```
js/
├── project-data.js  # Central project data and utility functions
└── main.js          # Main JavaScript file (updated to load project data)

index.html           # Main page (updated to use dynamic project loading)
projects/
├── index.html       # Projects index page (updated to use dynamic project loading)
└── projects.js      # Project-specific JavaScript (filtering, animations)
```

## API Reference

### ProjectUtils Methods

- `getAllProjects()`: Get all projects as an array
- `getFeaturedProjects()`: Get only featured projects
- `getProject(id)`: Get a specific project by ID
- `getProjectsByCategory(category)`: Get projects filtered by category
- `getProjectsByStatus(status)`: Get projects filtered by status
- `getCategories()`: Get all unique categories
- `getTags()`: Get all unique tags
- `renderMainPageProjects(containerId)`: Render featured projects on main page
- `renderProjectsIndexPage(containerId, categoriesId)`: Render all projects with categories
- `filterProjects(category)`: Filter projects by category
- `initializeFiltering()`: Initialize click handlers for category filtering

## Future Enhancements

This system can be easily extended to include:
- Project search functionality
- Advanced filtering (by tags, status, date)
- Project sorting options
- Image galleries for projects
- Project statistics and analytics
- GitHub integration for live project data
- Project timeline visualization
