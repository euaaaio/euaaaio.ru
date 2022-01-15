<template lang="pug">
main.g
	.name
		span {{ app.name }}
	dl.contact
		dt
			link-external(href="mailto:hello@euaaaio.ru") hello@euaaaio.ru
		dd {{ connect.email }}
		dt 00 911 785 85 70
		dd {{ connect.phone }}
	dl.spotify(v-if="spotify.isPlaying")
		dt
			icon-spotify
			link-external(:href="spotify.url") {{ spotify.artists }}<br>{{ spotify.song }}
		dd {{ connect.spotify }}
	dl.username
		dt euaaaio
		dd {{ connect.username }}
	.follow
		ul
			li
				link-external(href="https://open.spotify.com/user/bt3c50mixhdyv8qb56a6hpnbi") {{ app.spotify }}
		ul
			li
				link-external(href="https://t.me/euaaaio") {{ app.telegram }}
			li
				link-external(href="https://discordapp.com/users/euaaaio#2400") {{ app.discord }}
		ul
			li
				link-external(href="https://instagram.com/euaaaio") {{ app.instagram }}
			li
				link-external(href="https://facebook.com/euaaaio") {{ app.facebook }}
			li
				link-external(href="https://twitter.com/euaaaio") {{ app.twitter }}
			li
				link-external(href="https://vk.com/euaaaio") {{ app.vk }}
		ul
			li
				link-external(href="https://pinterest.com/suprematist") {{ app.pinterest }}
			li
				link-external(href="https://behance.com/euaaaio") {{ app.behance }}
			li
				link-external(href="https://dribbble.com/euaaaio") {{ app.dribbble }}
			li
				link-external(href="https://ello.co/euaaaio") {{ app.ello }}
		ul
			li
				link-external(href="https://github.com/euaaaio") {{ app.github }}
	dl.gpg
		dt
			span.mark GPG
			span 8A96 72CC F199 75E6
		dd {{ connect.gpg }}
the-footer
</template>

<script lang="ts" setup>
import { mapStores } from '@nanostores/vue'
import { ref } from 'vue'

import { appMessages, connectMessages } from './i18n'
import { useSpotifyNow } from './composables/useSpotifyNow'
import LinkExternal from './components/LinkExternal.vue'
import IconSpotify from './components/IconSpotify.vue'
import TheFooter from './components/TheFooter.vue'

let spotify = import.meta.env.SSR || import.meta.env.DEV
	? ref<{ isPlaying: false }>({ isPlaying: false })
	: useSpotifyNow()

let { app, connect } = mapStores({
	app: appMessages,
	connect: connectMessages
})
</script>

<style lang="stylus" scoped>
.name
	position: sticky
	top: 10px
	grid-area: 1 / e / 1 / span 2
	color: var(--p-color-black)
	text-transform: lowercase
	user-select: none
	mix-blend-mode: difference

	@media (prefers-color-scheme: dark)
		color: var(--p-color-white)

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
