import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // Base path untuk GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/kekopistreet/' : '/',
  logLevel: 'error',
  plugins: [
    // Disable Base44 plugin in production to prevent blank screen
    // Enable it back when you have real Base44 credentials
    ...(process.env.NODE_ENV !== 'production' ? [
      base44({
        legacySDKImports: false,
        hmrNotifier: true,
        navigationNotifier: true,
        analyticsTracker: true,
        visualEditAgent: true
      })
    ] : []),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
        }
      }
    }
  }
});
