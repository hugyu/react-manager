import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  // root: './',
  // base: '/',
  // publicDir: 'src',
  resolve: {
    alias: {
      '@':path.resolve(__dirname, './src')
    }
  },
  server: {
    host: 'localhost',
    port: 9000,
    proxy: {
      '/api':'http://api-driver.marsview.cc'
    }
  },
  plugins: [react()],
})
