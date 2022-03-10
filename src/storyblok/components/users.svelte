<script context="module">
	export async function load() {
		return fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((res) => res)
			.catch((e) => console.error(e));
	}
</script>

<script>
	import { getContext } from 'svelte';
	let className;
	export { className as class };
	export let block;

	const loadersData = getContext('loadersData');
</script>

<div class={className}>
	<h2 class="text-2xl">Users</h2>
	<p class="mb-5">Deze lijst is externe dynamische data</p>
	<ul class="list-disc pl-4">
		{#each loadersData[block._uid] as user (user.id)}
			<li>{user.name}</li>
		{/each}
	</ul>
</div>
