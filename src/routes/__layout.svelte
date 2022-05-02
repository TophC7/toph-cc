<script>
	import '../app.css';
	import Header from '../lib/header.svelte';
	import Footer from '../lib/footer.svelte';
	import InfoIcon from '../../static/infoIcon.svelte';
	import Croissant from '../../static/croissant.svelte';
</script>

<!-- INFO:: a weird space shows up if u zoom out on mobile lol -->
<div class=" fixed h-screen w-screen -z-10 bg-background">
	<i class=" hover:animate-spin flex w-full h-[6vmin] fixed bottom-6 justify-center place-items-center">
		<Croissant color="#53D7DF" opacity=".5" />
	</i>
</div>

<div class=" bg-background w-full h-full">
	<a href="/info">
		<div name="triangle" id="triangle" class=" triangle-t-r" />
		<span class=" w-5 h-5 fixed top-[.5rem] right-1">
			<InfoIcon color="#000" />
		</span>
	</a>

	<div class="flex flex-col w-[80vw] h-full mx-auto max-w-[80rem] gap-14 py-14">
		<Header />
		<main class=" h-full overflow-auto">
			<slot />
		</main>
		<Footer />
	</div>
</div>

<style>
</style>
