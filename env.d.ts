declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
	let component: DefineComponent<{}, {}, any>
	export default component
}
