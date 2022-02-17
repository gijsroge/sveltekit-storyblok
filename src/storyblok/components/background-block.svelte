<script>
	export let components;
	export let block;
</script>

<div class={`bg-black text-white p-${block.padding}`}>
	{#each block.body as block}
		<svelte:component this={components[block.component].default} {components} {block} />
	{/each}
</div>
