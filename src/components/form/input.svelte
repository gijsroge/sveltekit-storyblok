<script>
	let className = `border border-width-2 p-2`;
	export { className as class };
	export let name;
	export let type = 'text';
	export let feedback;

	// Extract error message from the response
	$: fieldError = feedback?.inner?.find((error) => {
		return error.path === name;
	});

	// Computed boolean that determines if the field has an error
	$: hasError = !!fieldError;
</script>

<div class="inline-flex flex-col">
	<input {type} {name} class={className} class:border-red-500={hasError} />
	{#if fieldError}
		{fieldError?.message}
	{/if}
</div>
