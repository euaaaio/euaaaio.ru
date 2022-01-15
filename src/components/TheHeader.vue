<template lang="pug">
header.header
	a(:href="href") {{ messages.name }}
</template>

<script lang="ts" setup>
import { useStore } from '@nanostores/vue'
import { computed } from 'vue'

import { appMessages } from '../i18n'
import { router } from '../router'

const messages = useStore(appMessages)
const routerState = useStore(router)

const href = computed(() => `/${routerState.value?.params.lang || ''}`)
</script>

<style lang="stylus">
.header
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
</style>
