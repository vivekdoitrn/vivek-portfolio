import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE is only needed for GitHub Pages project sites (e.g. "/portfolio/").
// Vercel, Netlify and user sites (<name>.github.io) use the default "/".
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
