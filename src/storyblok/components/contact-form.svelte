<script>
	import Form from '@/components/form/form.svelte';
	import Input from '@/components/form/input.svelte';

	let className;
	export { className as class };
</script>

<Form action="/api/contact" method="POST" let:feedback class={className}>
	<legend>Contact</legend>
	<fieldset>
		<Input type="text" name="name" {feedback} />
		<Input type="email" name="email" {feedback} />
	</fieldset>

	<button class="bg-black text-white p-2 mt-4">submit</button>
</Form>
