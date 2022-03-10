import { app, footer, index } from '../locales/en.json'
import { i18n } from './store'

export { i18n } from './store'
export let appMessages = i18n('app', app)
export let indexMessages = i18n('index', index)
export let footerMessages = i18n('footer', footer)
