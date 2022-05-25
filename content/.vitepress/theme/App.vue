<template lang="pug">
e-header
article-view(v-if="isArticleLayout")
	e-content
e-content(v-else)
e-footer
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

import ArticleView from './views/ArticleView.vue'

const { frontmatter } = useData()
const isArticleLayout = computed(() => !!frontmatter.value.article)
</script>
