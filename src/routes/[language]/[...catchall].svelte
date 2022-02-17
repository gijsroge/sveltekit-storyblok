<script context="module">
	import { getComponents } from '@/storyblok/componentResolver';

	export async function load({ props }) {
		return { props: { ...props, components: await getComponents(props.blocks) } };
	}
</script>

<script>
	export let page;
	export let blocks;
	export let components;
</script>

<svelte:head>
	<title>{page.data.story.name}</title>
</svelte:head>

<form action="/nl-be" method="POST">
	<input type="text" name="name" placeholder="naam" />
	<button>Submit</button>
</form>

<a rel="prefetch" href="/nl-be">home</a>
<a rel="prefetch" href="/nl-be/hobby/blog-1">blog</a>

{#each blocks as block}
	<svelte:component this={components[block.component].default} {components} {block} />
{/each}
