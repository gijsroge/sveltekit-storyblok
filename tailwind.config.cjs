module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
	safelist: [
		{
			pattern: /(p|py|mb|bg)-(2|4|6|8|10|black|blue-500)|max-w-(4|6|8)xl/
		}
	]
};
