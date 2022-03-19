<template lang="pug">
header.header.g(:class="{ '--home': isHome }")
	a.header__name(:href="href") {{ messages.name }}
</template>

<script lang="ts" setup>
import { useStore } from '@nanostores/vue'
import { computed } from 'vue'

import { appMessages } from '../i18n'
import { router } from '../router'

const messages = useStore(appMessages)
const routerState = useStore(router)

const href = computed(() => `/${routerState.value?.params.lang || ''}`)
const isHome = computed(() => routerState.value?.route === 'IndexView')
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
