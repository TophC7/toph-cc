<script>
	import '../app.pcss';
	import Header from '../lib/header.svelte';
	import Footer from '../lib/footer.svelte';
	import Fa from 'svelte-fa';
	import { faInfo } from '@fortawesome/free-solid-svg-icons';
</script>

<div class=" bg-background w-screen h-screen ">
	<a href="/info">
		<div name="triangle" id="triangle" class=" triangle-t-r" />
		<Fa icon={faInfo} size="1x" scale="1.3" class=" fixed top-[.6rem] right-[1rem]" />
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
