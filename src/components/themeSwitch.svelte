<script lang="ts">
	import { theme, setTheme } from '@/stores/theme';
</script>

<select on:change={(event) => setTheme(event.target.value)}>
	<option value="system">System</option>
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>
