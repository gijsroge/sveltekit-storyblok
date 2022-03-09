export function spacing(block) {
	if (!block.margin) return 'mb-6';
}

export function bg(block) {
	if (block.background) return `bg-${block.background}`;

	return '';
}

export function color(block) {
	// if custom blackground is set and it is dark, use white text
	if (block.background && ['black, blue'].some((color) => color.includes(color)))
		return 'text-white';

	return '';
}

export function padding(block) {
	if (block.padding) return `p-${block.padding}`;
	return '';
}

export function margin(block) {
	if (block.margin) return `mb-${block.margin}`;
	return '';
}

export function isLastElement(block, blocks) {
	return blocks.indexOf(block) === blocks.length - 1;
}
