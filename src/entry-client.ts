import './styles/base.styl'
import { createApp, createSSRApp } from 'vue'

import { isBrowser } from './utils'
import { i18n } from './stores/i18n'
import App from './App.vue'

let app = isBrowser
	? createApp(App)
	: createSSRApp(App)

if (i18n.loading.get()) {
	let unbind = i18n.loading.listen(loading => {
		if (!loading) {
			app.mount('#euaaaio')
			unbind()
		}
	})
} else {
	app.mount('#euaaaio')
}
