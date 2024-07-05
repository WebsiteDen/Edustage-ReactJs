import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Edustage-ReactJs/', // Adjust this to match your GitHub Pages repository name
  build: {
    outDir: 'dist', // Set the output directory for the build
    emptyOutDir: true, // Ensure the output directory is emptied before building
  },
});
