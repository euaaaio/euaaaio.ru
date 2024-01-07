import type { Ref } from 'vue'

import { getCurrentScope, onScopeDispose, ref } from 'vue'

export type UseSpotifyReturn = {
	isPlaying: false
} | {
	isPlaying: true
	artists?: string
	song?: string
	url?: string
}

export function useSpotify (): Ref<UseSpotifyReturn> {
	let now = ref<UseSpotifyReturn>({
		isPlaying: false
	})

	let update = async (): Promise<void> => {
		let res = await fetch('/api/spotify')
		let value = await res.json()
		now.value = res.ok && value.is_playing
			? {
				isPlaying: value.is_playing,
				// @ts-expect-error
				artists: value.item.artists.map(i => i.name).join(', '),
				song: value.item.name,
				url: value.item.external_urls.spotify
			}
			: { isPlaying: false }
	}

	let active = true
	let loop = (): void => {
		if (!active) return
		update()
		setTimeout(loop, 10_000)
	}

	if (!import.meta.env.SSR && !import.meta.env.DEV) {
		loop()
	}

	if (getCurrentScope()) {
		onScopeDispose(() => {
			active = false
		})
	}

	return now
}
