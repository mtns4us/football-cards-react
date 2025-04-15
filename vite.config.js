import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/football-cards-react/', // <-- Replace 'football-cards-react' with YOUR repository name!

})
