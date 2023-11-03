/** @type {import('tailwindcss').Config} */
module.exports = {
	// ...
	content: ['./index.html', './src/**/*.svelte', './node_modules/stdf/**/*.svelte'],
	theme: {
		colors: {
			// Theme Color
			primary: '#845ef7',
			dark: '#d0bfff',
			blue: '#0B24FB', // primary alias
			yellow: '#FFC043', // dark alias

			// Extended Color
			purple: '#845ef7',
			green: '#51cf66',
			orange: '#FF6937',

			// Functional Color
			success: '#11BB8D',
			warning: '#B95000',
			error: '#DA1414',
			info: '#2E5AAC',

			// Neutral Color
			black: '#000000',
			white: '#fff',
			gray1: '#23262B',
			gray2: '#2A2B2F',
			gray3: '#303239',
			gray4: '#373940',
			gray5: '#414249',
			gray6: '#747B84',
			gray7: '#DADEE3',
			gray8: '#EBEEF2',
			gray9: '#F4F6F9',
			gray10: '#FAFAFB',
			transparent: 'transparent'
		}
	},
	darkMode: 'class'
	// ...
};