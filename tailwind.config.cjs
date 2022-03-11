module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	darkMode: 'class',
	plugins: [require('@tailwindcss/typography')],
	safelist: [
		{
			pattern: /(p|py|mb|bg)-(2|4|6|8|10|black|blue-500)|max-w-(4|6|8)xl/
		}
	]
};
