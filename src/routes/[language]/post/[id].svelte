<script>
	import Link from '$components/link.svelte';
	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="wrapper">
	<Link sveltekit:prefetch href="/nl-be/posts">back</Link>

	<h1 class="text-4xl mb-4">{post.title}</h1>
	<p>{post.body}</p>
</div>
