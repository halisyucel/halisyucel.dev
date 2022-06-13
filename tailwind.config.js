/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				'main': '40rem'
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#010409',
			white: '#ffffff',
			gray: '#333333',
			purple: '#c471ed',
			lightblue: '#12c2e9',
			red: '#f64f59'
		},
		fontFamily: {
			text: ['Signika', 'sans-serif'],
			title: ['Raleway', 'sans-serif']
		}
	},
	plugins: [],
};
