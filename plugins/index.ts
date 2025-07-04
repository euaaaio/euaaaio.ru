import type { RemarkPlugin } from '@astrojs/markdown-remark'
import { execSync } from 'node:child_process'

export function remarkLastUpdated(): RemarkPlugin {
	return (tree, file) => {
		const filepath = file.history[0]
		const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`)
		file.data.astro.frontmatter.lastUpdated = result.toString()
	}
}
