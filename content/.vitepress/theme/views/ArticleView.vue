<template lang="pug">
.article-view.g
	article.article
		slot
		e-last-updated(v-if="page.frontmatter.lastUpdated")
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'

import ELastUpdated from '../components/ELastUpdated.vue'

const { page } = useData()
</script>

<style lang="stylus" scoped>
.article-view
	grid-auto-rows: minmax(60px, auto)

.article
	grid-column: j / span 2

	:deep(h1)
		position: sticky
		top: 10px
		z-index: -1
		height: 120px
		font-weight: 700

		@media (max-width: 736px)
			top: -210px
			padding-top: 220px

		& + *
			margin-top: 180px

	:deep(a[target="_blank"])
		text-decoration: underline
		text-decoration-color: var(--p-color-border)

	:deep(li)
		padding-bottom: 20px

		&:first-letter
			padding-left: 30px
</style>
