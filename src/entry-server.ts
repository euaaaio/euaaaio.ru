import { renderToString, SSRContext } from '@vue/server-renderer'

import { createApp } from './main'

export async function render (): Promise<[string, SSRContext]> {
	let { app } = createApp()
	let ctx: SSRContext = {}
	let html = await renderToString(app, ctx)
	return [html, ctx]
}
