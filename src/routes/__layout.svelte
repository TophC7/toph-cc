<script>
	import '../app.css';
	import Header from '../lib/header.svelte';
	import Footer from '../lib/footer.svelte';
</script>

<div class=" bg-background w-screen h-screen ">
	<div class="flex flex-col w-[60rem] h-full mx-auto">
		<Header />
		<main class=" h-full">
			<slot />
		</main>
		<Footer />
	</div>
</div>

<style>
</style>
