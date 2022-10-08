import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '1sq9ou',
  e2e: {
    baseUrl: 'http://localhost:4200/',
  },
});
