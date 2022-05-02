<script>
	import '../app.css';
</script>

<div class=" bg-background w-screen h-screen ">
	<div class=" bg-background w-screen h-screen ">
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
</div>
