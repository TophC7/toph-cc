<script>
	import '../app.css';
	import Header from '../lib/header.svelte';
	import Footer from '../lib/footer.svelte';
	import InfoIcon from '../../static/infoIcon.svelte';
</script>

<div class=" bg-background w-screen h-screen ">
	<a href="/info">
		<div name="triangle" id="triangle" class=" triangle-t-r" />
		<span class=" w-5 h-5 fixed top-[.5rem] right-1">
			<InfoIcon color="#000" />
		</span>
	</a>

	<div class="flex flex-col w-[80vw] h-full mx-auto max-w-[80vw] gap-14 py-14">
		<Header />
		<main class=" h-full">
			<slot />
		</main>
		<Footer />
	</div>
</div>

<style>
</style>
