/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['class', '[data-mode="dark"]'],
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				main: '40rem',
			},
			colors: {
				'bg-primary': '#ffffff',
				'bg-secondary': '#f0f0f2',
				gray: '#e5e7eb',
				black: '#575757',
				'real-black': '#000000',
			},
			fontFamily: {
				'source-sans': ['Source Sans Pro', 'sans-serif'],
			},
			boxShadow: {
				tab: '0 0 0 4px rgb(191, 219, 254)',
			},
		},
	},
	plugins: [],
};
