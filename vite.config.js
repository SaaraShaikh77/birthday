import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/birthday-website/',  // Replace 'birthday-website' with your actual GitHub repo name (without .git)
});
