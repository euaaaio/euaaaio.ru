import { useData as useVitePressData } from 'vitepress'

import type { ThemeConfig } from '../../index.js'

export function useData (): ReturnType<typeof useVitePressData<ThemeConfig>> {
	return useVitePressData()
}
