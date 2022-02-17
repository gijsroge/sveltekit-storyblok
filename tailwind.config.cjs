module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [],
	safelist: [
		{
			pattern: /(p|mb)-(2|6|10)/
		}
	]
};
