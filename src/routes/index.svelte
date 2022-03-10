<script context="module">
	export async function load({ session }) {
		return {
			status: 302,
			redirect: `/${session.language}`
		};
	}
</script>
