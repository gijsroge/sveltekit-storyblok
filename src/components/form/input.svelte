<script>
	let className = `border border-width-2 p-2`;
	export { className as class };
	export let name;
	export let type = 'text';
	export let feedback;

	$: fieldError = feedback?.inner?.find((error) => {
		return error.path === name;
	});
	$: hasError = !!fieldError;
</script>

<div class="inline-flex flex-col">
	<input {type} {name} class={className} class:border-red-500={hasError} />
	{#if fieldError}
		{fieldError?.message}
	{/if}
</div>
