/**
 * Generates a unique ID string by combining the current timestamp and a random string.
 * @returns A unique ID string.
 */
export function uniqueId(): string {
	const dateString = Date.now().toString(36);
	const randomness = Math.random().toString(36).substr(2);
	return dateString + randomness;
}

/**
 * Copies the given string to the clipboard when the provided node is clicked.
 * Dispatches a 'copySuccess' event if the copy was successful, or a 'copyError' event if it failed.
 * @param node - The node to attach the click event listener to.
 * @param string - The string to copy to the clipboard.
 */
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
