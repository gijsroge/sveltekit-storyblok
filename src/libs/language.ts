import lightcookie from 'lightcookie';
export function handleLanguage(event) {
	let language = null;
	const acceptedLanguages = ['nl-be', 'en-us'];

	// get language from url
	language = event.url.pathname.split('/')[1];

	// get language from cookie
	if (!language) {
		language = lightcookie.parse(event.request.headers.get('cookie')).language || language;
	}

	// get browser language from header
	if (!language) {
		language = event.request.headers.get('accept-language').split(',')[0];
	}

	// if language is supported
	if (acceptedLanguages.includes(language)) return language;

	// otherwise fallback
	return acceptedLanguages[0];
}
