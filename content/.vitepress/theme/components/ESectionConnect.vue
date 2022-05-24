<template lang="pug">
section.section.g#connect
	dl.contact
		slot(name="contact")
	dl.username
		slot(name="username")
	.follow
		slot(name="follow")
	dl.gpg
		slot(name="gpg")
</template>

<script lang="ts" setup>

</script>

<style lang="stylus" scoped>
.section
	@media (max-width: 736px)
		grid-auto-rows: auto

#connect
	padding-bottom: 60px

	@media (max-width: 736px)
		padding-top: 240px
		> *
			grid-row: auto

.contact
	grid-area: 1 / j / span 2 / span 2

.username
	grid-area: 6 / j / span 1 / span 2
	margin-top: 20px

	@media (max-width: 736px)
		margin-top: 180px

.follow
	display: flex
	grid-area: 8 / h / span 3 / span 5
	gap: 20px

	:deep(ul)
		flex: 1

	:deep(li)
		a
			display: inline-block
			padding: 10px 0
			text-decoration: underline
			text-decoration-color: var(--p-color-border)

		&:first-child
			a
				padding-top: 0

	@media (max-width: 736px)
		display: grid
		grid-template-columns: 1fr 1fr
		grid-column: j
		gap: 60px 0
		margin-top: 120px

		ul:nth-child(1)
			order: 5
		ul:nth-child(2)
			order: 3
		ul:nth-child(5)
			order: 4

.gpg
	position: relative
	grid-area: 14 / j / span 1 / span 2

	:deep(dt)
		text-transform: uppercase

	:deep(.mark)
		position: absolute
		left: -20px
		transform: translateX(-100%)

	@media (max-width: 736px)
		margin-top: 180px
</style>
