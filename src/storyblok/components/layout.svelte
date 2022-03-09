<script>
	import { bg, padding, margin, color, spacing, isLastElement } from '@/storyblok/layout';
	let className;
	export { className as class };
	export let components;
	export let block;
	export let loadersData;
	const blocks = block.body;
</script>

<div class="{`${bg(block)} ${padding(block)} ${margin(block)} ${color(block)}`} {className}">
	{#each block.body as block}
		<svelte:component
			this={components[block.component].default}
			class={isLastElement(block, blocks) ? 'mb-0' : 'mb-6'}
			{components}
			{block}
			{loadersData}
		/>
	{/each}
</div>
