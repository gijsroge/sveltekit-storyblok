import { object, string, number, date, InferType } from 'yup';

export async function post({ request }) {
	let formSchema = object({
		name: string().required(),
		email: string().email().required()
	});

	// get form data
	const json = Object.fromEntries(await request.formData());
	try {
		await formSchema.validate(json, { strict: true, abortEarly: false });
	} catch (error) {
		return {
			status: 400,
			body: error
		};
	}

	const currentUrl = request.headers.get('referer');

	return {
		status: 200,
		message: 'success',
		body: {
			message: 'success'
		}
	};
}
