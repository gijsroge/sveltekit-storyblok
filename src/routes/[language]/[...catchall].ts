import Storyblok from '@/storyblok/client';
import { loaderHandler } from '@/storyblok/loaderHandler';

export async function get({ params }) {
	const language = params['language'] || 'nl-be';
	const slug = params['catchall'] || 'index';

	try {
		const page = await Storyblok.getStory(`${language}/${slug}`, {
			version: 'draft'
		});

		const blocks = page.data.story.content.body;

		return {
			body: { page, blocks, loadersData: await loaderHandler(blocks) }
		};
	} catch (error) {
		return {
			message: error.message,
			status: error.response.status
		};
	}
}
