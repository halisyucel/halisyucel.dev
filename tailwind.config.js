/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				main: '40rem',
			},
			colors: {
				black: '#010409',
				white: '#ffffff',
				gray: '#333333',
				purple: '#c471ed',
				lightblue: '#12c2e9',
				red: '#f64f59',
			},
			fontFamily: {
				text: ['Signika', 'sans-serif'],
				input: ['Roboto', 'sans-serif'],
				title: ['Raleway', 'sans-serif'],
			},
			borderRadius: {
				inherit: 'inherit',
			},
			boxShadow: {
				normal: '0 0 0 4px rgba(196, 113, 237, 1)',
				error: '0 0 0 4px rgba(18, 194, 233, 1)',
			},
			spacing: {
				'input': 'calc(100% - 2rem)',
			},
		},
	},
	plugins: [],
};
