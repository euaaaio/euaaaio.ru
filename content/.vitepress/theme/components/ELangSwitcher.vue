<template lang="pug">
a.lang-switcher(:href="href")
	span {{ t.lang }}
		| &nbsp;—&nbsp;
	span {{ t.lang_alt }}
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const href = computed(() => lang.value === 'en-US' ? '/ru/' : '/')
const t = computed(() => {
	return lang.value === 'en-US'
		? {
			lang: 'English',
			lang_alt: 'Russian'
		}
		: {
			lang: 'Русский',
			lang_alt: 'English'
		}
})
</script>

<style lang="stylus" scoped>
.lang-switcher
	position: relative

	> span:first-child
		position: absolute
		left: 0
		transform: translateX(-100%)
</style>
