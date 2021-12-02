import { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'node-fetch'

const clientId = process.env.SPOTIFY_CLIENT_ID as string
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN as string

let basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

async function getAccessToken (): Promise<{ access_token: string }> {
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
		throw new Error('Request access token failed')
	}

	// @ts-ignore
	return res.json()
}

async function getNowPaying (accessToken: string): Promise<SpotifyApi.CurrentlyPlayingResponse> {
	let res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	})

	if (res.status !== 200) {
		throw new Error('Request now playing failed')
	}

	// @ts-ignore
	return res.json()
}

export default async function handler (
	req: VercelRequest,
	res: VercelResponse
): Promise<unknown> {
	try {
		let { access_token } = await getAccessToken()
		let response = await getNowPaying(access_token)

		if (!response.is_playing) {
			return res.status(200).json({ is_playing: false })
		}

		return res.status(200).json(response)
	} catch (error) {
		console.error(error)
		return res.status(200).json({ is_playing: false })
	}
}
