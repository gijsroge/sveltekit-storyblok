// loop all components for their loader function if they have one
// get data from loader function
// store data in a map with the uid as key
export async function loaderHandler(blocks) {
	// flatten all blocks, including nested blocks
	function flattenBlocks(blocks) {
		return [
			...blocks
				.map((block) => {
					if (block.body) {
						return [block, ...flattenBlocks(block.body)];
					}
					return block;
				})
				.flat()
		];
	}

	const flattenedBlocks = flattenBlocks(blocks);

	async function getAllLoadersFromBlocks(flattenedBlocks) {
		const loaders = await Promise.all(
			flattenedBlocks.map(async (block) => {
				const { load } = await import(`./components/${block.component}.svelte`).catch(() => null);

				if (!load) return false;

				return {
					_uid: block._uid,
					data: load(block)
				};
			})
		);

		return loaders.filter((loader) => loader);
	}

	const resolveLoaderDataFromLoaders = async (loaders) => {
		return await Promise.all(
			loaders.map(async (loader) => {
				const loaderData = await loader.data;
				loader.data = loaderData;
				return loader;
			})
		);
	};

	const loaders = await getAllLoadersFromBlocks(flattenedBlocks);
	const loaderData = await resolveLoaderDataFromLoaders(loaders);

	return loaderData.reduce((previousValue, currentValue) => {
		if (!currentValue) return previousValue;
		previousValue[currentValue._uid] = currentValue.data;
		return previousValue;
	}, {});
}
