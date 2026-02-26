import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages (repo name as subpath). Remove or set to '/' for Vercel/Netlify.
  base: '/portfolio/',
})
