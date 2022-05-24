<template lang="pug">
footer.footer.g
	.copyright
		p.mark ©
		p.year
			span.start 1995 —&nbsp;
			span.today {{ new Date().getFullYear() }}
			span.end — ready <br>to die
</template>

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
