import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
	outDir: '../dist',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
		['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
		['meta', { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' }],
		['meta', { name: 'theme-color', content: '#e5e5e5', media: '(prefers-color-scheme: light)' }]
	],
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Eduard Aksamitov',
			description: 'Designer, developer, suprematist. I help launch, improve and update products and services. Quickly understand issues and solve problems.'
		},
		'/ru/': {
			lang: 'ru-RU',
			title: 'Эдуард Аксамитов',
			description: 'Дизайнер, разработчик, супрематист. Помогаю запускать, улучшать и обновлять продукты и сервисы. Быстро разбираться в вопросах и решать проблемы.'
		}
	}
})
