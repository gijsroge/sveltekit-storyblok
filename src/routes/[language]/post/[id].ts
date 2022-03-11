export async function get({ params }) {
	const id = params['id'];
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

		if (response.ok) {
			return {
				body: { post: await response.json() }
			};
		}

		throw response;
	} catch (error) {
		return {
			status: error.status,
			message: error.statusText
		};
	}
}
