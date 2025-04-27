import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: './', // Ensure Vite uses the correct root folder
  build: {
    outDir: 'dist', // Explicit output directory
    rollupOptions: {
      input: './index.html', // Ensure Vite reads index.html from the root directory
    },
  },
});
