<template lang="pug">
section.section.g
	picture.picture
		img
	p.bio(v-html="page.bio")
	.consultancy(v-if="page.consultancy")
		preview-link(href="/consultancy" v-html="page.consultancy")
	dl.general
		dt 026
		dd {{ page.age }}
		dt.language {{ page.en }} — {{ page.ru }}
		dd {{ page.languages }}
		dt {{ page.spb }}, {{ page.russia }}
		dd {{ page.location }}
	preview-link.post(href="/projects") {{ page.projects }}
	preview-link.now(href="/now" v-html="page.now")
section.section.g.g--c
	dl.contact
		dt
			link-external(href="mailto:hello@euaaaio.ru") hello@euaaaio.ru
		dd {{ page.email }}
		dt 00 911 785 85 70
		dd {{ page.phone }}
	dl.spotify(v-if="spotify.isPlaying")
		dt
			icon-spotify
			link-external(:href="spotify.url") {{ spotify.artists }}<br>{{ spotify.song }}
		dd {{ page.spotify }}
	dl.username
		dt euaaaio
		dd {{ page.username }}
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
		dd {{ page.gpg }}
</template>

<script lang="ts" setup>
import { mapStores } from '@nanostores/vue'

import { appMessages, indexMessages } from '../i18n'
import { useSpotifyNow } from '../composables/useSpotifyNow'
import LinkExternal from '../components/LinkExternal.vue'
import IconSpotify from '../components/IconSpotify.vue'
import PreviewLink from '../components/PreviewLink.vue'

let spotify = useSpotifyNow()

let { app, page } = mapStores({
	app: appMessages,
	page: indexMessages
})
</script>

<style lang="stylus" scoped>
.bio,
.general,
.post
	grid-column: j / span 2

.consultancy,
.now
	grid-column: e

	@media (max-width: 736px)
		grid-column: j

.picture
	grid-area: 1 / 1 / span 9 / span 2
	background: var(--p-color-placeholder)

	@media (max-width: 1440px)
		grid-row: 1 / span 8

	@media (max-width: 1024px) and (min-width: 736px)
		display: none

	@media (max-width: 736px)
		grid-area: 1 / 1 / span 4 / span 1

.bio
	grid-row: span 2

	@media (max-width: 736px)
		grid-row: 7 / span 2

.consultancy
	grid-row: 3 / span 9

	@media (max-width: 736px)
		grid-row: 10 / span 2

	> *
		position: sticky
		top: 140px

		@media (max-width: 736px)
			position: inherit

.general
	grid-row: 6 / span 3
	margin-top: 10px

	@media (max-width: 736px)
		grid-row: 14 / span 4

.language
	margin-left: -73px

.post
	grid-row: 14 / span 3

	@media (max-width: 736px)
		grid-row: 21 / span 3

.now
	grid-row: 14 / span 2

	@media (max-width: 736px)
		grid-row: 24 / span 2

.contact
	grid-area: 1 / j / span 2 / span 2

.spotify
	grid-area: 13 / e / span 2 / span 2

	dt a
		display: block
		margin: 10px 0

	dd
		text-transform: none

	@media (max-width: 736px)
		grid-area: 5 / j
		height: 240px

.username
	grid-area: 6 / j / span 2 / span 2
	margin-top: 20px

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

		&:first-child
			a
				padding-top: 0

	@media (max-width: 736px)
		display: grid
		grid-area: 8 / j / span 8
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

	dt
		text-transform: uppercase

	.mark
		padding-right: 20px
		margin-left: -52px

	@media (max-width: 736px)
		grid-row: 18
</style>
