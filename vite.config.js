import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nexabyte/', // Chemin d'accès pour GitHub Pages
})
