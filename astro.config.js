import { defineConfig } from 'astro/config'

export default defineConfig({
	build: {
		assets: 'assets'
	},
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ru'],
		routing: {
			prefixDefaultLocale: false
		}
	},
	devToolbar: {
		enabled: false
	}
})
