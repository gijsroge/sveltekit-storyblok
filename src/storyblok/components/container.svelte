<script>
	import { spacing, isLastElement } from '@/storyblok/layout';

	let className;
	export { className as class };
	export let components;
	export let block;
	export let loadersData;
	export let isInLayout;
	const blocks = block.body;

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
			{components}
			{block}
			{loadersData}
			isInContainer={true}
		/>
	{/each}
</div>
