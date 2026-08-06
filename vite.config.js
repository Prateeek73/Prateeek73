import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages only serves a repo at the domain root when it is named
// <username>.github.io. This repo is Prateeek73/Prateeek73 — same name as the
// owner, which makes it the profile-README repo but NOT a user site — so Pages
// publishes it as a project site under /Prateeek73/. Every asset URL has to be
// prefixed accordingly, and the router needs a matching basename.
//
// Pages has no SPA rewrite rule, so a deep link like /experience hits the static
// file server and misses. Copying index.html to 404.html makes Pages serve the
// app shell for any unmatched path; the router then resolves the route client-side.
function spaFallback() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const out = resolve(import.meta.dirname, 'dist')
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
    },
  }
}

export default defineConfig({
  base: '/Prateeek73/',
  plugins: [react(), tailwindcss(), spaFallback()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
