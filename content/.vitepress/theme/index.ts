import type { Theme } from 'vitepress'

import './styles/base.styl'
import Layout from './App.vue'
import EHeader from './components/EHeader.vue'
import EFooter from './components/EFooter.vue'
import EContent from './components/EContent.vue'
import ELangSwitcher from './components/ELangSwitcher.vue'
import ELinkExternal from './components/ELinkExternal.vue'
import ELinkPreview from './components/ELinkPreview.vue'

const theme: Theme = {
	Layout,
	enhanceApp ({ app }) {
		app.component('EHeader', EHeader)
		app.component('EFooter', EFooter)
		app.component('EContent', EContent)
		app.component('ELangSwitcher', ELangSwitcher)
		app.component('ELinkExternal', ELinkExternal)
		app.component('ELinkPreview', ELinkPreview)
	}
}

export default theme
