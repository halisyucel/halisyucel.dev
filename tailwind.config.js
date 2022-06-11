/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#010409',
			white: '#ffffff',
			gray: '#333333',
			red: '#c0392b',
			purple: '#8e44ad',
		},
	},
	plugins: [],
};
