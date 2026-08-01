import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://euaaaio.ru',
  build: {
    assets: 'assets',
  },
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
})
