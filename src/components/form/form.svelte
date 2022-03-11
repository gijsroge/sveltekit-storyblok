<script>
	let className;
	export { className as class };
	export let action;
	export let method = 'GET';

	let form;
	let feedback = null;
	$: hasErrors = feedback?.errors || false;

	const submitForm = async () => {
		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: new FormData(form)
			});

			if (response.ok) {
				feedback = await response.json();
				form.reset();
				return;
			}

			throw response;
		} catch (error) {
			feedback = await error.json();
		}
	};
</script>

<form
	{action}
	novalidate
	{method}
	bind:this={form}
	on:submit|preventDefault={submitForm}
	class={className}
>
	{#if feedback?.message && !hasErrors}
		<div class="bg-green-500">{feedback.message}</div>
	{/if}
	<slot {feedback} />
</form>
