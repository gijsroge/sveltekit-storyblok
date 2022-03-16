<script>
	import '@/assets/css/app.css';
	import Footer from '$components/footer.svelte';
	import ThemeSwitch from '@/components/themeSwitch.svelte';
	import Link from '$components/link.svelte';
</script>

<header class="wrapper w-full py-8 flex items-center justify-between">
	<Link sveltekit:prefetch href="/"
		><strong
			><img src="https://kit.svelte.dev/stopwar.svg" alt="" width="60px" height="20px" /></strong
		></Link
	>

	<ul class="flex space-x-3">
		<li>
			<Link sveltekit:prefetch href="/nl-be">Home</Link>
		</li>
		<li>
			<Link sveltekit:prefetch href="/nl-be/posts">Posts</Link>
		</li>
	</ul>
	<ThemeSwitch />
</header>
<slot />
<footer class="bg-black p-4 text-white mt-auto"><Footer /></footer>
