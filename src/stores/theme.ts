import { browser } from '$app/env';
import { session } from '$app/stores';
import { derived } from 'svelte/store';

export const theme = derived(session, ($session, set) => {
	if ($session.theme) {
		set($session.theme);
	} else if (browser) {
		set(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	}
});

export const setTheme = (theme) => {
	session.update(($session) => ({ ...$session, theme }));
	if (theme === 'dark') {
		document.documentElement.classList.remove('light');
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
		document.documentElement.classList.add('light');
	}
	fetch('/api/theme', { method: 'PUT', body: theme });
};
