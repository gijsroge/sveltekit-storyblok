<script lang="ts">
	import { theme, setTheme } from '$stores/theme';
	let themes = ['system', 'light', 'dark'];
</script>

<select on:change={(event) => setTheme(event.target.value)}>
	{#each themes as themeName}
		<option value={themeName} selected={$theme === themeName}>{themeName}</option>
	{/each}
</select>
