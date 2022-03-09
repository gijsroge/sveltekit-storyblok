<script context="module">
	export async function load() {
		return fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((res) => res)
			.catch((e) => console.error(e));
	}
</script>

<script>
	let className;
	export { className as class };
	export let loadersData;
	export let block;
</script>

<div class={className}>
	<h2 class="text-2xl">Users</h2>

	{#each loadersData[block._uid] as user (user.id)}
		<h3>{user.name}</h3>
	{/each}
</div>
