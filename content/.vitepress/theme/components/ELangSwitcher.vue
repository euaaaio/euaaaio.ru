<template lang="pug">
a.lang-switcher(:href="href")
	span English
		| &nbsp;—&nbsp;
	span Russian
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const data = useData()
const href = computed(() => data.lang.value === 'en-US' ? '/ru/' : '/')
</script>

<style lang="stylus" scoped>
.lang-switcher
	position: relative

	> span:first-child
		position: absolute
		left: 0
		transform: translateX(-100%)
</style>
