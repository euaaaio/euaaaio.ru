export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recess-order',
		'@stylistic/stylelint-config',
		'stylelint-config-html/astro',
	],
	rules: {
		'@stylistic/max-line-length': null,
		'color-function-alias-notation': 'with-alpha',
		'color-hex-length': 'long',
		'selector-class-pattern': [
			'^(--)?[a-z][a-z0-9_-]*$',
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global'],
			},
		],

	},
}
