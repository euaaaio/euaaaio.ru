<template lang="pug">
a.link-external(
	target="_blank"
	rel="noopener"
)
	slot
</template>

<style lang="stylus" scoped>
.link-external
	text-decoration: underline
	text-decoration-color: var(--p-color-border)
</style>
