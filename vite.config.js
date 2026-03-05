import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/3d-portfolio/',   // IMPORTANT for GitHub Pages
  plugins: [
    react(),
    tailwindcss(),
  ],
})