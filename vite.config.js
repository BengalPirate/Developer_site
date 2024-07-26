import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Developer_site/', // Set to your repository name
  plugins: [react()]
});
