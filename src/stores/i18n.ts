import { localeFrom, browser, createI18n } from '@nanostores/i18n'
import { computed } from 'nanostores'

import { router } from '../router'

let routerLocale = computed(router, page => page?.params.lang)

let locale = localeFrom(
	routerLocale,
	browser({
		available: ['en', 'ru'] as const
	})
)

export let i18n = createI18n(locale, {
	get: async code => {
		// eslint-disable-next-line no-return-await
		return await import(`../locales/${code}.json`)
	}
})
