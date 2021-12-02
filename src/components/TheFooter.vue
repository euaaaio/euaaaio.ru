<template lang="pug">
footer.footer.g
	.copyright
		p.mark ©
		p
			span.years 1995 — {{ year }}
			br
			br
			span.end — ready <br>to die
</template>

<script lang="ts" setup>
let year = new Date().getFullYear()
</script>

<style lang="stylus" scoped>
.footer
	grid-template-rows: auto

.copyright
	box-sizing: border-box

	display: flex
	flex-direction: column

	grid-area: j

	gap: 180px
	justify-content: flex-end

	height: 100vh
	padding-bottom: 80px

.years
	margin-left: -59px

.end
	color: var(--p-color-muted)
</style>
