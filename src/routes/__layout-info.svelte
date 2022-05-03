<script>
	import '../app.css';
	import Croissant from '../../static/croissant.svelte';
</script>

<!-- INFO:: a weird space shows up if u zoom out on mobile so i filled it with a croissant -->
<div class=" fixed h-screen w-screen -z-10 bg-background">
	<i class=" hover:animate-spin flex w-full h-[6vmin] fixed bottom-6 justify-center place-items-center">
		<Croissant color="#53D7DF" opacity=".5" />
	</i>
</div>

<!-- INFO: Actual Layout -->
<div class=" bg-background w-full h-full">
	<div class="flex flex-col w-[80vw] h-full mx-auto max-w-[80rem] gap-14 py-14">
		<header class=" font-Inter text-offWhite font-semibold text-[7.4vmin]">Contact Information</header>

		<main class=" h-full">
			<slot />
		</main>

		<footer>
			<nav class=" flex justify-between font-Inter font-semibold text-accent text-[6vmin] leading-none">
				<a href="/" class=" flex justify-center place-items-center gap-5">
					<span class=" text-offWhite pb-1">{'‹'}</span>
					<span>Go Back Home</span>
				</a>
			</nav>
		</footer>
	</div>
</div>
