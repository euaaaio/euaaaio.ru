import { createRouter } from '@nanostores/router'

interface Routes {
	main: 'lang'
}

export let router = createRouter<Routes>({
	main: '/:lang'
})
