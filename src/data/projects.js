import projectOneImage from '../../images/project1.jpg';
import projectOneDetail1 from '../../images/project1-detail1.jpg';
import projectOneDetail2 from '../../images/project1-detail2.jpg';
import projectOneDetail3 from '../../images/project1-detail3.jpg';
import projectOneDetail4 from '../../images/project1-detail4.jpg';
import projectTwoImage from '../../images/project2.jpg';
import projectThreeImage from '../../images/project3.jpg';
import projectFourImage from '../../images/project4.jpg';
import projectFiveImage from '../../images/project5.jpg';
import projectSixImage from '../../images/project6.jpg';

const CATEGORY_LABELS = {
  all: 'All',
  web: 'Web Development',
  mobile: 'Mobile Apps',
  design: 'UI / UX Design',
  other: 'Other'
};

function formatDateLabel(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

function enrichProject(project) {
  return {
    ...project,
    categoryLabel: CATEGORY_LABELS[project.category] || project.category,
    statusLabel: project.status === 'completed' ? 'Completed' : 'In Progress',
    dateLabel: formatDateLabel(project.date),
    subtitle: project.subtitle || CATEGORY_LABELS[project.category] || 'Project'
  };
}

const projectList = [
  {
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    subtitle: 'Design + Frontend',
    description: 'A responsive personal portfolio website built with modern web technologies.',
    fullDescription:
      'This personal portfolio website was designed and developed to showcase my skills, projects, and professional experience. The goal was to create a clean, modern, and responsive site that communicates my personal brand and technical ability clearly.',
    image: projectOneImage,
    gallery: [
      { src: projectOneDetail1, alt: 'Portfolio homepage hero section' },
      { src: projectOneDetail2, alt: 'Portfolio about and profile section' },
      { src: projectOneDetail3, alt: 'Portfolio projects section' },
      { src: projectOneDetail4, alt: 'Portfolio contact section' }
    ],
    category: 'web',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/martin-gou/project1',
    liveUrl: '#',
    featured: true,
    status: 'completed',
    date: '2024-12-15',
    challenges:
      'Creating a responsive design that works across devices while maintaining visual consistency and performance.',
    solution:
      'Used modern CSS layout patterns, modular page sections, and progressively enhanced interactions to balance aesthetics and maintainability.',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6', 'Git', 'VS Code'],
    features: [
      'Responsive layout across desktop and mobile',
      'Animated sections and interactive cards',
      'Project and blog previews on homepage',
      'Personal branding and portfolio storytelling'
    ],
    futureImprovements: [
      'Migrate all legacy pages into a single React app',
      'Add content analytics and search',
      'Introduce richer project case studies'
    ]
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    subtitle: 'Full-stack Practice',
    description:
      'A full-featured e-commerce platform concept with product management and payment integration flows.',
    fullDescription:
      'A comprehensive e-commerce concept project focused on key commerce workflows, user authentication, product browsing, and checkout experience design.',
    image: projectTwoImage,
    gallery: [{ src: projectTwoImage, alt: 'E-commerce concept preview' }],
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/martin-gou/ecommerce',
    liveUrl: '#',
    featured: true,
    status: 'completed',
    date: '2024-11-20',
    challenges:
      'Handling complex application state across shopping, authentication, and order flows in a scalable way.',
    solution:
      'Split responsibilities across frontend UI state, backend APIs, and database models with clear boundaries and reusable components.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT Authentication'],
    features: ['Product catalog browsing', 'Cart and checkout flow', 'Authentication and user accounts']
  },
  {
    slug: 'fitness-tracking-app',
    title: 'Fitness Tracking App',
    subtitle: 'Mobile Product Thinking',
    description:
      'A mobile app concept for tracking workouts, nutrition, and progress with habit-friendly UX.',
    fullDescription:
      'A cross-platform fitness tracking concept focused on user retention, progress visualization, and easy logging behavior across daily routines.',
    image: projectThreeImage,
    gallery: [{ src: projectThreeImage, alt: 'Fitness app concept screen' }],
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com/martin-gou/fitness-app',
    liveUrl: '#',
    featured: true,
    status: 'completed',
    date: '2024-10-10',
    challenges:
      'Balancing real-time sync, smooth mobile UI interactions, and a simple workflow for habit tracking.',
    solution:
      'Used a cross-platform architecture and reusable mobile components with a backend service supporting auth and sync.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'React Navigation'],
    features: ['Workout logging', 'Progress tracking', 'Habit-focused UX']
  },
  {
    slug: 'travel-app-ui-design',
    title: 'Travel App UI Design',
    subtitle: 'Interface Design',
    description: 'A modern and intuitive UI design concept for a travel booking application.',
    fullDescription:
      'A UI/UX exploration focused on travel discovery, booking flows, and visual hierarchy for high-information mobile screens.',
    image: projectFourImage,
    gallery: [{ src: projectFourImage, alt: 'Travel app UI mockup' }],
    category: 'design',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    featured: false,
    status: 'completed',
    date: '2024-09-15',
    technologies: ['Figma', 'Design Systems', 'Interactive Prototypes']
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    subtitle: 'API Integration',
    description: 'A web application that displays weather information using third-party APIs.',
    fullDescription:
      'A lightweight dashboard project used to practice API integration, asynchronous UI updates, and clear data presentation.',
    image: projectFiveImage,
    gallery: [{ src: projectFiveImage, alt: 'Weather dashboard screen' }],
    category: 'web',
    tags: ['JavaScript', 'API', 'CSS'],
    featured: false,
    status: 'completed',
    date: '2024-08-01',
    technologies: ['JavaScript', 'REST API', 'CSS', 'HTML'],
    features: ['Location search', 'Current weather and forecast display']
  },
  {
    slug: 'data-visualization-tool',
    title: 'Data Visualization Tool',
    subtitle: 'Data + Interaction',
    description: 'A tool for visualizing datasets with interactive charts and graphs.',
    fullDescription:
      'A data-focused project exploring how to present complex information through interactive visuals and better user controls.',
    image: projectSixImage,
    gallery: [{ src: projectSixImage, alt: 'Data visualization interface concept' }],
    category: 'other',
    tags: ['Python', 'D3.js', 'Data Analysis'],
    featured: false,
    status: 'completed',
    date: '2024-07-20',
    technologies: ['Python', 'D3.js', 'Data Processing']
  }
].map(enrichProject);

export function getAllProjects() {
  return projectList;
}

export function getFeaturedProjects() {
  return projectList.filter((project) => project.featured);
}

export function getProjectBySlug(slug) {
  return projectList.find((project) => project.slug === slug);
}

export function getProjectCategories() {
  const values = [...new Set(projectList.map((project) => project.category))];
  return [{ value: 'all', label: CATEGORY_LABELS.all }, ...values.map((value) => ({
    value,
    label: CATEGORY_LABELS[value] || value
  }))];
}
