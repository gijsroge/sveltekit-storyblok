<script>
	import '@/assets/css/app.css';
</script>

<header class="max-w-screen-2xl mx-auto w-full py-8 flex justify-between">
	<a rel="prefetch" href="/nl-be">Home</a>

	<nav>
		<ul class="flex space-x-3">
			<li><a rel="prefetch" href="/nl-be/hobby/blog-1">blog</a></li>
		</ul>
	</nav>
</header>
<slot />
<footer class="bg-black p-4 text-white mt-auto">footer</footer>
