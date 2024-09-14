/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'bg-gray-cumtual': '#191A1E',
			'green-cumtual': '#04E95F',
			'blue-cumtual': '#007BEA'
		},
		extend: {},
	},
	plugins: [],
}
