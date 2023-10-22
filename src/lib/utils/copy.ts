export function copy(node: Node, string: string) {
	node.addEventListener('click', () => {
		navigator.clipboard
			.writeText(string)
			.then(() => {
				node.dispatchEvent(new CustomEvent('copySuccess'));
			})
			.catch(() => {
				node.dispatchEvent(new CustomEvent('copyError'));
			});
	});
}
