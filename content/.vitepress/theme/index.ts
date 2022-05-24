import type { Theme } from 'vitepress'

import './styles/base.styl'
import Layout from './AppLayout.vue'
import EHeader from './components/EHeader.vue'
import EFooter from './components/EFooter.vue'
import ELangSwitcher from './components/ELangSwitcher.vue'
import ELinkExternal from './components/ELinkExternal.vue'
import ELinkPreview from './components/ELinkPreview.vue'

const theme: Theme = {
	Layout,
	// NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
	enhanceApp ({ app, router, siteData }) {
		// app is the Vue 3 app instance from `createApp()`. router is VitePress'
		// custom router. `siteData` is a `ref` of current site-level metadata.

		app.component('EHeader', EHeader)
		app.component('EFooter', EFooter)
		app.component('ELangSwitcher', ELangSwitcher)
		app.component('ELinkExternal', ELinkExternal)
		app.component('ELinkPreview', ELinkPreview)
	}
}

export default theme
