<template lang="pug">
header.header.g(:class="{ '--home': isRoot }")
	a.header__name(:href="href") {{ name }}
</template>

<script lang="ts" setup>
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()
const data = useData()

const isRoot = computed(() => ['/', '/ru'].includes(route.path))
const name = computed(() => data.site.value.title)
const href = computed(() => data.localePath.value)
</script>

<style lang="stylus">
.header
	position: sticky
	top: 10px
	grid-auto-rows: 0px
	width: 100%
	color: var(--p-color-black)

	@media (prefers-color-scheme: dark)
		color: var(--p-color-white)

	@media (max-width: 736px)
		position: inherit

	&.--home
		@media (max-width: 736px)
			position: sticky
			top: -210px

			.header__name
				margin-top: 220px

.header__name
	grid-column: e

	@media (max-width: 736px)
		grid-column: j
</style>
