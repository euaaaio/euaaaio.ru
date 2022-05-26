import type { Theme } from 'vitepress'

import './styles/base.styl'
import Layout from './App.vue'
import EHeader from './components/EHeader.vue'
import EFooter from './components/EFooter.vue'
import EContent from './components/EContent.vue'
import ELinkPreview from './components/ELinkPreview.vue'
import ELinkExternal from './components/ELinkExternal.vue'
import ELangSwitcher from './components/ELangSwitcher.vue'
import { useBrowserLanguage } from './plugins/use-browser-language'

const theme: Theme = {
	Layout,
	enhanceApp ({ app, router, siteData }) {
		app.component('EHeader', EHeader)
		app.component('EFooter', EFooter)
		app.component('EContent', EContent)
		app.component('ELangSwitcher', ELangSwitcher)
		app.component('ELinkExternal', ELinkExternal)
		app.component('ELinkPreview', ELinkPreview)

		useBrowserLanguage(siteData, router)
	}
}

export default theme
