import { watch } from 'vue'
import type { Router, SiteData } from 'vitepress'
import type { Ref } from 'vue'

export function useBrowserLanguage (data: Ref<SiteData>, router: Router): void {
	if (typeof navigator !== 'undefined') {
		let langs = data.value.langs
		let destroy = watch(
			() => router.route.component,
			() => {
				if (router.route.path.length > 4) {
					destroy()
				}
				if (
					router.route.component !== null &&
					Object.keys(langs).includes(router.route.path)
				) {
					// eslint-disable-next-line unicorn/no-array-reduce
					let appLanguages = Object.keys(langs).reduce<Record<string, string>>(
						(prev, path) => {
							prev[langs[path].lang] = path
							return prev
						},
						{}
					)

					let userLanguages = navigator.languages
					if (typeof navigator.languages === 'undefined') {
						userLanguages = [navigator.language]
					}

					for (let userLanguage of userLanguages) {
						if (userLanguage in appLanguages) {
							router.go(appLanguages[userLanguage])
							destroy()
							return
						}
					}

					destroy()
				}
			},
			{ immediate: true }
		)
	}
}
