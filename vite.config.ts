import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Generate static HTML files for each route (SEO-friendly)
function prerenderPages() {
  return {
    name: 'prerender-pages',
    closeBundle() {
      const docs = path.resolve(__dirname, 'docs')
      const indexHtml = fs.readFileSync(path.join(docs, 'index.html'), 'utf-8')
      
      const routes = [
        'about',
        'posterous',
        'docs/getting-started',
        'docs/api',
        'docs/workflows',
        'workflows'
      ]
      
      routes.forEach(route => {
        const dir = path.join(docs, route)
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }
        fs.writeFileSync(path.join(dir, 'index.html'), indexHtml)
      })
      
      // Copy 404.html to root of docs for GitHub Pages
      const src404 = path.join(__dirname, 'docs', '404.html')
      if (fs.existsSync(src404)) {
        fs.copyFileSync(src404, path.join(docs, '404.html'))
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), prerenderPages()],
  base: '/clawederous/',
  build: {
    outDir: 'docs'
  }
})
