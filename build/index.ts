/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable security/detect-non-literal-require */
import { build as viteBuild } from 'vite'
import { promises as fs } from 'node:fs'
import { join } from 'node:path'
import color from 'picocolors'

interface Manifest {
	[key: string]: string[] | undefined
}

let routes = ['/', '/ru']

let root = process.cwd()
let env = 'production'

let serverEntry = join(root, './src/entry-server.ts')
let tempOutDir = join(root, './.temp-ssg')
let template = join(root, './index.html')
let outDir = join(root, './dist')

function log (text: string): void {
	console.log(`${color.bold(color.cyan('SSG'))} ${color.gray(text)}`)
}

async function build (): Promise<void> {
	log('Building client…')
	await viteBuild({
		build: {
			ssrManifest: true,
			rollupOptions: {
				input: {
					app: template
				}
			}
		},
		mode: env
	})

	log('Building server…')
	await viteBuild({
		build: {
			ssr: serverEntry,
			outDir: tempOutDir,
			minify: false,
			cssCodeSplit: false,
			rollupOptions: {
				output: {
					entryFileNames: '[name].cjs'
				}
			}
		},
		mode: env
	})

	log(`Rendering ${color.bold(routes.length)} pages…`)
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	let { render } = require(join(tempOutDir, './entry-server.cjs'))
	let manifest = JSON.parse(await fs.readFile(join(root, './dist/ssr-manifest.json'), 'utf-8'))
	let prebuildedTemplate = await fs.readFile(join(outDir, './index.html'), 'utf-8')

	for (let url of routes) {
		let fileName = url === '/' ? 'index.html' : `${url}/index.html`

		log(`Rendering ${color.bold(fileName)} page…`)
		let [html, ctx, meta] = await render(url)

		log(`Rendering links for ${color.bold(fileName)} page…`)
		let preloadLinks = await renderPreloadLinks(ctx.modules, manifest)
		html = prebuildedTemplate
			.replace('<!--app-title-->', meta.title)
			.replace('<!--app-meta-->', `<meta name="description" content="${meta.description}">`)
			.replace('<!--app-html-->', html)
			.replace('<!--preload-links-->', preloadLinks)

		let filePath = join(outDir, fileName)
		await fs.mkdir(filePath.split('index.html')[0], { recursive: true })
		await fs.writeFile(filePath, html, 'utf-8')
	}

	log('Cleaning up')
	await fs.rm(tempOutDir, { force: true, recursive: true })
	await fs.rm(join(outDir, './ssr-manifest.json'))

	log('Done')
}

async function renderPreloadLinks (modules: string[], manifest: Manifest): Promise<string> {
	let html = ''
	let seen = new Set()
	modules.forEach(id => {
		let files = manifest[id]
		if (files) {
			files.forEach(file => {
				if (!seen.has(file)) {
					seen.add(file)
					html += renderPreloadLink(file)
				}
			})
		}
	})
	return html
}

function renderPreloadLink (file: string): string {
	let html = ''
	if (file.endsWith('.js')) {
		html += `<link rel="modulepreload" crossorigin href="${file}">`
	} else if (file.endsWith('.css')) {
		html += `<link rel="stylesheet" href="${file}">`
	} else if (file.endsWith('.woff2')) {
		html += `<link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`
	}
	return html
}

build()
