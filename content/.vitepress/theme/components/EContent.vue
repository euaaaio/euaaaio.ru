<script lang="ts">
import { defineComponent, h } from 'vue'
import { useRoute } from 'vitepress'
import type { VNodeChild } from 'vue'

export default defineComponent({
	name: 'EContent',
	setup () {
		let route = useRoute()
		return (): VNodeChild => route.component ? h(route.component) : null
	}
})
</script>
