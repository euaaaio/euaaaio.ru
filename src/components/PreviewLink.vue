<template lang="pug">
a.preview-link
	slot
</template>

<style lang="stylus" scoped>
.preview-link
	display: flex
	flex-direction: column
	gap: 20px

	&:after
		content: "→"
</style>
