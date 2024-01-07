<template lang="pug">
a.link-preview.--external(
	v-if="external"
	target="_blank"
	rel="noopener"
): slot
a.link-preview(v-else): slot
</template>

<script lang="ts" setup>
defineProps<{ external?: boolean }>()
</script>

<style lang="stylus" scoped>
.link-preview
	display: flex
	flex-direction: column
	gap: 20px

	&:after
		content: "→"

	&.--external:after
		content: "↗"
</style>
