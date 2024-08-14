import eslintConfigPostanu from '@postanu/eslint-config/astro'
import { defineFlatConfig } from 'eslint-define-config'

export default defineFlatConfig([
	...eslintConfigPostanu
])
