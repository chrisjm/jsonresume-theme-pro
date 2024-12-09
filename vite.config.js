import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: 'index.js',
      name: 'jsonresume-theme-pro',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['svelte', 'svelte/server'],
      output: {
        globals: {
          svelte: 'Svelte',
          'svelte/server': 'SvelteServer'
        }
      }
    }
  }
})
