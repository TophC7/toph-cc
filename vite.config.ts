import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const ignoredWatchPaths = [
  '**/.direnv/**',
  '**/.git/**',
  '**/.bun/**',
  '**/build/**',
  '**/result/**',
  '**/result-*/**'
]

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  clearScreen: false,
  server: {
    host: '127.0.0.1',
    port: 4040,
    watch: {
      ignored: ignoredWatchPaths
    }
  },
  preview: {
    host: '127.0.0.1',
    port: 4040
  }
})
