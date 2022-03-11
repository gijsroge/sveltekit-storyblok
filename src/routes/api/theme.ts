// PUT /theme
export const put = async ({ request }) => {
	const theme = await request.text();

	return {
		headers: {
			'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/`
		}
	};
};
