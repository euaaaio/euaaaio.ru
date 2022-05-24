<template lang="pug">
section.section.g#person
	//- picture.picture
	//- 	img
	p.bio
		slot(name="bio")
	.consultancy(v-if="slots.shortcutTop")
		slot(name="shortcutTop")
	dl.general
		dt
			e-lang-switcher
		slot(name="table")
	.post
		slot(name="article")
	.now(v-if="slots.shortcutBottom")
		slot(name="shortcutBottom")
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<style lang="stylus" scoped>
.section
	@media (max-width: 736px)
		grid-auto-rows: auto

#person
	padding-bottom: 240px

	@media (max-width: 736px)
		padding-bottom: 0px
		> *
			grid-row: auto

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
		grid-column-end: span 1
		height: 180px

.bio
	grid-row: span 2

	@media (max-width: 736px)
		margin-top: 280px

.consultancy
	grid-row: 3 / span 9

	@media (max-width: 736px)
		margin-top: 120px

	> *
		position: sticky
		top: 170px

		@media (max-width: 736px)
			position: inherit

.general
	grid-row: 6 / span 3

	@media (max-width: 736px)
		margin: 180px 0 240px

.post
	grid-row: 14 / span 2

.now
	grid-row: 14 / span 2

	@media (max-width: 736px)
		margin-top: 120px
</style>
