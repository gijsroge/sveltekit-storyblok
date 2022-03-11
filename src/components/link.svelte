<script>
	import { page } from '$app/stores';
	export let href;
</script>

<a {href} {...$$restProps} class:font-bold={$page.url.pathname === href}><slot /></a>
