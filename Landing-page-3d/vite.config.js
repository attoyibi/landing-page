import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// In production the host serves public/artikel/<slug>/index.html for /artikel/<slug>/ by itself.
// Vite's dev server would answer with the React app instead, so do the same thing here.
const articleFolders = () => ({
  name: 'article-folders',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = (req.url || '').split('?')[0]
      const m = url.match(/^\/artikel\/([a-z0-9-]+(?:\/[a-z0-9-]+)?)\/?$/) || url.match(/^\/en\/articles\/([a-z0-9-]+(?:\/[a-z0-9-]+)?)\/?$/)
      const base = url.startsWith('/en/') ? path.join('en', 'articles') : 'artikel'
      const file = m && path.join(server.config.publicDir, base, m[1], 'index.html')
      if (file && fs.existsSync(file)) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(fs.readFileSync(file))
      } else next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), articleFolders()],
})
