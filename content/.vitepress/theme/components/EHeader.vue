<template lang="pug">
header.header.g
	a.header__name(:href="href") {{ name }}
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const data = useData()

const name = computed(() => data.site.value.title)
const href = computed(() => data.localePath.value)
</script>

<style lang="stylus">
.header
	position: sticky
	top: 10px
	z-index: 10000
	grid-auto-rows: 0px
	width: 100%
	color: var(--p-color-black)

	@media (prefers-color-scheme: dark)
		color: var(--p-color-white)

	@media (max-width: 736px)
		position: inherit

.header__name
	grid-column: e

	@media (max-width: 736px)
		grid-column: j
</style>
