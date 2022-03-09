<template lang="pug">
header.header.g
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
		top: -290px
		grid-template-rows: none

.header__name
	grid-column: e

	@media (max-width: 736px)
		grid-column: j
		margin-top: 300px
</style>
