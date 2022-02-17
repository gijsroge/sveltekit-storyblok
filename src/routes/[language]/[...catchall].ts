import Storyblok from '@/storyblok/client';
export async function get({ params }) {
	const language = params['language'] || 'nl-be';
	const slug = params['catchall'] || 'index';

	const page = await Storyblok.getStory(`${language}/${slug}`, {
		version: 'draft'
	});
	const blocks = page.data.story.content.body;

	return {
		body: { page, blocks }
	};
}

export const post = (request) => {
	console.log(request);
	return {
		body: {
			message: 'Ok'
		}
	};
};
