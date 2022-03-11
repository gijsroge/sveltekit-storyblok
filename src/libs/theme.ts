import cookie from 'cookie';

export function getThemeFromRequest(request) {
	const cookies = cookie.parse(request.headers.get('cookie'));
	return cookies.theme || 'system';
}
