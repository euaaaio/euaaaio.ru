import './styles/base.styl'
import { App, createSSRApp, createApp as createVueApp } from 'vue'

import AppView from './App.vue'

let isClient = typeof window !== 'undefined'

export function createApp (): { app: App<Element> } {
	return {
		app: isClient ? createVueApp(AppView) : createSSRApp(AppView)
	}
}

if (isClient) {
	let { app } = createApp()
	app.mount('#euaaaio')
}
