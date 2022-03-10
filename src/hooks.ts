import { handleLanguage } from '@/libs/language';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = handleLanguage(event);
	const response = await resolve(event);

	if (response.headers.get('content-type')?.startsWith('text/html')) {
		const body = await response.text();
		return new Response(body.replace('<html lang="en"', `<html lang="${lang}"`), response);
	}

	return response;
};

export async function getSession(event) {
	return {
		language: handleLanguage(event)
	};
}
