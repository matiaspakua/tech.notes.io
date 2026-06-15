import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/tech.notes.io/atlas/' : '/',
  build: {
    outDir: path.resolve(__dirname, '../atlas'),
    emptyOutDir: true,
  },
}))
