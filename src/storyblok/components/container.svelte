<script>
	import { spacing, isLastElement } from '@/storyblok/layout';
	import { setContext, getContext } from 'svelte';

	let className;
	export { className as class };

	export let block;
	const blocks = block.body;

	const components = getContext('components');

	// store container context to use in other nested blocks
	setContext('isInContainer', true);

	function maxWidth() {
		let cssClass = `wrapper`;
		if (block.width === 'default') {
			cssClass += ` max-w-screen-2xl`;
		}
		if (block.width === 'small') {
			cssClass += ` max-w-screen-xl`;
		}
		if (block.width === 'large') {
			cssClass += ` max-w-screen-4xl`;
		}

		return cssClass;
	}
</script>

<div class="{className} {maxWidth()}">
	{#each blocks as block}
		<svelte:component
			this={components[block.component].default}
			class={isLastElement(block, blocks) ? 'mb-0' : 'mb-6'}
			{block}
		/>
	{/each}
</div>
