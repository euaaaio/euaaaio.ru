import { createRouter } from '@nanostores/router'

interface Routes {
	'IndexView': 'lang'
}

export let router = createRouter<Routes>({
	'IndexView': '/:lang'
})
