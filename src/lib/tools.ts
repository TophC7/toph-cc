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

/**
 * Attaches a click event listener to a given node that navigates to the specified URL when clicked.
 * @param node - The node to attach the event listener to. Only needed to use as a svelte directive.
 * @param url - The URL to navigate to when the node is clicked.
 */
export function link(node: Node, url: string) {
	node.addEventListener('click', () => (location.href = url));
}

/**
 * Attaches an event listener to a DOM node that opens a URL in a new tab when clicked.
 * @param node - The DOM node to attach the event listener to. Only needed to use as a svelte directive.
 * @param url - The URL to open in a new tab.
 */
export function linkOut(node: Node, url: string) {
	node.addEventListener('click', () => window.open(url, '_blank', 'noopener noreferrer'));
}
