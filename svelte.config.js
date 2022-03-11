import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		inlineStyleThreshold: 100024,
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@': path.resolve('./src'),
					$utils: path.resolve('./src/utils'),
					$stores: path.resolve('./src/stores'),
					$lib: path.resolve('./src/lib'),
					$components: path.resolve('./src/components'),
					$assets: path.resolve('./src/assets')
				}
			}
		}
	}
};

export default config;
