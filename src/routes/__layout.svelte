<script context="module">
	export async function load({ request }) {
		return {};
	}
</script>

<script>
	import '@/assets/css/app.css';
	import Footer from '$components/footer.svelte';
	import ThemeSwitch from '@/components/themeSwitch.svelte';
	import { page } from '$app/stores';
	import { theme } from '$stores/theme';
	import Link from '$components/link.svelte';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
</svelte:head>

<header class="wrapper w-full py-8 flex items-center justify-between">
	<ul class="flex space-x-3">
		<li>
			<Link sveltekit:prefetch href="/nl-be">Home</Link>
		</li>
		<li>
			<Link sveltekit:prefetch href="/nl-be/hobby/blog-1">Blog</Link>
		</li>
	</ul>
	<ThemeSwitch />
</header>
<slot />
<footer class="bg-black p-4 text-white mt-auto"><Footer /></footer>
