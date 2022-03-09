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
	position: fixed
	top: 10px
	left: calc(100% * 0.3334 + 10px) // 4 / 12
	color: var(--p-color-black)
	user-select: none
	mix-blend-mode: difference

	@media (prefers-color-scheme: dark)
		color: var(--p-color-white)

	@media (max-width: 736px)
		left: calc(100% * 0.8334 + 10px) // 10 / 12
</style>
