import { app, connect, footer, meta } from '../locales/en.json'
import { i18n } from '../stores/i18n'

export let appMessages = i18n('app', app)
export let metaMessages = i18n('meta', meta)
export let footerMessages = i18n('footer', footer)
export let connectMessages = i18n('connect', connect)
