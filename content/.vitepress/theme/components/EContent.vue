<script lang="ts">
import type { VNodeChild } from 'vue'

import { useRoute } from 'vitepress'
import { defineComponent, h } from 'vue'

export default defineComponent({
	name: 'EContent',
	setup () {
		let route = useRoute()
		return (): VNodeChild => route.component ? h(route.component) : null
	}
})
</script>
