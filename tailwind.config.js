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
				text: ['Roboto', 'sans-serif'],
				title: ['Raleway', 'sans-serif'],
			},
			borderRadius: {
				inherit: 'inherit',
			},
			borderColor: {
				loading: '#fff transparent transparent transparent',
			},
			boxShadow: {
				white: '0 0 0 4px rgba(255, 255, 255, 1)',
			},
			spacing: {
				input: 'calc(100% - 2rem)',
			},
			animation: {
				loading: 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
			},
		},
	},
	plugins: [],
};
