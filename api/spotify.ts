import type { PlaybackState, Track } from '@spotify/web-api-ts-sdk'

const clientId = process.env.SPOTIFY_CLIENT_ID!
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!

export const config = {
	runtime: 'edge',
}

export default async function handler(): Promise<unknown> {
	try {
		const accessToken = await getAccessToken()
		const player = await getNowPaying(accessToken)

		if (!player.is_playing || player.currently_playing_type !== 'track') {
			return Response.json({ playing: false })
		}

		const item = player.item as Track
		return Response.json({
			playing: true,
			artist: item.artists.map(artist => artist.name).join(', '),
			song: item.name,
			url: item.external_urls.spotify,
		})
	} catch (error) {
		console.error(error)
		return Response.json({ playing: false })
	}
}

async function getAccessToken(): Promise<string> {
	const basic = btoa(`${clientId}:${clientSecret}`)

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken,
		}).toString(),
	})

	if (response.status !== 200) {
		throw new Error('Failed to get access token')
	}

	const data = await response.json()
	return data.access_token
}

async function getNowPaying(accessToken: string): Promise<PlaybackState> {
	const response = await fetch(
		'https://api.spotify.com/v1/me/player/currently-playing',
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		},
	)

	if (response.status !== 200) {
		throw new Error('Request now playing failed')
	}

	return response.json()
}
