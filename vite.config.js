import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { compressionLevel: 9 },
      jpeg: { quality: 88 },
      jpg: { quality: 88 },
      webp: { quality: 88 },
      logStats: true,
    }),
  ],
})
