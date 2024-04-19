import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gim-react/',
  plugins: [react()],
  build: {
    outDir: 'build',  // Change this line if it's set to 'dist'
  }
})
