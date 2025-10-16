import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mon-portfolio/', // 👈 nom de ton dépôt GitHub
})
