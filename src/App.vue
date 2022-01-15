<template lang="pug">
component(:is="view")
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@nanostores/vue'

import IndexView from './views/IndexView.vue'
import { router } from './router'

export default defineComponent({
	components: {
		IndexView
	},
	setup () {
		let page = useStore(router)
		let view = computed(() => page.value?.route || 'index-view')
		return { view }
	}
})
</script>
