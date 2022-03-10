<script>
	import Form from '@/components/form/form.svelte';
	import Input from '@/components/form/input.svelte';

	let className;
	export { className as class };
</script>

<Form action="/api/contact" method="POST" let:feedback class={className}>
	<Input type="text" name="name" {feedback} />
	<Input type="email" name="email" {feedback} />

	<button>submit</button>
</Form>
