<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: status,
				message: error.message
			}
		};
	}
</script>

<script>
	export let title;
	export let message;
</script>

<svlete:head>
	<title>{title}</title>
</svlete:head>

<div class="max-w-screen-2xl mx-auto w-full">
	<h1 class="text-4xl">{title}</h1>
	<p>{message}</p>
</div>
