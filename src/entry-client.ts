import './styles/base.styl'
import { createSSRApp } from 'vue'

import { i18n } from './stores/i18n'
import App from './App.vue'

let app = createSSRApp(App)

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
