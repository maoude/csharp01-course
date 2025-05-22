import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ✅ import path module

export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/csharp01-course/' : '/'

  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // ✅ Add this line
      },
    },
    server: {
      port: 3000,
      open: true
    },
    build: {
      outDir: 'dist'
    }
  }
})
