<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/birthday-website/',  // Replace 'birthday-website' with your actual GitHub repo name (without .git)
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/birthday-website/',
  plugins: [react()]
})
>>>>>>> f7c4ab326e50502d8034fa6fd92f3e24b86d2c57
