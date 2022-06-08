<template lang="pug">
dl.e-last-updated
	dt
		time(:datatime="isoDatetime") {{ datetime }}
	dd {{ theme.lastUpdated }}
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useData } from 'vitepress'

const { page, site, theme } = useData()
const date = new Date(page.value.lastUpdated || 0)
const isoDatetime = date.toISOString()
const datetime = ref('')

onMounted(() => {
	watchEffect(() => {
		datetime.value = date.toLocaleString(site.value.lang, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		})
	})
})
</script>

<style lang="stylus" scoped>
.e-last-updated
	padding-left: 30px
	margin-top: 180px
</style>
