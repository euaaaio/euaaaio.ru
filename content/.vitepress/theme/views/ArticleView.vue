<template lang="pug">
.article-view.g
	article.article.g
		.article-content
			slot
			e-last-updated(v-if="page.frontmatter.lastUpdated")
		e-article-date.article__date(v-if="page.frontmatter.date")
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'

import EArticleDate from '../components/EArticleDate.vue'
import ELastUpdated from '../components/ELastUpdated.vue'

const { page } = useData()
</script>

<style lang="stylus" scoped>
.article-view
	grid-auto-rows: minmax(60px, auto)

.article
	position: relative
	grid-column: span 12
	grid-auto-rows: minmax(60px, auto)

	@media (max-width: 736px)
		position: inherit

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

	:deep(p),
	:deep(li)
		padding-bottom: 20px

		&:first-letter
			padding-left: 30px

	:deep(a[target="_blank"])
		text-decoration: underline
		text-decoration-color: var(--p-color-border)

.article-content
	grid-column: j / span 2

.article__date
	position: absolute
	grid-column: h
	color: var(--p-color-muted)

	@media (max-width: 736px)
		position: inherit
		grid-column: j / span 2
		margin-top: 180px
</style>
