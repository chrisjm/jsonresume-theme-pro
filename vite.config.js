import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '$lib': resolve(__dirname, './src/lib')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'jsonresume-theme-pro',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'Svelte'
        }
      }
    }
  }
})
