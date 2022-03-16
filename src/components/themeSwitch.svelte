<script lang="ts">
	import { theme, setTheme } from '$stores/theme';
	let themes = ['light', 'dark'];
</script>

<select
	class="p-3 bg-gray-50 dark:bg-gray-800 dark:text-white"
	on:change={(event) => setTheme(event.target.value)}
>
	{#each themes as themeName}
		<option value={themeName} selected={$theme === themeName}>{themeName}</option>
	{/each}
</select>
