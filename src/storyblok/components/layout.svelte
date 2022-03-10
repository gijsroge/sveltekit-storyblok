<script>
	import { bg, padding, margin, color, spacing, isLastElement } from '@/storyblok/layout';
	import { getContext } from 'svelte';
	let className;
	export { className as class };

	export let block;
	const blocks = block.body;

	const components = getContext('components');
	const isInContainer = getContext('isInContainer') || false;
</script>

<div
	class="{`${bg(block)} ${padding(block, isInContainer ? 'p' : 'py')} ${margin(block)} ${color(
		block
	)}`} {className}"
>
	{#each block.body as block}
		<svelte:component
			this={components[block.component].default}
			class={isLastElement(block, blocks) ? 'mb-0' : 'mb-6'}
			{block}
		/>
	{/each}
</div>
