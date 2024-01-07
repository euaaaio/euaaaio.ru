import VueDevTools from 'vite-plugin-vue-devtools'
import { defineConfigWithTheme } from 'vitepress'

import type { ThemeConfig } from './theme/index.js'

export default defineConfigWithTheme<ThemeConfig>({
	outDir: '../dist',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
		['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
		['meta', { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' }],
		['meta', { name: 'theme-color', content: '#e5e5e5', media: '(prefers-color-scheme: light)' }]
	],
	locales: {
		root: {
			label: 'English',
			lang: 'en',
			title: 'Eduard Aksamitov',
			description: 'Designer, developer, suprematist. I help launch, improve and update products and services. Quickly understand issues and solve problems.',
			themeConfig: {
				lastUpdated: 'Last updated'
			}
		},
		ru: {
			label: 'Русский',
			lang: 'ru',
			title: 'Эдуард Аксамитов',
			description: 'Дизайнер, разработчик, супрематист. Помогаю запускать, улучшать и обновлять продукты и сервисы. Быстро разбираться в вопросах и решать проблемы.',
			themeConfig: {
				lastUpdated: 'Обновлено последний раз'
			}
		}
	},
	// markdown: {
	// 	anchor: {
	// 		permalink: false
	// 	}
	// },
	lastUpdated: true,
	vite: {
		plugins: [
			VueDevTools()
		]
	}
})
