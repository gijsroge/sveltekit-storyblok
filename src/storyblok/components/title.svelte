<script>
	export let block;
</script>

{#if block.tag === 'h1'}
	<h1>{block.title}</h1>
{:else if block.tag === 'h2'}
	<h2>{block.title}</h2>
{:else}
	<h3>{block.title}</h3>
{/if}
