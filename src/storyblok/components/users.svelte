<script context="module">
	export async function load() {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

			if (response.ok) {
				const users = await response.json();
				return users.sort(() => 0.5 - Math.random());
			}

			throw response;
		} catch (error) {
			console.error(error);
			return {};
		}
	}
</script>

<script>
	import { getContext } from 'svelte';
	let className;
	export { className as class };
	export let block;

	const loadersData = getContext('loadersData');

	$: data = loadersData[block._uid];

	const shuffle = async () => {
		data = await load();
	};
</script>

<div class={className}>
	<h2 class="text-2xl">Users</h2>
	<p class="mb-5">Deze lijst is externe dynamische data</p>
	<ul class="list-disc pl-4">
		{#each data as user (user.id)}
			<li>{user.name}</li>
		{/each}
	</ul>

	<button class="bg-black dark:bg-gray-800 text-white p-2 mt-4" on:click={shuffle}>shuffle</button>
</div>
