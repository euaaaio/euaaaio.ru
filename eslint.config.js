import { defineConfig } from '@euaaaio/eslint-config'

export default defineConfig({
	typescript: true,
	astro: true,
	stylistic: {
		indent: 'tab',
	},
	perfectionist: true,
})
