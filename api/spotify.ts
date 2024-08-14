import type { PlaybackState, Track } from '@spotify/web-api-ts-sdk'

const clientId = process.env.SPOTIFY_CLIENT_ID as string
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN as string

export const config = {
	runtime: 'edge'
}

export default async function handler(): Promise<unknown> {
	try {
		let accessToken = await getAccessToken()
		let player = await getNowPaying(accessToken)

		if (!player.is_playing || player.currently_playing_type !== 'track') {
			return Response.json({ playing: false })
		}

		let item = player.item as Track
		return Response.json({
			playing: true,
			artist: item.artists.map(artist => artist.name).join(', '),
			song: item.name,
			url: item.external_urls.spotify
		})
	} catch (error) {
		console.error(error)
		return Response.json({ playing: false })
	}
}

async function getAccessToken(): Promise<string> {
	let basic = btoa(`${clientId}:${clientSecret}`)

	let res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken
		}).toString()
	})

	if (res.status !== 200) {
		throw new Error('Failed to get access token')
	}

	let data = await res.json()
	return data.access_token
}

async function getNowPaying(accessToken: string): Promise<PlaybackState> {
	let res = await fetch(
		'https://api.spotify.com/v1/me/player/currently-playing',
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	)

	if (res.status !== 200) {
		throw new Error('Request now playing failed')
	}

	return res.json()
}
