<template lang="pug">
time.e-article-date(:datatime="isoDatetime") {{ datetime }}
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useData } from 'vitepress'

const { page, site } = useData()
const date = new Date(page.value.frontmatter.date || 0)
const isoDatetime = date.toISOString()
const datetime = ref('')

onMounted(() => {
	watchEffect(() => {
		datetime.value = date.toLocaleString(site.value.lang, {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric'
		})
	})
})
</script>
