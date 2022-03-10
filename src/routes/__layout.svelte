<script context="module">
	export async function load({ request }) {
		return {};
	}
</script>

<script>
	import '@/assets/css/app.css';
	import Footer from '@/components/footer.svelte';
</script>

<header class="wrapper w-full py-8 flex justify-between">
	<a sveltekit:prefetch href="/nl-be">Home</a>

	<nav>
		<ul class="flex space-x-3">
			<li><a sveltekit:prefetch href="/nl-be/hobby/blog-1">blog</a></li>
		</ul>
	</nav>
</header>
<slot />
<footer class="bg-black p-4 text-white mt-auto"><Footer /></footer>
