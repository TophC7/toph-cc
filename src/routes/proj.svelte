<script>
	import { offWhite, page } from '../lib/stores';
	import Link from '$static/link.svelte';

	page.set('Proj');
</script>

<div class="flex flex-col gap-14">
	<section class="flex flex-col gap-4 font-Inter font-semibold text-accent">
		<a class="flex gap-2 h-[5vmin] text-[5vmin] lg:h-[4vmin] lg:text-[4vmin] leading-none" href="https://github.com/cesaramaro/leaguestats">
			Nerf This

			<i class=" h-[3vmin] lg:h-[2vmin]"><Link color={offWhite} /> </i>
		</a>
		<p class=" font-normal text-offWhite text-[4vmin] lg:text-[2vmin]">
			Nerf This is Web App created to retrieve and display League of Legends data and statistics to its players with a modern and pleasing UI/UX. It's a joint project with
			<a class="text-complementary" href="https://www.cesaramaro.co">@CesarAmaro</a>
			in which we used Next.Js and Riot's API.
		</p>
		<img class=" rounded-lg" src="/morgana-nt.png" alt="home page to nerf this with morgana background" />
		<ul class="flex flex-wrap gap-4 text-background text-[4vmin] lg:text-[2vmin] place-items-center justify-center">
			<li class=" bg-complementary px-2 rounded-lg">Next.JS</li>
			<li class=" bg-complementary px-2 rounded-lg">TailwindCSS</li>
			<li class=" bg-complementary px-2 rounded-lg">JavaScript</li>
			<li class=" bg-complementary px-2 rounded-lg">Riot's API</li>
			<li class=" bg-complementary px-2 rounded-lg">Affinity Designer</li>
			<li class=" bg-complementary px-2 rounded-lg">Git</li>
		</ul>
	</section>

	<section class="flex flex-col gap-4 font-Inter font-semibold text-accent">
		<a class="flex gap-2 h-[5vmin] text-[5vmin] lg:h-[4vmin] lg:text-[4vmin] leading-none" href="https://github.com/TophC7/Personal-Site">
			Toph.cc

			<i class=" h-[3vmin] lg:h-[2vmin]"><Link color={offWhite} /> </i>
		</a>
		<p class=" font-normal text-offWhite text-[4vmin] lg:text-[2vmin]">This website! A Personal Portfolio created wtih SvelteKit.</p>
		<img class=" rounded-lg" src="/toph-cc.png" alt="home page to toph.cc" />
		<ul class="flex flex-wrap gap-4 text-background text-[4vmin] lg:text-[2vmin] place-items-center justify-center">
			<li class=" bg-complementary px-2 rounded-lg">SvelteKit</li>
			<li class=" bg-complementary px-2 rounded-lg">TailwindCSS</li>
			<li class=" bg-complementary px-2 rounded-lg">JavaScript</li>
			<li class=" bg-complementary px-2 rounded-lg">Affinity Designer</li>
			<li class=" bg-complementary px-2 rounded-lg">Git</li>
		</ul>
	</section>
</div>
