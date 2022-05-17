<script>
	import '../app.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import InfoIcon from '$static/infoIcon.svelte';
	import Croissant from '$static/croissant.svelte';
	import { background, complementary } from '$lib/stores';
</script>

<!-- INFO:: a weird space shows up if u zoom out on mobile so i filled it with a croissant -->
<div class=" fixed h-screen w-screen -z-10 bg-background">
	<i class=" hover:animate-spin flex w-full h-[6vmin] fixed bottom-6 justify-center place-items-center">
		<Croissant color={complementary} opacity=".5" />
	</i>
</div>

<!-- INFO: actual layout -->
<div class=" bg-background w-full h-full">
	<!-- INFO: corner traingle with info icon -->
	<a href="/info">
		<div name="triangle" id="triangle" class=" triangle-t-r" />
		<span class=" w-5 h-5 fixed top-[.5rem] right-1">
			<InfoIcon color={background} />
		</span>
	</a>

	<!-- INFO: main site conetent -->
	<div class="flex flex-col w-[80vw] max-w-[80rem] h-full mx-auto gap-10 py-10">
		<Header />
		<main class=" h-full overflow-auto pr-2">
			<slot />
		</main>
		<Footer />
	</div>
</div>

<style>
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
</style>
