import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: resolveBasePath(),
  plugins: [react()]
});

function resolveBasePath() {
  const explicitBase = process.env.VITE_BASE_PATH;
  if (explicitBase) {
    return explicitBase;
  }

  const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1];
  if (!repoName) {
    return '/';
  }

  // User/organization Pages repo uses root path, project Pages uses /repo-name/
  if (repoName.endsWith('.github.io')) {
    return '/';
  }

  return `/${repoName}/`;
}
