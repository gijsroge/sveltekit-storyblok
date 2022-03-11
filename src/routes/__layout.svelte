<script context="module">
	export async function load({ request }) {
		return {};
	}
</script>

<script>
	import '@/assets/css/app.css';
	import Footer from '@/components/footer.svelte';
	import ThemeSwitch from '@/components/themeSwitch.svelte';
	import { theme } from '@/stores/theme';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
</svelte:head>

<header class="wrapper w-full py-8 flex justify-between">
	<a sveltekit:prefetch href="/nl-be">Home</a>

	<div class="flex space-x-6 items-center">
		<ThemeSwitch />

		<ul class="flex space-x-3">
			<li><a sveltekit:prefetch href="/nl-be/hobby/blog-1">blog</a></li>
		</ul>
	</div>
</header>
<slot />
<footer class="bg-black p-4 text-white mt-auto"><Footer /></footer>
