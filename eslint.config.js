import { defineConfig } from 'eslint-config-fans'

export default defineConfig({
	typescript: true,
	astro: true,
	stylistic: {
		indent: 'tab',
	},
	perfectionist: true,
})
