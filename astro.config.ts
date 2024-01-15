import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import rehypeExternalLinks from 'rehype-external-links'

import { remarkLastUpdated } from './plugins/index.js'

export default defineConfig({
	site: 'https://euaaaio.ru',
	build: {
		assets: 'assets'
	},
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ru'],
		routing: {
			prefixDefaultLocale: false,
			strategy: 'pathname'
		}
	},
	integrations: [
		compress(),
		sitemap()
	],
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					rel: ['noopener'],
					target: '_blank'
				}
			]
		],
		remarkPlugins: [
			// @ts-expect-error bug in Astro types
			remarkLastUpdated
		]
	},
	devToolbar: {
		enabled: false
	}
})
