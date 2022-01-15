import { renderToString } from '@vue/server-renderer'
import { createSSRApp } from 'vue'
import type { SSRContext } from '@vue/server-renderer'
import type { StoreValue } from 'nanostores'

import { metaMessages } from './i18n'
import { router } from './router'
import { i18n } from './stores/i18n'
import App from './App.vue'

export async function render (url: string): Promise<[
	string,
	SSRContext,
	StoreValue<typeof metaMessages>
]> {
	let app = createSSRApp(App)

	router.open(url)

	if (i18n.loading.get()) {
		await new Promise<void>(resolve => {
			let unbind = i18n.loading.listen(loading => {
				if (!loading) {
					resolve()
					unbind()
				}
			})
		})
	}

	let ctx: SSRContext = {}
	let meta = metaMessages.get()
	let html = await renderToString(app, ctx)
	return [html, ctx, meta]
}
