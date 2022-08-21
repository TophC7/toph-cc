<script>
	import '../app.css';
	import Footer from '../lib/footer.svelte';
	import Header from '../lib/header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<!-- <style>
	/* INFO: scrollbar styling */
	/* width */
	::-webkit-scrollbar {
		width: 6px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style> -->
