<template lang="pug">
main.g
	.name
		span Eduard Aksamitov
	dl.contact
		dt
			link-external(href="mailto:hello@euaaaio.ru") hello@euaaaio.ru
		dd for what really matters
		dt 00 911 785 85 70
		dd for silence
	dl.spotify(v-if="spotify.isPlaying")
		dt
			icon-spotify
			link-external(:href="spotify.url") {{ spotify.artists }}<br>{{ spotify.song }}
		dd playing on Spotify
	dl.username
		dt euaaaio
		dd as alias to find me
	.follow
		ul
			li
				link-external(href="https://open.spotify.com/user/bt3c50mixhdyv8qb56a6hpnbi") Spotify
		ul
			li
				link-external(href="https://t.me/euaaaio") Telegram
			li
				link-external(href="https://discordapp.com/users/euaaaio#2400") Discord
		ul
			li
				link-external(	href="https://instagram.com/euaaaio") Instagram
			li
				link-external(href="https://facebook.com/euaaaio") Facebook
			li
				link-external(href="https://twitter.com/euaaaio") Twitter
			li
				link-external(href="https://vk.com/euaaaio") VK
		ul
			li
				link-external(href="https://pinterest.com/suprematist") Pinterest
			li
				link-external(href="https://behance.com/euaaaio") Behance
			li
				link-external(href="https://dribbble.com/euaaaio") Dribbble
			li
				link-external(href="https://ello.co/euaaaio") Ello
		ul
			li
				link-external(href="https://github.com/euaaaio") Github
	dl.gpg
		dt
			span.mark GPG
			span 8A96 72CC F199 75E6
		dd for verifying
the-footer
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useSpotifyNow } from './composables/useSpotifyNow'
import LinkExternal from './components/LinkExternal.vue'
import IconSpotify from './components/IconSpotify.vue'
import TheFooter from './components/TheFooter.vue'

let spotify = import.meta.env.SSR
	? ref<{ isPlaying: false }>({ isPlaying: false })
	: useSpotifyNow()
</script>

<style lang="stylus" scoped>
.name
	position: sticky
	top: 10px
	grid-area: 1 / e / 1 / span 2
	text-transform: lowercase
	user-select: none
	mix-blend-mode: difference

	span
		user-select: auto

	@media (max-width: 736px)
		grid-area: 1 / j

.contact
	grid-area: 1 / j / span 2 / span 2

	dd
		margin-bottom: 20px

	@media (max-width: 736px)
		grid-row: 4

.spotify
	grid-area: 13 / e / span 2 / span 2

	dt a
		display: block
		margin: 10px 0

	@media (max-width: 736px)
		grid-area: 8 / j
		height: 240px

.username
	grid-area: 6 / j / span 2 / span 2
	margin-top: 20px

	@media (max-width: 736px)
		grid-row: 9

.follow
	display: flex
	grid-area: 8 / h / span 3 / span 5
	gap: 20px

	ul
		flex: 1

	li
		a
			display: inline-block
			padding: 10px 0
			text-decoration: underline
			text-transform: lowercase

		&:first-child
			a
				padding-top: 0

	@media (max-width: 736px)
		display: grid
		grid-area: 11 / j / span 8
		grid-template-rows: 180px 120px 60px
		grid-template-columns: 1fr 1fr
		gap: 60px 20px

		ul:nth-child(1)
			order: 5
		ul:nth-child(2)
			order: 3
		ul:nth-child(5)
			order: 4

.gpg
	grid-area: 14 / j / span 1 / span 2

	.mark
		padding-right: 20px
		margin-left: -52px

	@media (max-width: 736px)
		grid-row: 21
</style>
