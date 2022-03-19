<template lang="pug">
the-header
main
	component(:is="view")
the-footer
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, watch } from 'vue'
import { useStore } from '@nanostores/vue'

import ConsultancyView from './views/ConsultancyView.vue'
import { router } from './router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import IndexView from './views/IndexView.vue'

export default defineComponent({
	components: {
		TheHeader,
		TheFooter,
		IndexView,
		ConsultancyView
	},
	setup () {
		let page = useStore(router)
		let view = computed(() => page.value?.route || 'index-view')

		watch(() => page.value?.path, () => {
			nextTick(() => {
				window.scrollTo({ top: 0 })
			})
		})

		return { view }
	}
})
</script>
