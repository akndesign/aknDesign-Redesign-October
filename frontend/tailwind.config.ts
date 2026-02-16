import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/sections/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['selector', '[data-mode="dark"]'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},

			fontFamily: {
				'gtalpina-medium-italic': [
					'var(--font-gtalpina-medium-italic)',
				],
				blogh: ['var(--font-blogh)'],
				'roobert-regular': ['var(--font-roobert-regular)'],
				'gtalpina-bold-italic': ['var(--font-gtalpina-bold-italic)'],
				'gteesti-medium': ['var(--font-gteesti-medium)'],
				'neuemontreal-medium': ['var(--font-neuemontreal-medium)'],
				'instrumental-serif': ['var(--font-instrument-serif)'],
				'gtalpina-condensed-medium-italic': [
					'var(--font-gtalpina-condensed-medium-italic)',
				],
				'reckless-light': ['var(--font-reckless-light)'],
				'reckless-light-italic': ['var(--font-reckless-light-italic)'],
				'neuemontreal-regular': ['var(--font-neuemontreal-regular)'],
			},
		},
	},
	plugins: [],
};
export default config;
