<script context="module">
	import { getComponents } from '@/storyblok/componentResolver';

	export async function load({ props }) {
		return {
			props: {
				...props,
				components: await getComponents(props.blocks)
			}
		};
	}
</script>

<script>
	import { spacing } from '@/storyblok/layout';
	import { setContext } from 'svelte';
	export let page;
	export let blocks;
	export let components;
	export let loadersData;
	setContext('components', components);
	setContext('loadersData', loadersData);
</script>

<svelte:head>
	<title>{page.data.story.name}</title>
</svelte:head>

{#each blocks as block}
	<svelte:component
		this={components[block.component].default}
		class={spacing(block)}
		{block}
	/>
{/each}
