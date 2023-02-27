declare module '*.vue' {
	import type { ComponentOptions } from 'vue'

	let component: ComponentOptions
	export default component
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
