declare namespace svelteHTML {
	interface HTMLAttributes {
		'on:copySuccess'?: (e?: Node) => void;
		'on:copyError'?: (e?: Node) => void;
	}
}
