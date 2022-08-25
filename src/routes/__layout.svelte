<script>
	import '../app.css';
	import Footer from '../lib/footer.svelte';
	import Header from '../lib/header.svelte';
</script>

<div id="container" class="mx-auto h-screen max-w-7xl">
	<Header />

	<main class="mx-auto flex max-w-7xl flex-col">
		<slot />
	</main>

	<Footer />
</div>

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
