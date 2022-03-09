<script>
	let className;
	export { className as class };
	export let block;
</script>

{#if block.tag === 'h1'}
	<h1 class="{className}">{block.title}</h1>
{:else if block.tag === 'h2'}
	<h2 class="{className}">{block.title}</h2>
{:else}
	<h3 class="{className}">{block.title}</h3>
{/if}
