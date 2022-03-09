<script>
	let className;
	export { className as class };
	export let block;
</script>

{#if block.tag === 'h1'}
	<h1 class="text-4xl {className}">{block.title}</h1>
{:else if block.tag === 'h2'}
	<h2 class="text-3xl {className}">{block.title}</h2>
{:else}
	<h3 class="text-2xl {className}">{block.title}</h3>
{/if}
