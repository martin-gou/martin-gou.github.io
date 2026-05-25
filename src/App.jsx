import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import ShellLayout from './components/ShellLayout.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogIndexPage from './pages/BlogIndexPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import ProjectsIndexPage from './pages/ProjectsIndexPage.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<ShellLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/projects" element={<ProjectsIndexPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
