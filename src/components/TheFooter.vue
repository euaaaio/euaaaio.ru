<template lang="pug">
footer.footer.g
	.copyright
		p.mark ©
		p.year
			span.start 1995 —&nbsp;
			span.today {{ year }}
			span.end(v-html="t.end")
</template>

<script lang="ts" setup>
import { useStore } from '@nanostores/vue'

import { footerMessages } from '../i18n'

let year = new Date().getFullYear()
let t = useStore(footerMessages)
</script>

<style lang="stylus" scoped>
.footer
	grid-template-rows: auto

.copyright
	box-sizing: border-box

	display: flex
	flex-direction: column

	grid-area: j

	gap: 240px
	justify-content: flex-end

	height: 100vh
	padding-bottom: 120px

.year
	position: relative

.start
	position: absolute
	left: 0
	transform: translateX(-100%)

.end
	display: block
	margin-top: 20px
	color: var(--p-color-muted)
</style>
