<script context="module">
	export async function load() {
		return fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((res) => res)
			.catch((e) => console.error(e));
	}
</script>

<script>
	import Link from '$components/link.svelte';
	import { getContext } from 'svelte';
	let className;
	export { className as class };
	export let block;

	const loadersData = getContext('loadersData');
</script>

<div class={className}>
	<h1 class="text-4xl mb-4">Posts</h1>
	<ul class="grid grid-cols-4 gap-4">
		{#each loadersData[block._uid] as post (post.id)}
			<li class="flex">
				<Link
					class="bg-gray-50 dark:bg-gray-700 p-4 flex flex-col flex-1"
					sveltekit:prefetch
					href={`/nl-be/post/${post.id}`}
				>
					{post.title} <br /><br />
					<span
						class="mt-auto bg-white dark:bg-black dark:color-white shadow-sm p-2 rounded self-start"
					>
						Read more
					</span>
				</Link>
			</li>
		{/each}
	</ul>
</div>
