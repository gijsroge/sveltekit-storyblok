// recursive extract blocks
const extractComponents = (blocks) => {
	const components = [];
	blocks.forEach((block) => {
		if (block.component) {
			components.push(block);
		}
		if (block.body) {
			components.push(...extractComponents(block.body));
		}
	});
	return components;
};

export const getComponents = async (blocks) => {
	const componentsToResolve = extractComponents(blocks);
	const listOfBlocks = [...new Set(componentsToResolve.map((block) => block.component))];

	const components = {};

	listOfBlocks.forEach(async (block) => {
		const resolvedComponent = import(`./components/${block}.svelte`).catch(() => null);
		components[block] = resolvedComponent;
	});

	const comps = await Promise.all(Object.values(components));

	listOfBlocks.forEach((block, index) => {
		if (comps[index]) components[block] = comps[index];
	});

	return components;
};
